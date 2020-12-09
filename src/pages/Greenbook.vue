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
                  <label class="col-3 col-form-label">Auditor's Name</label>
                  <div class="col-9">
                    <input
                      type="text"
                      class="form-control"
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
                  <label class="col-3 col-form-label">UNIT</label>
                  <div class="col-9">
                    <input
                      type="text"
                      class="form-control"
                      title="enter unit being inspected"
                    >
                  </div>
                </div>
                <div
                  id="3"
                  class="form-group row question"
                  data-name="date"
                >
                  <label class="col-3 col-form-label">DATE</label>
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
                  <label class="col-3 col-form-label">Location
                    Visited</label>
                  <div class="col-9">
                    <v-select
                      v-model="form.store_id"
                      :options="stores"
                      title="select store visited"
                      label="store_address"
                      :reduce="st => st.id"
                    ></v-select>

                  </div>
                </div>

                <table class="table table-bordered">
                  <thead>
                    <th></th>
                    <th colspan="2">AM</th>
                    <th colspan="2">PM</th>
                    <th></th>
                  </thead>

                  <!-- carpark -->
                  <thead>
                    <th>CAR PARK & EXTERIOR</th>
                    <th>Yes</th>
                    <th>No</th>
                    <th>Yes</th>
                    <th>No</th>

                    <th>Comments/Remarks</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Is the car park clean and free of weeds and Algae?</td>

                      <td
                        id="5"
                        class="question"
                        data-name="Is the car park clean and free of weeds and Algae?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am"
                          value="yes"
                        ></td>
                      <td
                        id="5"
                        class="question"
                        data-name="Is the car park clean and free of weeds and Algae?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am"
                          value="no"
                        ></td>
                      <td
                        id="6"
                        class="question"
                        data-name="Is there a functional Air Curtain?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm"
                          value="yes"
                        ></td>
                      <td
                        id="6"
                        class="question"
                        data-name="Is the car park clean and free of weeds and Algae?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm"
                          value="no"
                        ></td>

                      <td
                        id="7"
                        class="question"
                        data-name="Is the car park clean and free of weeds and Algae?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>
                      <td>Are the Exterior Signages clean and free of Cobwebs?</td>
                      <td
                        id="8"
                        class="question"
                        data-name="Are the Exterior Signages clean and free of Cobwebs?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am2"
                          value="yes"
                        >
                      </td>
                      <td
                        id="8"
                        class="question"
                        data-name="Are the Exterior Signages clean and free of Cobwebs?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am2"
                          value="no"
                        >
                      </td>
                      <td
                        id="9"
                        class="question"
                        data-name="Are the Exterior Signages clean and free of Cobwebs?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm2"
                          value="yes"
                        >
                      </td>
                      <td
                        id="9"
                        class="question"
                        data-name="Are the Exterior Signages clean and free of Cobwebs?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm2"
                          value="no"
                        >
                      </td>

                      <td
                        id="10"
                        class="question"
                        data-name="Are the Exterior Signages clean and free of Cobwebs?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are the Exterior Signages ON/OFF?</td>
                      <td
                        id="11"
                        class="question"
                        data-name="Are the Exterior Signages ON/OFF?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am3"
                          value="yes"
                        ></td>
                      <td
                        id="11"
                        class="question"
                        data-name="Are the Exterior Signages ON/OFF?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am3"
                          value="no"
                        ></td>
                      <td
                        id="12"
                        class="question"
                        data-name="Are the Exterior Signages ON/OFF?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm3"
                          value="yes"
                        ></td>
                      <td
                        id="12"
                        class="question"
                        data-name="Are the Exterior Signages ON/OFF?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm3"
                          value="no"
                        ></td>

                      <td
                        id="13"
                        class="question"
                        data-name="Are the Exterior Signages ON/OFF?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>
                      <td>Are the Exterior signages/Pylon lights damaged?</td>
                      <td
                        id="14"
                        class="question"
                        data-name="Are the Exterior signages/Pylon lights damaged?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am4"
                          value="yes"
                        >
                      </td>
                      <td
                        id="14"
                        class="question"
                        data-name="Are the Exterior signages/Pylon lights damaged?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am4"
                          value="no"
                        >
                      </td>
                      <td
                        id="15"
                        class="question"
                        data-name="Are the Exterior signages/Pylon lights damaged?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm4"
                          value="yes"
                        >
                      </td>
                      <td
                        id="15"
                        class="question"
                        data-name="Are the Exterior signages/Pylon lights damaged?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm4"
                          value="no"
                        >
                      </td>

                      <td
                        id="16"
                        class="question"
                        data-name="Are the Exterior signages/Pylon lights damaged?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>

                      <td>Is the exterior walls and glasses clean and free of build up?</td>
                      <td
                        id="17"
                        class="question"
                        data-name="Is the exterior walls and glasses clean and free of build up?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am5"
                          value="yes"
                        ></td>
                      <td
                        id="17"
                        class="question"
                        data-name="Is the exterior walls and glasses clean and free of build up?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am5"
                          value="no"
                        ></td>
                      <td
                        id="18"
                        class="question"
                        data-name="Is the exterior walls and glasses clean and free of build up?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm5"
                          value="yes"
                        ></td>
                      <td
                        id="18"
                        class="question"
                        data-name="Is the exterior walls and glasses clean and free of build up?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm5"
                          value="no"
                        ></td>

                      <td
                        id="19"
                        class="question"
                        data-name="Is the exterior walls and glasses clean and free of build up?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>
                      <td>Are the outdoor unit clean free from debris and algae build up at the side and behind of it?</td>
                      <td
                        id="20"
                        class="question"
                        data-name="Are the outdoor unit clean free from debris and algae build up at the side and behind of it?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am6"
                          value="yes"
                        ></td>
                      <td
                        id="20"
                        class="question"
                        data-name="Are the outdoor unit clean free from debris and algae build up at the side and behind of it?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am6"
                          value="no"
                        ></td>
                      <td
                        id="21"
                        class="question"
                        data-name="Are the outdoor unit clean free from debris and algae build up at the side and behind of it?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm6"
                          value="yes"
                        ></td>
                      <td
                        id="21"
                        class="question"
                        data-name="Are the outdoor unit clean free from debris and algae build up at the side and behind of it?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm6"
                          value="no"
                        ></td>

                      <td
                        id="22"
                        class="question"
                        data-name="Are the outdoor unit clean free from debris and algae build up at the side and behind of it?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>

                  </tbody>

                  <!-- lobby and cash point -->

                  <thead>
                    <th>LOBBY AND CASH POINT</th>
                    <th>Yes</th>
                    <th>No</th>
                    <th>Yes</th>
                    <th>No</th>

                    <th>Comments/Remarks</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Is there a functional Air Curtain?</td>

                      <td
                        id="23"
                        class="question"
                        data-name="Is there a functional Air Curtain?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am7"
                          value="yes"
                        ></td>
                      <td
                        id="23"
                        class="question"
                        data-name="Is there a functional Air Curtain?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am7"
                          value="no"
                        ></td>
                      <td
                        id="24"
                        class="question"
                        data-name="Is there a functional Air Curtain?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm7"
                          value="yes"
                        ></td>
                      <td
                        id="24"
                        class="question"
                        data-name="Is there a functional Air Curtain?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm7"
                          value="no"
                        ></td>

                      <td
                        id="25"
                        class="question"
                        data-name="Is there a functional Air Curtain?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>
                      <td>Are the wall tiles clean and free of stains?</td>
                      <td
                        id="26"
                        class="question"
                        data-name="Are the wall tiles clean and free of stains?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am8"
                          value="yes"
                        >
                      </td>
                      <td
                        id="26"
                        class="question"
                        data-name="Are the wall tiles clean and free of stains?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am8"
                          value="no"
                        >
                      </td>
                      <td
                        id="27"
                        class="question"
                        data-name="Are the wall tiles clean and free of stains?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm8"
                          value="yes"
                        >
                      </td>
                      <td
                        id="27"
                        class="question"
                        data-name="Are the wall tiles clean and free of stains?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm8"
                          value="no"
                        >
                      </td>

                      <td
                        id="28"
                        class="question"
                        data-name="Are the wall tiles clean and free of stains?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Has the shop floor been swept and mopped?</td>
                      <td
                        id="29"
                        class="question"
                        data-name="Has the shop floor been swept and mopped?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am9"
                          value="yes"
                        ></td>
                      <td
                        id="29"
                        class="question"
                        data-name="Has the shop floor been swept and mopped?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am9"
                          value="no"
                        ></td>
                      <td
                        id="30"
                        class="question"
                        data-name="Has the shop floor been swept and mopped?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm9"
                          value="yes"
                        ></td>
                      <td
                        id="30"
                        class="question"
                        data-name="Has the shop floor been swept and mopped?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm9"
                          value="no"
                        ></td>

                      <td
                        id="31"
                        class="question"
                        data-name="Has the shop floor been swept and mopped?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>
                      <td>Is the Tables and Chairs clean? spaced from the wall? Free of chewing gums?</td>
                      <td
                        id="32"
                        class="question"
                        data-name="Is the Tables and Chairs clean? spaced from the wall? Free of chewing gums?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am10"
                          value="yes"
                        >
                      </td>
                      <td
                        id="32"
                        class="question"
                        data-name="Is the Tables and Chairs clean? spaced from the wall? Free of chewing gums?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am10"
                          value="no"
                        >
                      </td>
                      <td
                        id="33"
                        class="question"
                        data-name="Is the Tables and Chairs clean? spaced from the wall? Free of chewing gums?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm10"
                          value="yes"
                        >
                      </td>
                      <td
                        id="33"
                        class="question"
                        data-name="Is the Tables and Chairs clean? spaced from the wall? Free of chewing gums?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm10"
                          value="no"
                        >
                      </td>

                      <td
                        id="34"
                        class="question"
                        data-name="Is the Tables and Chairs clean? spaced from the wall? Free of chewing gums?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>

                      <td>Is there a door mat present? in good condition at the entrance?</td>
                      <td
                        id="35"
                        class="question"
                        data-name="Is there a door mat present? in good condition at the entrance?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am11"
                          value="yes"
                        ></td>
                      <td
                        id="35"
                        class="question"
                        data-name="Is there a door mat present? in good condition at the entrance?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am11"
                          value="no"
                        ></td>
                      <td
                        id="36"
                        class="question"
                        data-name="Is there a door mat present? in good condition at the entrance?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm11"
                          value="yes"
                        ></td>
                      <td
                        id="36"
                        class="question"
                        data-name="Is there a door mat present? in good condition at the entrance?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm11"
                          value="no"
                        ></td>

                      <td
                        id="37"
                        class="question"
                        data-name="Is there a door mat present? in good condition at the entrance?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>
                      <td>Is the wash hand sink clean and equipped with soap and a functional hand drier?</td>
                      <td
                        id="38"
                        class="question"
                        data-name="Is the wash hand sink clean and equipped with soap and a functional hand drier?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am12"
                          value="yes"
                        ></td>
                      <td
                        id="38"
                        class="question"
                        data-name="Is the wash hand sink clean and equipped with soap and a functional hand drier?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am12"
                          value="no"
                        ></td>
                      <td
                        id="39"
                        class="question"
                        data-name="Is the wash hand sink clean and equipped with soap and a functional hand drier?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm12"
                          value="yes"
                        ></td>
                      <td
                        id="39"
                        class="question"
                        data-name="Is the wash hand sink clean and equipped with soap and a functional hand drier?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm12"
                          value="no"
                        ></td>

                      <td
                        id="40"
                        class="question"
                        data-name="Is the wash hand sink clean and equipped with soap and a functional hand drier?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>
                      <td>Is the Toilet cleaned hourly according to the hourly checklist?</td>
                      <td
                        id="41"
                        class="question"
                        data-name="Is the Toilet cleaned hourly according to the hourly checklist?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am13"
                          value="yes"
                        >
                      </td>
                      <td
                        id="41"
                        class="question"
                        data-name="Is the Toilet cleaned hourly according to the hourly checklist?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am13"
                          value="no"
                        >
                      </td>
                      <td
                        id="42"
                        class="question"
                        data-name="Is the Toilet cleaned hourly according to the hourly checklist?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm13"
                          value="yes"
                        >
                      </td>
                      <td
                        id="42"
                        class="question"
                        data-name="Is the Toilet cleaned hourly according to the hourly checklist?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm13"
                          value="no"
                        >
                      </td>

                      <td
                        id="43"
                        class="question"
                        data-name="Is the Toilet cleaned hourly according to the hourly checklist?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are all ACs clean and functional?</td>
                      <td
                        id="44"
                        class="question"
                        data-name="Are all ACs clean and functional?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am14"
                          value="yes"
                        >
                      </td>
                      <td
                        id="44"
                        class="question"
                        data-name="Are all ACs clean and functional?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am14"
                          value="no"
                        >
                      </td>
                      <td
                        id="45"
                        class="question"
                        data-name="Are all ACs clean and functional?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm14"
                          value="yes"
                        >
                      </td>
                      <td
                        id="45"
                        class="question"
                        data-name="Are all ACs clean and functional?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm14"
                          value="no"
                        >
                      </td>

                      <td
                        id="46"
                        class="question"
                        data-name="Are all ACs clean and functional?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are all Spot lights and Insect catchers clean and functional?</td>
                      <td
                        id="47"
                        class="question"
                        data-name="Are all Spot lights and Insect catchers clean and functional?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am15"
                          value="yes"
                        >
                      </td>
                      <td
                        id="47"
                        class="question"
                        data-name="Are all Spot lights and Insect catchers clean and functional?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am15"
                          value="no"
                        >
                      </td>
                      <td
                        id="48"
                        class="question"
                        data-name="Are all Spot lights and Insect catchers clean and functional?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm15"
                          value="yes"
                        >
                      </td>
                      <td
                        id="48"
                        class="question"
                        data-name="Are all Spot lights and Insect catchers clean and functional?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm15"
                          value="no"
                        >
                      </td>

                      <td
                        id="49"
                        class="question"
                        data-name="Are all Spot lights and Insect catchers clean and functional?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the Lobby free of cobwebs and crawling insects?</td>
                      <td
                        id="50"
                        class="question"
                        data-name="Is the Lobby free of cobwebs and crawling insects?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am16"
                          value="yes"
                        >
                      </td>
                      <td
                        id="50"
                        class="question"
                        data-name="Is the Lobby free of cobwebs and crawling insects?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am16"
                          value="no"
                        >
                      </td>
                      <td
                        id="51"
                        class="question"
                        data-name="Is the Lobby free of cobwebs and crawling insects?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm16"
                          value="yes"
                        >
                      </td>
                      <td
                        id="51"
                        class="question"
                        data-name="Is the Lobby free of cobwebs and crawling insects?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm16"
                          value="no"
                        >
                      </td>

                      <td
                        id="52"
                        class="question"
                        data-name="Is the Lobby free of cobwebs and crawling insects?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Is the Garbage counter clean and waste Bin lined with Bin bag?</td>
                      <td
                        id="53"
                        class="question"
                        data-name="Is the Garbage counter clean and waste Bin lined with Bin bag?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am17"
                          value="yes"
                        >
                      </td>
                      <td
                        id="53"
                        class="question"
                        data-name="Is the Garbage counter clean and waste Bin lined with Bin bag?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am17"
                          value="no"
                        >
                      </td>
                      <td
                        id="54"
                        class="question"
                        data-name="Is the Garbage counter clean and waste Bin lined with Bin bag?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm17"
                          value="yes"
                        >
                      </td>
                      <td
                        id="54"
                        class="question"
                        data-name="Is the Garbage counter clean and waste Bin lined with Bin bag?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm17"
                          value="no"
                        >
                      </td>

                      <td
                        id="55"
                        class="question"
                        data-name="Is the Garbage counter clean and waste Bin lined with Bin bag?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Is the Merchandizer clean in and out and free of build up?</td>
                      <td
                        id="56"
                        class="question"
                        data-name="Is the Merchandizer clean in and out and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am18"
                          value="yes"
                        >
                      </td>
                      <td
                        id="56"
                        class="question"
                        data-name="Is the Merchandizer clean in and out and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am18"
                          value="no"
                        >
                      </td>
                      <td
                        id="57"
                        class="question"
                        data-name="Is the Merchandizer clean in and out and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm18"
                          value="yes"
                        >
                      </td>
                      <td
                        id="57"
                        class="question"
                        data-name="Is the Merchandizer clean in and out and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm18"
                          value="no"
                        >
                      </td>

                      <td
                        id="58"
                        class="question"
                        data-name="Is the Merchandizer clean in and out and free of build up?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are the Merchandizer bulbs Halogen Osram bulbs?</td>
                      <td
                        id="59"
                        class="question"
                        data-name="Are the Merchandizer bulbs Halogen Osram bulbs?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am19"
                          value="yes"
                        >
                      </td>
                      <td
                        id="59"
                        class="question"
                        data-name="Are the Merchandizer bulbs Halogen Osram bulbs?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am19"
                          value="no"
                        >
                      </td>
                      <td
                        id="60"
                        class="question"
                        data-name="Are the Merchandizer bulbs Halogen Osram bulbs?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm19"
                          value="yes"
                        >
                      </td>
                      <td
                        id="60"
                        class="question"
                        data-name="Are the Merchandizer bulbs Halogen Osram bulbs?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm19"
                          value="no"
                        >
                      </td>

                      <td
                        id="61"
                        class="question"
                        data-name="Are the Merchandizer bulbs Halogen Osram bulbs?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Has the Merchandizer been pre heated before food displayed?</td>
                      <td
                        id="62"
                        class="question"
                        data-name="Has the Merchandizer been pre heated before food displayed?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am20"
                          value="yes"
                        >
                      </td>
                      <td
                        id="62"
                        class="question"
                        data-name="Has the Merchandizer been pre heated before food displayed?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am20"
                          value="no"
                        >
                      </td>
                      <td
                        id="63"
                        class="question"
                        data-name="Has the Merchandizer been pre heated before food displayed?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm20"
                          value="yes"
                        >
                      </td>
                      <td
                        id="63"
                        class="question"
                        data-name="Has the Merchandizer been pre heated before food displayed?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm20"
                          value="no"
                        >
                      </td>

                      <td
                        id="64"
                        class="question"
                        data-name="Has the Merchandizer been pre heated before food displayed?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the chips dump clean and functional? Void of drop lights?</td>
                      <td
                        id="65"
                        class="question"
                        data-name="Is the chips dump clean and functional? Void of drop lights?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am21"
                          value="yes"
                        >
                      </td>
                      <td
                        id="65"
                        class="question"
                        data-name="Is the chips dump clean and functional? Void of drop lights?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am21"
                          value="no"
                        >
                      </td>
                      <td
                        id="66"
                        class="question"
                        data-name="Is the chips dump clean and functional? Void of drop lights?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm21"
                          value="yes"
                        >
                      </td>
                      <td
                        id="66"
                        class="question"
                        data-name="Is the chips dump clean and functional? Void of drop lights?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm21"
                          value="no"
                        >
                      </td>

                      <td
                        id="67"
                        class="question"
                        data-name="Is the chips dump clean and functional? Void of drop lights?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Is there a Sanitizer solution available at the cash point?</td>
                      <td
                        id="68"
                        class="question"
                        data-name="Is there a Sanitizer solution available at the cash point?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am22"
                          value="yes"
                        >
                      </td>
                      <td
                        id="68"
                        class="question"
                        data-name="Is there a Sanitizer solution available at the cash point?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am22"
                          value="no"
                        >
                      </td>
                      <td
                        id="69"
                        class="question"
                        data-name="Is there a Sanitizer solution available at the cash point?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm22"
                          value="yes"
                        >
                      </td>
                      <td
                        id="69"
                        class="question"
                        data-name="Is there a Sanitizer solution available at the cash point?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm22"
                          value="no"
                        >
                      </td>

                      <td
                        id="70"
                        class="question"
                        data-name="Is there a Sanitizer solution available at the cash point?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
 <tr>
                      <td>Is the counter tops/till machine clean?</td>
                      <td
                        id="71"
                        class="question"
                        data-name="Is the counter tops/till machine clean"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am23"
                          value="yes"
                        >
                      </td>
                      <td
                        id="71"
                        class="question"
                        data-name="Is the counter tops/till machine clean"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am23"
                          value="no"
                        >
                      </td>
                      <td
                        id="72"
                        class="question"
                        data-name="Is the counter tops/till machine clean"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm23"
                          value="yes"
                        >
                      </td>
                      <td
                        id="72"
                        class="question"
                        data-name="Is the counter tops/till machine clean"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm23"
                          value="no"
                        >
                      </td>

                      <td
                        id="73"
                        class="question"
                        data-name="Is the counter tops/till machine clean"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                     <tr>
                      <td>Are all packaging materials well arranged and spoons/forks wrapped?</td>
                      <td
                        id="74"
                        class="question"
                        data-name="Are all packaging materials well arranged and spoons/forks wrapped?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am24"
                          value="yes"
                        >
                      </td>
                      <td
                        id="74"
                        class="question"
                        data-name="Are all packaging materials well arranged and spoons/forks wrapped?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am24"
                          value="no"
                        >
                      </td>
                      <td
                        id="75"
                        class="question"
                        data-name="Are all packaging materials well arranged and spoons/forks wrapped?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm24"
                          value="yes"
                        >
                      </td>
                      <td
                        id="75"
                        class="question"
                        data-name="Are all packaging materials well arranged and spoons/forks wrapped?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm24"
                          value="no"
                        >
                      </td>

                      <td
                        id="76"
                        class="question"
                        data-name="Are all packaging materials well arranged and spoons/forks wrapped?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the Menu board clean and cobweb free?</td>
                      <td
                        id="77"
                        class="question"
                        data-name="Is the Menu board clean and cobweb free?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am25"
                          value="yes"
                        >
                      </td>
                      <td
                        id="77"
                        class="question"
                        data-name="Is the Menu board clean and cobweb free?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am25"
                          value="no"
                        >
                      </td>
                      <td
                        id="78"
                        class="question"
                        data-name="Is the Menu board clean and cobweb free?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm25"
                          value="yes"
                        >
                      </td>
                      <td
                        id="78"
                        class="question"
                        data-name="Is the Menu board clean and cobweb free?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm25"
                          value="no"
                        >
                      </td>

                      <td
                        id="79"
                        class="question"
                        data-name="Is the Menu board clean and cobweb free?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                     <tr>
                      <td>Are the FOH chiller working and attaining temperature between 1-4 degrees?
                      </td>
                      <td
                        id="80"
                        class="question"
                        data-name="Are the FOH chiller working and attaining temperature between 1-4 degrees?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am26"
                          value="yes"
                        >
                      </td>
                      <td
                        id="80"
                        class="question"
                        data-name="Are the FOH chiller working and attaining temperature between 1-4 degrees?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am26"
                          value="no"
                        >
                      </td>
                      <td
                        id="81"
                        class="question"
                        data-name="Are the FOH chiller working and attaining temperature between 1-4 degrees?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm26"
                          value="yes"
                        >
                      </td>
                      <td
                        id="81"
                        class="question"
                        data-name="Are the FOH chiller working and attaining temperature between 1-4 degrees?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm26"
                          value="no"
                        >
                      </td>

                      <td
                        id="82"
                        class="question"
                        data-name="Are the FOH chiller working and attaining temperature between 1-4 degrees?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                      <tr>

                      <td>Has the Tables been buzzed after customer's meal?</td>
                      <td
                        id="83"
                        class="question"
                        data-name="Has the Tables been buzzed after customer's meal?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am27"
                          value="yes"
                        >
                      </td>
                      <td
                        id="83"
                        class="question"
                        data-name="Has the Tables been buzzed after customer's meal?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am27"
                          value="no"
                        >
                      </td>
                      <td
                        id="84"
                        class="question"
                        data-name="Has the Tables been buzzed after customer's meal?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm27"
                          value="yes"
                        >
                      </td>
                      <td
                        id="84"
                        class="question"
                        data-name="Has the Tables been buzzed after customer's meal?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm27"
                          value="no"
                        >
                      </td>

                      <td
                        id="85"
                        class="question"
                        data-name="Has the Tables been buzzed after customer's meal?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is all cleaning materials and chemicals out of sight and safely stored away?</td>
                      <td
                        id="86"
                        class="question"
                        data-name="Is all cleaning materials and chemicals out of sight and safely stored away?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am28"
                          value="yes"
                        >
                      </td>
                      <td
                        id="86"
                        class="question"
                        data-name="Is all cleaning materials and chemicals out of sight and safely stored away?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am28"
                          value="no"
                        >
                      </td>
                      <td
                        id="87"
                        class="question"
                        data-name="Is all cleaning materials and chemicals out of sight and safely stored away?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm28"
                          value="yes"
                        >
                      </td>
                      <td
                        id="87"
                        class="question"
                        data-name="Is all cleaning materials and chemicals out of sight and safely stored away?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm28"
                          value="no"
                        >
                      </td>

                      <td
                        id="88"
                        class="question"
                        data-name="Is all cleaning materials and chemicals out of sight and safely stored away?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                     <tr>
                      <td>Is the Ice cream/cake Display clean and free of residue?</td>
                      <td
                        id="89"
                        class="question"
                        data-name="Is the Ice cream/cake Display clean and free of residue?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am29"
                          value="yes"
                        >
                      </td>
                      <td
                        id="89"
                        class="question"
                        data-name="Is the Ice cream/cake Display clean and free of residue?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am29"
                          value="no"
                        >
                      </td>
                      <td
                        id="90"
                        class="question"
                        data-name="Is the Ice cream/cake Display clean and free of residue?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm29"
                          value="yes"
                        >
                      </td>
                      <td
                        id="90"
                        class="question"
                        data-name="Is the Ice cream/cake Display clean and free of residue?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm29"
                          value="no"
                        >
                      </td>

                      <td
                        id="91"
                        class="question"
                        data-name="Is the Ice cream/cake Display clean and free of residue?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                     <tr>
                      <td>Is the cold slab clean and free of residue?</td>
                      <td
                        id="92"
                        class="question"
                        data-name="Is the cold slab clean and free of residue?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am30"
                          value="yes"
                        >
                      </td>
                      <td
                        id="92"
                        class="question"
                        data-name="Is the cold slab clean and free of residue?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am30"
                          value="no"
                        >
                      </td>
                      <td
                        id="93"
                        class="question"
                        data-name="Is the cold slab clean and free of residue?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm30"
                          value="yes"
                        >
                      </td>
                      <td
                        id="93"
                        class="question"
                        data-name="Is the cold slab clean and free of residue?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm30"
                          value="no"
                        >
                      </td>

                      <td
                        id="94"
                        class="question"
                        data-name="Is the cold slab clean and free of residue?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                     <tr>
                      <td>Is the Coffee machine working and clean?</td>
                      <td
                        id="95"
                        class="question"
                        data-name="Is the Coffee machine working and clean?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am31"
                          value="yes"
                        >
                      </td>
                      <td
                        id="95"
                        class="question"
                        data-name="Is the Coffee machine working and clean?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am31"
                          value="no"
                        >
                      </td>
                      <td
                        id="96"
                        class="question"
                        data-name="Is the Coffee machine working and clean?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm31"
                          value="yes"
                        >
                      </td>
                      <td
                        id="96"
                        class="question"
                        data-name="Is the Coffee machine working and clean?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm31"
                          value="no"
                        >
                      </td>

                      <td
                        id="97"
                        class="question"
                        data-name="Is the Coffee machine working and clean?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the Dough Pizza press clean and free of residue?</td>
                      <td
                        id="98"
                        class="question"
                        data-name="Is the Dough Pizza press clean and free of residue?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am32"
                          value="yes"
                        >
                      </td>
                      <td
                        id="98"
                        class="question"
                        data-name="Is the Dough Pizza press clean and free of residue?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am32"
                          value="no"
                        >
                      </td>
                      <td
                        id="99"
                        class="question"
                        data-name="Is the Dough Pizza press clean and free of residue?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm32"
                          value="yes"
                        >
                      </td>
                      <td
                        id="99"
                        class="question"
                        data-name="Is the Dough Pizza press clean and free of residue?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm32"
                          value="no"
                        >
                      </td>

                      <td
                        id="100"
                        class="question"
                        data-name="Is the Dough Pizza press clean and free of residue?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                     <tr>
                      <td>Is the front hood extractor for Pizza clean and free of build up?</td>
                      <td
                        id="101"
                        class="question"
                        data-name="Is the front hood extractor for Pizza clean and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am33"
                          value="yes"
                        >
                      </td>
                      <td
                        id="101"
                        class="question"
                        data-name="Is the front hood extractor for Pizza clean and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am33"
                          value="no"
                        >
                      </td>
                      <td
                        id="102"
                        class="question"
                        data-name="Is the front hood extractor for Pizza clean and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm33"
                          value="yes"
                        >
                      </td>
                      <td
                        id="102"
                        class="question"
                        data-name="Is the front hood extractor for Pizza clean and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm33"
                          value="no"
                        >
                      </td>

                      <td
                        id="103"
                        class="question"
                        data-name="Is the front hood extractor for Pizza clean and free of build up?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                      <tr>
                      <td>Are all Pizza baking tools and utensils cleaned/sanitized and neatly stored?</td>
                      <td
                        id="104"
                        class="question"
                        data-name="Are all Pizza baking tools and utensils cleaned/sanitized and neatly stored?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am34"
                          value="yes"
                        >
                      </td>
                      <td
                        id="104"
                        class="question"
                        data-name="Are all Pizza baking tools and utensils cleaned/sanitized and neatly stored?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am34"
                          value="no"
                        >
                      </td>
                      <td
                        id="105"
                        class="question"
                        data-name="Are all Pizza baking tools and utensils cleaned/sanitized and neatly stored?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm34"
                          value="yes"
                        >
                      </td>
                      <td
                        id="105"
                        class="question"
                        data-name="Are all Pizza baking tools and utensils cleaned/sanitized and neatly stored?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm34"
                          value="no"
                        >
                      </td>

                      <td
                        id="106"
                        class="question"
                        data-name="Are all Pizza baking tools and utensils cleaned/sanitized and neatly stored?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are the Pizza Packaging boxes well arranged and free of dirt or potential hazard?</td>
                      <td
                        id="107"
                        class="question"
                        data-name="Are the Pizza Packaging boxes well arranged and free of dirt or potential hazard?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am35"
                          value="yes"
                        >
                      </td>
                      <td
                        id="107"
                        class="question"
                        data-name="Are the Pizza Packaging boxes well arranged and free of dirt or potential hazard?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am35"
                          value="no"
                        >
                      </td>
                      <td
                        id="108"
                        class="question"
                        data-name="Are the Pizza Packaging boxes well arranged and free of dirt or potential hazard?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm35"
                          value="yes"
                        >
                      </td>
                      <td
                        id="108"
                        class="question"
                        data-name="Are the Pizza Packaging boxes well arranged and free of dirt or potential hazard?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm35"
                          value="no"
                        >
                      </td>

                      <td
                        id="109"
                        class="question"
                        data-name="Are the Pizza Packaging boxes well arranged and free of dirt or potential hazard?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                  </tbody>

                  <thead>
                    <th>KITCHEN(BOH, FRYER STATION & PASTRY) </th>
                    <th>Yes</th>
                    <th>No</th>
                    <th>Yes</th>
                    <th>No</th>

                    <th>Comments/Remarks</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="200">Is the Gas Burners, pressure and deep/open fryers clean and free of build up?
                      </td>
                      <td
                        id="110"
                        class="question"
                        data-name="Is the Gas Burners, pressure and deep/open fryers clean and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am36"
                          value="yes"
                        >
                      </td>
                      <td
                        id="110"
                        class="question"
                        data-name="Is the Gas Burners, pressure and deep/open fryers clean and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am36"
                          value="no"
                        >
                      </td>
                      <td
                        id="111"
                        class="question"
                        data-name="Is the Gas Burners, pressure and deep/open fryers clean and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm36"
                          value="yes"
                        >
                      </td>
                      <td
                        id="111"
                        class="question"
                        data-name="Is the Gas Burners, pressure and deep/open fryers clean and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm36"
                          value="no"
                        >
                      </td>

                      <td
                        id="112"
                        class="question"
                        data-name="Is the Gas Burners, pressure and deep/open fryers clean and free of build up?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the Dough mixer clean and free of build up?</td>
                      <td
                        id="113"
                        class="question"
                        data-name="Is the Dough mixer clean and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am37"
                          value="yes"
                        >
                      </td>
                      <td
                        id="113"
                        class="question"
                        data-name="Is the Dough mixer clean and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am37"
                          value="no"
                        >
                      </td>
                      <td
                        id="114"
                        class="question"
                        data-name="Is the Dough mixer clean and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm37"
                          value="yes"
                        >
                      </td>
                      <td
                        id="114"
                        class="question"
                        data-name="Is the Dough mixer clean and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm37"
                          value="no"
                        >
                      </td>

                      <td
                        id="115"
                        class="question"
                        data-name="Is the Dough mixer clean and free of build up?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Has the Oil checks been done using the Oil Tester?</td>
                      <td
                        id="116"
                        class="question"
                        data-name="Has the Oil checks been done using the Oil Tester?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am38"
                          value="yes"
                        >
                      </td>
                      <td
                        id="116"
                        class="question"
                        data-name="Has the Oil checks been done using the Oil Tester?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am38"
                          value="no"
                        >
                      </td>
                      <td
                        id="117"
                        class="question"
                        data-name="Has the Oil checks been done using the Oil Tester?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm38"
                          value="yes"
                        >
                      </td>
                      <td
                        id="117"
                        class="question"
                        data-name="Has the Oil checks been done using the Oil Tester?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm38"
                          value="no"
                        >
                      </td>

                      <td
                        id="118"
                        class="question"
                        data-name="Has the Oil checks been done using the Oil Tester?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are all production oven clean and free of grease build up?
                      </td>
                      <td
                        id="119"
                        class="question"
                        data-name="Are all production oven clean and free of grease build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am39"
                          value="yes"
                        >
                      </td>
                      <td
                        id="119"
                        class="question"
                        data-name="Are all production oven clean and free of grease build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am39"
                          value="no"
                        >
                      </td>
                      <td
                        id="120"
                        class="question"
                        data-name="Are all production oven clean and free of grease build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm39"
                          value="yes"
                        >
                      </td>
                      <td
                        id="120"
                        class="question"
                        data-name="Are all production oven clean and free of grease build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm39"
                          value="no"
                        >
                      </td>

                      <td
                        id="121"
                        class="question"
                        data-name="Are all production oven clean and free of grease build up?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>

                      <td>Is the Extractor clean and free of Oil residue/build up?</td>
                      <td
                        id="122"
                        class="question"
                        data-name="Is the Extractor clean and free of Oil residue/build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am40"
                          value="yes"
                        >
                      </td>
                      <td
                        id="122"
                        class="question"
                        data-name="Is the Extractor clean and free of Oil residue/build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am40"
                          value="no"
                        >
                      </td>
                      <td
                        id="123"
                        class="question"
                        data-name="Is the Extractor clean and free of Oil residue/build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm40"
                          value="yes"
                        >
                      </td>
                      <td
                        id="123"
                        class="question"
                        data-name="Is the Extractor clean and free of Oil residue/build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm40"
                          value="no"
                        >
                      </td>

                      <td
                        id="124"
                        class="question"
                        data-name="Is the Extractor clean and free of Oil residue/build up?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are all induction burners clean free of moisture and oil build up?</td>
                      <td
                        id="125"
                        class="question"
                        data-name="Are all induction burners clean free of moisture and oil build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am41"
                          value="yes"
                        >
                      </td>
                      <td
                        id="125"
                        class="question"
                        data-name="Are all induction burners clean free of moisture and oil build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am41"
                          value="no"
                        >
                      </td>
                      <td
                        id="126"
                        class="question"
                        data-name="Are all induction burners clean free of moisture and oil build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm41"
                          value="yes"
                        >
                      </td>
                      <td
                        id="126"
                        class="question"
                        data-name="Are all induction burners clean free of moisture and oil build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm41"
                          value="no"
                        >
                      </td>

                      <td
                        id="127"
                        class="question"
                        data-name="Are all induction burners clean free of moisture and oil build up?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is there a Sanitizer Solution available in the Kithcen?</td>
                      <td
                        id="128"
                        class="question"
                        data-name="Is there a Sanitizer Solution available in the Kithcen?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am42"
                          value="yes"
                        >
                      </td>
                      <td
                        id="128"
                        class="question"
                        data-name="Is there a Sanitizer Solution available in the Kithcen?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am42"
                          value="no"
                        >
                      </td>
                      <td
                        id="129"
                        class="question"
                        data-name="Is there a Sanitizer Solution available in the Kithcen?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm42"
                          value="yes"
                        >
                      </td>
                      <td
                        id="129"
                        class="question"
                        data-name="Is there a Sanitizer Solution available in the Kithcen?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm42"
                          value="no"
                        >
                      </td>

                      <td
                        id="130"
                        class="question"
                        data-name="Is there a Sanitizer Solution available in the Kithcen?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the 3 wash bucket system in place and practiced?</td>
                      <td
                        id="131"
                        class="question"
                        data-name="Is the 3 wash bucket system in place and practiced?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am43"
                          value="yes"
                        >
                      </td>
                      <td
                        id="131"
                        class="question"
                        data-name="Is the 3 wash bucket system in place and practiced?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am43"
                          value="no"
                        >
                      </td>
                      <td
                        id="132"
                        class="question"
                        data-name="Is the 3 wash bucket system in place and practiced?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm43"
                          value="yes"
                        >
                      </td>
                      <td
                        id="132"
                        class="question"
                        data-name="Is the 3 wash bucket system in place and practiced?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm43"
                          value="no"
                        >
                      </td>

                      <td
                        id="133"
                        class="question"
                        data-name="Is the 3 wash bucket system in place and practiced?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the Cold room/freezers working and attaining temp between -10 to -23 degrees?</td>
                      <td
                        id="134"
                        class="question"
                        data-name="Is the Cold room/freezers working and attaining temp between -10 to -23 degrees?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am44"
                          value="yes"
                        >
                      </td>
                      <td
                        id="134"
                        class="question"
                        data-name="Is the Cold room/freezers working and attaining temp between -10 to -23 degrees?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am44"
                          value="no"
                        >
                      </td>
                      <td
                        id="135"
                        class="question"
                        data-name="Is the Cold room/freezers working and attaining temp between -10 to -23 degrees?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm44"
                          value="yes"
                        >
                      </td>
                      <td
                        id="135"
                        class="question"
                        data-name="Is the Cold room/freezers working and attaining temp between -10 to -23 degrees?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm44"
                          value="no"
                        >
                      </td>

                      <td
                        id="136"
                        class="question"
                        data-name="Is the Cold room/freezers working and attaining temp between -10 to -23 degrees?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Has the cold room/freezer been cleaned as per daily schedule?</td>
                      <td
                        id="137"
                        class="question"
                        data-name="Has the cold room/freezer been cleaned as per daily schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am45"
                          value="yes"
                        >
                      </td>
                      <td
                        id="137"
                        class="question"
                        data-name="Has the cold room/freezer been cleaned as per daily schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am45"
                          value="no"
                        >
                      </td>
                      <td
                        id="138"
                        class="question"
                        data-name="Has the cold room/freezer been cleaned as per daily schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm45"
                          value="yes"
                        >
                      </td>
                      <td
                        id="138"
                        class="question"
                        data-name="Has the cold room/freezer been cleaned as per daily schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm45"
                          value="no"
                        >
                      </td>

                      <td
                        id="139"
                        class="question"
                        data-name="Has the cold room/freezer been cleaned as per daily schedule?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Have all materials in the Cold room/freezer been Code Dated?</td>
                      <td
                        id="140"
                        class="question"
                        data-name="Have all materials in the Cold room/freezer been  Code Dated?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am46"
                          value="yes"
                        >
                      </td>
                      <td
                        id="140"
                        class="question"
                        data-name="Have all materials in the Cold room/freezer been  Code Dated?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am46"
                          value="no"
                        >
                      </td>
                      <td
                        id="141"
                        class="question"
                        data-name="Have all materials in the Cold room/freezer been  Code Dated?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm46"
                          value="yes"
                        >
                      </td>
                      <td
                        id="141"
                        class="question"
                        data-name="Have all materials in the Cold room/freezer been  Code Dated?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm46"
                          value="no"
                        >
                      </td>

                      <td
                        id="142"
                        class="question"
                        data-name="Have all materials in the Cold room/freezer been  Code Dated?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are all food grade containers/basket clean labelled or code dated?</td>
                      <td
                        id="143"
                        class="question"
                        data-name="Are all food grade containers/basket clean labelled or code dated?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am47"
                          value="yes"
                        >
                      </td>
                      <td
                        id="143"
                        class="question"
                        data-name="Are all food grade containers/basket clean labelled or code dated?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am47"
                          value="no"
                        >
                      </td>
                      <td
                        id="144"
                        class="question"
                        data-name="Are all food grade containers/basket clean labelled or code dated?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm47"
                          value="yes"
                        >
                      </td>
                      <td
                        id="144"
                        class="question"
                        data-name="Are all food grade containers/basket clean labelled or code dated?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm47"
                          value="no"
                        >
                      </td>

                      <td
                        id="145"
                        class="question"
                        data-name="Are all food grade containers/basket clean labelled or code dated?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the Kitchen floor swept and mopped as per the daily schedule?</td>
                      <td
                        id="146"
                        class="question"
                        data-name="Is the Kitchen floor swept and mopped as per the daily schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am48"
                          value="yes"
                        >
                      </td>
                      <td
                        id="146"
                        class="question"
                        data-name="Is the Kitchen floor swept and mopped as per the daily schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am48"
                          value="no"
                        >
                      </td>
                      <td
                        id="147"
                        class="question"
                        data-name="Is the Kitchen floor swept and mopped as per the daily schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm48"
                          value="yes"
                        >
                      </td>
                      <td
                        id="147"
                        class="question"
                        data-name="Is the Kitchen floor swept and mopped as per the daily schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm48"
                          value="no"
                        >
                      </td>

                      <td
                        id="148"
                        class="question"
                        data-name="Is the Kitchen floor swept and mopped as per the daily schedule?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the Kitchen floor drains cleaned and cleared of build ups?</td>
                      <td
                        id="149"
                        class="question"
                        data-name="Is the Kitchen floor drains cleaned and cleared of build ups?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am49"
                          value="yes"
                        >
                      </td>
                      <td
                        id="149"
                        class="question"
                        data-name="Is the Kitchen floor drains cleaned and cleared of build ups?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am49"
                          value="no"
                        >
                      </td>
                      <td
                        id="150"
                        class="question"
                        data-name="Is the Kitchen floor drains cleaned and cleared of build ups?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm49"
                          value="yes"
                        >
                      </td>
                      <td
                        id="150"
                        class="question"
                        data-name="Is the Kitchen floor drains cleaned and cleared of build ups?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm49"
                          value="no"
                        >
                      </td>

                      <td
                        id="151"
                        class="question"
                        data-name="Is the Kitchen floor drains cleaned and cleared of build ups?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are all food items in the production floor placed on pallets? Elevated?</td>
                      <td
                        id="152"
                        class="question"
                        data-name="Are all food items in the production floor placed on pallets? Elevated?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am50"
                          value="yes"
                        >
                      </td>
                      <td
                        id="152"
                        class="question"
                        data-name="Are all food items in the production floor placed on pallets? Elevated?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am50"
                          value="no"
                        >
                      </td>
                      <td
                        id="153"
                        class="question"
                        data-name="Are all food items in the production floor placed on pallets? Elevated?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm50"
                          value="yes"
                        >
                      </td>
                      <td
                        id="153"
                        class="question"
                        data-name="Are all food items in the production floor placed on pallets? Elevated?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm50"
                          value="no"
                        >
                      </td>

                      <td
                        id="154"
                        class="question"
                        data-name="Are all food items in the production floor placed on pallets? Elevated?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Has the Kitchen wall Tiles been cleaned as per daily schedule?</td>
                      <td
                        id="155"
                        class="question"
                        data-name="Has the Kitchen wall Tiles been cleaned as per daily schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am51"
                          value="yes"
                        >
                      </td>
                      <td
                        id="155"
                        class="question"
                        data-name="Has the Kitchen wall Tiles been cleaned as per daily schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am51"
                          value="no"
                        >
                      </td>
                      <td
                        id="156"
                        class="question"
                        data-name="Has the Kitchen wall Tiles been cleaned as per daily schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm51"
                          value="yes"
                        >
                      </td>
                      <td
                        id="156"
                        class="question"
                        data-name="Has the Kitchen wall Tiles been cleaned as per daily schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm51"
                          value="no"
                        >
                      </td>

                      <td
                        id="157"
                        class="question"
                        data-name="Has the Kitchen wall Tiles been cleaned as per daily schedule?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Have all prepared food been sampled to check for quality, Taste and documented?</td>
                      <td
                        id="158"
                        class="question"
                        data-name="Have all prepared food been sampled to check for quality, Taste and documented?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am52"
                          value="yes"
                        >
                      </td>
                      <td
                        id="158"
                        class="question"
                        data-name="Have all prepared food been sampled to check for quality, Taste and documented?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am52"
                          value="no"
                        >
                      </td>
                      <td
                        id="159"
                        class="question"
                        data-name="Have all prepared food been sampled to check for quality, Taste and documented?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm52"
                          value="yes"
                        >
                      </td>
                      <td
                        id="159"
                        class="question"
                        data-name="Have all prepared food been sampled to check for quality, Taste and documented?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm52"
                          value="no"
                        >
                      </td>

                      <td
                        id="160"
                        class="question"
                        data-name="Have all prepared food been sampled to check for quality, Taste and documented?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are all prepared products (RTE) being probed and recorded real time?</td>
                      <td
                        id="161"
                        class="question"
                        data-name="Are all prepared products (RTE) being probed and recorded real time?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am53"
                          value="yes"
                        >
                      </td>
                      <td
                        id="161"
                        class="question"
                        data-name="Are all prepared products (RTE) being probed and recorded real time?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am53"
                          value="no"
                        >
                      </td>
                      <td
                        id="162"
                        class="question"
                        data-name="Are all prepared products (RTE) being probed and recorded real time?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm53"
                          value="yes"
                        >
                      </td>
                      <td
                        id="162"
                        class="question"
                        data-name="Are all prepared products (RTE) being probed and recorded real time?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm53"
                          value="no"
                        >
                      </td>

                      <td
                        id="163"
                        class="question"
                        data-name="Are all prepared products (RTE) being probed and recorded real time?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Are all prepared products (RTE) being recorded in the movement book real time?</td>
                      <td
                        id="164"
                        class="question"
                        data-name="Are all prepared products (RTE) being recorded in the movement book real time?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am54"
                          value="yes"
                        >
                      </td>
                      <td
                        id="164"
                        class="question"
                        data-name="Are all prepared products (RTE) being recorded in the movement book real time?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am54"
                          value="no"
                        >
                      </td>
                      <td
                        id="165"
                        class="question"
                        data-name="Are all prepared products (RTE) being recorded in the movement book real time?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm54"
                          value="yes"
                        >
                      </td>
                      <td
                        id="165"
                        class="question"
                        data-name="Are all prepared products (RTE) being recorded in the movement book real time?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm54"
                          value="no"
                        >
                      </td>

                      <td
                        id="167"
                        class="question"
                        data-name="Are all prepared products (RTE) being recorded in the movement book real time?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Have all refuse BIN been emptoied timely? (half full half empty)</td>
                      <td
                        id="168"
                        class="question"
                        data-name="Have all refuse BIN been emptoied timely? (half full half empty)"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am55"
                          value="yes"
                        >
                      </td>
                      <td
                        id="168"
                        class="question"
                        data-name="Have all refuse BIN been emptoied timely? (half full half empty)"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am55"
                          value="no"
                        >
                      </td>
                      <td
                        id="169"
                        class="question"
                        data-name="Have all refuse BIN been emptoied timely? (half full half empty)"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm55"
                          value="yes"
                        >
                      </td>
                      <td
                        id="169"
                        class="question"
                        data-name="Have all refuse BIN been emptoied timely? (half full half empty)"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm55"
                          value="no"
                        >
                      </td>

                      <td
                        id="170"
                        class="question"
                        data-name="Have all refuse BIN been emptoied timely? (half full half empty)"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the Pasturizer clean and free of residue?</td>
                      <td
                        id="171"
                        class="question"
                        data-name="Is the Pasturizer clean and free of residue?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am56"
                          value="yes"
                        >
                      </td>
                      <td
                        id="171"
                        class="question"
                        data-name="Is the Pasturizer clean and free of residue?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am56"
                          value="no"
                        >
                      </td>
                      <td
                        id="172"
                        class="question"
                        data-name="Is the Pasturizer clean and free of residue?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm56"
                          value="yes"
                        >
                      </td>
                      <td
                        id="172"
                        class="question"
                        data-name="Is the Pasturizer clean and free of residue?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm56"
                          value="no"
                        >
                      </td>

                      <td
                        id="173"
                        class="question"
                        data-name="Is the Pasturizer clean and free of residue?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the blast freezer clean and working optimally?</td>
                      <td
                        id="174"
                        class="question"
                        data-name="Is the blast freezer clean and working optimally?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am57"
                          value="yes"
                        >
                      </td>
                      <td
                        id="174"
                        class="question"
                        data-name="Is the blast freezer clean and working optimally?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am57"
                          value="no"
                        >
                      </td>
                      <td
                        id="175"
                        class="question"
                        data-name="Is the blast freezer clean and working optimally?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm57"
                          value="yes"
                        >
                      </td>
                      <td
                        id="175"
                        class="question"
                        data-name="Is the blast freezer clean and working optimally?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm57"
                          value="no"
                        >
                      </td>

                      <td
                        id="176"
                        class="question"
                        data-name="Is the blast freezer clean and working optimally?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are all additional production equipment clean and working?</td>
                      <td
                        id="177"
                        class="question"
                        data-name="Are all additional production equipment clean and working?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am58"
                          value="yes"
                        >
                      </td>
                      <td
                        id="177"
                        class="question"
                        data-name="Are all additional production equipment clean and working?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am58"
                          value="no"
                        >
                      </td>
                      <td
                        id="178"
                        class="question"
                        data-name="Are all additional production equipment clean and working?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm58"
                          value="yes"
                        >
                      </td>
                      <td
                        id="178"
                        class="question"
                        data-name="Are all additional production equipment clean and working?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm58"
                          value="no"
                        >
                      </td>

                      <td
                        id="179"
                        class="question"
                        data-name="Are all additional production equipment clean and working?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are all cooking pots/pans in good condition and free from carbon build up?</td>
                      <td
                        id="180"
                        class="question"
                        data-name="Are all cooking pots/pans in good condition and free from carbon build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am59"
                          value="yes"
                        >
                      </td>
                      <td
                        id="180"
                        class="question"
                        data-name="Are all cooking pots/pans in good condition and free from carbon build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am59"
                          value="no"
                        >
                      </td>
                      <td
                        id="181"
                        class="question"
                        data-name="Are all cooking pots/pans in good condition and free from carbon build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm59"
                          value="yes"
                        >
                      </td>
                      <td
                        id="181"
                        class="question"
                        data-name="Are all cooking pots/pans in good condition and free from carbon build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm59"
                          value="no"
                        >
                      </td>

                      <td
                        id="182"
                        class="question"
                        data-name="Are all cooking pots/pans in good condition and free from carbon build up?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the Pizza oven clean, free of residue/build up?</td>
                      <td
                        id="183"
                        class="question"
                        data-name="Is the Pizza oven clean, free of residue/build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am60"
                          value="yes"
                        >
                      </td>
                      <td
                        id="183"
                        class="question"
                        data-name="Is the Pizza oven clean, free of residue/build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am60"
                          value="no"
                        >
                      </td>
                      <td
                        id="184"
                        class="question"
                        data-name="Is the Pizza oven clean, free of residue/build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm60"
                          value="yes"
                        >
                      </td>
                      <td
                        id="184"
                        class="question"
                        data-name="Is the Pizza oven clean, free of residue/build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm60"
                          value="no"
                        >
                      </td>

                      <td
                        id="185"
                        class="question"
                        data-name="Is the Pizza oven clean, free of residue/build up?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are the chopping Boards clean amd free of build up?</td>
                      <td
                        id="186"
                        class="question"
                        data-name="Are the chopping Boards clean amd free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am61"
                          value="yes"
                        >
                      </td>
                      <td
                        id="186"
                        class="question"
                        data-name="Are the chopping Boards clean amd free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am61"
                          value="no"
                        >
                      </td>
                      <td
                        id="187"
                        class="question"
                        data-name="Are the chopping Boards clean amd free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm61"
                          value="yes"
                        >
                      </td>
                      <td
                        id="187"
                        class="question"
                        data-name="Are the chopping Boards clean amd free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm61"
                          value="no"
                        >
                      </td>

                      <td
                        id="188"
                        class="question"
                        data-name="Are the chopping Boards clean amd free of build up?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are all WIP items placed in the chiller code Dated?</td>
                      <td
                        id="189"
                        class="question"
                        data-name="Are all WIP items placed in the chiller code Dated?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am62"
                          value="yes"
                        >
                      </td>
                      <td
                        id="189"
                        class="question"
                        data-name="Are all WIP items placed in the chiller code Dated?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am62"
                          value="no"
                        >
                      </td>
                      <td
                        id="190"
                        class="question"
                        data-name="Are all WIP items placed in the chiller code Dated?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm62"
                          value="yes"
                        >
                      </td>
                      <td
                        id="190"
                        class="question"
                        data-name="Are all WIP items placed in the chiller code Dated?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm62"
                          value="no"
                        >
                      </td>

                      <td
                        id="191"
                        class="question"
                        data-name="Are all WIP items placed in the chiller code Dated?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the chiller working optimally and attaining a temp between 1-4 degrees celsius?</td>
                      <td
                        id="192"
                        class="question"
                        data-name="Is the chiller working optimally and attaining a temp between 1-4 degrees celsius?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am63"
                          value="yes"
                        >
                      </td>
                      <td
                        id="192"
                        class="question"
                        data-name="Is the chiller working optimally and attaining a temp between 1-4 degrees celsius?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am63"
                          value="no"
                        >
                      </td>
                      <td
                        id="193"
                        class="question"
                        data-name="Is the chiller working optimally and attaining a temp between 1-4 degrees celsius?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm63"
                          value="yes"
                        >
                      </td>
                      <td
                        id="193"
                        class="question"
                        data-name="Is the chiller working optimally and attaining a temp between 1-4 degrees celsius?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm63"
                          value="no"
                        >
                      </td>

                      <td
                        id="194"
                        class="question"
                        data-name="Is the chiller working optimally and attaining a temp between 1-4 degrees celsius?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the extractor clean and free of Build up?</td>
                      <td
                        id="195"
                        class="question"
                        data-name="Is the extractor clean and free of Build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am64"
                          value="yes"
                        >
                      </td>
                      <td
                        id="195"
                        class="question"
                        data-name="Is the extractor clean and free of Build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am64"
                          value="no"
                        >
                      </td>
                      <td
                        id="196"
                        class="question"
                        data-name="Is the extractor clean and free of Build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm64"
                          value="yes"
                        >
                      </td>
                      <td
                        id="196"
                        class="question"
                        data-name="Is the extractor clean and free of Build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm64"
                          value="no"
                        >
                      </td>

                      <td
                        id="197"
                        class="question"
                        data-name="Is the extractor clean and free of Build up?"
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
                    <th>Yes</th>
                    <th>No</th>
                    <th>Yes</th>
                    <th>No</th>

                    <th>Comments/Remarks</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="200">Is the Shawarma griller and Toaster clean and free of build up?</td>
                      <td
                        id="198"
                        class="question"
                        data-name="Is the Shawarma griller and Toaster clean and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am65"
                          value="yes"
                        >
                      </td>
                      <td
                        id="198"
                        class="question"
                        data-name="Is the Shawarma griller and Toaster clean and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am65"
                          value="no"
                        >
                      </td>
                      <td
                        id="199"
                        class="question"
                        data-name="Is the Shawarma griller and Toaster clean and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm65"
                          value="yes"
                        >
                      </td>
                      <td
                        id="199"
                        class="question"
                        data-name="Is the Shawarma griller and Toaster clean and free of build up?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm65"
                          value="no"
                        >
                      </td>

                      <td
                        id="200"
                        class="question"
                        data-name="Is the Shawarma griller and Toaster clean and free of build up?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the braine maire working and clean?</td>
                      <td
                        id="201"
                        class="question"
                        data-name="Is the braine maire working and clean?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am66"
                          value="yes"
                        ></td>
                      <td
                        id="201"
                        class="question"
                        data-name="Is the braine maire working and clean?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am66"
                          value="no"
                        ></td>
                      <td
                        id="202"
                        class="question"
                        data-name="Is the braine maire working and clean?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm66"
                          value="yes"
                        ></td>
                      <td
                        id="202"
                        class="question"
                        data-name="Is the braine maire working and clean?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm66"
                          value="no"
                        ></td>

                      <td
                        id="203"
                        class="question"
                        data-name="Is the braine maire working and clean?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>
                      <td>Are all food items in the dry store placed on pallets?</td>
                      <td
                        id="204"
                        class="question"
                        data-name="Are all food items in the dry store placed on pallets?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am67"
                          value="yes"
                        ></td>
                      <td
                        id="204"
                        class="question"
                        data-name="Are all food items in the dry store placed on pallets?"
                      ><label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am67"
                          value="no"
                        ></td>
                      <td
                        id="205"
                        class="question"
                        data-name="Are all food items in the dry store placed on pallets?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm67"
                          value="yes"
                        ></td>
                      <td
                        id="205"
                        class="question"
                        data-name="Are all food items in the dry store placed on pallets?"
                      ><label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm67"
                          value="no"
                        ></td>

                      <td
                        id="206"
                        class="question"
                        data-name="Are all food items in the dry store placed on pallets?"
                      ><label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        /></td>
                    </tr>
                    <tr>
                      <td>Are all items in the Dry Store code Dated?</td>
                      <td
                        id="207"
                        class="question"
                        data-name="Are all items in the Dry Store code Dated?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am68"
                          value="yes"
                        >
                      </td>
                      <td
                        id="207"
                        class="question"
                        data-name="Are all items in the Dry Store code Dated?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am68"
                          value="no"
                        >
                      </td>
                      <td
                        id="208"
                        class="question"
                        data-name="Are all items in the Dry Store code Dated?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm68"
                          value="yes"
                        >
                      </td>
                      <td
                        id="208"
                        class="question"
                        data-name="Are all items in the Dry Store code Dated?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm68"
                          value="no"
                        >
                      </td>

                      <td
                        id="209"
                        class="question"
                        data-name="Are all items in the Dry Store code Dated?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>

                      <td>Is CAYGO the order of the Day?
                      </td>
                      <td
                        id="210"
                        class="question"
                        data-name="Is CAYGO the order of the Day?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am69"
                          value="yes"
                        >
                      </td>
                      <td
                        id="210"
                        class="question"
                        data-name="Is CAYGO the order of the Day?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am69"
                          value="no"
                        >
                      </td>
                      <td
                        id="211"
                        class="question"
                        data-name="Is CAYGO the order of the Day?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm69"
                          value="yes"
                        >
                      </td>
                      <td
                        id="211"
                        class="question"
                        data-name="Is CAYGO the order of the Day?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm69"
                          value="no"
                        >
                      </td>

                      <td
                        id="212"
                        class="question"
                        data-name="Is CAYGO the order of the Day?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Has the staff cloakroom and Toilet been clean as per the daily schedule?</td>
                      <td
                        id="213"
                        class="question"
                        data-name="Has the staff cloakroom and Toilet been clean as per the daily schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am70"
                          value="yes"
                        >
                      </td>
                      <td
                        id="213"
                        class="question"
                        data-name="Has the staff cloakroom and Toilet been clean as per the daily schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am70"
                          value="no"
                        >
                      </td>
                      <td
                        id="214"
                        class="question"
                        data-name="Has the staff cloakroom and Toilet been clean as per the daily schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm70"
                          value="yes"
                        >
                      </td>
                      <td
                        id="214"
                        class="question"
                        data-name="Has the staff cloakroom and Toilet been clean as per the daily schedule?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm70"
                          value="no"
                        >
                      </td>

                      <td
                        id="215"
                        class="question"
                        data-name="Has the staff cloakroom and Toilet been clean as per the daily schedule?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the Handwashing Sink equipped with running water, Soap and Paper Towel?</td>
                      <td
                        id="216"
                        class="question"
                        data-name="Is the Handwashing Sink equipped with running water, Soap and Paper Towel?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am71"
                          value="yes"
                        >
                      </td>
                      <td
                        id="216"
                        class="question"
                        data-name="Is the Handwashing Sink equipped with running water, Soap and Paper Towel?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am71"
                          value="no"
                        >
                      </td>
                      <td
                        id="217"
                        class="question"
                        data-name="Is the Handwashing Sink equipped with running water, Soap and Paper Towel?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm71"
                          value="yes"
                        >
                      </td>
                      <td
                        id="217"
                        class="question"
                        data-name="Is the Handwashing Sink equipped with running water, Soap and Paper Towel?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm71"
                          value="no"
                        >
                      </td>

                      <td
                        id="218"
                        class="question"
                        data-name="Is the Handwashing Sink equipped with running water, Soap and Paper Towel?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are Staff washing their Hands intermittently?</td>
                      <td
                        id="219"
                        class="question"
                        data-name="Are Staff washing their Hands intermittently?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am72"
                          value="yes"
                        >
                      </td>
                      <td
                        id="219"
                        class="question"
                        data-name="Are Staff washing their Hands intermittently?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am72"
                          value="no"
                        >
                      </td>
                      <td
                        id="220"
                        class="question"
                        data-name="Are Staff washing their Hands intermittently?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm72"
                          value="yes"
                        >
                      </td>
                      <td
                        id="220"
                        class="question"
                        data-name="Are Staff washing their Hands intermittently?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm72"
                          value="no"
                        >
                      </td>

                      <td
                        id="221"
                        class="question"
                        data-name="Are Staff washing their Hands intermittently?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Has the Grease Fat Trap been cleaned?(must be cleaned twice daily)</td>
                      <td
                        id="222"
                        class="question"
                        data-name="Has the Grease Fat Trap been cleaned?(must be cleaned twice daily)"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am73"
                          value="yes"
                        >
                      </td>
                      <td
                        id="222"
                        class="question"
                        data-name="Has the Grease Fat Trap been cleaned?(must be cleaned twice daily)"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am73"
                          value="no"
                        >
                      </td>
                      <td
                        id="223"
                        class="question"
                        data-name="Has the Grease Fat Trap been cleaned?(must be cleaned twice daily)"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm73"
                          value="yes"
                        >
                      </td>
                      <td
                        id="223"
                        class="question"
                        data-name="Has the Grease Fat Trap been cleaned?(must be cleaned twice daily)"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm73"
                          value="no"
                        >
                      </td>

                      <td
                        id="224"
                        class="question"
                        data-name="Has the Grease Fat Trap been cleaned?(must be cleaned twice daily)"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is the back area cleaned, free of algae and unwanted items?</td>
                      <td
                        id="225"
                        class="question"
                        data-name="Is the back area cleaned, free of algae and unwanted items?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am74"
                          value="yes"
                        >
                      </td>
                      <td
                        id="225"
                        class="question"
                        data-name="Is the back area cleaned, free of algae and unwanted items?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am74"
                          value="no"
                        >
                      </td>
                      <td
                        id="226"
                        class="question"
                        data-name="Is the back area cleaned, free of algae and unwanted items?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm74"
                          value="yes"
                        >
                      </td>
                      <td
                        id="226"
                        class="question"
                        data-name="Is the back area cleaned, free of algae and unwanted items?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm74"
                          value="no"
                        >
                      </td>

                      <td
                        id="227"
                        class="question"
                        data-name="Is the back area cleaned, free of algae and unwanted items?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are all refuse being dumped neatly in the bin according to color code segregation?</td>
                      <td
                        id="228"
                        class="question"
                        data-name="Are all refuse being dumped neatly in the bin according to color code segregation?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am75"
                          value="yes"
                        >
                      </td>
                      <td
                        id="228"
                        class="question"
                        data-name="Are all refuse being dumped neatly in the bin according to color code segregation?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am75"
                          value="no"
                        >
                      </td>
                      <td
                        id="229"
                        class="question"
                        data-name="Are all refuse being dumped neatly in the bin according to color code segregation?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm75"
                          value="yes"
                        >
                      </td>
                      <td
                        id="229"
                        class="question"
                        data-name="Are all refuse being dumped neatly in the bin according to color code segregation?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm75"
                          value="no"
                        >
                      </td>

                      <td
                        id="230"
                        class="question"
                        data-name="Are all refuse being dumped neatly in the bin according to color code segregation?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Are all staff well groomed and dressed as per policy?</td>
                      <td
                        id="231"
                        class="question"
                        data-name="Are all staff well groomed and dressed as per policy?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am76"
                          value="yes"
                        >
                      </td>
                      <td
                        id="231"
                        class="question"
                        data-name="Are all staff well groomed and dressed as per policy?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am76"
                          value="no"
                        >
                      </td>
                      <td
                        id="232"
                        class="question"
                        data-name="Are all staff well groomed and dressed as per policy?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm76"
                          value="yes"
                        >
                      </td>
                      <td
                        id="232"
                        class="question"
                        data-name="Are all staff well groomed and dressed as per policy?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm76"
                          value="no"
                        >
                      </td>

                      <td
                        id="233"
                        class="question"
                        data-name="Are all staff well groomed and dressed as per policy?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Has the Morning/Afternoon stock count been carried out?</td>
                      <td
                        id="234"
                        class="question"
                        data-name="Has the Morning/Afternoon stock count been carried out?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am77"
                          value="yes"
                        >
                      </td>
                      <td
                        id="234"
                        class="question"
                        data-name="Has the Morning/Afternoon stock count been carried out?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am77"
                          value="no"
                        >
                      </td>
                      <td
                        id="235"
                        class="question"
                        data-name="Has the Morning/Afternoon stock count been carried out?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm77"
                          value="yes"
                        >
                      </td>
                      <td
                        id="235"
                        class="question"
                        data-name="Has the Morning/Afternoon stock count been carried out?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm77"
                          value="no"
                        >
                      </td>

                      <td
                        id="236"
                        class="question"
                        data-name="Has the Morning/Afternoon stock count been carried out?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Is there any material unavailability affetcing the day's Sales?</td>
                      <td
                        id="237"
                        class="question"
                        data-name="Is there any material unavailability affetcing the day's Sales?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am78"
                          value="yes"
                        >
                      </td>
                      <td
                        id="237"
                        class="question"
                        data-name="Is there any material unavailability affetcing the day's Sales?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am78"
                          value="no"
                        >
                      </td>
                      <td
                        id="238"
                        class="question"
                        data-name="Is there any material unavailability affetcing the day's Sales?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm78"
                          value="yes"
                        >
                      </td>
                      <td
                        id="238"
                        class="question"
                        data-name="Is there any material unavailability affetcing the day's Sales?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm78"
                          value="no"
                        >
                      </td>

                      <td
                        id="239"
                        class="question"
                        data-name="Is there any material unavailability affetcing the day's Sales?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Has the previous Day's controls been done?</td>
                      <td
                        id="240"
                        class="question"
                        data-name="Has the previous Day's controls been done?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am79"
                          value="yes"
                        >
                      </td>
                      <td
                        id="240"
                        class="question"
                        data-name="Has the previous Day's controls been done?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am79"
                          value="no"
                        >
                      </td>
                      <td
                        id="241"
                        class="question"
                        data-name="Has the previous Day's controls been done?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm79"
                          value="yes"
                        >
                      </td>
                      <td
                        id="241"
                        class="question"
                        data-name="Has the previous Day's controls been done?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm79"
                          value="no"
                        >
                      </td>

                      <td
                        id="242"
                        class="question"
                        data-name="Has the previous Day's controls been done?"
                      >
                        <label class="label">comment</label><input
                          type="text"
                          class="form-control border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Has the Food cost report been done for the previous Day?</td>
                      <td
                        id="243"
                        class="question"
                        data-name="Has the Food cost report been done for the previous Day?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am80"
                          value="yes"
                        >
                      </td>
                      <td
                        id="243"
                        class="question"
                        data-name="Has the Food cost report been done for the previous Day?"
                      >
                        <label
                          for=""
                          class="label"
                        >am</label> <input
                          type="radio"
                          name="am80"
                          value="no"
                        >
                      </td>
                      <td
                        id="244"
                        class="question"
                        data-name="Has the Food cost report been done for the previous Day?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm80"
                          value="yes"
                        >
                      </td>
                      <td
                        id="244"
                        class="question"
                        data-name="Has the Food cost report been done for the previous Day?"
                      >
                        <label
                          for=""
                          class="label"
                        >pm</label> <input
                          type="radio"
                          name="pm80"
                          value="no"
                        >
                      </td>

                      <td
                        id="245"
                        class="question"
                        data-name="Has the Food cost report been done for the previous Day?"
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
                  id="246"
                  class="form-group row question"
                  data-name="A.M Shift Manager Name"
                >
                  <label class="col-2 col-form-label">A.M Shift Manager Name </label>
                  <div class="col-10">
                    <input
                      type="text"
                      class="form-control"
                      v-model=" store_manager"
                    >
                  </div>
                </div>
                <div
                  id="247"
                  class="form-group row question"
                  data-name="P.M Shift Manager Name "
                >
                  <label class="col-2 col-form-label">P.M Shift Manager Name </label>
                  <div class="col-10">
                    <input
                      type="text"
                      class="form-control"
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
        let label;
        let index;
        let qtext;
        let ans;

        if (el.childNodes[1].localName == "div") {
          index = el.id;
          label = el.childNodes[0].innerText;
          qtext = el.dataset.name.replace(/\n/g, ' ');
          ans = el.childNodes[1].childNodes[0].value;
        }
        else if (el.childNodes[2]) {
          index = el.id;
          label = el.childNodes[0].innerText;
          qtext = el.dataset.name.replace(/\n/g, ' ');
          ans = el.childNodes[2].childNodes[0].value;
        }
        else {
          if (el.childNodes[1].checked) {
            index = el.id;
            label = el.childNodes[0].innerText;
            qtext = el.dataset.name.replace(/\n/g, ' ');
            ans = el.childNodes[1].value;
          }
          if (el.childNodes[1].name == "") {
            index = el.id;
            label = el.childNodes[0].innerText;
            qtext = el.dataset.name.replace(/\n/g, ' ');
            ans = el.childNodes[1].value;
          }
        }
        if (index == 4) {
          ans = vm.form.store_id;
        }

        if (ans) {
          newForm.question_answer.push({
            questionno: index,
            questiontext: qtext,
            questionlabel: label,
            answer: ans,
          })

        }

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
          this.form.question_answer = [];
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
