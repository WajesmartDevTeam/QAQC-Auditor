<template>
  <div>
    <div class="title">
      <h1><span>SUNDRYFOODS &nbsp;</span> QA/QC REPORTS</h1>
    </div>
    <div class="body">

      <div
        id="admin"
        class="row"
      >
        <div class="col-12 my-auto">
          <div class="masthead-content text-white py-5 py-md-0">
            <h1 class="mb-3">For Admin</h1>
            <br><br>
            <a href="https://qa-admin.sundryhrms.website/">
              <button
                class="text-uppercase btn btn-light text-warning p-2"
                type="button"
                title="Sign in to view reports"
              >Sign In</button>
            </a>
          </div>
        </div>
      </div>
      <div class="overlay"></div>

      <div class="masthead">
        <div class="masthead-bg"></div>
        <div class="container h-100">
          <div class="row h-100">
            <div class="col-12 my-auto">
              <div class="masthead-content text-warning py-5 py-md-0">
                <h1 class="mb-3">For Inspectors</h1>
                <br><br>
                <a @click="signIn">
                  <button
                    class="text-uppercase btn btn-warning text-white p-2"
                    type="button"
                    title="Sign in with work account to fill forms"
                  >Sign In</button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  beforeCreate: function () {
    document.body.className = 'home';
  },
  data () {
    return {
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
          authority: "https://login.microsoftonline.com/ce18dbbe-5ce8-4dac-bbcc-874dba4c0a40",//This is your tenant info
          postLogoutRedirectUri: "https://qaqc.sundryhrms.website/"
        }
      },
      graphConfig: {
        // graphMeEndpoint: "https://graph.microsoft.com/v1.0/groups/bc01e981-740d-48f7-b430-ad01d7995c98/members"
        graphMeEndpoint: "https://graph.microsoft.com/v1.0/me/memberOf"
      },
      requestObj: {
        scopes: ["group.readWrite.all"]
        // scopes: ["groupMember.read.all"]
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


  },
  methods: {
    async signIn () {
      var html =
        '<img src="https://freefrontend.com/assets/img/css-loaders/css-fun-Little-loader.gif"/>';
      this.$swal.fire({
        title: "Processing",
        html: html,
        showConfirmButton: false,
        showCancelButton: false,
        width: "300px",
        allowOutsideClick: false
      });
      try {
        const loginResponse = await this.myMSALObj.loginPopup(this.requestObj);
        // this.showWelcomeMessage();
        this.acquireTokenPopupAndCallMSGraph();
      } catch (ex) {
        console.log(ex);
      }

    },

    signOut () {
      this.$store.dispatch('loggedIn', false)
      this.$store.dispatch('logout', false)
      this.myMSALObj.logout();
      // this.type = "A"
      this.$router.push('index')
    },
    async acquireTokenPopupAndCallMSGraph () {

      //Always start with acquireTokenSilent to obtain a token in the signed in user from cache
      try {
        const tokenResponse = await this.myMSALObj.acquireTokenSilent(this.requestObj);
        this.tokenResponse = tokenResponse;
        this.$store.dispatch('msalToken', tokenResponse)
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
      let access;
      if (data.value.length > 0) {
        data.value.forEach(i => {

          if (i.mailNickname == "storemanagers" || i.mailNickname == "sundryfoodsauditors") {

            this.$store.dispatch('user', this.myMSALObj.getAccount().name);
            this.$store.dispatch('role', i.mailNickname)
            this.$store.dispatch('loggedIn', true)
            access = true
          }

          if (access === true) {
            this.$swal.fire("Success", "Welcome " + this.myMSALObj.getAccount().name + "", "success");

            window.location.href = "/audit/home"
          }
          else {
            this.$swal.fire({
              title: "Error",
              text: "User Access Denied. Contact your Admin to grant you access.",
              showCloseButton: true,
              focusConfirm: false,
              confirmButtonText:
                '<i class="fa fa-thumbs-down"></i> Sign Out',
              width: "300px",
              allowOutsideClick: false
            }).then(() => {
              this.signOut()
            })



          }
        })
      }
      else {
        this.$swal.fire({
          title: "Error",
          text: "User Access Denied. Contact your Admin to grant you access.",
          showCloseButton: true,
          focusConfirm: false,
          confirmButtonText:
            '<i class="fa fa-thumbs-down"></i> Sign Out',
          width: "300px",
          allowOutsideClick: false
        }).then(() => {
          this.signOut()
        })
      }

    },

    showWelcomeMessage () {
      this.$swal.fire("Success", "Welcome " + this.myMSALObj.getAccount().userName + " to QA/QC Audit", "success");
      // this.status = {
      //   status: "Success",
      //   message: "Welcome " + this.myMSALObj.getAccount().userName + " to QA/QC Audit"
      // }

      // this.type = 'B';
    },
    authRedirectCallBack (error, response) {
      if (error) {
        console.log(error);
      } else {
        if (response.tokenType === "access_token") {
          this.callMSGraph(this.graphConfig.graphMeEndpoint, response.accessToken, this.graphAPICallback);
        } else {
          // console.log("token type is:" + response.tokenType);
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
}
</script>

<style>
body.home {
  height: 100%;
  min-height: 35rem;
  position: relative;
  font-family: "Source Sans Pro";
  font-weight: 300;
  background-image: url(https://qualityinspection.org/wp-content/uploads/2011/11/whatistheAQL.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
<style scoped>
html {
  height: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: orange;
  opacity: 0.6;
  z-index: 1;
}

.title {
  position: absolute;
  color: #fff;
  z-index: 2000;
  /* top: 8%;
  left: 24%; */
  background: #ffc107;
  text-align: center;
  width: 100%;
  font-weight: bold;
}

.title span {
  color: #f77a21;
  font-weight: bold;
}

#admin {
  position: absolute;
  top: 39%;
  right: 16%;
  color: #fff;
  z-index: 2000;
}
button {
  z-index: 999;
}
button:hover {
  background: rgb(180, 179, 179);
  box-shadow: 1px 2px 4px rgb(180, 179, 179);
  color: #fff;
}

.masthead {
  position: absolute;
  overflow: hidden;
  padding-bottom: 3rem;
  z-index: 2;
}

.masthead .masthead-bg {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  min-height: 35rem;
  height: 100%;
  background-color: rgba(253, 253, 253, 0.8);
  transform: skewY(4deg);
  transform-origin: bottom right;
}

.masthead .masthead-content h1 {
  font-size: 2.5rem;
}

.masthead .masthead-content p {
  font-size: 1.2rem;
}

.masthead .masthead-content p strong {
  font-weight: 700;
}

.masthead .masthead-content .input-group-newsletter input {
  height: auto;
  font-size: 1rem;
  padding: 1rem;
}

.masthead .masthead-content .input-group-newsletter button {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 1rem;
}

.masthead {
  height: 100%;
  min-height: 0;
  width: 50.5rem;
  padding-bottom: 0;
}

.masthead .masthead-bg {
  min-height: 0;
  transform: skewX(-23deg);
  transform-origin: top right;
}

.masthead .masthead-content {
  padding-left: 3rem;
  padding-right: 7rem;
  color: #ffa500 !important;
}

.masthead .masthead-content h1 {
  font-size: 3.5rem;
}

@media screen and (min-width: 1025px) {
  .masthead .masthead-content {
    padding-left: 9rem;
    padding-right: 7rem;
  }
  .title {
    /* left: 25%; */
    font-weight: bold;
  }
  .title h1,
  h1 {
    font-size: 3.5rem;
  }
  .masthead {
    height: 100%;
    min-height: 0;
    width: 51.5rem;
    padding-bottom: 0;
  }
  .masthead .masthead-content h1 {
    font-size: 3.5rem;
  }
  #admin {
    position: absolute;
    top: 37%;
    right: 21%;
    color: #fff;
    z-index: 2000;
  }
  button {
    font-size: 26px !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .masthead .masthead-content {
    padding-left: 9rem;
    padding-right: 7rem;
  }
  .title {
    /* left: 25%; */
    font-weight: bold;
  }
  .title h1,
  h1 {
    font-size: 2.5rem;
  }
  .masthead {
    height: 100%;
    min-height: 0;
    width: 37.5rem;
    padding-bottom: 0;
  }
  .masthead .masthead-content h1 {
    font-size: 2.5rem;
  }
  #admin {
    position: absolute;
    top: 35%;
    right: 21%;
    color: #fff;
    z-index: 2000;
  }
}

@media screen and (min-width: 426px) and (max-width: 768px) {
  .title {
    /* top: 10%;
    left: 17%; */
  }
  .title h1,
  h1 {
    font-size: 2.2rem;
  }
  #admin {
    position: absolute;
    top: 36%;
    right: 16%;
  }
  .masthead {
    width: 27.5rem;
  }
  .masthead .masthead-content h1,
  #admin h1 {
    font-size: 1.9rem;
  }
}

@media screen and (min-width: 376px) and (max-width: 425px) {
  .title {
    /* top: 10%;
    left: 17%; */
  }
  .title h1,
  h1 {
    font-size: 1.3rem;
  }
  .masthead {
    width: 17.9rem;
  }
  .masthead .masthead-content h1,
  #admin h1 {
    font-size: 1.5rem;
  }
  .masthead .masthead-content {
    padding-left: 13px;
    padding-right: 2rem;
    margin-top: -80px;
    color: #ffa500 !important;
  }
  button {
    padding: 11px !important;
    font-size: 10px;
  }
  #admin {
    top: 22%;
    right: 11%;
  }
}

