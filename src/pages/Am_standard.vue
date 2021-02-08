<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-size-100">

        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">STANDARD OPERATIONS AUDIT(OPENING)</h4>
          </md-card-header>
          <md-card-content>
            <form
              enctype="multipart/form-data"
              id="Am-StandardOperation"
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
                      v-model="username"
                      type="text"
                      class="form-control"
                      id="staticEmail"
                      title="Inspector's name"
                      required
                    >
                  </div>
                </div>
                <div
                  id="2"
                  class="form-group row question"
                  data-name="Date"
                >
                  <label
                    for="inputPassword"
                    class="col-3 col-form-label"
                  >Date</label>
                  <div class="col-9">
                    <input
                      type="text"
                      class="form-control"
                      id="date"
                      disabled
                    >
                  </div>
                </div>
                <div
                  id="3"
                  class="form-group row question loc"
                  data-name="Restaurant/Location"
                >
                  <label
                    for="staticEmail"
                    class="col-3 col-form-label"
                  >Restaurant/ <br> Location</label>
                  <div class="col-9">
                    <v-select
                      v-model="form.store_id"
                      :options="stores"
                      label="store_address"
                      :reduce="st => st.id"
                      title="Select store visited"
                      required
                    ></v-select>
                    <!-- <input
                      class="form-control"
                      type="text"
                      v-model="form.store_id"
                      list="location"
                      title="Select store visited"
                      required
                    >
                    <datalist id="location">

                      <option
                        v-for="(store, index) in stores"
                        :key="index"
                        v-bind:value="store.id"
                      >{{store.address +", "+store.location}}</option>
                    </datalist> -->
                  </div>
                </div>
                <div
                  id="4"
                  class="form-group row question"
                  data-name="Manager(s) on Duty"
                >
                  <label
                    for="inputPassword"
                    class="col-3 col-form-label"
                  >Store Manager</label>
                  <div class="col-9">
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword"
                      v-model="store_manager"
                      required
                    >
                  </div>
                </div>
                <div
                  id="5"
                  class="form-group row question"
                  data-name="Day of Week"
                >
                  <label
                    for="inputPassword"
                    class="col-3 col-form-label"
                  >Day of Week</label>
                  <div class="col-9">
                    <select class="form-control">
                      <option
                        value=""
                        hidden
                      >Select day of the week...</option>
                      <option>Sunday</option>
                      <option>Monday</option>
                      <option>Tuesday</option>
                      <option>Wednesday</option>
                      <option>Thursday</option>
                      <option>Friday</option>
                      <option>Saturday</option>
                    </select>
                  </div>
                </div>

                <div>
                  <h5 class="subtitle"><u>Grading Guide</u></h5>
                  <ul
                    style="list-style: none;"
                    class="d-flex justify-content-between flex-wrap"
                  >
                    <li>1 = <span class="ml-1">Unacceptable</span></li>
                    <li>2 = <span class="ml-1">Fair</span></li>
                    <li>3 = <span class="ml-1">Satisfactory</span></li>
                    <li>4 = <span class="ml-1">Good</span></li>
                    <li>5= <span class="ml-1">Exceeds expectations</span></li>
                    <!-- <li>Unacceptable</li>
                    <li>Fair</li>
                    <li>Satisfactory</li>
                    <li>Good</li>
                    <li>Exceeds expectations</li> -->
                  </ul>

                  <h5 class="subtitle"><u>Score Guide</u></h5>
                  <ul
                    class="d-flex justify-content-start"
                    style="list-style: none;"
                  >
                    <li>Yes = <span class="ml-1">5</span></li>
                    <li class="ml-4">No = <span class="ml-1">1</span></li>
                  </ul>
                </div>

                <table class="table table-bordered">
                  <thead>
                    <th>Category</th>
                    <th>Question</th>
                    <th>Score</th>
                    <!-- <th>Comments</th> -->
                  </thead>

                  <tbody>
                    <tr>
                      <td
                        class="rotate"
                        rowspan="7"
                      >Opening Procedures</td>

                      <td>Did manager(s) and all staff arrive at and around 6.30am?</td>

                      <td
                        id="6"
                        class=" opening_procedures"
                        data-name="Did manager(s) and all staff arrive at and around 6.30am?"
                      >
                        <label
                          for=""
                          class="label"
                        >Opening Procedures</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="opening_procedures.s1"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>

                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Did manager conduct walk-around with 2 security guards?</td>
                      <td
                        id="7"
                        class=" opening_procedures"
                        data-name="Did manager conduct walk-around with 2 security guards?"
                      >
                        <label
                          for=""
                          class="label"
                        >Opening Procedures</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="opening_procedures.s2"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Did manager conduct opening stock count in conjunction with inventory and security officers? Any discrepancies with prior day closing stock records?</td>

                      <td
                        id="8"
                        class=" opening_procedures"
                        data-name="Did manager conduct opening stock count in conjunction with inventory and security officers? Any discrepancies with prior day closing stock records?"
                      >
                        <label
                          for=""
                          class="label"
                        >Opening Procedures</label>
                        <select
                          class="form-control "
                          name=""
                          v-model="opening_procedures.s3"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Was stock count conducted before stock started being issued out for production?
                      </td>

                      <td
                        id="9"
                        class=" opening_procedures"
                        data-name="Was stock count conducted before stock started being issued out for production?"
                      >
                        <label
                          for=""
                          class="label"
                        >Opening Procedures</label>
                        <select
                          class="form-control "
                          name=""
                          v-model="opening_procedures.s4"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Did manager approve all stock issued from store prior to issue?</td>
                      <td
                        id="10"
                        class=" opening_procedures"
                        data-name="Did manager approve all stock issued from store prior to issue?"
                      >
                        <label
                          for=""
                          class="label"
                        >Opening Procedures</label>
                        <select
                          class="form-control "
                          name=""
                          v-model="opening_procedures.s5"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td> Did pastries arrive or where pastries ready by 7am? </td>

                      <td
                        id="11"
                        class=" opening_procedures"
                        data-name="Did pastries arrive or where pastries ready by 7am?"
                      >
                        <label
                          for=""
                          class="label"
                        >Opening Procedures</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="opening_procedures.s6"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Was restaurant and products ready for customers by 7.30am?</td>

                      <td
                        id="12"
                        class=" opening_procedures"
                        data-name="Was restaurant and products ready for customers by 7.30am?"
                      >
                        <label
                          for=""
                          class="label"
                        >Opening Procedures</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="opening_procedures.s7"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <td
                        class="rotate"
                        rowspan="3"
                      >Staff Issues</td>

                      <td>Were all staff properly dressed (uniform or chef jacket tucked-in over a black pair of pants, covered black work shoe and cap)?</td>
                      <td
                        id="13"
                        class=" staff_issues"
                        data-name="Were all staff properly dressed (uniform or chef jacket tucked-in over a black pair of pants, covered black work shoe and cap)?"
                      >
                        <label
                          for=""
                          class="label"
                        >Staff Issues</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="staff_issues.s1"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Were all staff properly groomed (men clean shaven, female well pedicured etc)?</td>

                      <td
                        id="14"
                        class=" staff_issues"
                        data-name="Were all staff properly groomed (men clean shaven, female well pedicured etc)?"
                      >
                        <label
                          for=""
                          class="label"
                        >Staff Issues</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="staff_issues.s2"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td> Did all staff on duty roaster report to work? </td>

                      <td
                        id="15"
                        class=" staff_issues"
                        data-name="Did all staff on duty roaster report to work?"
                      >
                        <label
                          for=""
                          class="label"
                        >Staff Issues</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="staff_issues.s3"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <td
                        class="rotate"
                        rowspan="8"
                      >Production Management</td>

                      <td>Are recipes cards pasted in conspicuous area in the kitchen?</td>

                      <td
                        id="16"
                        class=" production_management"
                        data-name="Are recipes cards pasted in conspicuous area in the kitchen?"
                      >
                        <label
                          for=""
                          class="label"
                        >Production Management</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="production_management.s1"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Recipe & Process Compliance: Observe several menu production processes to see if recipe and/or processes are being followed</td>

                      <td
                        id="17"
                        class=" production_management"
                        data-name="Recipe & Process Compliance: Observe several menu production processes to see if recipe and/or processes are being followed"
                      >
                        <label
                          for=""
                          class="label"
                        >Production Management</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="production_management.s2"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Spice Inventory: Check that all pre-mixed spices are available, check condition of pre-mix spices, expiry dates, check that spices are being used for production</td>

                      <td
                        id="18"
                        class=" production_management"
                        data-name="Spice Inventory: Check that all pre-mixed spices are available, check condition of pre-mix spices, expiry dates, check that spices are being used for production"
                      >
                        <label
                          for=""
                          class="label"
                        >Production Management</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="production_management.s3"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>

                      <td>Are manager(s) involved or interested in the production process? What is their level of participation?
                      </td>

                      <td
                        id="19"
                        class=" production_management"
                        data-name="Are manager(s) involved or interested in the production process? What is their level of participation?"
                      >
                        <label
                          for=""
                          class="label"
                        >Production Management</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="production_management.s4"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Are all menu items available and replenished in a timely manner?</td>

                      <td
                        id="20"
                        class=" production_management"
                        data-name="Are all menu items available and replenished in a timely manner?"
                      >
                        <label
                          for=""
                          class="label"
                        >Production Management</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="production_management.s5"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Are all pre-portioned products properly weighed for proper portioning to ensure customer gets full value for money?</td>
                      <td
                        id="21"
                        class=" production_management"
                        data-name="Are all pre-portioned products properly weighed for proper portioning to ensure customer gets full value for money?"
                      >
                        <label
                          for=""
                          class="label"
                        >Production Management</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="production_management.s6"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Are proper records kept for production and transfer of products between FOH & BOH?</td>

                      <td
                        id="22"
                        class=" production_management"
                        data-name="Are proper records kept for production and transfer of products between FOH & BOH?"
                      >
                        <label
                          for=""
                          class="label"
                        >Production Management</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="production_management.s7"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Is the sensory evaluation chart completed and up-to-date as at the time of inspection? Are entries done in right procedures?</td>

                      <td
                        id="23"
                        class=" production_management"
                        data-name="Is the sensory evaluation chart completed and up-to-date as at the time of inspection? Are entries done in right procedures?"
                      >
                        <label
                          for=""
                          class="label"
                        >Production Management</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="production_management.s8"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <td
                        class="rotate"
                        rowspan="10"
                      >HACCP Compliance</td>

                      <td>Are all equipment properly labelled with their correct temperature limits?
                      </td>

                      <td
                        id="24"
                        class=" haccp_compliance"
                        data-name="Are all equipment properly labelled with their correct temperature limits?"
                      >
                        <label
                          for=""
                          class="label"
                        >HACCP Compliance</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s1"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Are all equipment functioning within their appropriate temperature limits/boundaries?
                      </td>

                      <td
                        id="25"
                        class=" haccp_compliance"
                        data-name="Are all equipment functioning within their appropriate temperature limits/boundaries?"
                      >
                        <label
                          for=""
                          class="label"
                        >HACCP Compliance</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s2"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Are all materials stored according to HACCP standards i.e. to avoid cross-contamination?
                      </td>

                      <td
                        id="26"
                        class=" haccp_compliance"
                        data-name="Are all materials stored according to HACCP standards i.e. to avoid cross-contamination?"
                      >
                        <label
                          for=""
                          class="label"
                        >HACCP Compliance</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s3"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Are all food items stored in food Grade containers and properly code dated?
                      </td>

                      <td
                        id="27"
                        class=" haccp_compliance"
                        data-name="Are all food items stored in food Grade containers and properly code dated?"
                      >
                        <label
                          for=""
                          class="label"
                        >HACCP Compliance</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s4"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Are all work surfaces wiped with appropriate food grade sanitizer prior to use in the morning?
                      </td>

                      <td
                        id="28"
                        class=" haccp_compliance"
                        data-name="Are all work surfaces wiped with appropriate food grade sanitizer prior to use in the morning?"
                      >
                        <label
                          for=""
                          class="label"
                        >HACCP Compliance</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s5"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Are all kitchen crew using a hand glove when handling fresh produce?</td>

                      <td
                        id="29"
                        class=" haccp_compliance"
                        data-name="Are all kitchen crew using a hand glove when handling fresh produce"
                      >
                        <label
                          for=""
                          class="label"
                        >HACCP Compliance</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s6"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Did the managers have their temperature probes (thermometers) handy? Were they using them?
                      </td>

                      <td
                        id="30"
                        class=" haccp_compliance"
                        data-name="Did the managers have their temperature probes (thermometers) handy? Were they using them?"
                      >
                        <label
                          for=""
                          class="label"
                        >HACCP Compliance</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s7"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td> Use probe to check the holding temperature of a few menu items on display. Where they within the appropriate holding temperature? </td>

                      <td
                        id="31"
                        class=" haccp_compliance"
                        data-name="Use probe to check the holding temperature of a few menu items on display. Where they within the appropriate holding temperature?"
                      >
                        <label
                          for=""
                          class="label"
                        >HACCP Compliance</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s8"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td> Is the cold room chart completed and up-to-date as at the time of inspection? Are entries done in right procedures? </td>

                      <td
                        id="32"
                        class=" haccp_compliance"
                        data-name="Is the cold room chart completed and up-to-date as at the time of inspection? Are entries done in right procedures?"
                      >
                        <label
                          for=""
                          class="label"
                        >HACCP Compliance</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s9"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>

                      <td>Is the Red book completed and up-to-date as at the time of inspection? Are entries accurate for the time inspected?
                      </td>

                      <td
                        id="33"
                        class=" haccp_compliance"
                        data-name="Is the Red book completed and up-to-date as at the time of inspection? Are entries accurate for the time inspected?"
                      >
                        <label
                          for=""
                          class="label"
                        >HACCP Compliance</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s10"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <td
                        class="rotate"
                        rowspan="14"
                      >Hygiene & Cleanliness</td>
                      <td
                        colspan="2"
                        class="font-weight-bold"
                      >Check that the following areas are clean and free of grease/dirt or debris:</td>

                    </tr>

                    <tr>
                      <td>All Equipment (Interior & Exterior)</td>

                      <td
                        id="34"
                        class=" hygiene"
                        data-name="All Equipment (Interior & Exterior)"
                      >
                        <label
                          for=""
                          class="label"
                        >Hygiene & Cleanliness</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="hygiene.s1"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Cold room (Rack surfaces, wall & floor)</td>

                      <td
                        id="35"
                        class=" hygiene"
                        data-name="Cold room (Rack surfaces, wall & floor)"
                      >
                        <label
                          for=""
                          class="label"
                        >Hygiene & Cleanliness</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="hygiene.s2"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Deep freezers (No ice buildup and kept clean)</td>
                      <td
                        id="36"
                        class=" hygiene"
                        data-name="Deep freezers (No ice buildup and kept clean)"
                      >
                        <label
                          for=""
                          class="label"
                        >Hygiene & Cleanliness</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="hygiene.s3"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Extractor canopy grills (clean and no grease)</td>
                      <td
                        id="37"
                        class=" hygiene"
                        data-name="Extractor canopy grills (clean and no grease)"
                      >
                        <label
                          for=""
                          class="label"
                        >Hygiene & Cleanliness</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="hygiene.s4"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td> Kitchen floor, corners, walls, ceilings </td>
                      <td
                        id="38"
                        class=" hygiene"
                        data-name="Kitchen floor, corners, walls, ceilings"
                      >
                        <label
                          for=""
                          class="label"
                        >Hygiene & Cleanliness</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="hygiene.s5"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Storage (floor, racks, smells)</td>
                      <td
                        id="39"
                        class=" hygiene"
                        data-name="Storage (floor, racks, smells)"
                      >
                        <label
                          for=""
                          class="label"
                        >Hygiene & Cleanliness</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="hygiene.s6"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td> Lobby (floor & table surfaces + legs) </td>
                      <td
                        id="40"
                        class=" hygiene"
                        data-name=" Lobby (floor & table surfaces + legs) "
                      >
                        <label
                          for=""
                          class="label"
                        >Hygiene & Cleanliness</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="hygiene.s7"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Customer convenience</td>
                      <td
                        id="40"
                        class=" hygiene"
                        data-name="Customer convenience"
                      >
                        <label
                          for=""
                          class="label"
                        >Hygiene & Cleanliness</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="hygiene.s8"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Staff changing room and toilet</td>
                      <td
                        id="41"
                        class=" hygiene"
                        data-name="Staff changing room and toilet"
                      >
                        <label
                          for=""
                          class="label"
                        >Hygiene & Cleanliness</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="hygiene.s9"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Dump area</td>
                      <td
                        id="42"
                        class=" hygiene"
                        data-name="Dump area"
                      >
                        <label
                          for=""
                          class="label"
                        >Hygiene & Cleanliness</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="hygiene.s10"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Grease trap and sink</td>
                      <td
                        id="43"
                        class=" hygiene"
                        data-name="Grease trap and sink"
                      >
                        <label
                          for=""
                          class="label"
                        >Hygiene & Cleanliness</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="hygiene.s11"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Is the restaurant environment (external) and back area clean, free from foul smell?
                      </td>
                      <td
                        id="44"
                        class=" hygiene"
                        data-name="Is the restaurant environment (external) and back area clean, free from foul smell?"
                      >
                        <label
                          for=""
                          class="label"
                        >Hygiene & Cleanliness</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="hygiene.s12"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Is the Green book completed and up-to-date as at the time of inspection? Are entries accurate for the time inspected?
                      </td>
                      <td
                        id="45"
                        class=" hygiene"
                        data-name="Is the Green book completed and up-to-date as at the time of inspection? Are entries accurate for the time inspected?"
                      >
                        <label
                          for=""
                          class="label"
                        >Hygiene & Cleanliness</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="hygiene.s13"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <td
                        class="rotate"
                        rowspan="12"
                      > Customer Experience</td>
                      <td>Is there adequate parking for all customers?</td>
                      <td
                        id="46"
                        class=" customer_experience"
                        data-name="is there adequate parking for all customers?"
                      >
                        <label
                          for=""
                          class="label"
                        >Customer Experience</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="customer_experience.s1"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td> Did security guards welcome customers appropriately and provide the needed guide? </td>
                      <td
                        id="47"
                        class=" customer_experience"
                        data-name="Did security guards welcome customers appropriately and provide the needed guide"
                      >
                        <label
                          for=""
                          class="label"
                        >Customer Experience</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="customer_experience.s2"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Is external signage in good condition? Is it fully lite (if visit is after dusk or before dawn)?</td>
                      <td
                        id="48"
                        class=" customer_experience"
                        data-name="Is external signage in good condition? Is it fully lite (if visit is after dusk or before dawn)?"
                      >
                        <label
                          for=""
                          class="label"
                        >Customer Experience</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="customer_experience.s3"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Is the visual appeal of the restaurant negatively affected by anything? Check walls, floor, tables, chairs, windows, other customers etc</td>
                      <td
                        id="49"
                        class=" customer_experience"
                        data-name="Is the visual appeal of the restaurant negatively affected by anything? Check walls, floor, tables, chairs, windows, other customers etc"
                      >
                        <label
                          for=""
                          class="label"
                        >Customer Experience</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="customer_experience.s4"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Is the volume of the music appropriate? Are there any other sound that could affect the customer's experience or comfort at the restaurant?</td>
                      <td
                        id="50"
                        class=" customer_experience"
                        data-name="Is the volume of the music appropriate? Are there any other sound that could affect the customer's experience or comfort at the restaurant?</"
                      >
                        <label
                          for=""
                          class="label"
                        >Customer Experience</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="customer_experience.s5"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Did cashier make eye contact and/or greet customer(s) on approach?</td>
                      <td
                        id="51"
                        class=" customer_experience"
                        data-name="Did cashier make eye contact and/or greet customer(s) on approach?"
                      >
                        <label
                          for=""
                          class="label"
                        >Customer Experience</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="customer_experience.s6"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Are all listed menu items available for the customer as at and when ordered?
                      </td>
                      <td
                        id="52"
                        class=" customer_experience"
                        data-name="Are all listed menu items available for the customer as at and when ordered?"
                      >
                        <label
                          for=""
                          class="label"
                        >Customer Experience</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="customer_experience.s7"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td> Did cashier suggest compliments to the customer's original order in order to upsell and improve on the customer's experience? </td>
                      <td
                        id="53"
                        class=" customer_experience"
                        data-name="Did cashier suggest compliments to the customer's original order in order to upsell and improve on the customer's experience?"
                      >
                        <label
                          for=""
                          class="label"
                        >Customer Experience</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="customer_experience.s8"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Was customer served within 3 minutes?</td>
                      <td
                        id="54"
                        class=" customer_experience"
                        data-name="Was customer served within 3 minutes?"
                      >
                        <label
                          for=""
                          class="label"
                        >Customer Experience</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="customer_experience.s9"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td> Is TV tuned to the appropriate music, news or sports channel? </td>
                      <td
                        id="55"
                        class=" customer_experience"
                        data-name="Is TV tuned to the appropriate music, news or sports channel?"
                      >
                        <label
                          for=""
                          class="label"
                        >Customer Experience</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="customer_experience.s10"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td> Was host cheerful and pleasant to customer? Did he greet customer and provide any and all assistance customer ? </td>
                      <td
                        id="56"
                        class=" customer_experience"
                        data-name="Was host cheerful and pleasant to customer? Did he greet customer and provide any and all assistance customer ?"
                      >
                        <label
                          for=""
                          class="label"
                        >Customer Experience</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="customer_experience.s11"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>If raining, did security guard assist customer with an umbrella? </td>
                      <td
                        id="57"
                        class=" customer_experience"
                        data-name="If raining, did security guard assist customer with an umbrella?"
                      >
                        <label
                          for=""
                          class="label"
                        >Customer Experience</label>
                        <select
                          class="form-control"
                          name=""
                          v-model="customer_experience.s12"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <br>

                <h5 class="subtitle">Comments</h5>
                <div
                  id="58"
                  class="form-group question"
                  data-name="The 5 top things this restaurant did very well"
                >
                  <label
                    for="inputPassword"
                    class="form-label"
                  >The 5 top things this restaurant did very well:</label>
                  <div class="textarea">
                    <textarea
                      name=""
                      class="form-control form-box"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div
                  id="59"
                  class="form-group question"
                  data-name="The 5 top things that could be improved"
                >
                  <label
                    for="inputPassword"
                    class="form-label"
                  >The 5 top things that could be improved: </label>
                  <div class="textarea">
                    <textarea
                      name=""
                      class="form-control form-box"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div
                  id="60"
                  class="form-group question"
                  data-name="Food & Beverage Comments & Observations"
                >
                  <label
                    for="inputPassword"
                    class="form-label"
                  >Food & Beverage Comments & Observations: </label>
                  <div class="textarea">
                    <textarea
                      name=""
                      class="form-control form-box"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div
                  id="61"
                  class="form-group question"
                  data-name="General Comments & Observations"
                >
                  <label
                    for="inputPassword"
                    class=" form-label"
                  >General Comments & Observations:</label>
                  <div class="textarea">
                    <textarea
                      name=""
                      class="form-control form-box"
                      rows="5"
                    ></textarea>
                  </div>
                </div>

              </div>

              <div v-show='toggle'>
                <h5 class="subtitle">Assign Tasks on things that need improvement / Correction</h5>
                <table class="table table-bordered">
                  <thead>
                    <th>Project/Task</th>
                    <th>Assigned To</th>
                    <th>Due Date</th>

                  </thead>
                  <tbody>
                    <tr>
                      <td
                        id="62"
                        class=""
                        data-name="task"
                      >
                        <label
                          for=""
                          class="label"
                        > </label>
                        <input
                          class="form-control"
                          type="text"
                          name=""
                        >
                      </td>
                      <td
                        id="63"
                        class=""
                        data-name="assignedTo"
                      >
                        <label
                          for=""
                          class="label"
                        > </label>
                        <input
                          id="task1"
                          class="form-control"
                          type="hidden"
                          name=""
                        >
                        <v-select
                          v-model="tasks.task1"
                          :options="all_users"
                          label="name"
                          :reduce="user => user.name"
                        ></v-select>
                        <!-- <select
                          class="form-control"
                          id="us"
                          v-model="tasks.task1"
                          title="select user"
                        >
                          <option
                            hidden
                            value=""
                          >select user...</option>
                          <option
                            v-for="(user, index) in all_users"
                            :key="index"
                          >{{user.name}}</option>
                        </select> -->
                      </td>
                      <td
                        id="64"
                        class=""
                        data-name="dueDate"
                      >
                        <label
                          for=""
                          class="label"
                        > </label>
                        <input
                          id="taskdate1"
                          class="form-control"
                          type="date"
                          name=""
                        >
                      </td>

                    </tr>
                    <tr>
                      <td
                        id="65"
                        class=""
                        data-name="task"
                      >
                        <label
                          for=""
                          class="label"
                        > </label>
                        <input
                          class="form-control"
                          type="text"
                          name=""
                        >
                      </td>
                      <td
                        id="66"
                        class=""
                        data-name="assignedTo"
                      >
                        <label
                          for=""
                          class="label"
                        > </label>
                        <input
                          id="task2"
                          class="form-control"
                          type="hidden"
                          name=""
                        >
                        <v-select
                          v-model="tasks.task2"
                          :options="all_users"
                          label="name"
                          :reduce="user => user.name"
                        ></v-select>
                        <!-- <select
                          class="form-control"
                          id="us2"
                          v-model="tasks.task2"
                          title="select user"
                        >
                          <option
                            hidden
                            value=""
                          >select user...</option>
                          <option
                            v-for="(user, index) in all_users"
                            :key="index"
                          >{{user.name}}</option>
                        </select> -->
                      </td>
                      <td
                        id="67"
                        class=""
                        data-name="dueDate"
                      >
                        <label
                          for=""
                          class="label"
                        > </label>
                        <input
                          id="taskdate2"
                          class="form-control"
                          type="date"
                          name=""
                        >
                      </td>

                    </tr>
                    <tr>
                      <td
                        id="68"
                        class=""
                        data-name="task"
                      >
                        <label
                          for=""
                          class="label"
                        > </label>
                        <input
                          class="form-control"
                          type="text"
                          name=""
                        >
                      </td>
                      <td
                        id="69"
                        class=""
                        data-name="assignedTo"
                      >
                        <label
                          for=""
                          class="label"
                        > </label>
                        <input
                          id="task3"
                          class="form-control"
                          type="hidden"
                          name=""
                        >
                        <v-select
                          v-model="tasks.task3"
                          :options="all_users"
                          label="name"
                          :reduce="user => user.name"
                        ></v-select>
                        <!-- <select
                          class="form-control"
                          id="us3"
                          v-model="tasks.task3"
                          title="select user"
                        >
                          <option
                            hidden
                            value=""
                          >select user...</option>
                          <option
                            v-for="(user, index) in all_users"
                            :key="index"
                          >{{user.name}}</option>
                        </select> -->
                      </td>
                      <td
                        id="70"
                        class=""
                        data-name="dueDate"
                      >
                        <label
                          for=""
                          class="label"
                        > </label>
                        <input
                          id="taskdate3"
                          class="form-control"
                          type="date"
                          name=""
                        >
                      </td>

                    </tr>
                    <tr>
                      <td
                        id="71"
                        class=""
                        data-name="task"
                      >
                        <label
                          for=""
                          class="label"
                        > </label>
                        <input
                          class="form-control"
                          type="text"
                          name=""
                        >
                      </td>
                      <td
                        id="72"
                        class=""
                        data-name="assignedTo"
                      >
                        <label
                          for=""
                          class="label"
                        > </label>
                        <input
                          id="task4"
                          class="form-control"
                          type="hidden"
                          name=""
                        >
                        <v-select
                          v-model="tasks.task4"
                          :options="all_users"
                          label="name"
                          :reduce="user => user.name"
                        ></v-select>
                        <!-- <select
                          class="form-control"
                          id="us4"
                          v-model="tasks.task4"
                          title="select user"
                        >
                          <option
                            hidden
                            value=""
                          >select user...</option>
                          <option
                            v-for="(user, index) in all_users"
                            :key="index"
                          >{{user.name}}</option>
                        </select> -->
                      </td>
                      <td
                        id="73"
                        class=""
                        data-name="dueDate"
                      >
                        <label
                          for=""
                          class="label"
                        > </label>
                        <input
                          id="taskdate4"
                          class="form-control"
                          type="date"
                          name=""
                        >
                      </td>

                    </tr>
                    <tr>
                      <td
                        id="74"
                        class=""
                        data-name="task"
                      >
                        <label
                          for=""
                          class="label"
                        > </label>
                        <input
                          class="form-control"
                          type="text"
                          name=""
                        >
                      </td>
                      <td
                        id="75"
                        class=""
                        data-name="assignedTo"
                      >
                        <label
                          for=""
                          class="label"
                        > </label>
                        <input
                          id="task5"
                          class="form-control"
                          type="hidden"
                          name=""
                        >
                        <v-select
                          v-model="tasks.task5"
                          :options="all_users"
                          label="name"
                          :reduce="user => user.name"
                        ></v-select>
                        <!-- <select
                          class="form-control"
                          id="us5"
                          v-model="tasks.task5"
                          title="select user"
                        >
                          <option
                            hidden
                            value=""
                          >select user...</option>
                          <option
                            v-for="(user, index) in all_users"
                            :key="index"
                          >{{user.name}}</option>
                        </select> -->
                      </td>
                      <td
                        id="76"
                        class=""
                        data-name="dueDate"
                      >
                        <label
                          for=""
                          class="label"
                        > </label>
                        <input
                          id="taskdate5"
                          class="form-control"
                          type="date"
                          name=""
                        >
                      </td>
                    </tr>

                  </tbody>

                </table>
              </div>
              <div v-show="image">

                <div
                  id="imgprv"
                  style="display:flex"
                >
                  <div
                    style="position:relative"
                    v-for="(imag, index) in photos"
                    v-bind:key="index"
                  >
                    <span
                      v-on:click='removeImage(index)'
                      class=" text-danger "
                      title="remove image"
                      style="right: 2px;
                         position: absolute;padding-top:2px; border-radius: 50%;  font-weight: bold; height: 25px; top: 2px;  width: 25px; text-align: center; background-color: rgba(255, 255, 255, 0.6);"
                    >x</span>
                    <img
                      :height="100"
                      :width="100"
                      :src="imag.image"
                    />
                  </div>

                </div>
                <div>
                  <small class="text-warning">* Maximum of 4 images</small> <br><small class="text-warning">* Maximum of 5MB image size</small><br>
                  <small class="text-warning">* Only JPEG, JPG and PNG allowed </small>
                  <input
                    accept="image/jpg, image/jpeg, image/png"
                    id="img_url"
                    ref="files"
                    multiple
                    @change="onFileChange"
                    type="file"
                    class="form-control"
                  />
                  <!-- <div><img id="imgprv" :height="200" :src="thumbnail.image" /></div> -->
                </div>

              </div>
              <md-button
                @click='toggle = !toggle'
                class="btn md-raised md-info"
                title="Assign tasks to be carried out"
              >Action Plans</md-button>
              <md-button
                @click='image = !image'
                class="btn md-raised md-success"
                title="Upload maximum of 5 images"
              >Upload Image(s)</md-button>
              <br>
              <button class="btn md-raised md-warning text-white btn-warning">Submit</button>
            </form>
          </md-card-content>
        </md-card>

      </div>
    </div>

    <!-- mvr form report -->
    <div
      id='mvr'
      class="md-layout"
    >
      <div class="md-layout-item md-size-100">

        <md-card>
          <table class="table table-bordered">
            <thead>
              <th>Category</th>
              <th>Points Earned</th>
              <th>Possible Points</th>
              <th>Percent</th>
            </thead>
            <tbody>
              <tr>
                <td>Opening Procedures</td>
                <td
                  id="77"
                  class="points"
                  data-name="points earned"
                >
                  <label
                    for=""
                    class="label"
                  >opening procedures</label>
                  <input
                    v-model="points.p1"
                    type="text"
                    class="form-control"
                  />
                </td>
                <td class="possible">35</td>
                <td
                  id="78"
                  class=" percent "
                  data-name="percent earned"
                >
                  <label
                    for=""
                    class="label"
                  >opening procedures</label><input
                    type="text"
                    disabled
                    class="form-control"
                    v-model="percents.p1"
                  />
                </td>
              </tr>
              <tr>
                <td>Staff Issues</td>
                <td
                  id="79"
                  class="points"
                  data-name="points earned"
                ><label
                    for=""
                    class="label"
                  >staff issues</label>
                  <input
                    v-model="points.p2"
                    type="number"
                    max="20"
                    class="form-control"
                  />
                </td>
                <td class="possible">20</td>
                <td
                  id="80"
                  class=" percent"
                  data-name="percent earned"
                >
                  <label
                    for=""
                    class="label"
                  >staff issues</label>
                  <input
                    type="number"
                    max="100"
                    disabled
                    class="form-control"
                    v-model="percents.p2"
                  />
                </td>
              </tr>
              <tr>
                <td>Production Management</td>
                <td
                  id="81"
                  class="points"
                  data-name="points earned"
                ><label
                    for=""
                    class="label"
                  >production management</label><input
                    v-model="points.p3"
                    type="number"
                    max="35"
                    class="form-control"
                  />
                </td>
                <td class="possible">35</td>
                <td
                  id="82"
                  class=" percent"
                  data-name="percent earned"
                >
                  <label
                    for=""
                    class="label"
                  >production management</label><input
                    type="number"
                    max="100"
                    disabled
                    class="form-control"
                    v-model="percents.p3"
                  />
                </td>
              </tr>
              <tr>
                <td>HACCP Compliance</td>
                <td
                  id="83"
                  class="points"
                  data-name="points earned"
                ><label
                    for=""
                    class="label"
                  >haccp compliance</label><input
                    type="number"
                    max="35"
                    class="form-control"
                    v-model="points.p4"
                  />
                </td>
                <td class="possible">35</td>
                <td
                  id="84"
                  class=" percent"
                  data-name="percent earned"
                >
                  <label
                    for=""
                    class="label"
                  >haccp compliance</label><input
                    type="number"
                    max="100"
                    disabled
                    class="form-control"
                    v-model="percents.p4"
                  />
                </td>
              </tr>
              <tr>
                <td>Hygiene & Cleanliness</td>
                <td
                  id="85"
                  class="points"
                  data-name="points earned"
                ><label
                    for=""
                    class="label"
                  >hygiene & cleanliness</label><input
                    type="number"
                    max="60"
                    class="form-control"
                    v-model="points.p5"
                  />
                </td>
                <td class="possible">60</td>
                <td
                  id="86"
                  class=" percent"
                  data-name="percent earned"
                >
                  <label
                    for=""
                    class="label"
                  >hygiene & cleanliness</label><input
                    type="number"
                    max="100"
                    disabled
                    class="form-control"
                    v-model="percents.p5"
                  />
                </td>
              </tr>
              <tr>
                <td>Customer Experience</td>
                <td
                  id="87"
                  class="points"
                  data-name="points earned"
                ><label
                    for=""
                    class="label"
                  >customer experience</label><input
                    type="number"
                    max="65"
                    class="form-control"
                    v-model="points.p6"
                  />
                </td>
                <td class="possible">65</td>
                <td
                  id="88"
                  class=" percent"
                  data-name="percent earned"
                >
                  <label
                    for=""
                    class="label"
                  >customer experience</label><input
                    type="number"
                    max="100"
                    disabled
                    class="form-control"
                    v-model="percents.p6"
                  />
                </td>
              </tr>

            </tbody>
            <tfoot class="total">
              <tr>
                <th>TOTALS</th>
                <th
                  id="89"
                  class="points"
                  data-name="points earned"
                ><label
                    for=""
                    class="label"
                  >total points</label><input
                    type="number"
                    disabled
                    class="form-control"
                    v-model="total_point"
                  /></th>
                <th>250</th>
                <th
                  id="90"
                  class="percent"
                  data-name="percent earned"
                >
                  <label
                    for=""
                    class="label"
                  >total percent</label><input
                    type="number"
                    disabled
                    class="form-control"
                    v-model="form.total_percent"
                    required
                  />
                </th>
              </tr>
            </tfoot>
          </table>
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
      o365_users: [],
      all_users: [],
      tasks: {
        task1: " ",
        task2: " ",
        task3: " ",
        task4: " ",
        task5: " ",
      },
      toggle: false,
      image: false,
      stores: [],
      images: [],
      photos: [],
      store_manager: "",
      opening_procedures: {
        s1: "",
        s2: "",
        s3: "",
        s4: "",
        s5: "",
        s6: "",
        s7: "",
      },
      staff_issues: {
        s1: "",
        s2: "",
        s3: "",
      },
      production_management: {
        s1: "",
        s2: "",
        s3: "",
        s4: "",
        s5: "",
        s6: "",
        s7: "",
        s8: "",
      },
      haccp_compliance: {
        s1: "",
        s2: "",
        s3: "",
        s4: "",
        s5: "",
        s6: "",
        s7: "",
        s8: "",
        s9: "",
        s10: "",
      },
      hygiene: {
        s1: "",
        s2: "",
        s3: "",
        s4: "",
        s5: "",
        s6: "",
        s7: "",
        s8: "",
        s9: "",
        s10: "",
        s11: "",
        s12: "",
        s13: "",
      },
      customer_experience: {
        s1: "",
        s2: "",
        s3: "",
        s4: "",
        s5: "",
        s6: "",
        s7: "",
        s8: "",
        s9: "",
        s10: "",
        s11: "",
        s12: "",
      },



      total_point: "",
      points: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: ""
      },
      percents: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: ""
      },
      form: {
        store_id: "",
        total_percent: "",
        question_answer: [],
        taskplanner: []
      },
      myMSALObj: null,
      msalConfig: {
        auth: {
          clientId: 'dfd74765-cfab-4e7f-bdcb-c619d600dfee', //This is your client ID
          authority: "https://login.microsoftonline.com/ce18dbbe-5ce8-4dac-bbcc-874dba4c0a40",//This is your tenant info
        }
      },
    };
  },
  beforeMount () {
    //msal init
    this.myMSALObj = new Msal.UserAgentApplication(this.msalConfig);
    this.getTokenPopupAndCallMSGraph2()
  },
  created () {
    this.stores = this.$store.getters.stores;
    this.username = this.$store.getters.user;
  },
  mounted () {
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
    document.getElementById("taskdate1").setAttribute("min", today);
    document.getElementById("taskdate2").setAttribute("min", today);
    document.getElementById("taskdate3").setAttribute("min", today);
    document.getElementById("taskdate4").setAttribute("min", today);
    document.getElementById("taskdate5").setAttribute("min", today);

    // this.stores.map(function (x) {

    //   return x.store_address = x.address + ', ' + x.location;
    // });

  },
  watch: {
    'form.store_id': function (val) {

      this.stores.forEach((i) => {

        if (i.id === val) {
          this.store_manager = i.store_admin_name
        }
      })
    },
    'tasks.task1': function (val) {
      document.getElementById('task1').value = val
    },
    'tasks.task2': function (val) {
      document.getElementById('task2').value = val
    },
    'tasks.task3': function (val) {
      document.getElementById('task3').value = val
    },
    'tasks.task4': function (val) {
      document.getElementById('task4').value = val
    },
    'tasks.task5': function (val) {
      document.getElementById('task5').value = val
    },
    'points.p1': function (val) {
      this.percents.p1 = Math.ceil(val / 35 * 100);
      this.getTotal();
    },
    'points.p2': function (val) {
      this.percents.p2 = Math.ceil(val / 15 * 100);
      this.getTotal();
    },
    'points.p3': function (val) {
      this.percents.p3 = Math.ceil(val / 40 * 100);
      this.getTotal();
    },
    'points.p4': function (val) {
      this.percents.p4 = Math.ceil(val / 50 * 100);
      this.getTotal();
    },
    'points.p5': function (val) {
      this.percents.p5 = Math.ceil(val / 65 * 100);
      this.getTotal();
    },
    'points.p6': function (val) {
      this.percents.p6 = Math.ceil(val / 60 * 100);
      this.getTotal();
    },
  },

  methods: {
    async submitForm () {
      let points = await this.getTotal();
      let qa = [];
      let vm = this;
      let taskplanner = [];
      document.querySelectorAll('.question').forEach(function (el) {
        let index = el.id;
        let label = el.childNodes[0].innerText;
        let qtext = el.dataset.name.replace(/\n/g, ' ');
        let ans;

        if (el.childNodes[1].localName == "div") ans = el.childNodes[1].childNodes[0].value;
        else if (el.childNodes[2] && el.childNodes[2].className == "textarea") ans = el.childNodes[2].childNodes[0].value;
        else { }

        if (index == 3) ans = vm.form.store_id;

        qa.push({
          questionno: index,
          questiontext: qtext,
          questionlabel: label,
          answer: ans,
        })
      })

      //microsoft planner-action tasks

      document.querySelectorAll("[data-name='assignedTo']").forEach((i, index1) => {
        let my_index = index1;
        let title;
        let user_id;
        let user; let due_date;

        if (i.childNodes[1].value) {
          this.o365_users.forEach(j => {
            if (j.displayName == i.childNodes[1].value) {
              user_id = j.id;
              user = j.displayName;
            }
          });
          document.querySelectorAll("[data-name='task']").forEach((task_el, index2) => {
            if (my_index == index2) {
              title = task_el.childNodes[1].value;
            }
          })
          document.querySelectorAll("[data-name='dueDate']").forEach((date_el, index3) => {
            if (my_index == index3) {
              due_date = date_el.childNodes[1].value;
            }
          });

          let plannerTask =
          {
            "planId": "qIHpeHJuykm_kq3m15BkZGUAHlCA",
            "title": title,
            "dueDateTime": due_date,
            assignments: {},
          }
          plannerTask.assignments[user_id] = {
            "@odata.type": "#microsoft.graph.plannerAssignment",
            "orderHint": " !"
          }
          taskplanner.push({
            task: title,
            assigned_to: user,
            status: "pending",
            due_date: due_date

          })
          this.acquireTokenPopupAndCallMSGraph(JSON.stringify(plannerTask))
        }
      });
      // let data = [this.form.store_id, qa, points, taskplanner, this.images];
      this.form.question_answer = qa;
      this.points = points;
      this.form.taskplanner = taskplanner;
      this.setPercents();
    },
    setPercents () {
      this.percents.p1 = Math.ceil(this.points.p1 / 35 * 100);
      this.percents.p2 = Math.ceil(this.points.p2 / 15 * 100);
      this.percents.p3 = Math.ceil(this.points.p3 / 40 * 100);
      this.percents.p4 = Math.ceil(this.points.p4 / 50 * 100);
      this.percents.p5 = Math.ceil(this.points.p5 / 65 * 100);
      this.percents.p6 = Math.ceil(this.points.p6 / 60 * 100);
      this.getSum();
    },
    async getTotal () {

      //opening procedures
      var oSum = 0;
      for (var property in this.opening_procedures) {
        oSum += Number(this.opening_procedures[property]);
      }
      //staff_issues
      var sSum = 0;
      for (var property in this.staff_issues) {
        sSum += Number(this.staff_issues[property]);
      }
      //production_management
      var pSum = 0;
      for (var property in this.production_management) {
        pSum += Number(this.production_management[property]);
      }
      //haccp_compliance
      var haSum = 0;
      for (var property in this.haccp_compliance) {
        haSum += Number(this.haccp_compliance[property]);
      }
      //hygiene
      var hySum = 0;
      for (var property in this.hygiene) {
        hySum += Number(this.hygiene[property]);
      }
      //customer_experience
      var cSum = 0;
      for (var property in this.customer_experience) {
        cSum += Number(this.customer_experience[property]);
      }
      let points = {
        p1: oSum,
        p2: sSum,
        p3: pSum,
        p4: haSum,
        p5: hySum,
        p6: cSum
      }
      return points;

    },
    getSum () {
      var sum = 0;
      for (var property in this.points) {
        let p = Number(this.points[property]);
        sum += p
      }
      this.total_point = sum;
      var psum = 0;
      for (var property in this.percents) {
        psum += Number(this.percents[property]);
      }
      this.form.total_percent = Math.ceil(psum / 6);
      this.submitMvr()
    },
    submitMvr () {
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
      let that = this;
      document.querySelectorAll('.points').forEach(function (el, ind) {
        let label = el.childNodes[0].innerText;
        let qtext = el.dataset.name.replace(/\n/g, ' ');
        let ans;
        Object.keys(that.points).map(function (value, key) {
          if (key == ind) ans = that.points[value]
        });
        if (ans == undefined) ans = that.total_point;
        let index = el.id;
        that.form.question_answer.push({
          questionno: index,
          questiontext: qtext,
          questionlabel: label,
          answer: ans,
        })

      });
      document.querySelectorAll('.percent').forEach(function (el, ind) {
        let label = el.childNodes[0].innerText;
        let qtext = el.dataset.name.replace(/\n/g, ' ');
        let ans;
        Object.keys(that.percents).map(function (value, key) {
          if (key == ind) ans = that.percents[value]
        });
        if (ans == undefined) ans = that.form.total_percent;
        let index = el.id;
        that.form.question_answer.push({
          questionno: index,
          questiontext: qtext,
          questionlabel: label,
          answer: ans,
        })
      });

      var req = {
        what: "ammvr",
        data: this.form
      };
      this.$socket
        .makePostRequest(req)
        .then(response => {
          this.submitImages(response.data.form_id)
        })
        .catch(error => {
          this.$swal.fire("Error", error.message, "error");
          this.form.question_answer = [];
        });
    },

    onFileChange (e) {
      if (this.images.length > 4) {
        this.$swal.fire("Warning", "Maximum of 4 images allowed", "warning");
        return;
      }
      var files = this.$refs.files.files;

      if (!files.length) return;
      else {
        var fsize = (files[0].size / (1024 * 1024)).toFixed(2);
        if (!(fsize <= 5)) {
          this.$swal.fire("Warning", "Maximum image size allowed is 5MB", "warning");
          return;
        }
        else {
          this.createImage(files);
        }
      }
    },
    createImage (files) {
      for (let i = 0; i < files.length; i++) {
        this.images.push(files[i]);
        var image = new Image();
        var reader = new FileReader();

        reader.onload = e => {
          let image = { "image": e.target.result }
          this.photos.push(image);
        };
        reader.readAsDataURL(files[i]);
      }


    },

    removeImage (index) {
      this.images.splice(index, 1);
      this.photos.splice(index, 1);
    },
    async submitImages (id) {
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

      for (var i = 0; i < this.images.length; i++) {
        let file = this.images[i];
        let count = i + 1;
        let formData = new FormData();
        formData.append('form_id', id);
        formData.append('image', file);
        let res = await this.postImage(formData, count);
      }

    },
    async postImage (formData, count) {
      let req = {
        what: "amvrimage",
        formData: true,
        data: formData
      }
      this.$socket
        .makePostRequest(req)
        .then(res => {
          if (res.type == 'amvrimage') {
            if (this.images.length == count) {
              this.$swal.fire("Success", "Form created", "success")
                .then(() => {
                  setTimeout(() => {
                    location.reload();
                  }, 1000)
                });
            }
            else return true;

          }

        })
        .catch(error => {
          console.log(error)
          this.$swal.fire("Error", error.message, "error");
        });
    },
    async acquireTokenPopupAndCallMSGraph (task) {

      //Always start with acquireTokenSilent to obtain a token in the signed in user from cache

      try {
        let tokenResponse = this.$store.getters.msalToken
        this.callMSGraphPost("https://graph.microsoft.com/v1.0/planner/tasks", tokenResponse.accessToken, task, (data) => {

        });
      } catch (ex) {


      }
    },

    async getTokenPopupAndCallMSGraph2 () {

      let requestObj = {
        scopes: ["groupMember.read.all"]
      }
      try {
        const tokenResponse = await this.myMSALObj.acquireTokenSilent(requestObj);
        this.callMSGraphGet("https://graph.microsoft.com/v1.0/groups/df8ec304-ccda-4c33-b244-edb05f0e5731/members", tokenResponse.accessToken, this.userAPICallback);
      } catch (ex) {


      }
    },
    userAPICallback (data) {
      if (data.value.length > 0) {
        this.o365_users = data.value;
        let that = this;
        this.o365_users.forEach(i => {
          that.all_users.push({
            name: i.displayName
          })
        })
      }
      else {
        this.getTokenPopupAndCallMSGraph2()
      }

    },
    callMSGraphGet (theUrl, accessToken, callback) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
          callback(JSON.parse(this.responseText));
      }
      xmlHttp.open("GET", theUrl, true); // true for asynchronous
      xmlHttp.setRequestHeader('Authorization', 'Bearer ' + accessToken);
      xmlHttp.send();
    },
    callMSGraphPost (theUrl, accessToken, data, callback) {

      let config = {
        headers: {
          'Authorization': 'Bearer ' + accessToken,
          'Content-type': 'application/json'
        }
      }

      // var data = JSON.parse(data)

      let url = theUrl

      this.$axios.post(url, data, config)
        .then((response) => {

        })
        .catch((err) => {

        })
    },


  },
};
</script>
<style scoped>
.form-box {
  border: 1px solid #dee2e6;
  height: 120px !important;
  padding: 5px;
}
.md-card img {
  width: 200px !important;
  height: 200px !important;
}
.label {
  display: none;
}
.hidden {
  display: none;
}
#mvr {
  display: none;
}
td {
  text-align: left;
}
</style>
