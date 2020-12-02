<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-size-100">
        <!-- <div
          class="card"
          style="padding: 20px;"
        > -->

        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">KILIMANJARO DAILY OPENING/CLOSING CHECKLIST</h4>
          </md-card-header>
          <md-card-content>
            <form
              id="greenbook"
              role="form"
              v-on:submit.prevent="submitForm"
            >

              <div
                id="form-fields"
                class="card-content"
              >
                <div
                  id="1"
                  class="form-group row question"
                  data-name="Auditor's Name"
                >
                  <label
                    for="staticEmail"
                    class="col-3 col-form-label"
                  >Auditor's Name</label>
                  <div class="col-9">
                    <input
                      type="text"
                      class="form-control"
                      id="staticEmail"
                      v-model="username"
                      required
                      title="enter inspector's name"
                    >
                  </div>
                </div>
                <div
                  id="2"
                  class="form-group row question"
                  data-name="unit"
                >
                  <label
                    for="staticEmail"
                    class="col-3 col-form-label"
                  >UNIT</label>
                  <div class="col-9">
                    <input
                      type="text"
                      class="form-control"
                      id="staticEmail"
                      title="enter unit being inspected"
                    >
                  </div>
                </div>
                <div
                  id="3"
                  class="form-group row question"
                  data-name="date"
                >
                  <label
                    for="inputPassword"
                    class="col-3 col-form-label"
                  >DATE</label>
                  <div class="col-9">
                    <input
                      type="text"
                      class="form-control"
                      id="date"
                      disabled
                      required
                    >
                  </div>
                </div>
                <div
                  id="4"
                  class="form-group row question"
                  data-name="Location Visited"
                >
                  <label
                    for="inputPassword"
                    class="col-3 col-form-label"
                  >Location
                    Visited</label>
                  <div class="col-9">
                    <v-select
                      v-model="form.store_id"
                      :options="stores"
                      title="select store visited"
                      label="store_address"
                      :reduce="st => st.id"
                    ></v-select>
                    <!-- <select
                      class="form-control"
                      id="location"
                      v-model="form.store_id"
                      required
                      title="select store being visited"
                    >
                      <option
                        value=""
                        hidden
                      >select store...</option>
                      <option
                        v-for="(store, index) in stores"
                        :key="index"
                        v-bind:value="store.id"
                      >{{store.address +", "+store.location}}</option>
                    </select> -->
                  </div>
                </div>

                <table class="table table-bordered">
                  <thead>
                    <th></th>
                    <th colspan="2">Morning</th>
                    <th colspan="2">Peak Period</th>
                    <th colspan="2">CLosing(30mins)</th>
                    <th></th>
                  </thead>
                  <thead>
                    <th>HOST LOBBY</th>
                    <th>Yes</th>
                    <th>No</th>
                    <th>Yes</th>
                    <th>No</th>
                    <th>Yes</th>
                    <th>No</th>
                    <th>Comments/Remarks</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Is the shop floor swept/buffed?</td>

                      <td
                        id="5"
                        class="question"
                        data-name="Is the shop floor swept/buffed?"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="5"
                        class="question"
                        data-name="Is the shop floor swept/buffed?"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="6"
                        class="question"
                        data-name="Is the shop floor swept/buffed?"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="6"
                        class="question"
                        data-name="Is the shop floor swept/buffed?"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="7"
                        class="question"
                        data-name="Is the shop floor swept/buffed?"
                      ><label
                          for=""
                          class="label"
                        >CLosing</label> <input
                          type="radio"
                          name="close"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="7"
                        class="question"
                        data-name="Is the shop floor swept/buffed?"
                      ><label
                          for=""
                          class="label"
                        >CLosing</label> <input
                          type="radio"
                          name="close"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="8"
                        class="question"
                        data-name="Is the shop floor swept/buffed?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>
                      <td>Is the window/door cleaned?</td>
                      <td
                        id="9"
                        class="question"
                        data-name="Is the window/door cleaned?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning2"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="9"
                        class="question"
                        data-name="Is the window/door cleaned?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning2"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="10"
                        class="question"
                        data-name="Is the window/door cleaned?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak2"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="10"
                        class="question"
                        data-name="Is the window/door cleaned?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak2"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="11"
                        class="question"
                        data-name="Is the window/door cleaned?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close2"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="11"
                        class="question"
                        data-name="Is the window/door cleaned?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close2"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="12"
                        class="question"
                        data-name="Is the window/door cleaned?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the chair/table cleaned?</td>
                      <td
                        id="13"
                        class="question"
                        data-name="Is the chair/table cleaned?"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning3"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="13"
                        class="question"
                        data-name="Is the chair/table cleaned?"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning3"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="14"
                        class="question"
                        data-name="Is the chair/table cleaned?"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak3"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="14"
                        class="question"
                        data-name="Is the chair/table cleaned?"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak3"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="15"
                        class="question"
                        data-name="Is the chair/table cleaned?"
                      ><label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close3"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="15"
                        class="question"
                        data-name="Is the chair/table cleaned?"
                      ><label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close3"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="16"
                        class="question"
                        data-name="Is the chair/table cleaned?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>
                      <td>Is the toilet cleaned hourly according to the checklist?</td>
                      <td
                        id="17"
                        class="question"
                        data-name="Is the toilet cleaned hourly according to the checklist?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning4"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="17"
                        class="question"
                        data-name="Is the toilet cleaned hourly according to the checklist?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning4"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="18"
                        class="question"
                        data-name="Is the toilet cleaned hourly according to the checklist?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak4"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="18"
                        class="question"
                        data-name="Is the toilet cleaned hourly according to the checklist?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak4"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="19"
                        class="question"
                        data-name="Is the toilet cleaned hourly according to the checklist?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close4"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="19"
                        class="question"
                        data-name="Is the toilet cleaned hourly according to the checklist?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close4"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="20"
                        class="question"
                        data-name="Is the toilet cleaned hourly according to the checklist?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>

                      <td>Is there toilet rolls/hand wash in place?</td>
                      <td
                        id="21"
                        class="question"
                        data-name="Is there toilet rolls/hand wash in place?"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning5"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="21"
                        class="question"
                        data-name="Is there toilet rolls/hand wash in place?"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning5"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="22"
                        class="question"
                        data-name="Is there toilet rolls/hand wash in place?"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak5"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="22"
                        class="question"
                        data-name="Is there toilet rolls/hand wash in place?"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak5"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="23"
                        class="question"
                        data-name="Is there toilet rolls/hand wash in place?"
                      ><label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close5"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="23"
                        class="question"
                        data-name="Is there toilet rolls/hand wash in place?"
                      ><label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close5"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="24"
                        class="question"
                        data-name="Is there toilet rolls/hand wash in place?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>
                      <td>Is the Air conditioners on/off for the day?</td>
                      <td
                        id="25"
                        class="question"
                        data-name="Is the Air conditioners on/off for the day?"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning6"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="25"
                        class="question"
                        data-name="Is the Air conditioners on/off for the day?"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning6"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="26"
                        class="question"
                        data-name="Is the Air conditioners on/off for the day?"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak6"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="26"
                        class="question"
                        data-name="Is the Air conditioners on/off for the day?"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak6"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="27"
                        class="question"
                        data-name="Is the Air conditioners on/off for the day?"
                      ><label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close6"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="27"
                        class="question"
                        data-name="Is the Air conditioners on/off for the day?"
                      ><label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close6"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="28"
                        class="question"
                        data-name="Is the Air conditioners on/off for the day?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>
                      <td>Is all Spot lights & insect catcher light on/off?</td>
                      <td
                        id="29"
                        class="question"
                        data-name="Is all Spot lights & insect catcher light on/off?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning7"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="29"
                        class="question"
                        data-name="Is all Spot lights & insect catcher light on/off?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning7"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="30"
                        class="question"
                        data-name="Is all Spot lights & insect catcher light on/off?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak7"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="30"
                        class="question"
                        data-name="Is all Spot lights & insect catcher light on/off?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak7"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="31"
                        class="question"
                        data-name="Is all Spot lights & insect catcher light on/off?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close7"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="31"
                        class="question"
                        data-name="Is all Spot lights & insect catcher light on/off?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close7"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="32"
                        class="question"
                        data-name="Is all Spot lights & insect catcher light on/off?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the TV & sound system on/off and set appropraitely?</td>
                      <td
                        id="33"
                        class="question"
                        data-name="Is the TV & sound system on/off and set appropraitely?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning8"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="33"
                        class="question"
                        data-name="Is the TV & sound system on/off and set appropraitely?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning8"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="34"
                        class="question"
                        data-name="Is the TV & sound system on/off and set appropraitely?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak8"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="34"
                        class="question"
                        data-name="Is the TV & sound system on/off and set appropraitely?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak8"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="35"
                        class="question"
                        data-name="Is the TV & sound system on/off and set appropraitely?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close8"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>

                      <td
                        id="35"
                        class="question"
                        data-name="Is the TV & sound system on/off and set appropraitely?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close8"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>

                      <td
                        id="36"
                        class="question"
                        data-name="Is the TV & sound system on/off and set appropraitely?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the lobby free of cobwebs/flies or any crawling insects?</td>
                      <td
                        id="37"
                        class="question"
                        data-name="Is the lobby free of cobwebs/flies or any crawling insects?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning9"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="37"
                        class="question"
                        data-name="Is the lobby free of cobwebs/flies or any crawling insects?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning9"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="38"
                        class="question"
                        data-name="Is the lobby free of cobwebs/flies or any crawling insects?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak9"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="38"
                        class="question"
                        data-name="Is the lobby free of cobwebs/flies or any crawling insects?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak9"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="39"
                        class="question"
                        data-name="Is the lobby free of cobwebs/flies or any crawling insects?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close9"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="39"
                        class="question"
                        data-name="Is the lobby free of cobwebs/flies or any crawling insects?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close9"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>

                      <td
                        id="40"
                        class="question"
                        data-name="Is the lobby free of cobwebs/flies or any crawling insects?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>

                  </tbody>

                  <thead>
                    <th>CASH POINT FOH</th>
                    <th colspan="7"></th>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="200">Is the Display fridge cleaned/filled timely enough?
                      </td>
                      <td
                        id="41"
                        class="question"
                        data-name="Is the Display fridge cleaned/filled timely enough?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning11"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="41"
                        class="question"
                        data-name="Is the Display fridge cleaned/filled timely enough?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning11"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="42"
                        class="question"
                        data-name="Is the Display fridge cleaned/filled timely enough?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak11"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="42"
                        class="question"
                        data-name="Is the Display fridge cleaned/filled timely enough?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak11"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="43"
                        class="question"
                        data-name="Is the Display fridge cleaned/filled timely enough?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close11"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="43"
                        class="question"
                        data-name="Is the Display fridge cleaned/filled timely enough?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close11"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>

                      <td
                        id="44"
                        class="question"
                        data-name="Is the Display fridge cleaned/filled timely enough?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the Counter tops/till machines cleaned and well arranged?
                      </td>
                      <td
                        id="45"
                        class="question"
                        data-name="Is the Counter tops/till machines cleaned and well arranged?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning12"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="45"
                        class="question"
                        data-name="Is the Counter tops/till machines cleaned and well arranged?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning12"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="46"
                        class="question"
                        data-name="Is the Counter tops/till machines cleaned and well arranged?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak12"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="46"
                        class="question"
                        data-name="Is the Counter tops/till machines cleaned and well arranged?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak12"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="47"
                        class="question"
                        data-name="Is the Counter tops/till machines cleaned and well arranged?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close12"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="47"
                        class="question"
                        data-name="Is the Counter tops/till machines cleaned and well arranged?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close12"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>

                      <td
                        id="48"
                        class="question"
                        data-name="Is the Counter tops/till machines cleaned and well arranged?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the Menu boards cleaned daily?</td>
                      <td
                        id="49"
                        class="question"
                        data-name="Is the Menu boards cleaned daily?"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning13"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="49"
                        class="question"
                        data-name="Is the Menu boards cleaned daily?"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning13"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="50"
                        class="question"
                        data-name="Is the Menu boards cleaned daily?"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak13"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="50"
                        class="question"
                        data-name="Is the Menu boards cleaned daily?"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak13"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="51"
                        class="question"
                        data-name="Is the Menu boards cleaned daily?"
                      ><label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close13"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="51"
                        class="question"
                        data-name="Is the Menu boards cleaned daily?"
                      ><label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close13"
                          id="inlineRadio1"
                          value="yes"
                        ></td>

                      <td
                        id="52"
                        class="question"
                        data-name="Is the Menu boards cleaned daily?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>
                      <td>Are the Wall tiles in the severy area cleaned and free of
                        stains?</td>
                      <td
                        id="53"
                        class="question"
                        data-name="Are the Wall tiles in the severy area cleaned and free of stains?"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="53"
                        class="question"
                        data-name="Is the Menu boards cleaned daily?"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning14"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="54"
                        class="question"
                        data-name="Is the Menu boards cleaned daily?"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak14"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="54"
                        class="question"
                        data-name="Is the Menu boards cleaned daily?"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak14"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="55"
                        class="question"
                        data-name="Is the Menu boards cleaned daily?"
                      ><label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close14"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="55"
                        class="question"
                        data-name="Is the Menu boards cleaned daily?"
                      ><label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close14"
                          id="inlineRadio1"
                          value="yes"
                        ></td>

                      <td
                        id="56"
                        class="question"
                        data-name="Is the Menu boards cleaned daily?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>

                      <td>Are the Forks & Knives with tooth picks well wrapped in advance?
                      </td>
                      <td
                        id="57"
                        class="question"
                        data-name="Are the Forks & Knives with tooth picks well wrapped in advance?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning15"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="57"
                        class="question"
                        data-name="Are the Forks & Knives with tooth picks well wrapped in advance?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning15"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="58"
                        class="question"
                        data-name="Are the Forks & Knives with tooth picks well wrapped in advance?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak15"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="58"
                        class="question"
                        data-name="Are the Forks & Knives with tooth picks well wrapped in advance?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak15"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="59"
                        class="question"
                        data-name="Are the Forks & Knives with tooth picks well wrapped in advance?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close15"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="59"
                        class="question"
                        data-name="Are the Forks & Knives with tooth picks well wrapped in advance?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close15"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>

                      <td
                        id="60"
                        class="question"
                        data-name="Are the Forks & Knives with tooth picks well wrapped in advance?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are Carrier Bags/disposable cups/tumblers available for the day?
                      </td>
                      <td
                        id="61"
                        class="question"
                        data-name="Are Carrier Bags/disposable cups/tumblers available for the day?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning16"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="61"
                        class="question"
                        data-name="Are Carrier Bags/disposable cups/tumblers available for the day?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning16"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="62"
                        class="question"
                        data-name="Are Carrier Bags/disposable cups/tumblers available for the day?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak16"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="62"
                        class="question"
                        data-name="Are Carrier Bags/disposable cups/tumblers available for the day?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak16"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="63"
                        class="question"
                        data-name="Are Carrier Bags/disposable cups/tumblers available for the day?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close16"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="63"
                        class="question"
                        data-name="Are Carrier Bags/disposable cups/tumblers available for the day?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close16"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>

                      <td
                        id="64"
                        class="question"
                        data-name="Are Carrier Bags/disposable cups/tumblers available for the day?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are serviette available and well arranged?</td>
                      <td
                        id="65"
                        class="question"
                        data-name="Are serviette available and well arranged?"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning17"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="65"
                        class="question"
                        data-name="Are serviette available and well arranged?"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning17"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="66"
                        class="question"
                        data-name="Are serviette available and well arranged?"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak17"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="66"
                        class="question"
                        data-name="Are serviette available and well arranged?"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak17"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="67"
                        class="question"
                        data-name="Are serviette available and well arranged?"
                      ><label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close17"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="67"
                        class="question"
                        data-name="Are serviette available and well arranged?"
                      ><label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close17"
                          id="inlineRadio1"
                          value="yes"
                        ></td>

                      <td
                        id="68"
                        class="question"
                        data-name="Are serviette available and well arranged?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>
                      <td>Is there Availability of all products and 25% minimum
                        replenishment per SOP?</td>
                      <td
                        id="69"
                        class="question"
                        data-name="Is there Availability of all products and 25% minimum replenishment per SOP?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning18"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="69"
                        class="question"
                        data-name="Is there Availability of all products and 25% minimum replenishment per SOP?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning18"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="70"
                        class="question"
                        data-name="Is there Availability of all products and 25% minimum replenishment per SOP?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak18"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="70"
                        class="question"
                        data-name="Is there Availability of all products and 25% minimum replenishment per SOP?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak18"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="71"
                        class="question"
                        data-name="Is there Availability of all products and 25% minimum replenishment per SOP?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close18"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="71"
                        class="question"
                        data-name="Is there Availability of all products and 25% minimum replenishment per SOP?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close18"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="72"
                        class="question"
                        data-name="Is there Availability of all products and 25% minimum replenishment per SOP?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are display cabinets cleaned on/off and regulated at the right
                        temperature?</td>
                      <td
                        id="73"
                        class="question"
                        data-name="Are display cabinets cleaned on/off and regulated at the right temperature?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning19"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="73"
                        class="question"
                        data-name="Are display cabinets cleaned on/off and regulated at the right temperature?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning19"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="74"
                        class="question"
                        data-name="Are display cabinets cleaned on/off and regulated at the right temperature?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak19"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="74"
                        class="question"
                        data-name="Are display cabinets cleaned on/off and regulated at the right temperature?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak19"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="75"
                        class="question"
                        data-name="Are display cabinets cleaned on/off and regulated at the right temperature?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close19"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="75"
                        class="question"
                        data-name="Are display cabinets cleaned on/off and regulated at the right temperature?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close19"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="76"
                        class="question"
                        data-name="Are display cabinets cleaned on/off and regulated at the right temperature?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is coffee machine turned on and all materials and dispenser
                        water available?</td>
                      <td
                        id="77"
                        class="question"
                        data-name="Is coffee machine turned on and all materials and dispenser water available?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning20"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="77"
                        class="question"
                        data-name="Is coffee machine turned on and all materials and dispenser water available?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning20"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="78"
                        class="question"
                        data-name="Is coffee machine turned on and all materials and dispenser water available?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak20"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="78"
                        class="question"
                        data-name="Is coffee machine turned on and all materials and dispenser water available?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak20"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="79"
                        class="question"
                        data-name="Is coffee machine turned on and all materials and dispenser water available?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close20"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="79"
                        class="question"
                        data-name="Is coffee machine turned on and all materials and dispenser water available?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close20"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="80"
                        class="question"
                        data-name="Is coffee machine turned on and all materials and dispenser water available?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the chips dump well cleaned and heated ambient light turned
                        on?</td>
                      <td
                        id="81"
                        class="question"
                        data-name="Is the chips dump well cleaned and heated ambient light turned on?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning21"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="81"
                        class="question"
                        data-name="Is the chips dump well cleaned and heated ambient light turned on?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning21"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="82"
                        class="question"
                        data-name="Is the chips dump well cleaned and heated ambient light turned on?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak21"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="82"
                        class="question"
                        data-name="Is the chips dump well cleaned and heated ambient light turned on?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak21"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="83"
                        class="question"
                        data-name="Is the chips dump well cleaned and heated ambient light turned on?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close21"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="83"
                        class="question"
                        data-name="Is the chips dump well cleaned and heated ambient light turned on?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close21"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="84"
                        class="question"
                        data-name="Is the chips dump well cleaned and heated ambient light turned on?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Has cash skimms been done from each register(Minimum twice per
                        shift)</td>
                      <td
                        id="85"
                        class="question"
                        data-name="Has cash skimms been done from each register(Minimum twice per shift)"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning22"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="85"
                        class="question"
                        data-name="Has cash skimms been done from each register(Minimum twice per shift)"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning22"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="86"
                        class="question"
                        data-name="Has cash skimms been done from each register(Minimum twice per shift)"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak22"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="86"
                        class="question"
                        data-name="Has cash skimms been done from each register(Minimum twice per shift)"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak22"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="87"
                        class="question"
                        data-name="Has cash skimms been done from each register(Minimum twice per shift)"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close22"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="87"
                        class="question"
                        data-name="Has cash skimms been done from each register(Minimum twice per shift)"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close22"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="88"
                        class="question"
                        data-name="Has cash skimms been done from each register(Minimum twice per shift)"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is all packaging well stacked and arranged?</td>
                      <td
                        id="89"
                        class="question"
                        data-name="Is all packaging well stacked and arranged?)"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning23"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="89"
                        class="question"
                        data-name="Is all packaging well stacked and arranged?)"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning23"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="90"
                        class="question"
                        data-name="Is all packaging well stacked and arranged?)"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak23"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="90"
                        class="question"
                        data-name="Is all packaging well stacked and arranged?)"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak23"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="91"
                        class="question"
                        data-name="Is all packaging well stacked and arranged?)"
                      ><label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close23"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="91"
                        class="question"
                        data-name="Is all packaging well stacked and arranged?)"
                      ><label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close23"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="92"
                        class="question"
                        data-name="Is all packaging well stacked and arranged?)"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>
                      <td>Is the Light in all the chillers and equipments on/off and well
                        lite?</td>
                      <td
                        id="93"
                        class="question"
                        data-name="Is the Light in all the chillers and equipments on/off and well lite?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning24"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="93"
                        class="question"
                        data-name="Is the Light in all the chillers and equipments on/off and well lite?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning24"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="94"
                        class="question"
                        data-name="Is the Light in all the chillers and equipments on/off and well lite?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak24"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="94"
                        class="question"
                        data-name="Is the Light in all the chillers and equipments on/off and well lite?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak24"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="95"
                        class="question"
                        data-name="Is the Light in all the chillers and equipments on/off and well lite?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close24"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="95"
                        class="question"
                        data-name="Is the Light in all the chillers and equipments on/off and well lite?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close24"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="96"
                        class="question"
                        data-name="Is the Light in all the chillers and equipments on/off and well lite?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                  </tbody>

                  <thead>
                    <th>KITCHEN BOH </th>
                    <th colspan="7"></th>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="200">Is the Fryer & gas burners well cleaned and on/off?
                      </td>
                      <td
                        id="97"
                        class="question"
                        data-name="Is the Fryer & gas burners well cleaned and on/off?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning25"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="97"
                        class="question"
                        data-name="Is the Fryer & gas burners well cleaned and on/off?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning25"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="98"
                        class="question"
                        data-name="Is the Fryer & gas burners well cleaned and on/off?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak25"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="98"
                        class="question"
                        data-name="Is the Fryer & gas burners well cleaned and on/off?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak25"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="99"
                        class="question"
                        data-name="Is the Fryer & gas burners well cleaned and on/off?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close25"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="99"
                        class="question"
                        data-name="Is the Fryer & gas burners well cleaned and on/off?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close25"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="100"
                        class="question"
                        data-name="Is the Fryer & gas burners well cleaned and on/off?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the Rotisserie Rational Machine cleaned and on/off for the
                        day?</td>
                      <td
                        id="101"
                        class="question"
                        data-name="Is the Rotisserie Rational Machine cleaned and on/off for the day?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning26"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="101"
                        class="question"
                        data-name="Is the Rotisserie Rational Machine cleaned and on/off for the day?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning26"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="102"
                        class="question"
                        data-name="Is the Rotisserie Rational Machine cleaned and on/off for the day?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak26"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="102"
                        class="question"
                        data-name="Is the Rotisserie Rational Machine cleaned and on/off for the day?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak26"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="103"
                        class="question"
                        data-name="Is the Rotisserie Rational Machine cleaned and on/off for the day?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close26"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="103"
                        class="question"
                        data-name="Is the Rotisserie Rational Machine cleaned and on/off for the day?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close26"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="104"
                        class="question"
                        data-name="Is the Rotisserie Rational Machine cleaned and on/off for the day?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Has the oil check for the deep fryer been done for quality?</td>
                      <td
                        id="105"
                        class="question"
                        data-name="Has the oil check for the deep fryer been done for quality?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning27"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="105"
                        class="question"
                        data-name="Has the oil check for the deep fryer been done for quality?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning27"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="106"
                        class="question"
                        data-name="Has the oil check for the deep fryer been done for quality?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak27"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="106"
                        class="question"
                        data-name="Has the oil check for the deep fryer been done for quality?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak27"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="107"
                        class="question"
                        data-name="Has the oil check for the deep fryer been done for quality?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close27"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="107"
                        class="question"
                        data-name="Has the oil check for the deep fryer been done for quality?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close27"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="108"
                        class="question"
                        data-name="Has the oil check for the deep fryer been done for quality?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the extractor on/off and clear of all oil residue/build up?
                      </td>
                      <td
                        id="109"
                        class="question"
                        data-name="Is the extractor on/off and clear of all oil residue/build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning28"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="109"
                        class="question"
                        data-name="Is the extractor on/off and clear of all oil residue/build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning28"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="110"
                        class="question"
                        data-name="Is the extractor on/off and clear of all oil residue/build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak28"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="110"
                        class="question"
                        data-name="Is the extractor on/off and clear of all oil residue/build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak28"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="111"
                        class="question"
                        data-name="Is the extractor on/off and clear of all oil residue/build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close28"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="111"
                        class="question"
                        data-name="Is the extractor on/off and clear of all oil residue/build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close28"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="112"
                        class="question"
                        data-name="Is the extractor on/off and clear of all oil residue/build up?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>

                      <td>Is the vegetable dicer cleaned & well stacked?</td>
                      <td
                        id="113"
                        class="question"
                        data-name="Is the vegetable dicer cleaned & well stacked?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning29"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="113"
                        class="question"
                        data-name="Is the vegetable dicer cleaned & well stacked?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning29"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="114"
                        class="question"
                        data-name="Is the vegetable dicer cleaned & well stacked?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak29"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="114"
                        class="question"
                        data-name="Is the vegetable dicer cleaned & well stacked?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak29"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="115"
                        class="question"
                        data-name="Is the vegetable dicer cleaned & well stacked?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close29"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="115"
                        class="question"
                        data-name="Is the vegetable dicer cleaned & well stacked?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close29"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="116"
                        class="question"
                        data-name="Is the vegetable dicer cleaned & well stacked?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Was all food prepared sampled before it is passed to check for
                        quality and taste?</td>
                      <td
                        id="117"
                        class="question"
                        data-name="Was all food prepared sampled before it is passed to check for quality and taste?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning30"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="117"
                        class="question"
                        data-name="Was all food prepared sampled before it is passed to check for quality and taste?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning30"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="118"
                        class="question"
                        data-name="Was all food prepared sampled before it is passed to check for quality and taste?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak30"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="118"
                        class="question"
                        data-name="Was all food prepared sampled before it is passed to check for quality and taste?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak30"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="119"
                        class="question"
                        data-name="Was all food prepared sampled before it is passed to check for quality and taste?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close30"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="119"
                        class="question"
                        data-name="Was all food prepared sampled before it is passed to check for quality and taste?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close30"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="120"
                        class="question"
                        data-name="Was all food prepared sampled before it is passed to check for quality and taste?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are the Cold room/freexer cleaned based on the cleaning
                        schedule?</td>
                      <td
                        id="121"
                        class="question"
                        data-name="Are the Cold room/freexer cleaned based on the cleaning schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning31"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="121"
                        class="question"
                        data-name="Are the Cold room/freexer cleaned based on the cleaning schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning31"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="122"
                        class="question"
                        data-name="Are the Cold room/freexer cleaned based on the cleaning schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak31"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="122"
                        class="question"
                        data-name="Are the Cold room/freexer cleaned based on the cleaning schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak31"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="123"
                        class="question"
                        data-name="Are the Cold room/freexer cleaned based on the cleaning schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close31"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="123"
                        class="question"
                        data-name="Are the Cold room/freexer cleaned based on the cleaning schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close31"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="124"
                        class="question"
                        data-name="Are the Cold room/freexer cleaned based on the cleaning schedule?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are all the Lights in the different BOH sections working? and
                        on/off?</td>
                      <td
                        id="125"
                        class="question"
                        data-name="Are the Cold room/freexer cleaned based on the cleaning schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning32"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="125"
                        class="question"
                        data-name="Are the Cold room/freexer cleaned based on the cleaning schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning32"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="126"
                        class="question"
                        data-name="Are the Cold room/freexer cleaned based on the cleaning schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak32"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="126"
                        class="question"
                        data-name="Are the Cold room/freexer cleaned based on the cleaning schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak32"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="127"
                        class="question"
                        data-name="Are the Cold room/freexer cleaned based on the cleaning schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close32"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="127"
                        class="question"
                        data-name="Are the Cold room/freexer cleaned based on the cleaning schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close32"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="128"
                        class="question"
                        data-name="Are the Cold room/freexer cleaned based on the cleaning schedule?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Has all refuse been disposed timely enough(Hall full! Half
                        emptied)</td>
                      <td
                        id="129"
                        class="question"
                        data-name="Has all refuse been disposed timely enough(Hall full! Half  emptied)"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning33"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="129"
                        class="question"
                        data-name="Has all refuse been disposed timely enough(Hall full! Half  emptied)"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning33"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="130"
                        class="question"
                        data-name="Has all refuse been disposed timely enough(Hall full! Half  emptied)"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak33"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="130"
                        class="question"
                        data-name="Has all refuse been disposed timely enough(Hall full! Half  emptied)"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak33"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="131"
                        class="question"
                        data-name="Has all refuse been disposed timely enough(Hall full! Half emptied)"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close33"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="131"
                        class="question"
                        data-name="Has all refuse been disposed timely enough(Hall full! Half emptied)"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close33"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="132"
                        class="question"
                        data-name="Has all refuse been disposed timely enough(Hall full! Half emptied)"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the kitchen floors/Corridors swept and mopped?</td>
                      <td
                        id="133"
                        class="question"
                        data-name="Is the kitchen floors/Corridors swept and mopped?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning34"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="133"
                        class="question"
                        data-name="Is the kitchen floors/Corridors swept and mopped?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning34"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="134"
                        class="question"
                        data-name="Is the kitchen floors/Corridors swept and mopped?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak34"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="134"
                        class="question"
                        data-name="Is the kitchen floors/Corridors swept and mopped?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak34"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="135"
                        class="question"
                        data-name="Is the kitchen floors/Corridors swept and mopped?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close34"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="135"
                        class="question"
                        data-name="Is the kitchen floors/Corridors swept and mopped?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close34"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="136"
                        class="question"
                        data-name="Is the kitchen floors/Corridors swept and mopped?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is staff changing/cloak room cleaned & lockers properly
                        arranged?</td>
                      <td
                        id="137"
                        class="question"
                        data-name="Is staff changing/cloak room cleaned & lockers properly arranged?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning35"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="137"
                        class="question"
                        data-name="Is staff changing/cloak room cleaned & lockers properly arranged?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning35"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="138"
                        class="question"
                        data-name="Is staff changing/cloak room cleaned & lockers properly arranged?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak35"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="138"
                        class="question"
                        data-name="Is staff changing/cloak room cleaned & lockers properly arranged?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak35"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="139"
                        class="question"
                        data-name="Is staff changing/cloak room cleaned & lockers properly arranged?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close35"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="139"
                        class="question"
                        data-name="Is staff changing/cloak room cleaned & lockers properly arranged?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close35"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="140"
                        class="question"
                        data-name="Is staff changing/cloak room cleaned & lockers properly arranged?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>

                  </tbody>

                  <thead>
                    <th>ADDITIONAL CHECKS </th>
                    <th colspan="7"></th>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="200">Is the REDBOOK filled timely? accurately? and
                        correctly?</td>
                      <td
                        id="141"
                        class="question"
                        data-name="Is the REDBOOK filled timely? accurately? and correctly?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning36"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="141"
                        class="question"
                        data-name="Is the REDBOOK filled timely? accurately? and correctly?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning36"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="142"
                        class="question"
                        data-name="Is the REDBOOK filled timely? accurately? and correctly?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak36"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="142"
                        class="question"
                        data-name="Is the REDBOOK filled timely? accurately? and correctly?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak36"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="143"
                        class="question"
                        data-name="Is the REDBOOK filled timely? accurately? and correctly?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close36"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="143"
                        class="question"
                        data-name="Is the REDBOOK filled timely? accurately? and correctly?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close36"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="144"
                        class="question"
                        data-name="Is the REDBOOK filled timely? accurately? and correctly?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is CAYGO the order of the day?</td>
                      <td
                        id="145"
                        class="question"
                        data-name="Is CAYGO the order of the day?"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning37"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="145"
                        class="question"
                        data-name="Is CAYGO the order of the day?"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning37"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="146"
                        class="question"
                        data-name="Is CAYGO the order of the day?"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak37"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="146"
                        class="question"
                        data-name="Is CAYGO the order of the day?"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak37"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="147"
                        class="question"
                        data-name="Is CAYGO the order of the day?"
                      ><label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close37"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="147"
                        class="question"
                        data-name="Is CAYGO the order of the day?"
                      ><label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close37"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="148"
                        class="question"
                        data-name="Is CAYGO the order of the day?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>
                      <td>Are all staff dressed correctly as per SOP?</td>
                      <td
                        id="149"
                        class="question"
                        data-name="Are all staff dressed correctly as per SOP?"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning38"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="149"
                        class="question"
                        data-name="Are all staff dressed correctly as per SOP?"
                      ><label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning38"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="150"
                        class="question"
                        data-name="Are all staff dressed correctly as per SOP?"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak38"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="150"
                        class="question"
                        data-name="Are all staff dressed correctly as per SOP?"
                      ><label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak38"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="151"
                        class="question"
                        data-name="Are all staff dressed correctly as per SOP?"
                      ><label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close38"
                          id="inlineRadio1"
                          value="yes"
                        ></td>
                      <td
                        id="151"
                        class="question"
                        data-name="Are all staff dressed correctly as per SOP?"
                      ><label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close38"
                          id="inlineRadio1"
                          value="no"
                        ></td>
                      <td
                        id="152"
                        class="question"
                        data-name="Are all staff dressed correctly as per SOP?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>
                      <td>Are the hand wash soap units filled and are staff washing their
                        hands frequently?</td>
                      <td
                        id="153"
                        class="question"
                        data-name="Are the hand wash soap units filled and are staff washing their hands frequently?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning39"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="153"
                        class="question"
                        data-name="Are the hand wash soap units filled and are staff washing their hands frequently?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning39"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="154"
                        class="question"
                        data-name="Are the hand wash soap units filled and are staff washing their hands frequently?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak39"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="154"
                        class="question"
                        data-name="Are the hand wash soap units filled and are staff washing their hands frequently?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak39"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="155"
                        class="question"
                        data-name="Are the hand wash soap units filled and are staff washing their hands frequently?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close39"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="155"
                        class="question"
                        data-name="Are the hand wash soap units filled and are staff washing their hands frequently?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close39"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="156"
                        class="question"
                        data-name="Are the hand wash soap units filled and are staff washing their hands frequently?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>

                      <td>Was the grease fat trap cleaned(Must clean at least once daily
                      </td>
                      <td
                        id="157"
                        class="question"
                        data-name="Was the grease fat trap cleaned(Must clean at least once daily"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning40"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="157"
                        class="question"
                        data-name="Was the grease fat trap cleaned(Must clean at least once daily"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning40"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="158"
                        class="question"
                        data-name="Was the grease fat trap cleaned(Must clean at least once daily"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak40"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="158"
                        class="question"
                        data-name="Was the grease fat trap cleaned(Must clean at least once daily"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak40"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="159"
                        class="question"
                        data-name="Was the grease fat trap cleaned(Must clean at least once daily"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close40"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="159"
                        class="question"
                        data-name="Was the grease fat trap cleaned(Must clean at least once daily"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close40"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="160"
                        class="question"
                        data-name="Was the grease fat trap cleaned(Must clean at least once daily"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the weekly staff schedules/roaster prepared in advanced and
                        correct?</td>
                      <td
                        id="161"
                        class="question"
                        data-name="Is the weekly staff schedules/roaster prepared in advanced and correct?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning41"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="161"
                        class="question"
                        data-name="Is the weekly staff schedules/roaster prepared in advanced and correct?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning41"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="162"
                        class="question"
                        data-name="Is the weekly staff schedules/roaster prepared in advanced and correct?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak41"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="162"
                        class="question"
                        data-name="Is the weekly staff schedules/roaster prepared in advanced and correct?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak41"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="163"
                        class="question"
                        data-name="Is the weekly staff schedules/roaster prepared in advanced and correct?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close41"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="163"
                        class="question"
                        data-name="Is the weekly staff schedules/roaster prepared in advanced and correct?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close41"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="164"
                        class="question"
                        data-name="Is the weekly staff schedules/roaster prepared in advanced and correct?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Was there any material unavailability or shortage affecting the
                        shift or day sales?</td>
                      <td
                        id="165"
                        class="question"
                        data-name="Was there any material unavailability or shortage affecting the shift or day sales?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning42"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="165"
                        class="question"
                        data-name="Was there any material unavailability or shortage affecting the shift or day sales?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning42"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="166"
                        class="question"
                        data-name="Was there any material unavailability or shortage affecting the shift or day sales?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak42"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="166"
                        class="question"
                        data-name="Was there any material unavailability or shortage affecting the shift or day sales?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak42"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="167"
                        class="question"
                        data-name="Was there any material unavailability or shortage affecting the shift or day sales?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close42"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="167"
                        class="question"
                        data-name="Was there any material unavailability or shortage affecting the shift or day sales?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close42"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="168"
                        class="question"
                        data-name="Was there any material unavailability or shortage affecting the shift or day sales?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Was the morning/Afternoon stock count carried out?</td>
                      <td
                        id="169"
                        class="question"
                        data-name="Was the morning/Afternoon stock count carried out?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning43"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="169"
                        class="question"
                        data-name="Was the morning/Afternoon stock count carried out?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning43"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="170"
                        class="question"
                        data-name="Was the morning/Afternoon stock count carried out?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak43"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="170"
                        class="question"
                        data-name="Was the morning/Afternoon stock count carried out?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak43"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="171"
                        class="question"
                        data-name="Was the morning/Afternoon stock count carried out?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close43"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="171"
                        class="question"
                        data-name="Was the morning/Afternoon stock count carried out?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close43"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="172"
                        class="question"
                        data-name="Was the morning/Afternoon stock count carried out?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Has the previous day's and shift control been carried out?</td>
                      <td
                        id="173"
                        class="question"
                        data-name="Has the previous day's and shift control been carried out?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning44"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="173"
                        class="question"
                        data-name="Has the previous day's and shift control been carried out?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning44"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="174"
                        class="question"
                        data-name="Has the previous day's and shift control been carried out?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak44"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="174"
                        class="question"
                        data-name="Has the previous day's and shift control been carried out?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak44"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="175"
                        class="question"
                        data-name="Has the previous day's and shift control been carried out?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close44"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="175"
                        class="question"
                        data-name="Has the previous day's and shift control been carried out?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close44"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="176"
                        class="question"
                        data-name="Has the previous day's and shift control been carried out?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Has the food cost report been done for the previous day?</td>
                      <td
                        id="177"
                        class="question"
                        data-name="Has the food cost report been done for the previous day?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning45"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="177"
                        class="question"
                        data-name="Has the food cost report been done for the previous day?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning45"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="178"
                        class="question"
                        data-name="Has the food cost report been done for the previous day?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak45"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="178"
                        class="question"
                        data-name="Has the food cost report been done for the previous day?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak45"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="179"
                        class="question"
                        data-name="Has the food cost report been done for the previous day?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close45"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="179"
                        class="question"
                        data-name="Has the food cost report been done for the previous day?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close45"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="180"
                        class="question"
                        data-name="Has the food cost report been done for the previous day?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>All materials received via suppliers/transfers in the best
                        consition and quality?</td>
                      <td
                        id="181"
                        class="question"
                        data-name="All materials received via suppliers/transfers in the best consition and quality?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning46"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="181"
                        class="question"
                        data-name="All materials received via suppliers/transfers in the best consition and quality?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning46"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="182"
                        class="question"
                        data-name="All materials received via suppliers/transfers in the best consition and quality?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak46"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="182"
                        class="question"
                        data-name="All materials received via suppliers/transfers in the best consition and quality?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak46"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="183"
                        class="question"
                        data-name="All materials received via suppliers/transfers in the best consition and quality?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close46"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="183"
                        class="question"
                        data-name="All materials received via suppliers/transfers in the best consition and quality?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close46"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="184"
                        class="question"
                        data-name="All materials received via suppliers/transfers in the best consition and quality?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Has morning/Afternoon cash sales been counted/verified and
                        locked in the safe?</td>
                      <td
                        id="185"
                        class="question"
                        data-name="Has morning/Afternoon cash sales been counted/verified and locked in the safe?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning47"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="185"
                        class="question"
                        data-name="Has morning/Afternoon cash sales been counted/verified and locked in the safe?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning47"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="186"
                        class="question"
                        data-name="Has morning/Afternoon cash sales been counted/verified and locked in the safe?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak47"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="186"
                        class="question"
                        data-name="Has morning/Afternoon cash sales been counted/verified and locked in the safe?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak47"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="187"
                        class="question"
                        data-name="Has morning/Afternoon cash sales been counted/verified and locked in the safe?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close47"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="187"
                        class="question"
                        data-name="Has morning/Afternoon cash sales been counted/verified and locked in the safe?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close47"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="188"
                        class="question"
                        data-name="Has morning/Afternoon cash sales been counted/verified and locked in the safe?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>All equipment at the close of business inspected cleaned and
                        turned off?</td>
                      <td
                        id="189"
                        class="question"
                        data-name="All equipment at the close of business inspected cleaned and turned off?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning48"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="189"
                        class="question"
                        data-name="All equipment at the close of business inspected cleaned and turned off?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning48"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="190"
                        class="question"
                        data-name="All equipment at the close of business inspected cleaned and turned off?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak48"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="190"
                        class="question"
                        data-name="All equipment at the close of business inspected cleaned and turned off?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak48"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="191"
                        class="question"
                        data-name="All equipment at the close of business inspected cleaned and turned off?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close48"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="191"
                        class="question"
                        data-name="All equipment at the close of business inspected cleaned and turned off?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close48"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="192"
                        class="question"
                        data-name="All equipment at the close of business inspected cleaned and turned off?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>How was the customer experience today in both shifts?</td>
                      <td
                        id="193"
                        class="question"
                        data-name="How was the customer experience today in both shifts?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning49"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="193"
                        class="question"
                        data-name="How was the customer experience today in both shifts?"
                      >
                        <label
                          for=""
                          class="label"
                        >morning</label> <input
                          type="radio"
                          name="morning49"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="194"
                        class="question"
                        data-name="How was the customer experience today in both shifts?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak49"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="194"
                        class="question"
                        data-name="How was the customer experience today in both shifts?"
                      >
                        <label
                          for=""
                          class="label"
                        >peak period</label> <input
                          type="radio"
                          name="peak49"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="195"
                        class="question"
                        data-name="How was the customer experience today in both shifts?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close49"
                          id="inlineRadio1"
                          value="yes"
                        >
                      </td>
                      <td
                        id="195"
                        class="question"
                        data-name="How was the customer experience today in both shifts?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label> <input
                          type="radio"
                          name="close49"
                          id="inlineRadio1"
                          value="no"
                        >
                      </td>
                      <td
                        id="196"
                        class="question"
                        data-name="How was the customer experience today in both shifts?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>

                  </tbody>

                </table>
                <br>
                <div
                  id="197"
                  class="form-group row question"
                  data-name="Shift Manager(Morning) Name"
                >
                  <label
                    for="inputPassword"
                    class="col-2 col-form-label"
                  >Shift
                    Manager(Morning) Name </label>
                  <div class="col-10">
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword"
                      v-model=" store_manager"
                    >
                  </div>
                </div>
                <div
                  id="198"
                  class="form-group row question"
                  data-name="Shift Manager(Afternoon) Name "
                >
                  <label
                    for="inputPassword"
                    class="col-2 col-form-label"
                  >Shift
                    Manager(Afternoon) Name </label>
                  <div class="col-10">
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword"
                      v-model=" store_manager"
                    >
                  </div>
                </div>
              </div>

              <button class="btn md-raised md-warning text-white btn-warning">Submit</button>
            </form>
          </md-card-content>
        </md-card>

        <!-- </div> -->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: "",
      stores: [],
      store_manager: "",
      form: {
        store_id: "",
        question_answer: []
      }
    };
  },
  mounted () {
    this.stores = this.$store.getters.stores;
    this.username = this.$store.getters.user;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("date").value = today;
  },
  watch: {
    'form.store_id': function (val) {

      this.stores.forEach((i) => {

        if (i.id === val) {
          this.store_manager = i.store_admin_name
        }
      })
    }

  },
  methods: {
    submitForm () {
      let vm = this;
      var html =
        '<img src="https://freefrontend.com/assets/img/css-loaders/css-fun-Little-loader.gif"/>';

      this.$swal.fire({
        title: "Processing",
        html: html,
        showConfirmButton: false,
        showCancelButton: false,
        width: "380px",
        allowOutsideClick: false
      });

      // NodeList.prototype.forEach = Array.prototype.forEach;
      let newForm = this.form;
      var divs = document.querySelectorAll('.question').forEach(function (el) {
        let label = el.childNodes[0].innerText;
        let qtext = el.dataset.name.replace(/\n/g, ' ');
        let ans;
        if (el.childNodes[1].localName == "div") {
          ans = el.childNodes[1].childNodes[0].value;
        }
        else if (el.childNodes[2]) {
          ans = el.childNodes[2].childNodes[0].value;
        }
        else {
          ans = el.childNodes[1].value;
        }


        let index = el.id;

        if (index == 4) {
          ans = vm.form.store_id;
        }
        newForm.question_answer.push({
          questionno: index,
          questiontext: qtext,
          questionlabel: label,
          answer: ans,
        })
      });


      var req = {
        what: "greenbook",
        data: newForm
      };
      // console.log(req.data);
      this.$socket
        .makePostRequest(req)
        .then(response => {
          // console.log(response.data.message);

          this.$swal.fire("Success", response.data.message, "success");
          location.reload();
        })
        .catch(error => {
          console.log(error);
          this.$swal.fire("Error", error.message, "error");
          this.form = {
            store_id: "",
            question_answer: []
          }
        });

    },

  }
};
</script>
<style scoped>
.form-box {
  border: 1px solid #dee2e6;
  height: 120px;
  padding: 5px;
}
.label {
  display: none;
}
</style>