@media screen and (min-width: 321px) and (max-width: 375px) {
  .title {
    /* top: 10%;
    left: 17%; */
  }
  .title h1,
  h1 {
    font-size: 19px;
  }
  .masthead {
    width: 16.45rem;
  }
  .masthead .masthead-content h1,
  #admin h1 {
    font-size: 1.4rem;
  }
  .masthead .masthead-content {
    padding-left: 13px;
    padding-right: 2rem;
    margin-top: -80px;
    color: #ffa500 !important;
  }
  button {
    padding: 11px !important;
    font-size: 10px;
  }
  .masthead .masthead-bg {
    min-height: 0;
    transform: skewX(-20deg);
    transform-origin: top right;
  }
  #admin {
    top: 22%;
    right: 11%;
  }
}

@media screen and (max-width: 320px) {
  .title {
    /* top: 10%;
    left: 17%; */
  }
  .title h1,
  h1 {
    font-size: 16px;
  }
  .masthead {
    width: 14.45rem;
  }
  .masthead .masthead-content h1,
  #admin h1 {
    font-size: 19px;
  }
  .masthead .masthead-content {
    padding-left: 3px;
    padding-right: 1rem;
    margin-top: -126px;
  }
  button {
    padding: 11px !important;
    font-size: 11px !important;
  }
  .masthead .masthead-bg {
    min-height: 0;
    transform: skewX(-20deg);
    transform-origin: top right;
  }
  #admin {
    top: 18%;
    right: 15%;
  }
}
</style>