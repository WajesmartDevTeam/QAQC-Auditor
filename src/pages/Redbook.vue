Use /* eslint-disable */ 
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
            <h4 class="title">REDBOOK CHECKLIST</h4>
          </md-card-header>
          <md-card-content>
            <form
              v-on:submit.prevent="submitForm"
              id="redBook"
              role="form"
              class="container-fluid"
            >

              <div
                id="form-fields"
                class="card-content row"
              >

                <div
                  id="1"
                  class="form-group col-sm-6 col-md-4 question"
                  data-name="Unit"
                >
                  <label class="col-xs-4 col-form-label">Unit</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                      required
                    >
                  </div>
                </div>
                <div
                  id="2"
                  class="form-group col-sm-6 col-md-4 question loc"
                  data-name="Location Visited"
                >
                  <label
                    for="inputPassword"
                    class="col-xs-4 col-form-label"
                  >Location
                    Visited</label>
                  <div class="col-xs-8">
                    <select
                      class="form-control"
                      id="location"
                      v-model="form.store_id"
                      required
                      title="select store visited"
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

                    </select>
                  </div>
                </div>
                <div
                  id="3"
                  class="form-group col-sm-6 col-md-4 question"
                  data-name="Date"
                >
                  <label
                    for="inputPassword"
                    class="col-xs-4 col-form-label"
                  >Date</label>
                  <div class="col-xs-8">
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
                  class="form-group col-sm-6 col-md-4 question"
                  data-name="Yesterday Total sales"
                >
                  <label class="col-xs-4 col-form-label">Yesterday Total
                    Sales</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>

                <div
                  id="5"
                  class="form-group col-sm-6 col-md-4 question"
                  data-name="Last Month Today"
                >
                  <label class="col-xs-4 col-form-label">Last Month
                    Today</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>
                <div
                  id="6"
                  class="form-group col-sm-6 col-md-4 question"
                  data-name="Last Month Total Sales"
                >
                  <label
                    for="inputPassword"
                    class="col-xs-4 col-form-label"
                  >Last Month Total
                    Sales</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>

                <div
                  id="7"
                  class="form-group col-sm-6 col-md-4 question"
                  data-name="ADS Yesterday"
                >
                  <label class="col-xs-4 col-form-label">ADS
                    Yesterday</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>
                <div
                  id="8"
                  class="form-group col-sm-6 col-md-4 question"
                  data-name="ADS Last Month Today"
                >
                  <label
                    for="inputPassword"
                    class="col-xs-4 col-form-label"
                  >ADS Last Month
                    Today</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>
                <div
                  id="9"
                  class="form-group col-sm-6 col-md-4 question"
                  data-name="+/-"
                >
                  <label class="col-xs-4 col-form-label">+/-</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>

                <div
                  id="10"
                  class="form-group col-sm-6 question"
                  data-name="Time store open today"
                >
                  <label class="col-xs-4 col-form-label">Time store open
                    today</label>
                  <div class="col-xs-8">
                    <input
                      type="time"
                      class="form-control"
                    >
                  </div>
                </div>
                <div
                  id="11"
                  class="form-group col-sm-6 question"
                  data-name="Time store close yesterday"
                >
                  <label
                    for="inputPassword"
                    class="col-xs-4 col-form-label"
                  >Time store close
                    yesterday</label>
                  <div class="col-xs-8">
                    <input
                      type="time"
                      class="form-control"
                    >
                  </div>
                </div>

                <div
                  id="12"
                  class="form-group col-sm-6 col-md-4 question"
                  data-name="Variance"
                >
                  <label class="col-xs-4 col-form-label">Variance</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>
                <div
                  id="13"
                  class="form-group col-sm-6 col-md-4 question"
                  data-name="Missing Items Today"
                >
                  <label
                    for="inputPassword"
                    class="col-xs-4 col-form-label"
                  >Missing Items
                    Today</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>
                <div
                  id="14"
                  class="form-group col-sm-6 col-md-4 question"
                  data-name="Missing Yesterday"
                >
                  <label class="col-xs-4 col-form-label">Missing
                    Yesterday</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>

                <div
                  id="15"
                  class="form-group col-sm-6 question"
                  data-name="Opening Manager"
                >
                  <label class="col-xs-4 col-form-label">Opening
                    Manager</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>
                <div
                  id="16"
                  class="form-group col-sm-6 question"
                  data-name="Yesterday Closing Manager"
                >
                  <label
                    for="inputPassword"
                    class="col-xs-4 col-form-label"
                  >Yesterday
                    Closing Manager</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>

                <p class="subtitle col-sm-12">No. Of Crew Today:</p>
                <div
                  id="17"
                  class="form-group col-sm-6 question"
                  data-name="No. Of Crew Today"
                >
                  <label class="col-xs-4 col-form-label">A</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>
                <div
                  id="18"
                  class="form-group col-sm-6 question"
                  data-name="No. Of Crew Today"
                >
                  <label class="col-xs-4 col-form-label">B</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>

                <p class="subtitle col-sm-12">Yesterday Crew Total:</p>
                <div
                  id="19"
                  class="form-group col-sm-6 question"
                  data-name="Yesterday Crew Total"
                >
                  <label
                    for="inputPassword"
                    class="col-xs-4 col-form-label"
                  >A</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >

                  </div>
                </div>
                <div
                  id="20"
                  class="form-group col-sm-6 question"
                  data-name="Yesterday Crew Total"
                >
                  <label
                    for="inputPassword"
                    class="col-xs-4 col-form-label"
                  >B</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >

                  </div>
                </div>

                <p class="subtitle col-sm-12">Customer Count Yesterday:</p>
                <div
                  id="21"
                  class="form-group col-sm-6 question"
                  data-name="Customer Count Yesterday"
                >
                  <label class="col-xs-4 col-form-label">A</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>
                <div
                  id="22"
                  class="form-group col-sm-6 question"
                  data-name="Customer Count Yesterday"
                >
                  <label class="col-xs-4 col-form-label">B</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>

                <p class="subtitle col-sm-12">Customer Count Today:</p>
                <div
                  id="23"
                  class="form-group col-sm-6 question"
                  data-name="Customer Count Today"
                >
                  <label
                    for="inputPassword"
                    class="col-xs-4 col-form-label"
                  >A</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >

                  </div>
                </div>
                <div
                  id="24"
                  class="form-group col-sm-6 question"
                  data-name="Customer Count Today"
                >
                  <label
                    for="inputPassword"
                    class="col-xs-4 col-form-label"
                  >B</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >

                  </div>
                </div>

                <div
                  id="25"
                  class="form-group col-sm-6 col-md-4 question"
                  data-name="Diesel Level Opening"
                >
                  <label class="col-xs-4 col-form-label">Diesel Level
                    Opening</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>
                <div
                  id="26"
                  class="form-group col-sm-6 col-md-4 question"
                  data-name="Yesterday Diesel levl Closing"
                >
                  <label
                    for="inputPassword"
                    class="col-xs-4 col-form-label"
                  >Yesterday Diesel
                    levl Closing</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>
                <div
                  id="27"
                  class="form-group col-sm-6 col-md-4 question"
                  data-name="Special Orders"
                >
                  <label class="col-xs-4 col-form-label">Special
                    Orders</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>

                <div class="form-group col-sm-6 ">
                  <label class="col-xs-4 col-form-label">Generator Running</label>
                  <div
                    class="col-xs-8 question"
                    id="28"
                    data-name="Generator Running"
                  >
                    <label
                      for=""
                      class="label"
                    >OK/NOT OK</label>
                    <label for="">OK</label>
                    <input
                      type="radio"
                      name="gr"
                      value="ok"
                    >
                    &nbsp;&nbsp;

                    <label for="">NOT OK</label>
                    <input
                      type="radio"
                      name="gr"
                      value="not ok"
                    >
                  </div>
                </div>

                <div
                  id="29"
                  class="form-group col-sm-6 question"
                  data-name="Generator Running"
                >
                  <label class="col-xs-4 col-form-label">Remark</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>

                <p class="subtitle col-sm-12">Diesel Bin Card Reading:</p>
                <div
                  id="30"
                  class="form-group col-sm-6 question"
                  data-name="Diesel Bin Card Reading"
                >
                  <label class="col-xs-4 col-form-label">Diesel Bin Card Reading</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>

                <div
                  id="31"
                  class="form-group col-sm-6 question"
                  data-name="Diesel Bin Card Reading(Added)"
                >
                  <label class="col-xs-4 col-form-label">Added</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>

                <p class="subtitle col-sm-12">Transferred:</p>
                <div
                  id="32"
                  class="form-group col-sm-6 question"
                  data-name="Diesel Bin Card Reading(Transferred in)"
                >
                  <label
                    for="inputPassword"
                    class="col-xs-4 col-form-label"
                  >IN</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >

                  </div>
                </div>
                <div
                  id="33"
                  class="form-group col-sm-6 question"
                  data-name="Diesel Bin Card Reading(Transferred out)"
                >
                  <label
                    for="inputPassword"
                    class="col-xs-4 col-form-label"
                  >OUT</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >

                  </div>
                </div>

                <p class="subtitle col-sm-12">Pastries Arrival Time:</p>
                <div
                  id="34"
                  class="form-group col-sm-6 col-md-4 question"
                  data-name="Pastries Arrival Time(1)"
                >
                  <label class="col-xs-4 col-form-label">1</label>
                  <div class="col-xs-8">
                    <input
                      type="time"
                      class="form-control"
                    >
                  </div>
                </div>
                <div
                  id="35"
                  class="form-group col-sm-6 col-md-4 question"
                  data-name="Pastries Arrival Time(2)"
                >
                  <label class="col-xs-4 col-form-label">2</label>
                  <div class="col-xs-8">
                    <input
                      type="time"
                      class="form-control"
                    >
                  </div>
                </div>

                <div class="form-group col-sm-6 col-md-4">
                  <label class="col-xs-4 col-form-label">All Pastries
                    delivered on Time?</label>

                  <div
                    id="36"
                    class="col-xs-8 question"
                    data-name="All Pastries delivered on Time?"
                  >
                    <label
                      for=""
                      class="label"
                    >YES/NO</label>
                    <label for="">YES</label>
                    <input
                      type="radio"
                      name="pd"
                      value="yes"
                    > &nbsp;&nbsp;
                    <label for="">NO</label>
                    <input
                      type="radio"
                      name="pd"
                      value="no"
                    >

                  </div>

                </div>

                <div class="form-group col-sm-12 ">
                  <label
                    for="inputPassword"
                    class="col-xs-4 col-form-label"
                  >Remarks</label>
                  <div
                    id="37"
                    class="col-xs-8 question"
                    data-name="Pastries Arrival"
                  >
                    <label
                      for=""
                      class="label"
                    >Remarks</label>
                    <input
                      type="text"
                      class="form-control"
                    >

                  </div>
                </div>

                <table class="mb-3 table table-bordered">
                  <thead>
                    <th></th>
                    <th>At Opening</th>
                    <th>10:00am</th>
                    <th>12 Noon</th>
                    <th>3:00pm</th>
                    <th>6:00pm</th>
                    <th>Closing</th>
                  </thead>

                  <tbody>
                    <tr>
                      <td>COLD ROOM<sup>0</sup>C</td>
                      <td
                        id="38"
                        class="question"
                        data-name="COLD ROOM"
                      ><label
                          for=""
                          class="label"
                        >at opening</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="39"
                        class="question"
                        data-name="COLD ROOM"
                      ><label
                          for=""
                          class="label"
                        >10:00am</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="40"
                        class="question"
                        data-name="COLD ROOM"
                      ><label
                          for=""
                          class="label"
                        >12 noon</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="41"
                        class="question"
                        data-name="COLD ROOM"
                      ><label
                          for=""
                          class="label"
                        >3:00pm</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="42"
                        class="question"
                        data-name="COLD ROOM"
                      ><label
                          for=""
                          class="label"
                        >6:00pm</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="43"
                        class="question"
                        data-name="COLD ROOM"
                      ><label
                          for=""
                          class="label"
                        >closing</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                    </tr>

                    <tr>
                      <td>ROAST CHICKEN FOG<sup>0</sup>C</td>
                      <td
                        id="44"
                        class="question"
                        data-name="ROAST CHICKEN FOG"
                      >
                        <label
                          for=""
                          class="label"
                        >at opening</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="45"
                        class="question"
                        data-name="ROAST CHICKEN FOG"
                      >
                        <label
                          for=""
                          class="label"
                        >10:00am</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="46"
                        class="question"
                        data-name="ROAST CHICKEN FOG"
                      >
                        <label
                          for=""
                          class="label"
                        >12 noon</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="47"
                        class="question"
                        data-name="ROAST CHICKEN FOG"
                      >
                        <label
                          for=""
                          class="label"
                        >3:00pm</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="48"
                        class="question"
                        data-name="ROAST CHICKEN FOG"
                      >
                        <label
                          for=""
                          class="label"
                        >6:00pm</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="49"
                        class="question"
                        data-name="ROAST CHICKEN FOG"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                    </tr>

                    <tr>
                      <td>SOUPS TEMP KJR<sup>0</sup>C</td>
                      <td
                        id="50"
                        class="question"
                        data-name="SOUPS TEMP KJR"
                      >
                        <label
                          for=""
                          class="label"
                        >at opening</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="51"
                        class="question"
                        data-name="SOUPS TEMP KJR"
                      >
                        <label
                          for=""
                          class="label"
                        >10:00am</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="52"
                        class="question"
                        data-name="SOUPS TEMP KJR"
                      >
                        <label
                          for=""
                          class="label"
                        >12 noon</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="53"
                        class="question"
                        data-name="SOUPS TEMP KJR"
                      >
                        <label
                          for=""
                          class="label"
                        >3:00pm</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="54"
                        class="question"
                        data-name="SOUPS TEMP KJR"
                      >
                        <label
                          for=""
                          class="label"
                        >6:00pm</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="55"
                        class="question"
                        data-name="SOUPS TEMP KJR"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                    </tr>

                    <tr>
                      <td>LOBBY A/C<sup>0</sup>C</td>
                      <td
                        id="56"
                        class="question"
                        data-name="LOBBY A/C"
                      >
                        <label
                          for=""
                          class="label"
                        >at opening</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="57"
                        class="question"
                        data-name="LOBBY A/C"
                      >
                        <label
                          for=""
                          class="label"
                        >10:00am</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="58"
                        class="question"
                        data-name="LOBBY A/C"
                      >
                        <label
                          for=""
                          class="label"
                        >12 noon</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="59"
                        class="question"
                        data-name="LOBBY A/C"
                      >
                        <label
                          for=""
                          class="label"
                        >3:00pm</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="60"
                        class="question"
                        data-name="LOBBY A/C"
                      >
                        <label
                          for=""
                          class="label"
                        >6:00pm</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="61"
                        class="question"
                        data-name="LOBBY A/C"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                    </tr>

                    <tr>
                      <td>CONVENIENCIES OK?</td>
                      <td
                        id="62"
                        class="question"
                        data-name="CONVENIENCIES OK?"
                      >
                        <label
                          for=""
                          class="label"
                        >at opening</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="63"
                        class="question"
                        data-name="CONVENIENCIES OK?"
                      >
                        <label
                          for=""
                          class="label"
                        >10:00am</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="64"
                        class="question"
                        data-name="CONVENIENCIES OK?"
                      >
                        <label
                          for=""
                          class="label"
                        >12 noon</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="65"
                        class="question"
                        data-name="CONVENIENCIES OK?"
                      >
                        <label
                          for=""
                          class="label"
                        >3:00pm</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="66"
                        class="question"
                        data-name="CONVENIENCIES OK?"
                      >
                        <label
                          for=""
                          class="label"
                        >6:00pm</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="67"
                        class="question"
                        data-name="CONVENIENCIES OK?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                    </tr>
                    <tr>
                      <td>KITCHEN LOBBY CLEANLINESS OK?</td>
                      <td
                        id="68"
                        class="question"
                        data-name="KITCHEN LOBBY CLEANLINESS OK?"
                      >
                        <label
                          for=""
                          class="label"
                        >at opening</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="69"
                        class="question"
                        data-name="KITCHEN LOBBY CLEANLINESS OK?"
                      >
                        <label
                          for=""
                          class="label"
                        >10:00am</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="70"
                        class="question"
                        data-name="KITCHEN LOBBY CLEANLINESS OK?"
                      >
                        <label
                          for=""
                          class="label"
                        >12 noon</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="71"
                        class="question"
                        data-name="KITCHEN LOBBY CLEANLINESS OK?"
                      >
                        <label
                          for=""
                          class="label"
                        >3:00pm</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="72"
                        class="question"
                        data-name="KITCHEN LOBBY CLEANLINESS OK?"
                      >
                        <label
                          for=""
                          class="label"
                        >6:00pm</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="73"
                        class="question"
                        data-name="KITCHEN LOBBY CLEANLINESS OK?"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                    </tr>

                  </tbody>

                </table>

                <table class="mb-3 table table-bordered">
                  <thead>
                    <th></th>
                    <th>At Opening</th>
                    <th>10:00am</th>
                    <th>12 Noon</th>
                    <th>3:00pm</th>
                    <th>6:00pmn</th>
                    <th>CLosing</th>
                    <th>Remarks</th>
                  </thead>

                  <tbody>
                    <tr>
                      <td>FRONT PARKING LOT</td>
                      <td
                        id="74"
                        class="question"
                        data-name="FRONT PARKING LOT"
                      >
                        <label
                          for=""
                          class="label"
                        >at opening</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="75"
                        class="question"
                        data-name="FRONT PARKING LOT"
                      >
                        <label
                          for=""
                          class="label"
                        >10:00am</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="76"
                        class="question"
                        data-name="FRONT PARKING LOT"
                      >
                        <label
                          for=""
                          class="label"
                        >12 noon</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="77"
                        class="question"
                        data-name="FRONT PARKING LOT"
                      >
                        <label
                          for=""
                          class="label"
                        >3:00pm</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="78"
                        class="question"
                        data-name="FRONT PARKING LOT"
                      >
                        <label
                          for=""
                          class="label"
                        >6:00pm</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="79"
                        class="question"
                        data-name="FRONT PARKING LOT"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="80"
                        class="question"
                        data-name="FRONT PARKING LOT"
                      >
                        <label
                          for=""
                          class="label"
                        >remarks</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                    </tr>

                    <tr>
                      <td>TV/MUSIC OK</td>
                      <td
                        id="81"
                        class="question"
                        data-name="TV/MUSIC OK"
                      >
                        <label
                          for=""
                          class="label"
                        >at opening</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="82"
                        class="question"
                        data-name="TV/MUSIC OK"
                      >
                        <label
                          for=""
                          class="label"
                        >10:00am</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="83"
                        class="question"
                        data-name="TV/MUSIC OK"
                      >
                        <label
                          for=""
                          class="label"
                        >12 noon</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="84"
                        class="question"
                        data-name="TV/MUSIC OK"
                      >
                        <label
                          for=""
                          class="label"
                        >3:00pm</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="85"
                        class="question"
                        data-name="TV/MUSIC OK"
                      >
                        <label
                          for=""
                          class="label"
                        >6:00pm</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="86"
                        class="question"
                        data-name="TV/MUSIC OK"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="87"
                        class="question"
                        data-name="TV/MUSIC OK"
                      >
                        <label
                          for=""
                          class="label"
                        >remarks</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                    </tr>

                    <tr>
                      <td>COUNTER SERVICE TIME UNDER 3MINS</td>
                      <td
                        id="88"
                        class="question"
                        data-name="COUNTER SERVICE TIME UNDER 3MINS"
                      >
                        <label
                          for=""
                          class="label"
                        >at opening</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="89"
                        class="question"
                        data-name="COUNTER SERVICE TIME UNDER 3MINS"
                      >
                        <label
                          for=""
                          class="label"
                        >10:00am</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="90"
                        class="question"
                        data-name="COUNTER SERVICE TIME UNDER 3MINS"
                      >
                        <label
                          for=""
                          class="label"
                        >12 noon</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="91"
                        class="question"
                        data-name="COUNTER SERVICE TIME UNDER 3MINS"
                      >
                        <label
                          for=""
                          class="label"
                        >3:00pm</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="92"
                        class="question"
                        data-name="COUNTER SERVICE TIME UNDER 3MINS"
                      >
                        <label
                          for=""
                          class="label"
                        >6:00pm</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="93"
                        class="question"
                        data-name="COUNTER SERVICE TIME UNDER 3MINS"
                      >
                        <label
                          for=""
                          class="label"
                        >closing</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="94"
                        class="question"
                        data-name="COUNTER SERVICE TIME UNDER 3MINS"
                      >
                        <label
                          for=""
                          class="label"
                        >remarks</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                    </tr>

                  </tbody>
                </table>

                <table class="mb-3 table table-bordered red">
                  <thead>
                    <th></th>
                    <th>RECV</th>
                    <th>COLD STORE TEMP</th>
                    <th>THAWING TEMP</th>
                    <th>COLD ROOM TEMP</th>
                    <th>MARINATION TEMP</th>
                    <th>PORTION TIME</th>
                    <th>FRYING TEMP</th>
                    <th>COOKING TEMP</th>
                    <th>HOLDING TEMP</th>
                    <th>DISPLAY COUNTER TEMP</th>
                    <th>COOLERS TEMP</th>
                    <th>ICE CREAM SOFT SERV TEMP</th>
                    <th>DEEP FREEZER TEMP</th>
                  </thead>
                  <thead>
                    <th></th>
                    <th>Temp+5<sup>0</sup>C</th>
                    <th>0-5<sup>0</sup>C</th>
                    <th>0-5<sup>0</sup>C</th>
                    <th>-18-5<sup>0</sup>C to -23<sup>0</sup>C</th>
                    <th>0-5<sup>0</sup>C</th>
                    <th>45 mins</th>
                    <th>+120<sup>0</sup>C</th>
                    <th>+75<sup>0</sup>C</th>
                    <th>+60<sup>0</sup>C</th>
                    <th>+60<sup>0</sup>C</th>
                    <th>+5<sup>0</sup>C</th>
                    <th>-12<sup>0</sup>C</th>
                    <th>-18<sup>0</sup>C</th>
                  </thead>

                  <tbody>
                    <tr>
                      <td>CHICKEN</td>
                      <td
                        id="95"
                        class="question"
                        data-name="CHICKEN"
                      >
                        <label
                          for=""
                          class="label"
                        >RECV</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="96"
                        class="question"
                        data-name="CHICKEN"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD STORE TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="97"
                        class="question"
                        data-name="CHICKEN"
                      >
                        <label
                          for=""
                          class="label"
                        >THAWING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="98"
                        class="question"
                        data-name="CHICKEN"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD ROOM TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="99"
                        class="question"
                        data-name="CHICKEN"
                      >
                        <label
                          for=""
                          class="label"
                        >MARINATION TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="100"
                        class="question"
                        data-name="CHICKEN"
                      >
                        <label
                          for=""
                          class="label"
                        >PORTION TIME</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="101"
                        class="question"
                        data-name="CHICKEN"
                      >
                        <label
                          for=""
                          class="label"
                        >FRYING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="102"
                        class="question"
                        data-name="CHICKEN"
                      >
                        <label
                          for=""
                          class="label"
                        >COOKING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="103"
                        class="question"
                        data-name="CHICKEN"
                      >
                        <label
                          for=""
                          class="label"
                        >HOLDING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="104"
                        class="question"
                        data-name="CHICKEN"
                      >
                        <label
                          for=""
                          class="label"
                        >DISPLAY COUNTER TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="105"
                        class="question"
                        data-name="CHICKEN"
                      >
                        <label
                          for=""
                          class="label"
                        >COOLERS TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="106"
                        class="question"
                        data-name="CHICKEN"
                      >
                        <label
                          for=""
                          class="label"
                        >ICE CREAM SOFT SERV TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="107"
                        class="question"
                        data-name="CHICKEN"
                      >
                        <label
                          for=""
                          class="label"
                        >DEEP FREEZER TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                    </tr>

                    <tr>
                      <td>BEEF, SHARKI GOAT MEAT</td>
                      <td
                        id="108"
                        class="question"
                        data-name="BEEF, SHARKI GOAT MEAT"
                      >
                        <label
                          for=""
                          class="label"
                        >RECV</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="109"
                        class="question"
                        data-name="BEEF, SHARKI GOAT MEAT"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD STORE TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="110"
                        class="question"
                        data-name="BEEF, SHARKI GOAT MEAT"
                      >
                        <label
                          for=""
                          class="label"
                        >THAWING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="111"
                        class="question"
                        data-name="BEEF, SHARKI GOAT MEAT"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD ROOM TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="112"
                        class="question"
                        data-name="BEEF, SHARKI GOAT MEAT"
                      >
                        <label
                          for=""
                          class="label"
                        >MARINATION TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="113"
                        class="question"
                        data-name="BEEF, SHARKI GOAT MEAT"
                      >
                        <label
                          for=""
                          class="label"
                        >PORTION TIME</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="114"
                        class="question"
                        data-name="BEEF, SHARKI GOAT MEAT"
                      >
                        <label
                          for=""
                          class="label"
                        >FRYING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="115"
                        class="question"
                        data-name="BEEF, SHARKI GOAT MEAT"
                      >
                        <label
                          for=""
                          class="label"
                        >COOKING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="116"
                        class="question"
                        data-name="BEEF, SHARKI GOAT MEAT"
                      >
                        <label
                          for=""
                          class="label"
                        >HOLDING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="117"
                        class="question"
                        data-name="BEEF, SHARKI GOAT MEAT"
                      >
                        <label
                          for=""
                          class="label"
                        >DISPLAY COUNTER TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="118"
                        class="question"
                        data-name="BEEF, SHARKI GOAT MEAT"
                      >
                        <label
                          for=""
                          class="label"
                        >COOLERS TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="119"
                        class="question"
                        data-name="BEEF, SHARKI GOAT MEAT"
                      >
                        <label
                          for=""
                          class="label"
                        >ICE CREAM SOFT SERV TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="120"
                        class="question"
                        data-name="BEEF, SHARKI GOAT MEAT"
                      >
                        <label
                          for=""
                          class="label"
                        >DEEP FREEZER TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                    </tr>

                    <tr>
                      <td>FISH</td>
                      <td
                        id="121"
                        class="question"
                        data-name="FISH"
                      >
                        <label
                          for=""
                          class="label"
                        >RECV</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="122"
                        class="question"
                        data-name="FISH"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD STORE TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="123"
                        class="question"
                        data-name="FISH"
                      >
                        <label
                          for=""
                          class="label"
                        >THAWING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="124"
                        class="question"
                        data-name="FISH"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD ROOM TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="125"
                        class="question"
                        data-name="FISH"
                      >
                        <label
                          for=""
                          class="label"
                        >MARINATION TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="126"
                        class="question"
                        data-name="FISH"
                      >
                        <label
                          for=""
                          class="label"
                        >PORTION TIME</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="127"
                        class="question"
                        data-name="FISH"
                      >
                        <label
                          for=""
                          class="label"
                        >FRYING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="128"
                        class="question"
                        data-name="FISH"
                      >
                        <label
                          for=""
                          class="label"
                        >COOKING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="129"
                        class="question"
                        data-name="FISH"
                      >
                        <label
                          for=""
                          class="label"
                        >HOLDING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="130"
                        class="question"
                        data-name="FISH"
                      >
                        <label
                          for=""
                          class="label"
                        >DISPLAY COUNTER TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="131"
                        class="question"
                        data-name="FISH"
                      >
                        <label
                          for=""
                          class="label"
                        >COOLERS TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="132"
                        class="question"
                        data-name="FISH"
                      >
                        <label
                          for=""
                          class="label"
                        >ICE CREAM SOFT SERV TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="133"
                        class="question"
                        data-name="FISH"
                      >
                        <label
                          for=""
                          class="label"
                        >DEEP FREEZER TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                    </tr>

                    <tr>
                      <td>FRENCH FRIES</td>
                      <td
                        id="134"
                        class="question"
                        data-name="FRENCH FRIES"
                      >
                        <label
                          for=""
                          class="label"
                        >RECV</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="135"
                        class="question"
                        data-name="FRENCH FRIES"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD STORE TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="136"
                        class="question"
                        data-name="FRENCH FRIES"
                      >
                        <label
                          for=""
                          class="label"
                        >THAWING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="137"
                        class="question"
                        data-name="FRENCH FRIES"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD ROOM TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="138"
                        class="question"
                        data-name="FRENCH FRIES"
                      >
                        <label
                          for=""
                          class="label"
                        >MARINATION TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="139"
                        class="question"
                        data-name="FRENCH FRIES"
                      >
                        <label
                          for=""
                          class="label"
                        >PORTION TIME</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="140"
                        class="question"
                        data-name="FRENCH FRIES"
                      >
                        <label
                          for=""
                          class="label"
                        >FRYING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="141"
                        class="question"
                        data-name="FRENCH FRIES"
                      >
                        <label
                          for=""
                          class="label"
                        >COOKING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="142"
                        class="question"
                        data-name="FRENCH FRIES"
                      >
                        <label
                          for=""
                          class="label"
                        >HOLDING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="143"
                        class="question"
                        data-name="FRENCH FRIES"
                      >
                        <label
                          for=""
                          class="label"
                        >DISPLAY COUNTER TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="144"
                        class="question"
                        data-name="FRENCH FRIES"
                      >
                        <label
                          for=""
                          class="label"
                        >COOLERS TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="145"
                        class="question"
                        data-name="FRENCH FRIES"
                      >
                        <label
                          for=""
                          class="label"
                        >ICE CREAM SOFT SERV TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="146"
                        class="question"
                        data-name="FRENCH FRIES"
                      >
                        <label
                          for=""
                          class="label"
                        >DEEP FREEZER TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                    </tr>
                    <tr>
                      <td>FRESH VEGETABLES</td>
                      <td
                        id="147"
                        class="question"
                        data-name="FRESH VEGETABLES"
                      >
                        <label
                          for=""
                          class="label"
                        >RECV</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="148"
                        class="question"
                        data-name="FRESH VEGETABLES"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD STORE TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="149"
                        class="question"
                        data-name="FRESH VEGETABLES"
                      >
                        <label
                          for=""
                          class="label"
                        >THAWING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="150"
                        class="question"
                        data-name="FRESH VEGETABLES"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD ROOM TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="151"
                        class="question"
                        data-name="FRESH VEGETABLES"
                      >
                        <label
                          for=""
                          class="label"
                        >MARINATION TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="152"
                        class="question"
                        data-name="FRESH VEGETABLES"
                      >
                        <label
                          for=""
                          class="label"
                        >PORTION TIME</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="153"
                        class="question"
                        data-name="FRESH VEGETABLES"
                      >
                        <label
                          for=""
                          class="label"
                        >FRYING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="154"
                        class="question"
                        data-name="FRESH VEGETABLES"
                      >
                        <label
                          for=""
                          class="label"
                        >COOKING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="155"
                        class="question"
                        data-name="FRESH VEGETABLES"
                      >
                        <label
                          for=""
                          class="label"
                        >HOLDING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="156"
                        class="question"
                        data-name="FRESH VEGETABLES"
                      >
                        <label
                          for=""
                          class="label"
                        >DISPLAY COUNTER TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="157"
                        class="question"
                        data-name="FRESH VEGETABLES"
                      >
                        <label
                          for=""
                          class="label"
                        >COOLERS TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="158"
                        class="question"
                        data-name="FRESH VEGETABLES"
                      >
                        <label
                          for=""
                          class="label"
                        >ICE CREAM SOFT SERV TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="159"
                        class="question"
                        data-name="FRESH VEGETABLES"
                      >
                        <label
                          for=""
                          class="label"
                        >DEEP FREEZER TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                    </tr>

                    <tr>
                      <td>RICE/FLOUR/OIL</td>
                      <td
                        id="160"
                        class="question"
                        data-name="RICE/FLOUR/OIL"
                      >
                        <label
                          for=""
                          class="label"
                        >RECV</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="161"
                        class="question"
                        data-name="RICE/FLOUR/OIL"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD STORE TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="162"
                        class="question"
                        data-name="RICE/FLOUR/OIL"
                      >
                        <label
                          for=""
                          class="label"
                        >THAWING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="163"
                        class="question"
                        data-name="RICE/FLOUR/OIL"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD ROOM TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="164"
                        class="question"
                        data-name="RICE/FLOUR/OIL"
                      >
                        <label
                          for=""
                          class="label"
                        >MARINATION TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="165"
                        class="question"
                        data-name="RICE/FLOUR/OIL"
                      >
                        <label
                          for=""
                          class="label"
                        >PORTION TIME</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="166"
                        class="question"
                        data-name="RICE/FLOUR/OIL"
                      >
                        <label
                          for=""
                          class="label"
                        >FRYING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="167"
                        class="question"
                        data-name="RICE/FLOUR/OIL"
                      >
                        <label
                          for=""
                          class="label"
                        >COOKING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="168"
                        class="question"
                        data-name="RICE/FLOUR/OIL"
                      >
                        <label
                          for=""
                          class="label"
                        >HOLDING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="169"
                        class="question"
                        data-name="RICE/FLOUR/OIL"
                      >
                        <label
                          for=""
                          class="label"
                        >DISPLAY COUNTER TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="170"
                        class="question"
                        data-name="RICE/FLOUR/OIL"
                      >
                        <label
                          for=""
                          class="label"
                        >COOLERS TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="171"
                        class="question"
                        data-name="RICE/FLOUR/OIL"
                      >
                        <label
                          for=""
                          class="label"
                        >ICE CREAM SOFT SERV TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="172"
                        class="question"
                        data-name="RICE/FLOUR/OIL"
                      >
                        <label
                          for=""
                          class="label"
                        >DEEP FREEZER TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                    </tr>

                    <tr>
                      <td>BEVERAGES/MINERAL</td>
                      <td
                        id="173"
                        class="question"
                        data-name="BEVERAGES/MINERAL"
                      >
                        <label
                          for=""
                          class="label"
                        >RECV</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="174"
                        class="question"
                        data-name="BEVERAGES/MINERAL"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD STORE TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="175"
                        class="question"
                        data-name="BEVERAGES/MINERAL"
                      >
                        <label
                          for=""
                          class="label"
                        >THAWING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="176"
                        class="question"
                        data-name="BEVERAGES/MINERAL"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD ROOM TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="177"
                        class="question"
                        data-name="BEVERAGES/MINERAL"
                      >
                        <label
                          for=""
                          class="label"
                        >MARINATION TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="178"
                        class="question"
                        data-name="BEVERAGES/MINERAL"
                      >
                        <label
                          for=""
                          class="label"
                        >PORTION TIME</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="179"
                        class="question"
                        data-name="BEVERAGES/MINERAL"
                      >
                        <label
                          for=""
                          class="label"
                        >FRYING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="180"
                        class="question"
                        data-name="BEVERAGES/MINERAL"
                      >
                        <label
                          for=""
                          class="label"
                        >COOKING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="181"
                        class="question"
                        data-name="BEVERAGES/MINERAL"
                      >
                        <label
                          for=""
                          class="label"
                        >HOLDING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="182"
                        class="question"
                        data-name="BEVERAGES/MINERAL"
                      >
                        <label
                          for=""
                          class="label"
                        >DISPLAY COUNTER TEMP</label>
                        <input
                          type="text"
                          class="form-control  grey"
                          disabled
                        ></td>
                      <td
                        id="183"
                        class="question"
                        data-name="BEVERAGES/MINERAL"
                      >
                        <label
                          for=""
                          class="label"
                        >COOLERS TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="184"
                        class="question"
                        data-name="BEVERAGES/MINERAL"
                      >
                        <label
                          for=""
                          class="label"
                        >ICE CREAM SOFT SERV TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="185"
                        class="question"
                        data-name="BEVERAGES/MINERAL"
                      >
                        <label
                          for=""
                          class="label"
                        >DEEP FREEZER TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                    </tr>

                    <tr>
                      <td>ICE CREAM</td>
                      <td
                        id="186"
                        class="question"
                        data-name="ICE CREAM"
                      >
                        <label
                          for=""
                          class="label"
                        >RECV</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="187"
                        class="question"
                        data-name="ICE CREAM"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD STORE TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="188"
                        class="question"
                        data-name="ICE CREAM"
                      >
                        <label
                          for=""
                          class="label"
                        >THAWING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="189"
                        class="question"
                        data-name="ICE CREAM"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD ROOM TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="190"
                        class="question"
                        data-name="ICE CREAM"
                      >
                        <label
                          for=""
                          class="label"
                        >MARINATION TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="191"
                        class="question"
                        data-name="ICE CREAM"
                      >
                        <label
                          for=""
                          class="label"
                        >PORTION TIME</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="192"
                        class="question"
                        data-name="ICE CREAM"
                      >
                        <label
                          for=""
                          class="label"
                        >FRYING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="193"
                        class="question"
                        data-name="ICE CREAM"
                      >
                        <label
                          for=""
                          class="label"
                        >COOKING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="194"
                        class="question"
                        data-name="ICE CREAM"
                      >
                        <label
                          for=""
                          class="label"
                        >HOLDING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="195"
                        class="question"
                        data-name="ICE CREAM"
                      >
                        <label
                          for=""
                          class="label"
                        >DISPLAY COUNTER TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="196"
                        class="question"
                        data-name="ICE CREAM"
                      >
                        <label
                          for=""
                          class="label"
                        >COOLERS TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="197"
                        class="question"
                        data-name="ICE CREAM"
                      >
                        <label
                          for=""
                          class="label"
                        >ICE CREAM SOFT SERV TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="198"
                        class="question"
                        data-name="ICE CREAM"
                      >
                        <label
                          for=""
                          class="label"
                        >DEEP FREEZER TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                    </tr>

                    <tr>
                      <td>BREAD/PASTRY</td>
                      <td
                        id="199"
                        class="question"
                        data-name="BREAD/PASTRY"
                      >
                        <label
                          for=""
                          class="label"
                        >RECV</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="200"
                        class="question"
                        data-name="BREAD/PASTRY"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD STORE TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="201"
                        class="question"
                        data-name="BREAD/PASTRY"
                      >
                        <label
                          for=""
                          class="label"
                        >THAWING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="202"
                        class="question"
                        data-name="BREAD/PASTRY"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD ROOM TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="203"
                        class="question"
                        data-name="BREAD/PASTRY"
                      >
                        <label
                          for=""
                          class="label"
                        >MARINATION TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="204"
                        class="question"
                        data-name="BREAD/PASTRY"
                      >
                        <label
                          for=""
                          class="label"
                        >PORTION TIME</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="205"
                        class="question"
                        data-name="BREAD/PASTRY"
                      >
                        <label
                          for=""
                          class="label"
                        >FRYING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="206"
                        class="question"
                        data-name="BREAD/PASTRY"
                      >
                        <label
                          for=""
                          class="label"
                        >COOKING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="207"
                        class="question"
                        data-name="BREAD/PASTRY"
                      >
                        <label
                          for=""
                          class="label"
                        >HOLDING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="208"
                        class="question"
                        data-name="BREAD/PASTRY"
                      >
                        <label
                          for=""
                          class="label"
                        >DISPLAY COUNTER TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="209"
                        class="question"
                        data-name="BREAD/PASTRY"
                      >
                        <label
                          for=""
                          class="label"
                        >COOLERS TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="210"
                        class="question"
                        data-name="BREAD/PASTRY"
                      >
                        <label
                          for=""
                          class="label"
                        >ICE CREAM SOFT SERV TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="211"
                        class="question"
                        data-name="BREAD/PASTRY"
                      >
                        <label
                          for=""
                          class="label"
                        >DEEP FREEZER TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                    </tr>

                    <tr>
                      <td>SALADS/SANDWICH</td>
                      <td
                        id="212"
                        class="question"
                        data-name="SALADS/SANDWICH"
                      >
                        <label
                          for=""
                          class="label"
                        >RECV</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="213"
                        class="question"
                        data-name="SALADS/SANDWICH"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD STORE TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="214"
                        class="question"
                        data-name="SALADS/SANDWICH"
                      >
                        <label
                          for=""
                          class="label"
                        >THAWING TEMP</label>
                        <input
                          type="text"
                          class="form-control  grey"
                          disabled
                        ></td>
                      <td
                        id="215"
                        class="question"
                        data-name="SALADS/SANDWICH"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD ROOM TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="216"
                        class="question"
                        data-name="SALADS/SANDWICH"
                      >
                        <label
                          for=""
                          class="label"
                        >MARINATION TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="217"
                        class="question"
                        data-name="SALADS/SANDWICH"
                      >
                        <label
                          for=""
                          class="label"
                        >PORTION TIME</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="218"
                        class="question"
                        data-name="SALADS/SANDWICH"
                      >
                        <label
                          for=""
                          class="label"
                        >FRYING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="219"
                        class="question"
                        data-name="SALADS/SANDWICH"
                      >
                        <label
                          for=""
                          class="label"
                        >COOKING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="220"
                        class="question"
                        data-name="SALADS/SANDWICH"
                      >
                        <label
                          for=""
                          class="label"
                        >HOLDING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="221"
                        class="question"
                        data-name="SALADS/SANDWICH"
                      >
                        <label
                          for=""
                          class="label"
                        >DISPLAY COUNTER TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="222"
                        class="question"
                        data-name="SALADS/SANDWICH"
                      >
                        <label
                          for=""
                          class="label"
                        >COOLERS TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="223"
                        class="question"
                        data-name="SALADS/SANDWICH"
                      >
                        <label
                          for=""
                          class="label"
                        >ICE CREAM SOFT SERV TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="224"
                        class="question"
                        data-name="SALADS/SANDWICH"
                      >
                        <label
                          for=""
                          class="label"
                        >DEEP FREEZER TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                    </tr>

                    <tr>
                      <td>BURGER PATTY</td>
                      <td
                        id="225"
                        class="question"
                        data-name="BURGER PATTY"
                      >
                        <label
                          for=""
                          class="label"
                        >RECV</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="226"
                        class="question"
                        data-name="BURGER PATTY"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD STORE TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="227"
                        class="question"
                        data-name="BURGER PATTY"
                      >
                        <label
                          for=""
                          class="label"
                        >THAWING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="228"
                        class="question"
                        data-name="BURGER PATTY"
                      >
                        <label
                          for=""
                          class="label"
                        >COLD ROOM TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="229"
                        class="question"
                        data-name="BURGER PATTY"
                      >
                        <label
                          for=""
                          class="label"
                        >MARINATION TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="230"
                        class="question"
                        data-name="BURGER PATTY"
                      >
                        <label
                          for=""
                          class="label"
                        >PORTION TIME</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="231"
                        class="question"
                        data-name="BURGER PATTY"
                      >
                        <label
                          for=""
                          class="label"
                        >FRYING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="232"
                        class="question"
                        data-name="BURGER PATTY"
                      >
                        <label
                          for=""
                          class="label"
                        >COOKING TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="233"
                        class="question"
                        data-name="BURGER PATTY"
                      >
                        <label
                          for=""
                          class="label"
                        >HOLDING TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="234"
                        class="question"
                        data-name="BURGER PATTY"
                      >
                        <label
                          for=""
                          class="label"
                        >DISPLAY COUNTER TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                      <td
                        id="235"
                        class="question"
                        data-name="BURGER PATTY"
                      >
                        <label
                          for=""
                          class="label"
                        >COOLERS TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="236"
                        class="question"
                        data-name="BURGER PATTY"
                      >
                        <label
                          for=""
                          class="label"
                        >ICE CREAM SOFT SERV TEMP</label>
                        <input
                          type="text"
                          class="form-control grey"
                          disabled
                        ></td>
                      <td
                        id="237"
                        class="question"
                        data-name="BURGER PATTY"
                      >
                        <label
                          for=""
                          class="label"
                        >DEEP FREEZER TEMP</label>
                        <input
                          type="text"
                          class="form-control"
                        ></td>
                    </tr>

                  </tbody>

                </table>

                <div
                  id="238"
                  class="form-group col-sm-6 col-md-4 question"
                  data-name="Closing Time"
                >
                  <label class="col-xs-4 col-form-label">Closing
                    Time</label>
                  <div class="col-xs-8">
                    <input
                      type="time"
                      class="form-control"
                    >
                  </div>
                </div>
                <div class="form-group col-sm-6 col-md-4 ">
                  <label class="col-xs-4 col-form-label">Closing
                    Stock</label>
                  <div
                    class="col-xs-8 question"
                    id="239"
                    data-name="Closing Stock"
                  >
                    <label
                      for=""
                      class="label"
                    >DONE/NOT DONE</label>
                    <label for="">DONE</label>
                    <input
                      type="radio"
                      name="cr"
                      value="done"
                    >
                    &nbsp;&nbsp;
                    <label for="">NOT DONE</label>
                    <input
                      type="radio"
                      name="cr"
                      value="not done"
                    >
                  </div>
                </div>

                <div class="form-group col-sm-6 col-md-4 ">
                  <label class="col-xs-4 col-form-label">Security
                    Verify</label>
                  <div
                    class="col-xs-8 question"
                    id="240"
                    data-name="Closing Stock"
                  >
                    <label
                      for=""
                      class="label"
                    >Security Verify</label>
                    <input
                      type="checkbox"
                      id="inline-checkbox"
                      value="yes"
                    >
                  </div>
                </div>

                <div
                  id="241"
                  class="form-group col-sm-6 question"
                  data-name="Gen. Off Time"
                >
                  <label class="col-xs-4 col-form-label">Gen. Off
                    Time</label>
                  <div class="col-xs-8">
                    <input
                      type="time"
                      class="form-control"
                    >
                  </div>
                </div>

                <div
                  id="242"
                  class="form-group col-sm-6 question"
                  data-name="Remarks"
                >
                  <label class="col-xs-4 col-form-label">Remarks</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>

                <div
                  id="243"
                  class="form-group col-sm-6 question"
                  data-name="Audit"
                >
                  <label class="col-xs-4 col-form-label">Audit</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
                      v-model="username"
                    >
                  </div>
                </div>
                <div
                  id="244"
                  class="form-group col-sm-6 question"
                  data-name="Closing Manager"
                >
                  <label class="col-xs-4 col-form-label">Closing
                    Manager</label>
                  <div class="col-xs-8">
                    <input
                      type="text"
                      class="form-control"
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
      // var html =
      //   '<img src="https://freefrontend.com/assets/img/css-loaders/css-fun-Little-loader.gif"/>';

      // this.$swal.fire({
      //   title: "Processing",
      //   html: html,
      //   showConfirmButton: false,
      //   showCancelButton: false,
      //   width: "380px",
      //   allowOutsideClick: false
      // });

      NodeList.prototype.forEach = Array.prototype.forEach;
      let newForm = this.form;
      var divs = document.querySelectorAll('.question').forEach(function (el) {
        let label = el.childNodes[0].innerText;
        let qtext = el.dataset.name.replace(/\n/g, ' ');
        let ans;
        // console.log(el.childNodes)
        if (el.childNodes.length == 2) {
          if (el.childNodes[1].localName == "div") {
            ans = el.childNodes[1].childNodes[0].value;
          }
          else {
            ans = el.childNodes[1].value;
          }
        }
        if (el.childNodes.length == 6) {

          for (let i = 1; i < el.childNodes.length; i++) {
            if (el.childNodes[i].localName == "input" && el.childNodes[i].checked) {
              ans = el.childNodes[i].value;
            }
            else {
              ans = "";
            }

          }
        }
        let index = el.id;

        if (ans == undefined) {
          // console.log(index)
        }



        newForm.question_answer.push({
          questionno: index,
          questiontext: qtext,
          questionlabel: label,
          answer: ans,
        })
      });

      var req = {
        what: "redbook",
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
          this.form = {
            store_id: "",
            question_answer: []
          }
          this.$swal.fire("Error", error.message, "error");

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
table.red thead th,
table.red tbody td {
  font-size: 9px !important;
  padding: 0;
}
.grey {
  background-color: #e9ecef !important;
  border: none;
}
</style>
