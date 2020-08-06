<template>
  <div id="login">
    <div
      class="alert"
      role="alert"
      v-show="status.status !== ''"
      v-bind:class="{
        'alert-danger': status.status == 'Error',
        'alert-warning': status.status == 'Processing',
        'alert-success': status.status == 'Success'
      }"
    >
      <strong>{{ status.status }}</strong> {{ status.message }}
    </div>
    <br />
    <br />
    <form v-on:submit.prevent="processLogin">
      <md-card
        class="p-5"
        style="height:250px"
      >
        <!-- <md-card-header data-background-color="orange">
          <h4 class="title">Auditor Login</h4>
        </md-card-header> -->

        <md-card-content>
          <div class="md-layout py-5">
            <!-- <div class="md-layout-item md-small-size-100 md-size-100">
              <md-field>
                <label>Email</label>
                <md-input
                  v-model="login.email"
                  required
                ></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <md-field>
                <label>password</label>
                <md-input
                  v-model="login.password"
                  type="password"
                  required
                ></md-input>
              </md-field>
            </div> -->

            <a
              v-if="type == 'A'"
              id="SignIn"
              @click="signIn"
              class="btn md-info md-size-100 mx-auto text-white"
            >Sign in with work account</a>
            <a
              v-if="type == 'B'"
              id="SignOut"
              @click="signOut"
              class="btn md-info md-size-100 mx-auto text-white"
            >Sign Out</a>
          </div>
        </md-card-content>
      </md-card>
    </form>

  </div>
</template>
<script>
export default {
  name: "login",
  data () {
    return {
      type: 'A',
      remember: "",
      login: {
        email: "",
        password: ""
      },
      status: {
        status: "",
        message: ""
      },
      myMSALObj: null,
      msalConfig: {
        auth: {
          clientId: 'dfd74765-cfab-4e7f-bdcb-c619d600dfee', //This is your client ID
          authority: "https://login.microsoftonline.com/ce18dbbe-5ce8-4dac-bbcc-874dba4c0a40" //This is your tenant info
        }
      },
      graphConfig: {
        graphMeEndpoint: "https://graph.microsoft.com/v1.0/me/memberOf"
      },
      requestObj: {
        scopes: ["group.read.all"]
      }
    };
  },
  created () {

    let msal = document.createElement('script')
    msal.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.4/bluebird.min.js')
    document.head.appendChild(msal)

    let aadcdn = document.createElement('script')
    aadcdn.setAttribute('src', 'https://secure.aadcdn.microsoftonline-p.com/lib/1.0.0/js/msal.js')
    document.head.appendChild(aadcdn);
  },
  mounted () {


    this.myMSALObj = new Msal.UserAgentApplication(this.msalConfig);
    // Register Callbacks for redirect flow
    // myMSALObj.handleRedirectCallbacks(acquireTokenRedirectCallBack, acquireTokenErrorRedirectCallBack);
    this.myMSALObj.handleRedirectCallback(this.authRedirectCallBack);
    if (this.$store.getters.logout == true) {
      this.signOut();
      // location.reload()
    }
    this.signIn()

  },
  methods: {
    async signIn () {
      try {
        const loginResponse = await this.myMSALObj.loginPopup(this.requestObj);
        this.showWelcomeMessage();
        // console.log(loginResponse)
        this.acquireTokenPopupAndCallMSGraph();
      } catch (ex) {
        console.log(ex);
      }

    },

    signOut () {
      this.$store.dispatch('logout', false)
      this.myMSALObj.logout();
      // this.type = "A"
      this.$router.push('index')
    },
    async acquireTokenPopupAndCallMSGraph () {
      //Always start with acquireTokenSilent to obtain a token in the signed in user from cache
      try {
        const tokenResponse = await this.myMSALObj.acquireTokenSilent(this.requestObj);
        this.callMSGraph(this.graphConfig.graphMeEndpoint, tokenResponse.accessToken, this.graphAPICallback);
      } catch (ex) {
        console.log(ex);

      }
    },
    callMSGraph (theUrl, accessToken, callback) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
          callback(JSON.parse(this.responseText));
      }
      xmlHttp.open("GET", theUrl, true); // true for asynchronous
      xmlHttp.setRequestHeader('Authorization', 'Bearer ' + accessToken);
      xmlHttp.send();
    },
    graphAPICallback (data) {
      console.log(data)
      data.value.forEach(i => {

        //  if (i.mailNickname == "storemanagers" || i.mailNickname == "superadmins") {
        //         this.$store.dispatch('user', this.myMSALObj.getAccount().name);
        //         this.$store.dispatch('role', i.mailNickname)
        //         // this.$router.push('audit/home')
        //       }
        //       else {
        //         this.status = {
        //           status: "Error",
        //           message: "User Access Denied. Contact your Admin to grant you access."
        //         }
        //         this.signOut;

        //       }
      })
    },
    showWelcomeMessage () {

      this.status = {
        status: "Success",
        message: "Welcome " + this.myMSALObj.getAccount().userName + " to QA/QC Audit"
      }

      this.type = 'B';
    },
    authRedirectCallBack (error, response) {
      if (error) {
        console.log(error);
      } else {
        if (response.tokenType === "access_token") {
          this.callMSGraph(this.graphConfig.graphMeEndpoint, response.accessToken, this.graphAPICallback);
        } else {
          console.log("token type is:" + response.tokenType);
        }
      }
    },
    requiresInteraction (errorCode) {
      if (!errorCode || !errorCode.length) {
        return false;
      }
      return errorCode === "consent_required" ||
        errorCode === "interaction_required" ||
        errorCode === "login_required";
    },
  }

  // try {
  //       const response = await this.myMSALObj.loginPopup(this.requestObj);
  //       this.acquireTokenPopupAndCallMSGraph();
  //     } catch (ex) {
  //       console.log(ex);
  //     }
  // }
};
</script>
<style scoped>
div.md-toolbar-row {
  display: none !important;
}
#login {
  padding: 10% 0;
}
#login form {
  width: 380px;
  margin: auto;
}
@media screen and (max-width: 320px) {
  #login form {
    width: 320px;
    margin: auto;
  }
}
.logo-holder {
  width: 130px !important;
}
.logo-holder img {
  width: 100% !important;
  margin: 0 auto;
}
.alert {
  width: 50%;
  margin: auto;
}
.btn {
  color: #fff;
  background: #fd950d;
  outline: none;
  border: none;
}

button:hover {
  cursor: pointer;
  animation: jelly 0.5s;
}

@keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}
</style>
