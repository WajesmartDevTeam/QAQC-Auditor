import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
// import Cookies from 'js-cookie'
import localStoragePlugin from './plugins/localStorage';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        logOut: false,
        loggedIn: "",
        user: "",
        role: "",
        stores: [],
        all_users: [],
        ammvr: {},
        midmvr: {},
        msal: null,
    },

    mutations: {
        updateUser(state, data) {
            state.user = data
        },
        updateAllUsers(state, data) {
            state.all_users = data
        },
        updateRole(state, data) {
            state.role = data
        },
        updateLogin(state, status) {
            state.loggedIn = status
        },
        updateLog(state, status) {
            state.logOut = status
        },
        updateStores(state, stores) {
            state.stores = stores;
        },
        updateAmmvr(state, report) {
            state.ammvr = report
        },
        updateMidmvr(state, report) {
            state.midmvr = report;
        },
        updateMsal(state, data) {
            state.msal = data
        },
        initializeStore() {
            const data = localStorage.getItem('boardState');

            if (data) {
                this.replaceState(Object.assign(this.state, JSON.parse(data)));
            }
        },


    },

    actions: {
        user({ commit }, data) {
            commit("updateUser", data);
        },
        all_users({ commit }, data) {
            commit("updateAllUsers", data);
        },
        role({ commit }, data) {
            commit("updateRole", data);
        },
        loggedIn({ commit }, data) {
            commit("updateLogin", data);
        },
        stores({ commit }) {
            let req = {
                what: "stores",
            };

            return new Promise((resolve, reject) => {
                Vue.prototype.$socket
                    .makeGetRequest(req)
                    .then(response => {
                        response.data.forEach(x => {
                            x.store_address = x.address + ', ' + x.location;
                        })
                        commit("updateStores", response.data);
                        resolve(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                        reject(error);
                    });
            });
        },
        updateAmmvr({ commit }, data) {
            // console.log(data)
            try {
                commit("updateAmmvr", data);
            } catch (e) {
                console.log("The Maximum image upload size allowed is 50mb");
                // fires When localstorage gets full
                // you can handle error here or empty the local storage
            }



        },
        updateMidmvr({ commit }, data) {
            // console.log(data)
            try {
                commit("updateMidmvr", data);
            } catch (e) {
                console.log("The Maximum image upload size allowed is 50mb");
                // fires When localstorage gets full
                // you can handle error here or empty the local storage
            }
        },
        msalToken({ commit }, data) {
            // console.log(data)
            commit("updateMsal", data);
        },

        logout({ commit }, status) {
            commit("updateLog", status);
        }
    },

    getters: {
        isLoggedIn: state => state.loggedIn,
        stores: state => state.stores,
        ammvr: state => state.ammvr,
        midmvr: state => state.midmvr,
        logout: state => state.logOut,
        user: state => state.user,
        role: state => state.role,
        all_users: state => state.all_users,
        msalToken: state => state.msal,
    },

    plugins: [createPersistedState(), localStoragePlugin]
});