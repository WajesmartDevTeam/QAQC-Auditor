<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-size-100">

        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">STANDARD OPERATIONS AUDIT(MID-DAY)</h4>
          </md-card-header>
          <md-card-content>
            <form
              enctype="multipart/form-data"
              v-on:submit.prevent="submitImages"
              id="midday-StandardOperation"
              role="form"
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
                      required
                      type="text"
                      class="form-control"
                      id="date"
                      disabled
                    >
                  </div>
                </div>
                <div
                  id="3"
                  class="form-group row question"
                  data-name="Restaurant/Location"
                >
                  <label
                    for="staticEmail"
                    class="col-3 col-form-label"
                  >
                    Restaurant/ <br> Location</label>
                  <div class="col-9">
                    <v-select
                      v-model="form.store_id"
                      :options="stores"
                      label="store_address"
                      :reduce="st => st.id"
                    ></v-select>
                    <!-- <select
                      class="form-control"
                      id="location"
                      v-model="form.store_id"
                      required
                      title="Select store visited"
                    >
                      <option
                        hidden
                        value=""
                      >select store...</option>
                      <option
                        v-for="(store, index) in stores"
                        :key="index"
                        v-bind:value="store.id"
                      >{{store.address +", "+store.location}}</option>

                    </select> -->
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

                  </thead>
                  <tbody>
                    <tr>
                      <td
                        class="rotate"
                        rowspan="15"
                      >Services</td>
                      <td>Are front of house supervisor(s) providing obvious leadership to
                        their team and crew</td>
                      <td
                        id="6"
                        class="services"
                        data-name="Are front of house supervisor(s) providing obvious leadership to their team and crew"
                      >
                        <label
                          for=""
                          class="label"
                        >Services</label><select
                          class="form-control"
                          name=""
                          v-model="services.s1"
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

                      <td> Are all front of house staff wearing name tags?

                      </td>
                      <td
                        id="7"
                        class="services"
                        data-name="Are all front of house staff wearing name tags?"
                      >
                        <label
                          for=""
                          class="label"
                        >Services</label><select
                          class="form-control"
                          name=""
                          v-model="services.s2"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>

                      <td>Did cashier make eye contact and/or greet customer(s) on
                        approach?</td>
                      <td
                        id="8"
                        class="services"
                        data-name="Did cashier make eye contact and/or greet customer(s) on approach?"
                      >
                        <label
                          for=""
                          class="label"
                        >Services</label><select
                          class="form-control"
                          name=""
                          v-model="services.s3"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>

                      <td>Were customers served within 3 minutes or were they courteously
                        informed of a realistic time frame to expect service</td>
                      <td
                        id="9"
                        class="services"
                        data-name="Were customers served within 3 minutes or were they courteously informed ofva realistic time frame to expect service"
                      >
                        <label
                          for=""
                          class="label"
                        >Services</label><select
                          class="form-control"
                          name=""
                          v-model="services.s4"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>

                      <td> Are all orders entered into the POS and did all customers
                        receive a receipt for items purchased

                      </td>
                      <td
                        id="10"
                        class="services"
                        data-name="Are all orders entered into the POS and did all customers receive a receipt for items purchased"
                      >
                        <label
                          for=""
                          class="label"
                        >Services</label><select
                          class="form-control"
                          name=""
                          v-model="services.s5"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>

                      <td> Are all listed menu items available for the customer as and
                        when ordered?
                      </td>
                      <td
                        id="11"
                        class="services"
                        data-name="Are all listed menu items available for the customer as and when ordered?"
                      >
                        <label
                          for=""
                          class="label"
                        >Services</label><select
                          class="form-control"
                          name=""
                          v-model="services.s6"
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

                      <td>Did cashier suggest compliments to the customer’s original order
                        in order to upsell and improve on the customer’s experience and
                        are customers accepting these suggestions?</td>
                      <td
                        id="12"
                        class="services"
                        data-name="Did cashier suggest compliments to the customer’s original order in order to upsell and improve on the customer’s experience and are  customers accepting these suggestions?"
                      >
                        <label
                          for=""
                          class="label"
                        >Services</label><select
                          class="form-control"
                          name=""
                          v-model="services.s7"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>

                      <td> Are customers getting full value for money by receiving
                        appropriate portion of food ordered? </td>
                      <td
                        id="13"
                        class="services"
                        data-name="Are customers getting full value for money by receiving appropriate portion of food ordered?"
                      >
                        <label
                          for=""
                          class="label"
                        >Services</label><select
                          class="form-control"
                          name=""
                          v-model="services.s8"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>

                      <td>Are all customers thanked after service and encouraged to visit
                        again?</td>
                      <td
                        id="14"
                        class="services"
                        data-name="Are all customers thanked after service and encouraged to visit again?"
                      >
                        <label
                          for=""
                          class="label"
                        >Services</label><select
                          class="form-control"
                          name=""
                          v-model="services.s9"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>

                      <td>Is the lobby cool and are A/Cs functioning at the desired
                        temperature (18 deg C)</td>
                      <td
                        id="15"
                        class="services"
                        data-name="Is the lobby cool and are A/Cs functioning at the desired  temperature (18 deg C)"
                      >
                        <label
                          for=""
                          class="label"
                        >Services</label><select
                          class="form-control"
                          name=""
                          v-model="services.s10"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>

                      <td> Is the volume of the music appropriate? Are there any other
                        sounds that could affect the customer’s experience of comfort at
                        the restaurant? </td>
                      <td
                        id="16"
                        class="services"
                        data-name="Is the volume of the music appropriate? Are there any other sounds that could affect the customer’s experience of comfort at the restaurant?"
                      >
                        <label
                          for=""
                          class="label"
                        >Services</label><select
                          class="form-control"
                          name=""
                          v-model="services.s11"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>

                      <td> Is the TV tuned to the appropriate channel? </td>
                      <td
                        id="17"
                        class="services"
                        data-name="Is the TV tuned to the appropriate channel?"
                      > <label
                          for=""
                          class="label"
                        >Services</label><select
                          class="form-control"
                          name=""
                          v-model="services.s12"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>

                      <td> Is the restaurant’s phone handy (i.e. handled by a designated officer) and is it answered after max 3 rings? </td>
                      <td
                        id="16"
                        class="services"
                        data-name="Is the restaurant’s phone handy (i.e. handled by a designated officer) and is it answered after max 3 rings? "
                      >
                        <label
                          for=""
                          class="label"
                        >Services</label><select
                          class="form-control"
                          name=""
                          v-model="services.s13"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>

                      <td> Do customers generally appear happy or satisfied about the speed, quality of food and/ or service and /or their experience at this restaurant? </td>
                      <td
                        id="17"
                        class="services"
                        data-name="Do customers generally appear happy or satisfied about the speed, quality of food and/ or service and /or their experience at this restaurant?"
                      >
                        <label
                          for=""
                          class="label"
                        >Services</label><select
                          class="form-control"
                          name=""
                          v-model="services.s14"
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

                      <td> Did security guards welcome customers appropriately (at the parking lot and again at the entrance) and provide the needed guide </td>
                      <td
                        id="18"
                        class="services"
                        data-name="Did security guards welcome customers appropriately (at the parking lot and again at the entrance) and provide the needed guide"
                      >
                        <label
                          for=""
                          class="label"
                        >Services</label><select
                          class="form-control"
                          name=""
                          v-model="services.s15"
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
                        rowspan="5"
                      >Hosting</td>
                      <td>Are there 2 hosts in the restaurant lobby wearing a smile and
                        eager to serve</td>
                      <td
                        id="19"
                        class="hosting"
                        data-name="Are there 2 hosts in the restaurant lobby wearing a smile and eager to serve"
                      >
                        <label
                          for=""
                          class="label"
                        >Hosting</label><select
                          class="form-control"
                          name=""
                          v-model="hosting.s1"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td> Are customers asked if they enjoyed their meals and are all
                        negative feedback passed on to the shift manager immediately for
                        action? </td>
                      <td
                        id="20"
                        class="hosting"
                        data-name="Are customers asked if they enjoyed their meals and are all negative feedback passed on to the shift manager immediately for action?"
                      >
                        <label
                          for=""
                          class="label"
                        >Hosting</label><select
                          class="form-control"
                          name=""
                          v-model="hosting.s2"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>

                      <td> Are host helping to ensure that customers are properly seated
                        especially during rush peak period? </td>
                      <td
                        id="21"
                        class="hosting"
                        data-name=" Are host helping to ensure that customers are properly seated especially during rush peak period"
                      >
                        <label
                          for=""
                          class="label"
                        >Hosting</label><select
                          class="form-control"
                          name=""
                          v-model="hosting.s3"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td> Are host cheerful and pleasantly interacting and pleasantly
                        interacting with customers
                        in the restaurant? </td>
                      <td
                        id="22"
                        class="hosting"
                        data-name=" Are host cheerful and pleasantly interacting and pleasantly interacting with customers in the restaurant?"
                      > <label
                          for=""
                          class="label"
                        >Hosting</label><select
                          class="form-control"
                          name=""
                          v-model="hosting.s4"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>

                      <td> Are hosts cleaning up (tables and chairs) in a timely manner?
                      </td>
                      <td
                        id="23"
                        class="hosting"
                        data-name=" Are hosts cleaning up (tables and chairs) in a timely manner?"
                      >
                        <label
                          for=""
                          class="label"
                        >Hosting</label><select
                          class="form-control"
                          name=""
                          v-model="hosting.s5"
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
                        rowspan="9"
                      >Production Management</td>
                      <td>
                        Is fryer oil clean and hot ready for use?
                      </td>
                      <td
                        id="24"
                        class="production_management"
                        data-name="Is fryer oil clean and hot ready for use?"
                      > <label
                          for=""
                          class="label"
                        >Production Management</label><select
                          class="form-control"
                          name=""
                          v-model="production_management.s1"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td>
                        Are current recipe cards posted in conspicuous area in the
                        kitchen?
                      </td>
                      <td
                        id="25"
                        class="production_management"
                        data-name=" Are current recipe cards posted in conspicuous area in the kitchen?"
                      > <label
                          for=""
                          class="label"
                        >Production Management</label><select
                          class="form-control"
                          name=""
                          v-model="production_management.s2"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Recipe & Progress Compliance: Observe several menu production
                        process to
                        see if recipe and/or processes are being followed </td>
                      <td
                        id="26"
                        class="production_management"
                        data-name="Recipe & Progress Compliance: Observe several menu production process to see if recipe and/or processes are being followed "
                      > <label
                          for=""
                          class="label"
                        >Production Management</label><select
                          class="form-control"
                          name=""
                          v-model="production_management.s3"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Spice inventory: Check that all pre-mixed spices are available,
                        check the
                        condition of the pre –mixed spices and check that spices are
                        being used for production.
                      </td>
                      <td
                        id="27"
                        class="production_management"
                        data-name=" Spice inventory: Check that all pre-mixed spices are available, check the condition of the pre –mixed spices and check that spices are being used for production."
                      > <label
                          for=""
                          class="label"
                        >Production Management</label><select
                          class="form-control"
                          name=""
                          v-model="production_management.s4"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Are manager(s) involved or interested in the production
                        process? What is
                        their level of participation? </td>
                      <td
                        id="28"
                        class="production_management"
                        data-name="Are manager(s) involved or interested in the production process? What is their level of participation"
                      > <label
                          for=""
                          class="label"
                        >Production Management</label><select
                          class="form-control"
                          name=""
                          v-model="production_management.s5"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Are all menu items available and replenished in a timely manner
                        (25% rule
                        applies)? </td>
                      <td
                        id="29"
                        class="production_management"
                        data-name=" Are all menu items available and replenished in a timely manner (25% rule applies)?"
                      > <label
                          for=""
                          class="label"
                        >Production Management</label><select
                          class="form-control"
                          name=""
                          v-model="production_management.s6"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Are all pre-portioned products properly weighed for proper
                        portioning to
                        ensure that customer gets full value for money? </td>
                      <td
                        id="30"
                        class="production_management"
                        data-name="Are all pre-portioned products properly weighed for proper portioning to ensure that customer gets full value for money?"
                      > <label
                          for=""
                          class="label"
                        >Production Management</label><select
                          class="form-control"
                          name=""
                          v-model="production_management.s7"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>

                      <td> Are proper records kept for production and transfer of products
                        between FOH
                        & BOH? </td>
                      <td
                        id="31"
                        class="production_management"
                        data-name=" Are proper records kept for production and transfer of products between FOH & BOH?"
                      > <label
                          for=""
                          class="label"
                        >Production Management</label><select
                          class="form-control"
                          name=""
                          v-model="production_management.s8"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Is the sensory evalauation chart completed and up-to-date as at the time of inspection? Are entries done in right procedures? </td>
                      <td
                        id="32"
                        class="production_management"
                        data-name=" Is the sensory evalauation chart completed and up-to-date as at the time of inspection? Are entries done in right procedures?"
                      > <label
                          for=""
                          class="label"
                        >Production Management</label><select
                          class="form-control"
                          name=""
                          v-model="production_management.s9"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <td
                        class="rotate"
                        rowspan="10"
                      >HACCP Compliance</td>
                      <td>
                        Are all equipment properly labelled with their correct
                        temperature limits?
                      </td>
                      <td
                        id="33"
                        class="haccp_compliance"
                        data-name=" Are all equipment properly labelled with their correct temperature limits?"
                      > <label
                          for=""
                          class="label"
                        >HACCP
                          Compliance</label><select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s1"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Are all equipment functioning within their appropriate
                        temperature
                        limits/boundaries?
                      </td>
                      <td
                        id="34"
                        class="haccp_compliance"
                        data-name="Are all equipment functioning within their appropriate temperature limits/boundaries?"
                      > <label
                          for=""
                          class="label"
                        >HACCP
                          Compliance</label><select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s2"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Are all materials stored according to HACCP standards i.e. to
                        avoid cross
                        contamination?
                      </td>
                      <td
                        id="35"
                        class="haccp_compliance"
                        data-name="Are all materials stored according to HACCP standards i.e. to avoid cross contamination?"
                      > <label
                          for=""
                          class="label"
                        >HACCP
                          Compliance</label><select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s3"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td>Are all food items stored in appropriate food grade containers and code dated?</td>
                      <td
                        id="36"
                        class="haccp_compliance"
                        data-name="Are all food items stored in appropriate food grade containers and code dated?"
                      > <label
                          for=""
                          class="label"
                        >HACCP Compliance</label><select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s4"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Are all work surfaces wiped with appropriate food grade
                        sanitizer prior to
                        use in the morning?
                      </td>
                      <td
                        id="37"
                        class="haccp_compliance"
                        data-name="Are all work surfaces wiped with appropriate food grade sanitizer prior to use in the morning?"
                      > <label
                          for=""
                          class="label"
                        >HACCP
                          Compliance</label><select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s5"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Are all kitchen crew wearing hair nets or hats? </td>
                      <td
                        id="38"
                        class="haccp_compliance"
                        data-name="Are all kitchen crew wearing hair nets or hats?"
                      >
                        <label
                          for=""
                          class="label"
                        >HACCP
                          Compliance</label><select
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
                      <td>Are all kitchen crew using a hand glove when handling fresh
                        produce?</td>
                      <td
                        id="39"
                        class="haccp_compliance"
                        data-name="Are all kitchen crew using a hand glove when handling fresh produce?"
                      > <label
                          for=""
                          class="label"
                        >HACCP
                          Compliance</label><select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s7"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td>Did the managers have their temperature probes (thermometers)
                        handy? Were
                        they using
                        them?</td>
                      <td
                        id="40"
                        class="haccp_compliance"
                        data-name="Did the managers have their temperature probes (thermometers) handy? Were they using them?"
                      > <label
                          for=""
                          class="label"
                        >HACCP
                          Compliance</label><select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s8"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Use probe to check the holding temperature of a few menu items
                        on display.
                        Where they
                        within the appropriate holding temperature? </td>
                      <td
                        id="41"
                        class="haccp_compliance"
                        data-name="Use probe to check the holding temperature of a few menu items on display. Where they within the appropriate holding temperature?"
                      > <label
                          for=""
                          class="label"
                        >HACCP
                          Compliance</label><select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s9"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Is the cold room chart completed and up-to-date as at the time of inspection? Are entries done in right procedures?
                      </td>
                      <td
                        id="42"
                        class="haccp_compliance"
                        data-name="Is the cold room chart completed and up-to-date as at the time of inspection? Are entries done in right procedures?"
                      > <label
                          for=""
                          class="label"
                        >HACCP
                          Compliance</label><select
                          class="form-control"
                          name=""
                          v-model="haccp_compliance.s10"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <td
                        class="rotate"
                        rowspan="18"
                      >Hygiene & Cleanliness</td>
                      <td>Were all staff properly groomed (men clean
                        shaven,
                        female well pedicure etc)? </td>
                      <td
                        id="43"
                        class="hygiene"
                        data-name="Were all staff properly groomed (men clean shaven, female well pedicure etc)?"
                      > <label
                          for=""
                          class="label"
                        >Hygiene &
                          Cleanliness</label><select
                          class="form-control"
                          name=""
                          v-model="hygiene.s1"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Were all staff properly dresses in clean, branded kjr or chef’s
                        uniforms?
                      </td>
                      <td
                        id="44"
                        class="hygiene"
                        data-name=" Were all staff properly dresses in clean, branded kjr or chef’s  uniforms?"
                      > <label
                          for=""
                          class="label"
                        >Hygiene &
                          Cleanliness</label><select
                          class="form-control"
                          name=""
                          v-model="hygiene.s2"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td
                        colspan="2"
                        class="font-weight-bold"
                      >Check that the following areas are clean and free of grease/dirt or debris:</td>
                    </tr>

                    <tr>
                      <td>All Equipment (Interior & Exterior)</td>
                      <td
                        id="45"
                        class="hygiene"
                        data-name="All Equipment (Interior & Exterior)"
                      > <label
                          for=""
                          class="label"
                        >Hygiene &
                          Cleanliness</label><select
                          class="form-control"
                          name=""
                          v-model="hygiene.s3"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td>Cold room (Rack surfaces, wall & floor)</td>
                      <td
                        id="46"
                        class="hygiene"
                        data-name="Cold room (Rack surfaces, wall & floor)"
                      > <label
                          for=""
                          class="label"
                        >Hygiene &
                          Cleanliness</label><select
                          class="form-control"
                          name=""
                          v-model="hygiene.s4"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td>Deep freezers (No ice buildup and kept clean)</td>
                      <td
                        id="47"
                        class="hygiene"
                        data-name="Deep freezers (No ice buildup and kept clean)"
                      >
                        <label
                          for=""
                          class="label"
                        >Hygiene &
                          Cleanliness</label><select
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
                      <td>Extractor canopy grills (clean and no grease)</td>
                      <td
                        id="48"
                        class="hygiene"
                        data-name="Extractor canopy grills (clean and no grease)"
                      >
                        <label
                          for=""
                          class="label"
                        >Hygiene &
                          Cleanliness</label><select
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
                      <td> Kitchen floor, corners, walls, ceilings </td>
                      <td
                        id="49"
                        class="hygiene"
                        data-name="Kitchen floor, corners, walls, ceilings"
                      > <label
                          for=""
                          class="label"
                        >Hygiene &
                          Cleanliness</label><select
                          class="form-control"
                          name=""
                          v-model="hygiene.s7"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td>Storage (floor, racks, smells)</td>
                      <td
                        id="50"
                        class="hygiene"
                        data-name="Storage (floor, racks, smells)"
                      > <label
                          for=""
                          class="label"
                        >Hygiene &
                          Cleanliness</label><select
                          class="form-control"
                          name=""
                          v-model="hygiene.s8"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Lobby (floor & table surfaces + legs) </td>
                      <td
                        id="51"
                        class="hygiene"
                        data-name="Lobby (floor & table surfaces + legs)"
                      > <label
                          for=""
                          class="label"
                        >Hygiene &
                          Cleanliness</label><select
                          class="form-control"
                          name=""
                          v-model="hygiene.s9"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td>Customer convenience</td>
                      <td
                        id="52"
                        class="hygiene"
                        data-name="Customer convenience"
                      >
                        <label
                          for=""
                          class="label"
                        >Hygiene &
                          Cleanliness</label><select
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
                      <td>Staff changing room and toilet</td>
                      <td
                        id="53"
                        class="hygiene"
                        data-name="Staff changing room and toilet"
                      > <label
                          for=""
                          class="label"
                        >Hygiene &
                          Cleanliness</label><select
                          class="form-control"
                          name=""
                          v-model="hygiene.s11"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td>Dump area</td>
                      <td
                        id="54"
                        class="hygiene"
                        data-name="Dump area"
                      > <label
                          for=""
                          class="label"
                        >Hygiene &
                          Cleanliness</label><select
                          class="form-control"
                          name=""
                          v-model="hygiene.s12"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td>Grease trap and sink</td>
                      <td
                        id="55"
                        class="hygiene"
                        data-name="Grease trap and sink"
                      >
                        <label
                          for=""
                          class="label"
                        >Hygiene &
                          Cleanliness</label><select
                          class="form-control"
                          name=""
                          v-model="hygiene.s13"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td> Are kitchen crew imbibing the clean –as- you- go -culture?
                      </td>
                      <td
                        id="56"
                        class="hygiene"
                        data-name="Are kitchen crew imbibing the clean –as- you- go -culture?"
                      >
                        <label
                          for=""
                          class="label"
                        >Hygiene &
                          Cleanliness</label><select
                          class="form-control"
                          name=""
                          v-model="hygiene.s14"
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
                      <td> Is restaurant entrance path cleaned regularly to reduce stains
                        from
                        incoming customers and improve and visual appeal?
                      </td>
                      <td
                        id="57"
                        class="hygiene"
                        data-name="Is restaurant entrance path cleaned regularly to reduce stains from incoming customers and improve and visual appeal?"
                      > <label
                          for=""
                          class="label"
                        >Hygiene &
                          Cleanliness</label><select
                          class="form-control"
                          name=""
                          v-model="hygiene.s15"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Are toilets checked and cleaned regularly and are toiletries
                        replenished?
                      </td>
                      <td
                        id="58"
                        class="hygiene"
                        data-name="Are toilets checked and cleaned regularly and are toiletries replenished?"
                      > <label
                          for=""
                          class="label"
                        >Hygiene &
                          Cleanliness</label><select
                          class="form-control"
                          name=""
                          v-model="hygiene.s16"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td>Is the restaurant environment (external) and back area clean,
                        free from foul
                        smell?</td>
                      <td
                        id="59"
                        class="hygiene"
                        data-name="Is the restaurant environment (external) and back area clean, free from foul smell?"
                      > <label
                          for=""
                          class="label"
                        >Hygiene &
                          Cleanliness</label><select
                          class="form-control"
                          name=""
                          v-model="hygiene.s17"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <td
                        class="rotate"
                        rowspan="10"
                      > General Operations Management</td>

                      <td> Do crew appear motivated and working as a coherent team? </td>
                      <td
                        id="60"
                        class="general_operations"
                        data-name="Do crew appear motivated and working as a coherent team?"
                      >
                        <label
                          for=""
                          class="label"
                        >General
                          Operations Management</label><select
                          class="form-control"
                          name=""
                          v-model="general_operations.s1"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td> Is the noise level in the back of house acceptable? </td>
                      <td
                        id="61"
                        class="general_operations"
                        data-name="Is the noise level in the back of house acceptable?"
                      >
                        <label
                          for=""
                          class="label"
                        >General
                          Operations Management</label><select
                          class="form-control"
                          name=""
                          v-model="general_operations.s2"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td> Are managers involved in receiving process? Are all receiving
                        procedures
                        followed to the letter? </td>
                      <td
                        id="62"
                        class="general_operations"
                        data-name="Are managers involved in receiving process? Are all receiving procedures followed to the letter?"
                      > <label
                          for=""
                          class="label"
                        >General
                          Operations Management</label><select
                          class="form-control"
                          name=""
                          v-model="general_operations.s3"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Does manager appear to have a strong control over the movement
                        and
                        activities of crew of crew especially in the back areas? </td>
                      <td
                        id="63"
                        class="general_operations"
                        data-name=" Does manager appear to have a strong control over the movement and activities of crew of crew especially in the back areas?"
                      > <label
                          for=""
                          class="label"
                        >General
                          Operations Management</label><select
                          class="form-control"
                          name=""
                          v-model="general_operations.s4"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Is shift manager engaging in any form of control over material
                        usage and
                        production quantity? </td>
                      <td
                        id="64"
                        class="general_operations"
                        data-name=" Is shift manager engaging in any form of control over material usage and production quantity? "
                      > <label
                          for=""
                          class="label"
                        >General
                          Operations Management</label><select
                          class="form-control"
                          name=""
                          v-model="general_operations.s5"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Are cashiers activities closely monitored by shift managers
                        and/or security
                        guards in the restaurant to prevent theft/fraud? </td>
                      <td
                        id="65"
                        class="general_operations"
                        data-name="Are cashiers activities closely monitored by shift managers and/or security guards in the restaurant to prevent theft/fraud?"
                      > <label
                          for=""
                          class="label"
                        >General
                          Operations Management</label><select
                          class="form-control"
                          name=""
                          v-model="general_operations.s6"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Is the Red book completed and up-to –date as at the time of
                        inspection? Are
                        entries accurate for the time inspected?
                      </td>
                      <td
                        id="66"
                        class="general_operations"
                        data-name="  Is the Red book completed and up-to –date as at the time of inspection? Are entries accurate for the time inspected?"
                      > <label
                          for=""
                          class="label"
                        >General
                          Operations Management</label><select
                          class="form-control"
                          name=""
                          v-model="general_operations.s7"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td>
                        Is the Green book completed and up-to-date as at the time of inspection? Are entries correct and communicates areas inspected real time?
                      </td>
                      <td
                        id="67"
                        class="general_operations"
                        data-name=" Is the Green book completed and up-to-date as at the time of inspection? Are entries correct and communicates areas inspected real time?"
                      > <label
                          for=""
                          class="label"
                        >General
                          Operations Management</label><select
                          class="form-control"
                          name=""
                          v-model="general_operations.s8"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Are there idle customers occupying seating space unchecked by
                        management?
                      </td>
                      <td
                        id="68"
                        class="general_operations"
                        data-name=" Are there idle customers occupying seating space unchecked by management?"
                      > <label
                          for=""
                          class="label"
                        >General
                          Operations Management</label><select
                          class="form-control"
                          name=""
                          v-model="general_operations.s9"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Is shift manager actively walking the lobby? </td>
                      <td
                        id="69"
                        class="general_operations"
                        data-name=" Is shift manager actively walking the lobby?"
                      >
                        <label
                          for=""
                          class="label"
                        >General
                          Operations Management</label><select
                          class="form-control"
                          name=""
                          v-model="general_operations.s10"
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
                      > Shift Changeover</td>
                      <td>
                        Did manager(s) and all staff arrive at and around 2.30pm?
                      </td>
                      <td
                        id="70"
                        class="shift_changeovers"
                        data-name=" Did manager(s) and all staff arrive at and around 2.30pm?"
                      >
                        <label
                          for=""
                          class="label"
                        >Shift
                          Changeover</label><select
                          class="form-control"
                          name=""
                          v-model="shift_changeovers.s1"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td> Did managers print mid-day report? Did he/she oversee the
                        counting and
                        receipt of cash into the safe? </td>
                      <td
                        id="71"
                        class="shift_changeovers"
                        data-name="Did managers print mid-day report? Did he/she oversee the counting and receipt of cash into the safe"
                      > <label
                          for=""
                          class="label"
                        >Shift
                          Changeover</label><select
                          class="form-control"
                          name=""
                          v-model="shift_changeovers.s2"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Were there any service disruptions at shift changeover? </td>
                      <td
                        id="72"
                        class="shift_changeovers"
                        data-name="Were there any service disruptions at shift changeover?"
                      >
                        <label
                          for=""
                          class="label"
                        >Shift Changeover</label><select
                          class="form-control"
                          name=""
                          v-model="shift_changeovers.s3"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td> Did section heads ensure re-stocking of all food, beverage and
                        consumables
                        prior to handover? </td>
                      <td
                        id="73"
                        class="shift_changeovers"
                        data-name="Did section heads ensure re-stocking of all food, beverage and consumables prior to handover?"
                      > <label
                          for=""
                          class="label"
                        >Shift
                          Changeover</label><select
                          class="form-control"
                          name=""
                          v-model="shift_changeovers.s4"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Did you witness proper documentary hand over of operations by
                        each section
                        head to incoming section head? </td>
                      <td
                        id="74"
                        class="shift_changeovers"
                        data-name=" Did you witness proper documentary hand over of operations by each section head to incoming section head?"
                      > <label
                          for=""
                          class="label"
                        >Shift
                          Changeover</label><select
                          class="form-control"
                          name=""
                          v-model="shift_changeovers.s5"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Were incoming crew briefed by both incoming and outgoing
                        managers? </td>
                      <td
                        id="75"
                        class="shift_changeovers"
                        data-name="Were incoming crew briefed by both incoming and outgoing managers?"
                      > <label
                          for=""
                          class="label"
                        >Shift
                          Changeover</label><select
                          class="form-control"
                          name=""
                          v-model="shift_changeovers.s6"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Overall, did shift changeover appear to be organized and
                        orderly? </td>
                      <td
                        id="76"
                        class="shift_changeovers"
                        data-name="Overall, did shift changeover appear to be organized and orderly?"
                      > <label
                          for=""
                          class="label"
                        >Shift
                          Changeover</label><select
                          class="form-control"
                          name=""
                          v-model="shift_changeovers.s7"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select></td>
                    </tr>

                    <tr>
                      <td> Does outgoing manager(s) check each staff individually as part
                        of a
                        pre-security check process?
                      </td>
                      <td
                        id="77"
                        class="shift_changeovers"
                        data-name="Does outgoing manager(s) check each staff individually as part of a pre-security check process?"
                      > <label
                          for=""
                          class="label"
                        >Shift
                          Changeover</label><select
                          class="form-control"
                          name=""
                          v-model="shift_changeovers.s8"
                        >
                          <option value="5">Yes</option>
                          <option value="1">No</option>
                        </select></td>
                    </tr>
                  </tbody>
                </table>

                <br>
                <h5 class="subtitle">Comments</h5>
                <div
                  id="78"
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
                  id="79"
                  class="form-group question"
                  data-name="Food & Beverage Comments & Observations"
                >
                  <label
                    for="inputPassword"
                    class="form-label"
                  >Food & Beverage Comments &
                    Observations: </label>
                  <div class="textarea">
                    <textarea
                      name=""
                      class="form-control form-box"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div
                  id="80"
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
                        id="81"
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
                        id="82"
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
                          title="Select user"
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
                        id="83"
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
                        id="84"
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
                        id="85"
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
                          title="Select user"
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
                        id="86"
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
                        id="87"
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
                        id="88"
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
                          title="Select user"
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
                        id="89"
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
                        id="90"
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
                        id="91"
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
                          title="Select user"
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
                        id="92"
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
                        id="93"
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
                        id="94"
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
                          title="Select user"
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
                        id="95"
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
                title="Assign Tasks to be carried out"
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

        <!-- </div> -->

      </div>
    </div>
    <div
      id='mvr'
      class="md-layout"
    >
      <div class="md-layout-item md-size-100">
        <md-card>
          <md-card-content>
            <table class="table table-bordered">
              <thead>
                <th>Category</th>
                <th>Points Earned</th>
                <th>Possible Points</th>
                <th>Percent</th>
              </thead>
              <tbody>
                <tr>
                  <td>Service</td>
                  <td
                    id="96"
                    class="points"
                    data-name="points earned"
                  ><label
                      for=""
                      class="label"
                    >Service</label><input
                      type="number"
                      max="80"
                      class="form-control"
                      v-model="points.p1"
                    /></td>
                  <td class="possible">80</td>
                  <td
                    id="97"
                    class="percent"
                    data-name="percent earned"
                  >
                    <label
                      for=""
                      class="label"
                    >Service</label><input
                      type="number"
                      max="100"
                      class="form-control"
                      v-model="percents.p1"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Hosting</td>
                  <td
                    id="98"
                    class="points"
                    data-name="points earned"
                  ><label
                      for=""
                      class="label"
                    >Hosting</label><input
                      type="number"
                      max="30"
                      class="form-control"
                      v-model="points.p2"
                    /></td>
                  <td class="possible">30</td>
                  <td
                    id="99"
                    class="percent"
                    data-name="percent earned"
                  >
                    <label
                      for=""
                      class="label"
                    >Hosting</label><input
                      type="number"
                      max="100"
                      class="form-control"
                      v-model="percents.p2"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Production Management</td>
                  <td
                    id="100"
                    class="points"
                    data-name="points earned"
                  ><label
                      for=""
                      class="label"
                    >Production Management</label><input
                      type="number"
                      max="40"
                      class="form-control"
                      v-model="points.p3"
                    /></td>
                  <td class="possible">40</td>
                  <td
                    id="101"
                    class="percent"
                    data-name="percent earned"
                  >
                    <label
                      for=""
                      class="label"
                    >Production Management</label><input
                      type="number"
                      max="100"
                      class="form-control"
                      v-model="percents.p3"
                    />
                  </td>
                </tr>
                <tr>
                  <td>HACCP Compliance</td>
                  <td
                    id="102"
                    class="points"
                    data-name="points earned"
                  ><label
                      for=""
                      class="label"
                    >HACCP Compliance</label><input
                      type="number"
                      max="40"
                      class="form-control"
                      v-model="points.p4"
                    /></td>
                  <td class="possible">40</td>
                  <td
                    id="103"
                    class="percent"
                    data-name="percent earned"
                  >
                    <label
                      for=""
                      class="label"
                    >HACCP Compliance</label><input
                      type="number"
                      max="100"
                      class="form-control"
                      v-model="percents.p4"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Hygiene & Cleanliness</td>
                  <td
                    id="104"
                    class="points"
                    data-name="points earned"
                  ><label
                      for=""
                      class="label"
                    >Hygiene & Cleanliness</label><input
                      type="number"
                      max="80"
                      class="form-control"
                      v-model="points.p5"
                    /></td>
                  <td class="possible">80</td>
                  <td
                    id="105"
                    class="percent"
                    data-name="percent earned"
                  >
                    <label
                      for=""
                      class="label"
                    >Hygiene & Cleanliness</label><input
                      type="number"
                      max="100"
                      class="form-control"
                      v-model="percents.p5"
                    />
                  </td>
                </tr>
                <tr>
                  <td>General Operations Management</td>
                  <td
                    id="106"
                    class="points"
                    data-name="points earned"
                  ><label
                      for=""
                      class="label"
                    >General Operations Management</label><input
                      type="number"
                      max="50"
                      class="form-control"
                      v-model="points.p6"
                    /></td>
                  <td class="possible">50</td>
                  <td
                    id="107"
                    class="percent"
                    data-name="percent earned"
                  >
                    <label
                      for=""
                      class="label"
                    >General Operations Management</label><input
                      type="number"
                      max="100"
                      class="form-control"
                      v-model="percents.p6"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Shift Changeover</td>
                  <td
                    id="108"
                    class="points"
                    data-name="points earned"
                  ><label
                      for=""
                      class="label"
                    >Shift Changeover</label><input
                      type="number"
                      max="40"
                      class="form-control"
                      v-model="points.p7"
                    /></td>
                  <td class="possible">40</td>
                  <td
                    id="109"
                    class="percent"
                    data-name="percent earned"
                  >
                    <label
                      for=""
                      class="label"
                    >Shift Changeover</label><input
                      type="number"
                      max="100"
                      class="form-control"
                      v-model="percents.p7"
                    />
                  </td>
                </tr>

              </tbody>
              <tfoot class="total">
                <tr>
                  <th>TOTALS</th>
                  <th
                    id="110"
                    class="points "
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
                  <th>360</th>
                  <th
                    id="111"
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
      loading: false,
      cloudName: 'sundryfood-qaqc',
      preset: 'orkxqp0c',
      count: 0,
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
      services: {
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
        s14: "",
        s15: ""
      },
      hosting: {
        s1: "",
        s2: "",
        s3: "",
        s4: "",
        s5: ""
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
        s9: ""
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
        s10: ""
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
        s14: "",
        s15: "",
        s16: "",
        s17: ""
      },
      general_operations: {
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
      shift_changeovers: {
        s1: "",
        s2: "",
        s3: "",
        s4: "",
        s5: "",
        s6: "",
        s7: "",
        s8: "",
      },
      total_point: "",
      points: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: ""
      },
      percents: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: ""
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


  },
  watch: {
    loading (val) {
      if (val) {
        var html =
          '<img src="https://freefrontend.com/assets/img/css-loaders/css-fun-Little-loader.gif"/>';

        this.$swal.fire({
          title: "Processing",
          html: html,
          showConfirmButton: false,
          showCancelButton: false,
          width: "380px",
          allowOutsideClick: false,
          allowEscapeKey: false
        });
      }
      else {
        this.$swal.close()
      }
    },
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
      this.percents.p1 = Math.ceil(val / 75 * 100);
      this.getTotal();
    },
    'points.p2': function (val) {
      this.percents.p2 = Math.ceil(val / 25 * 100);
      this.getTotal();
    },
    'points.p3': function (val) {
      this.percents.p3 = Math.ceil(val / 45 * 100);
      this.getTotal();
    },
    'points.p4': function (val) {
      this.percents.p4 = Math.ceil(val / 50 * 100);
      this.getTotal();
    },
    'points.p5': function (val) {
      this.percents.p5 = Math.ceil(val / 85 * 100);
      this.getTotal();
    },
    'points.p6': function (val) {
      this.percents.p6 = Math.ceil(val / 50 * 100);
      this.getTotal();
    },
    'points.p7': function (val) {
      this.percents.p7 = Math.ceil(val / 40 * 100);
      this.getTotal();
    },
  },
  methods: {
    async submitImages () {
      this.loading = true;
      if (this.images.length > 0) {
        for (var i = 0; i < this.images.length; i++) {
          let file = this.images[i];
          let formData = new FormData();
          formData.append("upload_preset", this.preset);
          formData.append("file", file);
          const resp = await this.postImage(formData);
        }
      }
      else {
        this.submitForm()
      }

    },
    async postImage (formData) {
      let cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/${this.cloudName}/upload`;

      let req = {
        url: cloudinaryUploadURL,
        method: "POST",
        data: formData,
      }
      this.$axios.post(req.url, req.data)
        .then(response => {
          this.form.question_answer.push({
            questionno: 'image' + this.count,
            questiontext: 'image' + this.count,
            questionlabel: 'image' + this.count,
            answer: response.data.secure_url,
          });
        })
        .then(data => {
          this.count++;
          if (this.count == this.images.length) {
            this.submitForm()
          }
        })
        .catch((err) => {
          console.log(err);
        })
    },
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
      });

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
      this.form.question_answer = this.form.question_answer.concat(qa);
      this.points = points;
      this.form.taskplanner = taskplanner;
      this.setPercents();
    },
    setPercents () {
      this.percents.p1 = Math.ceil(this.points.p1 / 75 * 100);
      this.percents.p2 = Math.ceil(this.points.p2 / 25 * 100);
      this.percents.p3 = Math.ceil(this.points.p3 / 45 * 100);
      this.percents.p4 = Math.ceil(this.points.p4 / 50 * 100);
      this.percents.p5 = Math.ceil(this.points.p5 / 85 * 100);
      this.percents.p6 = Math.ceil(this.points.p6 / 50 * 100);
      this.percents.p7 = Math.ceil(this.points.p7 / 40 * 100);
      this.getSum();
    },
    async getTotal () {
      //services
      var sSum = 0;
      for (var property in this.services) {
        let p = Number(this.services[property]);
        sSum += p
      }

      //hosting
      var hoSum = 0;
      for (var property in this.hosting) {
        let p = Number(this.hosting[property]);
        hoSum += p
      }
      //production_management
      var pSum = 0;
      for (var property in this.production_management) {
        let p = Number(this.production_management[property]);
        pSum += p
      }
      //haccp_compliance
      var haSum = 0;
      for (var property in this.haccp_compliance) {
        let p = Number(this.haccp_compliance[property]);
        haSum += p
      }
      //hygiene
      var hySum = 0;
      for (var property in this.hygiene) {
        let p = Number(this.hygiene[property]);
        hySum += p
      }
      //general_operations
      var gSum = 0;
      for (var property in this.general_operations) {
        let p = Number(this.general_operations[property]);
        gSum += p
      }
      //shift_changeovers
      var shSum = 0;
      for (var property in this.shift_changeovers) {
        let p = Number(this.shift_changeovers[property]);
        shSum += p
      }


      let points = {
        p1: sSum,
        p2: hoSum,
        p3: pSum,
        p4: haSum,
        p5: hySum,
        p6: gSum,
        p7: shSum
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
      this.form.total_percent = Math.ceil(psum / 7);
      this.submitMvr()
    },
    submitMvr () {
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
        what: "midamvfeedback",
        data: this.form,
        showLoader: false
      };
      this.$socket
        .makePostRequest(req)
        .then(response => {
          this.$swal.fire("Success", "Form created", "success")
            .then(() => {
              location.reload();
            });
        })
        .catch(error => {
          this.$swal.fire("Error", error.message, "error");
          this.form.question_answer = [];
        });
    },

    onFileChange (e) {
      var files = this.$refs.files.files;
      if (files.length > 5) {
        this.$swal.fire("Warning", "Maximum of 5 images allowed", "warning");
        return;
      }
      else if (!files.length) return;
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

    async acquireTokenPopupAndCallMSGraph (task) {

      //Always start with acquireTokenSilent to obtain a token in the signed in user from cache

      try {
        let tokenResponse = this.$store.getters.msalToken

        this.callMSGraphPost("https://graph.microsoft.com/v1.0/planner/tasks", tokenResponse.accessToken, task, this.graphAPICallback);
      } catch (ex) {


      }
    },

    async getTokenPopupAndCallMSGraph2 () {

      let requestObj = {
        scopes: ["groupMember.read.all"]
      }
      try {
        const tokenResponse = await this.myMSALObj.acquireTokenSilent(requestObj);
        this.callMSGraphGet("https://graph.microsoft.com/v1.0/groups/df8ec304-ccda-4c33-b244-edb05f0e5731/members?$select=id,displayName&$top=500",
          tokenResponse.accessToken, this.userAPICallback);
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
      this.$axios.get(theUrl, {
        headers: {
          'Authorization': 'Bearer ' + accessToken,
          'Content-type': 'application/json',
          'ConsistencyLevel': 'eventual'
        }
      })
        .then((response) => {
          callback(response.data);
        })
        .catch((err) => {
          this.callMSGraphGet(theUrl, accessToken, callback)
        })
      // var xmlHttp = new XMLHttpRequest();
      // xmlHttp.onreadystatechange = function () {
      //   if (this.readyState == 4 && this.status == 200)
      //     callback(JSON.parse(this.responseText));
      // }
      // xmlHttp.open("GET", theUrl, true); // true for asynchronous
      // xmlHttp.setRequestHeader('Authorization', 'Bearer ' + accessToken);
      // xmlHttp.send();
    },
    callMSGraphPost (theUrl, accessToken, data, callback) {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + accessToken,
          'Content-type': 'application/json'
        }
      }

      // var data = JSON.parse()

      let url = theUrl

      this.$axios.post(url, data, config)
        .then((response) => {

        })
        .catch((err) => {

        })
    },

    async graphAPICallback (data) {

    },

  }
};
</script>
<style scoped>
.form-box {
  border: 1px solid #dee2e6;
  height: 120px !important;
  padding: 5px;
}
.label {
  display: none;
}
.hidden {
  display: none;
}
.md-card img {
  width: 200px !important;
  height: 200px !important;
}
#mvr {
  display: none;
}
td {
  text-align: left;
}
</style>
