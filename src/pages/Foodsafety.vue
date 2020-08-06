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
            <h4 class="title">FOOD SAFETY & SERVICE CHECKLIST</h4>
          </md-card-header>
          <md-card-content>

            <form
              id="foodSafety"
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
                  data-name="Auditor Name"
                >
                  <label class="col-4 col-form-label">Auditor's Name</label>
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control"
                      v-model="username"
                      title="enter inspector's name"
                    >
                  </div>
                </div>
                <div
                  id="2"
                  class="form-group row question"
                  data-name="Shop Name"
                >
                  <label class="col-4 col-form-label">Shop</label>
                  <div class="col-8">
                    <select
                      class="form-control"
                      id="location"
                      v-model="form.store_id"
                      title="select store visited"
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

                    </select>
                  </div>
                </div>
                <div
                  id="3"
                  class="form-group row question"
                  data-name="Date"
                >
                  <label
                    for="inputPassword"
                    class="col-4 col-form-label"
                  >Date</label>
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control"
                      id="date"
                      disabled
                      required
                    >
                  </div>
                </div>

                <div>
                  <h5 class="subtitle">Direction</h5>
                  <p>This checklist is used to determine areas in Operations requiring
                    corrective action. Record
                    corrective action taken and keep completed records in a file for future
                    reference.</p>
                </div>
                <div>
                  <h5 class="subtitle"><u>Scoring</u></h5>
                  <ol class="d-flex justify-content-between">
                    <li>Unacceptable</li>
                    <li>Fair</li>
                    <li>Satisfactory</li>
                    <li>Good</li>
                    <li>Exceeds expectations</li>
                  </ol>
                </div>
                <div>
                  <h5 class="subtitle"><u>A. HYGIENE AND SANITATION</u></h5>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1 text-bold">1.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5 text-bold"> PERSONAL HYGIENE </p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold"> &nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5</p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">Remarks</p>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">a.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Employees wear clean and proper
                      uniform
                      including
                      shoes.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="4"
                        class="hygiene col-form-check form-check-inline question"
                        data-name="Employees wear clean and proper uniform including shoes."
                      >
                        <label
                          for=""
                          class="label"
                        >PERSONAL HYGIENE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox100"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox100"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox100"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox100"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox100"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="5"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Employees wear clean and proper uniform including shoes."
                    >
                      <label
                        for="inp"
                        class="label"
                      >Remarks</label>
                      <input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">b.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Effective hair restraints are
                      properly worn</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="6"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Effective hair restraints are properly worn"
                      ><label
                          for=""
                          class="label"
                        >PERSONAL HYGIENE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox1"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox1"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox1"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox1"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox1"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="7"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Effective hair restraints are properly worn"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">c.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Fingernails are short, unpolished,
                      and clean (no artificial nails).</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="8"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Fingernails are short, unpolished, and clean (no artificial nails)."
                      ><label
                          for=""
                          class="label"
                        >PERSONAL HYGIENE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox2"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox2"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox2"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox2"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox2"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="9"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Fingernails are short, unpolished, and clean (no artificial nails)."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">d.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">No jewelry like ring, hand band,
                      watch
                      or bracelets worn by staff.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="10"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="No jewelry like ring, hand band,  watch  or bracelets worn by staff."
                      ><label
                          for=""
                          class="label"
                        >PERSONAL HYGIENE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox3"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox3"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox3"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox3"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox3"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="11"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="No jewelry like ring, hand band, watch or bracelets worn by staff."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">e.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Hands are washed properly,
                      frequently, and at appropriate times.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="12"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Hands are washed properly, frequently, and at appropriate times."
                      ><label
                          for=""
                          class="label"
                        >PERSONAL HYGIENE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox4"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox4"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox4"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox4"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox4"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="13"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Hands are washed properly, frequently, and at appropriate times."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">f.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Burns, wounds, sores or scabs, or
                      splints and water-proof bandages
                      on hands are bandaged and completely covered with a foodservice
                      glove while handling food.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="14"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Burns, wounds, sores or scabs, or splints and water-proof bandages on hands are bandaged and completely covered with a foodservice glove while handling food."
                      ><label
                          for=""
                          class="label"
                        >PERSONAL HYGIENE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox5"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox5"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox5"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox5"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox5"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="15"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Burns, wounds, sores or scabs, or plints and water-proof bandages on hands are bandaged and completely covered with a foodservice glove while handling food."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">g.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Eating, drinking, chewing gum,
                      smoking, or using tobacco not
                      allowed only in designated areas away from preparation, service,
                      storage, and ware washing areas.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="16"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Eating, drinking, chewing gum, smoking, or using tobacco not allowed only in designated areas away from preparation, service, storage, and ware washing areas."
                      ><label
                          for=""
                          class="label"
                        >PERSONAL HYGIENE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox6"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox6"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox6"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox6"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox6"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="17"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Eating, drinking, chewing gum, smoking, or using tobacco not allowed only in designated areas away from preparation, service, storage, and ware washing areas."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">h.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Employees use disposable tissues
                      when coughing or sneezing and
                      then immediately wash hands.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="18"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Employees use disposable tissues when coughing or sneezing and then immediately wash hands."
                      ><label
                          for=""
                          class="label"
                        >PERSONAL HYGIENE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox7"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox7"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox7"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox7"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox7"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="19"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Employees use disposable tissues when coughing or sneezing and then immediately wash hands."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">i.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Employees appear in good health.
                    </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="20"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Employees appear in good health."
                      ><label
                          for=""
                          class="label"
                        >PERSONAL HYGIENE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox8"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox8"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox8"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox8"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox8"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="21"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Employees appear in good health."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">j.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Hand sinks are unobstructed,
                      operational and clean.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="22"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Hand sinks are unobstructed, operational and clean."
                      ><label
                          for=""
                          class="label"
                        >PERSONAL HYGIENE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox9"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox9"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox9"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox9"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox9"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="23"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Hand sinks are unobstructed, operational and clean."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">k.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Hand sinks are stocked with soap,
                      disposable towels, and warm water</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="24"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Hand sinks are stocked with soap, disposable towels, and warm water"
                      ><label
                          for=""
                          class="label"
                        >PERSONAL HYGIENE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox10"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox10"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox10"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox10"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox10"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="25"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Hand sinks are stocked with soap, disposable towels, and warm water"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">l.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">A handwashing reminder sign is
                      posted.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="26"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="A handwashing reminder sign is posted."
                      ><label
                          for=""
                          class="label"
                        >PERSONAL HYGIENE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox11"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox11"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox11"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox11"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox11"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="27"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="A handwashing reminder sign is posted."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">m.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are BOH crew in approved PPE
                      aprons and caps?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="28"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are BOH crew in approved PPE aprons and caps?"
                      ><label
                          for=""
                          class="label"
                        >PERSONAL HYGIENE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox12"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox12"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox12"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox12"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox12"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="29"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are BOH crew in approved PPE prons and caps?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                </div>
                <hr>
                <div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1 text-bold">2.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5 text-bold">HOT HOLDING </p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5</p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">Remarks</p>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">a.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Hot holding unit and display is
                      clean.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="30"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Hot holding unit and display is clean"
                      ><label
                          for=""
                          class="label"
                        >HOT HOLDING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox13"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox13"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox13"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox13"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox13"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="31"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Hot holding unit and display is clean"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">b.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Food is heated to the required
                      safe internal
                      temperature before
                      placing in hot holding. Hot holding units are not used to reheat
                      potentially hazardous foods like chicken and fish.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="32"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Food is heated to the required safe internal temperature before placing in hot holding. Hot holding units are not used to reheat potentially hazardous foods like chicken and fish."
                      ><label
                          for=""
                          class="label"
                        >HOT HOLDING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox14"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox14"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox14"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox14"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox14"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="33"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Food is heated to the required safe internal temperature before placing in hot holding. Hot holding units are not used to reheat potentially hazardous foods like chicken and fish."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">c.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Hot holding unit is pre-heated
                      before hot food is
                      placed in unit</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="34"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Hot holding unit is pre-heated before hot food is placed in unit"
                      ><label
                          for=""
                          class="label"
                        >HOT HOLDING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox15"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox15"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox15"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox15"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox15"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="35"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Hot holding unit is pre-heated before hot food is placed in unit"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">d.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Temperature of hot food being held
                      is at or above 60ºC.
                    </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="36"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Temperature of hot food being held is at or above 60ºC."
                      ><label
                          for=""
                          class="label"
                        >HOT HOLDING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox16"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox16"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox16"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox16"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox16"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="37"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Temperature of hot food being held is at or above 60ºC. "
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">e.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Food is protected from
                      contamination by proper
                      separation in warmer. </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="38"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Food is protected from contamination by proper separation in warmer. "
                      ><label
                          for=""
                          class="label"
                        >HOT HOLDING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox17"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox17"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox17"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox17"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox17"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="39"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Food is protected from contamination by proper separation in warmer. "
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                </div>
                <hr>
                <div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1 text-bold">3.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5 text-bold">COLD HOLDING </p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5</p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">Remarks</p>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">a.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Refrigerators, cold rooms are kept
                      clean and organized.
                    </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="40"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Refrigerators, cold rooms are kept clean and organized."
                      ><label
                          for=""
                          class="label"
                        >COLD HOLDING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox18"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox18"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox18"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox18"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox18"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="41"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Refrigerators, cold rooms are kept clean and organized."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">b.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Temperature of cold food being
                      held is at or below 5ºC.
                    </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="42"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Temperature of cold food being held is at or below 5ºC."
                      ><label
                          for=""
                          class="label"
                        >COLD HOLDING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox19"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox19"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox19"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox19"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox19"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="43"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Temperature of cold food being held is at or below 5ºC."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">c.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Food is protected from
                      contamination by proper
                      separation and
                      coverage.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="44"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Food is protected from contamination by proper separation and coverage."
                      ><label
                          for=""
                          class="label"
                        >COLD HOLDING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox20"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox20"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox20"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox20"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox20"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="45"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Food is protected from contamination by proper separation and coverage."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">d.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Is the RED book properly filled
                      and all values entered
                      real time?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="46"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Is the RED book properly filled and all values entered real time?"
                      ><label
                          for=""
                          class="label"
                        >COLD HOLDING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox21"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox21"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox21"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox21"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox21"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="47"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is the RED book properly filled and all values entered real time?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>

                </div>
                <hr>
                <div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1 text-bold">4.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5 text-bold"> REFRIGERATOR, FREEZER, AND COLD ROOM </p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5</p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">Remarks</p>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">a.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are Manager using the thermometers
                      and is it available
                      and accurate.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="48"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are Manager using the thermometers and is it available and accurate."
                      ><label
                          for=""
                          class="label"
                        >REFRIGERATOR, FREEZER, AND COLD ROOM</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox22"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox22"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox22"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox22"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox22"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="49"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are Manager using the thermometers and is it available and accurate."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">b.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Are temperatures appropriate for
                      ALL products in cold
                      storage?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="50"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are temperatures appropriate for ALL products in cold  storage?"
                      ><label
                          for=""
                          class="label"
                        ><label
                            for=""
                            class="label"
                          >REFRIGERATOR, FREEZER, AND COLD ROOM</label></label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox23"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox23"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox23"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox23"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox23"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="51"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are temperatures appropriate for ALL products in cold storage?"
                    ><label
                        for="
                      inp"
                        class=" label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">c.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are Raw materials stored on
                      pallets off the floor in
                      the cold room?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="52"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are Raw materials stored on pallets off the floor in the cold room?"
                      ><label
                          for=""
                          class="label"
                        ><label
                            for=""
                            class="label"
                          >REFRIGERATOR, FREEZER, AND COLD ROOM</label></label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox24"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox24"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox24"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox24"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox24"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="53"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are Raw materials stored on pallets off the floor in the cold room?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">d.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are refrigerator, freezer and cold
                      room unit clean and
                      neat?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="54"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="re refrigerator, freezer and cold room unit clean and neat?"
                      ><label
                          for=""
                          class="label"
                        >REFRIGERATOR, FREEZER, AND COLD ROOM</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox25"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox25"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox25"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox25"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox25"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="55"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="re refrigerator, freezer and cold room unit clean and  neat?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">e.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are proper chilling procedures
                      used?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="56"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are proper chilling procedures used?"
                      ><label
                          for=""
                          class="label"
                        >REFRIGERATOR, FREEZER, AND COLD ROOM</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox26"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox26"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox26"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox26"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox26"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="57"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are proper chilling procedures used?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">f.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are all food properly wrapped,
                      labeled and dated?.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="58"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are all food properly wrapped, labeled and dated?."
                      ><label
                          for=""
                          class="label"
                        >REFRIGERATOR, FREEZER, AND COLD ROOM</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox27"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox27"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox27"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox27"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox27"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="59"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are all food properly wrapped, labeled and dated?."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">g.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Is the FIFO (First In, First Out)
                      method of inventory
                      management is
                      Used is the cold and dry stores?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="60"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Is the FIFO (First In, First Out) method of inventory management is Used is the cold and dry stores?"
                      ><label
                          for=""
                          class="label"
                        >REFRIGERATOR, FREEZER, AND COLD ROOM</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox28"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox28"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox28"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox28"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox28"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="61"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is the FIFO (First In, First Out) method of inventory management is Used is the cold and dry stores?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">h.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are all product temperatures in
                      all refrigerators,
                      freezers and cold room
                      monitored and documented in the red book at recommended
                      period during.
                    </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="62"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are all product temperatures in all refrigerators, freezers and cold room monitored and documented in the red book at recommended period during."
                      ><label
                          for=""
                          class="label"
                        >REFRIGERATOR, FREEZER, AND COLD ROOM</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox29"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox29"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox29"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox29"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox29"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="63"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are all product temperatures in all refrigerators, freezers and cold room monitored and documented in the red book at recommended period during."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">i.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are canned food stored in original
                      container or in food
                      grade plastic .</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="64"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are canned food stored in original container or in food grade plastic ."
                      ><label
                          for=""
                          class="label"
                        >REFRIGERATOR, FREEZER, AND COLD ROOM</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox30"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox30"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox30"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox30"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox30"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="65"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are canned food stored in original container or in food grade plastic ."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                </div>
                <hr>
                <div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1 text-bold">5.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5 text-bold"> CLEANING AND SANITIZING
                    </p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5</p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">Remarks</p>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">a.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Is the 3-compartment sink properly
                      set up for ware
                      washing
                      with sanitizers.
                    </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="66"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Is the 3-compartment sink properly set up for ware washing with sanitizers."
                      ><label
                          for=""
                          class="label"
                        >CLEANING AND SANITIZING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox31"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox31"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox31"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox31"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox31"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="67"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is the 3-compartment sink properly set up for ware washing with sanitizers."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">b.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Is Kitchen water clean and free of
                      grease, particles
                      and other particles? </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="68"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Is Kitchen water clean and free of grease, particles and other particles? "
                      ><label
                          for=""
                          class="label"
                        >CLEANING AND SANITIZING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox32"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox32"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox32"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox32"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox32"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="69"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is Kitchen water clean and free of grease, particles and other particles? "
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">c.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Is water temperature correct for
                      wash and rinse?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="70"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Is water temperature correct for wash and rinse?"
                      ><label
                          for=""
                          class="label"
                        >CLEANING AND SANITIZING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox33"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox33"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox33"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox33"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox33"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="71"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is water temperature correct for wash and rinse?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">d.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are chemical sanitizer used in the
                      wash sinks, cash
                      points and
                      fryer areas?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="72"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are chemical sanitizer used in the wash sinks, cash points and fryer areas?"
                      ><label
                          for=""
                          class="label"
                        >CLEANING AND SANITIZING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox34"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox34"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox34"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox34"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox34"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="73"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are chemical sanitizer used in the wash sinks, cash points and fryer areas?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">e.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are small ware and utensils
                      allowed to air dry or
                      properly wiped
                      with clean napkin?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="74"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name=" Are small ware and utensils allowed to air dry orproperly wiped with clean napkin?"
                      ><label
                          for=""
                          class="label"
                        >CLEANING AND SANITIZING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox35"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox35"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox35"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox35"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox35"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="75"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are small ware and utensils allowed to air dry orproperly wiped with clean napkin?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">f.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are wiping cloths are stored in
                      sanitizing solution
                      while in use.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="76"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are wiping cloths are stored in sanitizing solution while in use."
                      ><label
                          for=""
                          class="label"
                        >CLEANING AND SANITIZING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox36"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox36"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox36"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox36"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox36"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="77"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are wiping cloths are stored in sanitizing solution while in use."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>

                </div>
                <hr>
                <div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1 text-bold">6.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5 text-bold"> EXTERIOR AREAS </p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5</p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">Remarks</p>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">a.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Is the external surrounding and
                      the car park well
                      illuminated?
                      .</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="78"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Is the external surrounding and the car park well illuminated?"
                      ><label
                          for=""
                          class="label"
                        >EXTERIOR AREAS</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox37"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox37"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox37"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox37"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox37"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="79"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is the external surrounding and the car park well illuminated?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">b.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are steps, grounds and parking lot
                      floors in good
                      repair, free of holes
                      or obstruction and well illuminated.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="80"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are steps, grounds and parking lot floors in good repair, free of holes or obstruction and well illuminated."
                      ><label
                          for=""
                          class="label"
                        >EXTERIOR AREAS</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox38"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox38"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox38"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox38"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox38"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="81"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are steps, grounds and parking lot floors in good repair, free of holes or obstruction and well illuminated."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">c.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Is generator area kept clean and
                      free of scraps and
                      clutter? </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="82"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Is generator area kept clean and free of scraps and clutter?"
                      ><label
                          for=""
                          class="label"
                        >EXTERIOR AREAS</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox39"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox39"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox39"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox39"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox39"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="83"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is generator area kept clean and free of scraps and clutter?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">d.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are all the drains cleaned up,
                      well maintained and free
                      of debris? </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="84"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are all the drains cleaned up, well maintained and free of debris?"
                      ><label
                          for=""
                          class="label"
                        >EXTERIOR AREAS</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox40"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox40"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox40"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox40"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox40"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="85"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are all the drains cleaned up, well maintained and free of debris?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>

                </div>
                <hr>
                <div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1 text-bold">7.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5 text-bold"> LOCKER ROOM AND BATH ROOMS </p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5</p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">Remarks</p>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">a.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are the lockers ok, well
                      maintained and in good order?
                      .</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="86"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are the lockers ok, well maintained and in good order?"
                      ><label
                          for=""
                          class="label"
                        >LOCKER ROOM AND BATH ROOMS</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox41"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox41"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox41"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox41"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox41"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="87"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are the lockers ok, well maintained and in good order?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">b.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are the locker rooms kept clean
                      and free of foul odour?
                    </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="88"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are the locker rooms kept clean and free of foul odour?"
                      ><label
                          for=""
                          class="label"
                        >LOCKER ROOM AND BATH ROOMS</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox42"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox42"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox42"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox42"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox42"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="89"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are the locker rooms kept clean and free of foul odour?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">c.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are the bath rooms and toilets
                      clean and well refreshed
                      including
                      customer toilets? </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="90"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are the bath rooms and toilets clean and well refreshed including customer toilets?"
                      ><label
                          for=""
                          class="label"
                        >LOCKER ROOM AND BATH ROOMS</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox43"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox43"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox43"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox43"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox43"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="91"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are the bath rooms and toilets clean and well refreshed including customer toilets?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">d.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are the showers and taps flowing
                      and functional?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="92"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are the showers and taps flowing and functional?"
                      ><label
                          for=""
                          class="label"
                        >LOCKER ROOM AND BATH ROOMS</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox44"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox44"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox44"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox44"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox44"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="93"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are the showers and taps flowing  and functional?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>

                </div>
                <hr>
                <div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1 text-bold">8.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5 text-bold">UTENSILS AND EQUIPMENT
                    </p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5</p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">Remarks</p>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">a.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are all small equipment and
                      utensils, including cutting
                      boards and
                      knives, cleaned and sanitized between use and air dried?.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="94"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are all small equipment and utensils, including cutting boards and knives, cleaned and sanitized between use and air dried?"
                      ><label
                          for=""
                          class="label"
                        >UTENSILS AND EQUIPMENT</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox45"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox45"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox45"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox45"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox45"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="95"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are all small equipment and utensils, including cutting boards and knives, cleaned and sanitized between use and air dried?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">b.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Are all pots and burners cleaned
                      and glowing with blue
                      flame?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="96"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are all pots and burners cleaned and glowing with blue flame?"
                      ><label
                          for=""
                          class="label"
                        >UTENSILS AND EQUIPMENT</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox46"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox46"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox46"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox46"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox46"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="97"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are all pots and burners cleaned and glowing with blue flame?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">c.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are deep fryers, BOH fridge and
                      ovens clean? </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="98"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are deep fryers, BOH fridge and ovens clean?"
                      ><label
                          for=""
                          class="label"
                        >UTENSILS AND EQUIPMENT</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox47"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox47"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox47"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox47"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox47"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="99"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are deep fryers, BOH fridge and ovens clean?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">d.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are work surfaces cleaned and
                      sanitized between use</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="100"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are work surfaces cleaned and sanitized between use"
                      ><label
                          for=""
                          class="label"
                        >UTENSILS AND EQUIPMENT</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox48"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox48"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox48"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox48"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox48"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="101"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are work surfaces cleaned and sanitized between use"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">e.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Are thermometers calibrated,
                      cleaned and sanitized
                      after each use </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="102"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are thermometers calibrated, cleaned and sanitized after each use "
                      ><label
                          for=""
                          class="label"
                        >UTENSILS AND EQUIPMENT</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox49"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox49"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox49"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox49"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox49"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="103"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are thermometers calibrated, cleaned and sanitized after each use "
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">f.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Is can opener clean?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="104"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Is can opener clean?"
                      ><label
                          for=""
                          class="label"
                        >UTENSILS AND EQUIPMENT</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox50"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox50"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox50"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox50"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox50"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="105"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is can opener clean?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">g.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Are drawers and racks clean? </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="106"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are drawers and racks clean? "
                      ><label
                          for=""
                          class="label"
                        >UTENSILS AND EQUIPMENT</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox51"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox51"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox51"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox51"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox51"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="107"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are drawers and racks clean? "
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                </div>
                <hr>
                <div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1 text-bold">9.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5 text-bold">LARGE EQUIPMENT </p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5</p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">Remarks</p>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">a.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Is toaster and blender clean?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="108"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Is toaster and blender clean?"
                      ><label
                          for=""
                          class="label"
                        >LARGE EQUIPMENT</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox52"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox52"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox52"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox52"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox52"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="109"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is toaster and blender clean?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">b.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Is grinding machine opened,
                      cleaned, and sanitized 3ce
                      weekly </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="110"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Is grinding machine opened, cleaned, and sanitized 3ce weekly"
                      ><label
                          for=""
                          class="label"
                        >LARGE EQUIPMENT</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox53"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox53"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox53"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox53"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox53"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="111"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is grinding machine opened, cleaned, and sanitized 3ce weekly"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">c.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are boxes, containers, and
                      recyclables removed from
                      site? </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="112"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are boxes, containers, and recyclables removed from site? "
                      ><label
                          for=""
                          class="label"
                        >LARGE EQUIPMENT</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox54"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox54"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox54"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox54"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox54"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="113"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are boxes, containers, and recyclables removed from site?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">d.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Is the hot water heater working
                      efficiently and in good
                      order?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="114"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Is the hot water heater working efficiently and in good order?"
                      ><label
                          for=""
                          class="label"
                        >LARGE EQUIPMENT</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox55"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox55"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox55"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox55"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox55"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="115"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is the hot water heater working efficiently and in good order?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">e.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Are exhaust hood, grills and
                      filters of extractor
                      clean? </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="116"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are exhaust hood, grills and filters of extractor clean?"
                      ><label
                          for=""
                          class="label"
                        >LARGE EQUIPMENT</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox56"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox56"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox56"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox56"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox56"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="117"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are exhaust hood, grills and filters of extractor clean?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">f.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Are all visible plugs and sockets
                      functional and in
                      good order? </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="118"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are all visible plugs and sockets functional and in good order?"
                      ><label
                          for=""
                          class="label"
                        >LARGE EQUIPMENT</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox57"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox57"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox57"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox57"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox57"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="119"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are all visible plugs and sockets functional and in good order?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>

                </div>
                <hr>
                <div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1 text-bold">10.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5 text-bold">GARBAGE STORAGE AND DISPOSAL
                    </p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5</p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">Remarks</p>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">a.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Is the kitchen garbage bucket
                      clean, lined and kept
                      covered? </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="120"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Is the kitchen garbage bucket clean, lined and kept covered?"
                      ><label
                          for=""
                          class="label"
                        >GARBAGE STORAGE AND DISPOSAL</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox58"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox58"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox58"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox58"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox58"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="121"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is the kitchen garbage bucket clean, lined and kept covered?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">b.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Is the garbage bin and dump area
                      clean and odour-free.
                    </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="122"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Is the garbage bin and dump area clean and odour-free."
                      ><label
                          for=""
                          class="label"
                        >GARBAGE STORAGE AND DISPOSAL</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox59"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox59"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox59"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox59"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox59"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="123"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is the garbage bin and dump area clean and odour-free."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">c.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are garbage bucket emptied as
                      necessary? </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="124"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Are garbage bucket emptied as necessary?"
                      ><label
                          for=""
                          class="label"
                        >GARBAGE STORAGE AND DISPOSAL</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox60"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox60"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox60"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox60"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox60"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="125"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are garbage bucket emptied as necessary?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>

                </div>
                <hr>
                <div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1 text-bold">11.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5 text-bold">PEST CONTROL </p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5</p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">Remarks</p>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">a.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Is there any evidence of rodent
                      and insect pest in the
                      shop? </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="126"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Is there any evidence of rodent and insect pest in the shop?"
                      ><label
                          for=""
                          class="label"
                        >PEST CONTROL</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox61"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox61"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox61"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox61"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox61"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="127"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is there any evidence of rodent and insect pest in the shop?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">b.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Is there a regular schedule of
                      pest control by a
                      licensed pest control?
                      operator with evidence of fumigation certificates in the shop?
                    </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="128"
                        class=" hygiene col-form-check form-check-inline question"
                        data-name="Is there a regular schedule of pest control by a licensed pest control? operator with evidence of fumigation certificates in the shop?"
                      ><label
                          for=""
                          class="label"
                        >PEST CONTROL</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox62"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox62"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox62"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox62"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox62"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="129"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is there a regular schedule of pest control by a licensed pest control? operator with evidence of fumigation certificates in the shop?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="d-flex">
                    <p
                      id="130"
                      class="score subtitle question question-hygiene"
                      data-name="score earned"
                    >
                      <label
                        for=""
                        class="label"
                      >hygiene and sanitation</label>
                      Score earned
                      <input
                        type="text"
                        disabled
                        class="form-control"
                        v-model="scores.scoreA"
                      ></p>
                    <p
                      id="131"
                      class="score subtitle question question-hygiene"
                      data-name="percent earned"
                    >
                      <label
                        for=""
                        class="label"
                      >hygiene and sanitation</label> Percent earned <input
                        type="text"
                        disabled
                        class="form-control"
                        v-model="percents.A"
                      ></p>
                  </div>

                </div>
                <hr>
                <!-- house keeping -->

                <div>
                  <h4 class="subtitle"><u>B. HOUSE KEEPING</u></h4>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1 text-bold">12.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5 text-bold"> DRY FOOD STORAGE </p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5</p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">Remarks</p>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">a.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are all stocks properly and
                      securely stacked; stored
                      racks and on
                      pallets 6 to 8 inches off the floor?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="132"
                        class=" house col-form-check form-check-inline question"
                        data-name="Are all stocks properly and securely stacked; stored racks and on pallets 6 to 8 inches off the floor?"
                      ><label
                          for=""
                          class="label"
                        >DRY FOOD STORAGE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox63"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox63"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox63"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox63"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox63"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="133"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are all stocks properly and securely stacked; stored racks and on  pallets 6 to 8 inches off the floor?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">b.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Good housekeeping maintained,
                      aisles clear, storage
                      room orderly,
                      Floors free of debris</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="134"
                        class=" house col-form-check form-check-inline question"
                        data-name="Good housekeeping maintained, aisles clear, storage room orderly, Floors free of debris"
                      ><label
                          for=""
                          class="label"
                        >DRY FOOD STORAGE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox64"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox64"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox64"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox64"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox64"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="135"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Good housekeeping maintained, aisles clear, storage room orderly, Floors free of debris"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">c.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Shelving racks in good repair and
                      secured to avoid
                      tipping</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="136"
                        class=" house col-form-check form-check-inline question"
                        data-name="Shelving racks in good repair and secured to avoid tipping"
                      ><label
                          for=""
                          class="label"
                        >DRY FOOD STORAGE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox65"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox65"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox65"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox65"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox65"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="137"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Shelving racks in good repair and secured to avoid tipping"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">d.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are all food labeled with name and
                      received date.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="138"
                        class=" house col-form-check form-check-inline question"
                        data-name="Are all food labeled with name and received date."
                      ><label
                          for=""
                          class="label"
                        >DRY FOOD STORAGE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox66"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox66"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox66"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox66"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox66"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="139"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are all food labeled with name and received date."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">e.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are food materials stored in
                      containers with tight
                      fitting lids and
                      labeled with common name.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="140"
                        class=" house col-form-check form-check-inline question"
                        data-name="Are food materials stored in containers with tight fitting lids and labeled with common name"
                      ><label
                          for=""
                          class="label"
                        >DRY FOOD STORAGE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox67"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox67"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox67"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox67"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox67"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="141"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are food materials stored in containers with tight fitting lids and labeled with common name"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">f.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Is FIFO (First In, First Out)
                      method of inventory
                      management is
                      used.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="142"
                        class=" house col-form-check form-check-inline question"
                        data-name="Is FIFO (First In, First Out) method of inventory management is used."
                      ><label
                          for=""
                          class="label"
                        >DRY FOOD STORAGE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox68"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox68"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox68"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox68"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox68"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="143"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is FIFO (First In, First Out) method of inventory management is used."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">g.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are there any bulging or leaking
                      canned foods? </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="144"
                        class=" house col-form-check form-check-inline question"
                        data-name="Are there any bulging or leaking canned foods?"
                      ><label
                          for=""
                          class="label"
                        >DRY FOOD STORAGE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox69"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox69"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox69"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox69"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox69"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="145"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are there any bulging or leaking canned foods?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">h.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are foods protected from
                      contamination?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="146"
                        class=" house col-form-check form-check-inline question"
                        data-name="Are foods protected from contamination?"
                      ><label
                          for=""
                          class="label"
                        >DRY FOOD STORAGE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox70"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox70"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox70"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox70"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox70"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="147"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are foods protected from contamination?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">i.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are all food storage surfaces
                      clean.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="148"
                        class=" house col-form-check form-check-inline question"
                        data-name="Are all food storage surfaces clean."
                      ><label
                          for=""
                          class="label"
                        >DRY FOOD STORAGE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox71"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox71"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox71"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox71"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox71"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="149"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are all food storage surfaces clean."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">j.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are all chemicals clearly labeled
                      and stored away from
                      food and food-
                      related products?.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="150"
                        class=" house col-form-check form-check-inline question"
                        data-name="Are all chemicals clearly labeled and stored away from food and food- related products?"
                      ><label
                          for=""
                          class="label"
                        >DRY FOOD STORAGE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox72"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox72"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox72"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox72"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox72"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="151"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are all chemicals clearly labeled and stored away from food and food- related products?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>

                </div>
                <hr>
                <div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1 text-bold">13.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5 text-bold">FLOORS AND WALKING SURFACES </p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5</p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">Remarks</p>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">a.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Is floor free from spillage,
                      silverware, broken
                      glassware or
                      other hazards?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="152"
                        class=" house col-form-check form-check-inline question"
                        data-name="Is floor free from spillage, silverware, broken glassware or other hazards?"
                      ><label
                          for=""
                          class="label"
                        >FLOORS AND WALKING SURFACES</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox73"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox73"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox73"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox73"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox73"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="153"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is floor free from spillage, silverware, broken glassware or other hazards?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">b.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Is there a portable sign to
                      indicate wet floor or
                      temporary hazard?.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="154"
                        class=" house col-form-check form-check-inline question"
                        data-name="Is there a portable sign to indicate wet floor or temporary hazard?"
                      ><label
                          for=""
                          class="label"
                        >FLOORS AND WALKING SURFACES</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox74"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox74"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox74"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox74"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox74"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="155"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is there a portable sign to indicate wet floor or temporary hazard?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">c.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Is there a floor mat or any other
                      type of mat provided
                      at the lobby
                      entrance?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="156"
                        class=" house col-form-check form-check-inline question"
                        data-name="Is there a floor mat or any other type of mat provided at the lobby entrance?"
                      ><label
                          for=""
                          class="label"
                        >FLOORS AND WALKING SURFACES</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox75"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox75"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox75"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox75"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox75"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="157"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is there a floor mat or any other type of mat provided at the lobby entrance?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">d.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Is the kitchen, lobby and external
                      floor kept clean and
                      well maintained?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="158"
                        class=" house col-form-check form-check-inline question"
                        data-name="Is the kitchen, lobby and external floor kept clean and well maintained?"
                      ><label
                          for=""
                          class="label"
                        >FLOORS AND WALKING SURFACES</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox76"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox76"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox76"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox76"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox76"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="159"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is the kitchen, lobby and external floor kept clean and well maintained?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="d-flex">
                    <p
                      id="160"
                      class="house-keeping subtitle question question-house"
                      data-name="score earned"
                    ><label
                        for=""
                        class="label"
                      >house
                        keeping</label> Score earned
                      <input
                        type="text"
                        disabled
                        class="form-control"
                        v-model="scores.scoreB"
                      ></p>
                    <p
                      id="161"
                      class="house-keeping subtitle question question-house"
                      data-name="percent earned"
                    ><label
                        for=""
                        class="label"
                      >house keeping</label> Percent earned
                      <input
                        type="text"
                        disabled
                        class="form-control"
                        v-model="percents.B"
                      ></p>
                  </div>
                </div>
                <hr>

                <div>
                  <h4 class="subtitle"><u>C. RECIPE COMPLIANCE</u></h4>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1 text-bold">14.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5 text-bold"> FOOD PREPARATION </p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5</p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">Remarks</p>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">a.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are all food stored or prepared in
                      the restaurant from
                      approved sources?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="162"
                        class="recipe col-form-check form-check-inline question"
                        data-name="Are all food stored or prepared in the restaurant from approved sources?"
                      ><label
                          for=""
                          class="label"
                        >FOOD PREPARATION</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox77"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox77"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox77"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox77"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox77"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="163"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are all food stored or prepared in the restaurant from approved sources?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">b.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Are food equipment, utensils and
                      food contact surfaces
                      properly
                      washed, rinsed and sanitized before every use.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="164"
                        class="recipe col-form-check form-check-inline question"
                        data-name="Are food equipment, utensils and food contact surfaces properly washed, rinsed and sanitized before every use."
                      ><label
                          for=""
                          class="label"
                        >FOOD PREPARATION</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox78"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox78"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox78"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox78"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox78"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="165"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are food equipment, utensils and food contact surfaces properly washed, rinsed and sanitized before every use."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">c.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are frozen food thawed under
                      refrigeration, cooked to
                      proper
                      temperature from frozen state, or in cold running water. </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="166"
                        class="recipe col-form-check form-check-inline question"
                        data-name="Are frozen food thawed under refrigeration, cooked to proper temperature from frozen state, or in cold running water."
                      ><label
                          for=""
                          class="label"
                        >FOOD PREPARATION</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox79"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox79"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox79"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox79"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox79"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="167"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are frozen food thawed under refrigeration, cooked to proper temperature from frozen state, or in cold running water."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">d.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Thawed food is not refrozen.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="168"
                        class="recipe col-form-check form-check-inline question"
                        data-name="Thawed food is not refrozen."
                      ><label
                          for=""
                          class="label"
                        >FOOD PREPARATION</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox80"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox80"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox80"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox80"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox80"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="169"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Thawed food is not refrozen."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">e.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Preparation is planned so food is
                      kept out of the
                      temperature
                      danger zone to the extent possible.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="170"
                        class="recipe col-form-check form-check-inline question"
                        data-name="Preparation is planned so food is kept out of the temperature danger zone to the extent possible."
                      ><label
                          for=""
                          class="label"
                        >FOOD PREPARATION</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox81"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox81"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox81"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox81"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox81"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="171"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Preparation is planned so food is kept out of the temperature danger zone to the extent possible."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">f.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Food is tasted using the proper
                      procedure..</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="172"
                        class="recipe col-form-check form-check-inline question"
                        data-name="Food is tasted using the proper procedure."
                      ><label
                          for=""
                          class="label"
                        >FOOD PREPARATION</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox82"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox82"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox82"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox82"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox82"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="173"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Food is tasted using the proper procedure."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">g.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Procedures are in place to prevent
                      cross-contamination.
                    </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="174"
                        class="recipe col-form-check form-check-inline question"
                        data-name="Procedures are in place to prevent cross-contamination."
                      ><label
                          for=""
                          class="label"
                        >FOOD PREPARATION</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox83"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox83"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox83"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox83"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox83"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="175"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Procedures are in place to prevent cross-contamination."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">h.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Food is handled with suitable
                      utensils, such as single
                      use gloves or
                      tongs.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="176"
                        class="recipe col-form-check form-check-inline question"
                        data-name="Food is handled with suitable utensils, such as single use gloves or tongs."
                      ><label
                          for=""
                          class="label"
                        >FOOD PREPARATION</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox84"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox84"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox84"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox84"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox84"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="177"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Food is handled with suitable utensils, such as single use gloves or tongs."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">i.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Food is prepared in small batches
                      to limit the time it
                      is in the
                      temperature danger zone.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="178"
                        class="recipe col-form-check form-check-inline question"
                        data-name="Food is prepared in small batches to limit the time it is in the temperature danger zone."
                      ><label
                          for=""
                          class="label"
                        >FOOD PREPARATION</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox85"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox85"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox85"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox85"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox85"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="179"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Food is prepared in small batches to limit the time it is in the temperature danger zone."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">j.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Clean reusable towels are used
                      only for cleaning and
                      sanitizing
                      equipment and surfaces and not for drying hands, utensils, or floor.
                    </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="180"
                        class="recipe col-form-check form-check-inline question"
                        data-name="Clean reusable towels are used only for cleaning and sanitizing equipment and surfaces and not for drying hands, utensils, or floor."
                      ><label
                          for=""
                          class="label"
                        >FOOD PREPARATION</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox86"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox86"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox86"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox86"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox86"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="181"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Clean reusable towels are used only for cleaning and sanitizing equipment and surfaces and not for drying hands, utensils, or floor."
                    >
                      <label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">k.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Food is cooked to the required
                      safe internal
                      temperature for the
                      appropriate time. The temperature is tested with a calibrated food
                      probe thermometer.
                    </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="182"
                        class="recipe col-form-check form-check-inline question"
                        data-name="Food is cooked to the required safe internal temperature for the appropriate time. The temperature is tested with a calibrated food probe thermometer."
                      ><label
                          for=""
                          class="label"
                        >FOOD PREPARATION</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox87"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox87"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox87"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox87"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox87"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="183"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Food is cooked to the required safe internal temperature for the appropriate time. The temperature is tested with a calibrated food probe thermometer."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">l.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">The internal temperature of food
                      being cooked is
                      monitored and
                      documented.
                    </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="184"
                        class="recipe col-form-check form-check-inline question"
                        data-name="The internal temperature of food being cooked is monitored and documented."
                      ><label
                          for=""
                          class="label"
                        >FOOD PREPARATION</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox88"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox88"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox88"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox88"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox88"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="185"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="The internal temperature of food being cooked is monitored and documented."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="d-flex">
                    <p
                      id="186"
                      class="recipe subtitle question question-recipe"
                      data-name="score earned"
                    >
                      <label
                        for=""
                        class="label"
                      >RECIPE COMPLIANCE</label> Score earned
                      <input
                        type="text"
                        disabled
                        class="form-control"
                        v-model="scores.scoreC"
                      ></p>
                    <p
                      id="187"
                      class="recipe subtitle question question-recipe"
                      data-name="percent earned"
                    >
                      <label
                        for=""
                        class="label"
                      >RECIPE COMPLIANCE</label> Percent earned
                      <input
                        type="text"
                        disabled
                        class="form-control"
                        v-model="percents.C"
                      ></p>
                  </div>
                </div>

                <!-- food taste -->

                <div>
                  <h4 class="subtitle"><u>D. FOOD TASTE /SENSORY EVALUATION</u></h4>
                  <div class="d-flex ">
                    <table class="table table-bordered ">
                      <thead>
                        <th>Name of Food</th>
                        <th
                          colspan="4"
                          id="188"
                          class="question"
                          data-name="Name of food1"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <input
                            type="text"
                            class="form-control"
                          >
                        </th>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td>Excellent <br>4</td>
                          <td>V. good <br>3</td>
                          <td>Good <br>2</td>
                          <td>Fair <br>1</td>
                        </tr>
                        <tr
                          id="189"
                          class="question food"
                          data-name="appearance1"
                        >
                          <label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Appearance</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio1"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio1"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio1"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio1"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="190"
                          class="question food"
                          data-name="taste1"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <!-- <label
                            for="inp"
                            class="label"
                          >taste</label> -->
                          <td>Taste</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio2"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio2"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio2"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio2"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="191"
                          class="question food"
                          data-name="Aroma1"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Aroma</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio3"
                              value="4 "
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio3"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio3"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio3"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="192"
                          class="question food"
                          data-name="salt1"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Salt</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio4"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio4"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio4"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio4"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="193"
                          class="question food"
                          data-name="texture1"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Texture</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio5"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio5"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio5"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio5"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="194"
                          class="question food"
                          data-name="after taste1"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>After Taste</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio6"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio6"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio6"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio6"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="195"
                          class="question food"
                          data-name="spiciness1"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Spiciness</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio7"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio7"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio7"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio7"
                              value="1"
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="table table-bordered  ml-3 ">
                      <thead>
                        <th>Name of Food</th>
                        <th
                          colspan="4"
                          id="196"
                          class="question"
                          data-name="Name of food2"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <input
                            type="text"
                            class="form-control"
                          >
                        </th>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td>Excellent <br>4</td>
                          <td>V. good <br>3</td>
                          <td>Good <br>2</td>
                          <td>Fair <br>1</td>
                        </tr>
                        <tr
                          id="197"
                          class="question food"
                          data-name="appearance2"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Appearance</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio8"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio8"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio8"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio8"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="198"
                          class="question food"
                          data-name="taste2"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Taste</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio9"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio9"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio9"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio9"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="199"
                          class="question food"
                          data-name="Aroma2"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Aroma</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio10"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio10"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio10"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio10"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="200"
                          class="question food"
                          data-name="salt2"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Salt</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio11"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio11"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio11"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio11"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="201"
                          class="question food"
                          data-name="texture2"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Texture</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio12"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio12"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio12"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio12"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="202"
                          class="question food"
                          data-name="after taste2"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>After Taste</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio13"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio13"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio13"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio13"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="203"
                          class="question food"
                          data-name="spiciness2"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Spiciness</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio14"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio14"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio14"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio14"
                              value="1"
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="d-flex">

                    <table class="table table-bordered ">
                      <thead>
                        <th>Name of Food</th>
                        <th
                          colspan="4"
                          id="204"
                          class="question"
                          data-name="Name of food3"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <input
                            type="text"
                            class="form-control"
                          >
                        </th>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td>Excellent <br>4</td>
                          <td>V. good <br>3</td>
                          <td>Good <br>2</td>
                          <td>Fair <br>1</td>
                        </tr>
                        <tr
                          id="205"
                          class="question food"
                          data-name="appearance3"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Appearance</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio15"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio15"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio15"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio15"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="206"
                          class="question food"
                          data-name="taste3"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Taste</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio16"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio16"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio16"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio16"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="207"
                          class="question food"
                          data-name="Aroma3"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Aroma</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio17"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio17"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio17"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio17"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="208"
                          class="question food"
                          data-name="salt3"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Salt</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio18"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio18"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio18"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio18"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="209"
                          class="question food"
                          data-name="texture3"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Texture</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio19"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio19"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio19"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio19"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="210"
                          class="question food"
                          data-name="after taste3"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>After Taste</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio20"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio20"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio20"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio20"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="211"
                          class="question food"
                          data-name="spiciness3"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Spiciness</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio21"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio21"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio21"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio21"
                              value="1"
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="table table-bordered ml-3">
                      <thead>
                        <th>Name of Food</th>
                        <th
                          colspan="4"
                          id="212"
                          class="question"
                          data-name="Name of food4"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <input
                            type="text"
                            class="form-control"
                          >
                        </th>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td>Excellent <br>4</td>
                          <td>V. good <br>3</td>
                          <td>Good <br>2</td>
                          <td>Fair <br>1</td>
                        </tr>
                        <tr
                          id="213"
                          class="question food"
                          data-name="appearance4"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Appearance</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio22"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio22"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio22"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio22"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="214"
                          class="question food"
                          data-name="taste4"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Taste</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio23"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio23"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio23"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio23"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="215"
                          class="question food"
                          data-name="aroma4"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Aroma</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio24"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio24"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio24"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio24"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="216"
                          class="question food"
                          data-name="salt4"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Salt</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio25"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio25"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio25"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio25"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="217"
                          class="question food"
                          data-name="texture4"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Texture</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio26"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio26"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio26"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio26"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="218"
                          class="question food"
                          data-name="after taste4"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>After Taste</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio27"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio27"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio27"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio27"
                              value="1"
                            >
                          </td>
                        </tr>
                        <tr
                          id="219"
                          class="question food"
                          data-name="spiciness4"
                        ><label
                            for=""
                            class="label"
                          >FOOD TASTE /SENSORY EVALUATION</label>
                          <td>Spiciness</td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio28"
                              value="4"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio28"
                              value="3"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio28"
                              value="2"
                            >
                          </td>
                          <td> <input
                              class=""
                              type="radio"
                              @change="addScores"
                              name="inlineRadio28"
                              value="1"
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br>
                  <div class="d-flex">
                    <p
                      id="220"
                      class="subtitle question question-foodtaste"
                      data-name="score earned"
                    >
                      <label
                        for=""
                        class="label"
                      >FOOD TASTE /SENSORY
                        EVALUATION</label>Score earned
                      <input
                        type="number"
                        disabled
                        class="form-control"
                        v-model="scores.scoreD"
                      >
                    </p>
                    <p
                      id="221"
                      class="subtitle question question-foodtaste"
                      data-name="percent earned"
                    >
                      <label
                        for=""
                        class="label"
                      >FOOD TASTE /SENSORY
                        EVALUATION</label> Percent earned
                      <input
                        type="text"
                        disabled
                        class="form-control"
                        v-model="percents.D"
                      ></p>
                  </div>
                </div>
                <hr>

                <div>

                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1 text-bold">E.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5 text-bold"> FOOD SERVICE </p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5</p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">Remarks</p>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">a.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are front of house supervisors
                      providing leadership to
                      their team </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="222"
                        class="foodservice col-form-check form-check-inline question"
                        data-name="Are front of house supervisors providing leadership to their team"
                      ><label
                          for=""
                          class="label"
                        >FOOD SERVICE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox89"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox89"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox89"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox89"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox89"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="223"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are front of house supervisors providing leadership to their team"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">b.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Are all FOH staff wearing name
                      tags?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="224"
                        class="foodservice col-form-check form-check-inline question"
                        data-name=" Are all FOH staff wearing name tags?"
                      ><label
                          for=""
                          class="label"
                        >FOOD SERVICE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox90"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox90"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox90"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox90"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox90"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="225"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name=" Are all FOH staff wearing name tags?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">c.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Were customers served within 3
                      minutes or were they
                      courteously
                      informed of a realistic time frame to expect service </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="226"
                        class="foodservice col-form-check form-check-inline question"
                        data-name="Were customers served within 3 minutes or were they courteously informed of a realistic time frame to expect service"
                      ><label
                          for=""
                          class="label"
                        >FOOD SERVICE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox91"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox91"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox91"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox91"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox91"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="227"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Were customers served within 3 minutes or were they courteously informed of a realistic time frame to expect service"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">d.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Did cashier suggest compliments to
                      the customer’s
                      original order
                      in order to upsell and improve on the customer’s experience?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="228"
                        class="foodservice col-form-check form-check-inline question"
                        data-name="Did cashier suggest compliments to the customer’s original order in order to upsell and improve on the customer’s experience?"
                      ><label
                          for=""
                          class="label"
                        >FOOD SERVICE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox92"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox92"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox92"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox92"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox92"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="229"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Did cashier suggest compliments to the customer’s original order in order to upsell and improve on the customer’s experience?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">e.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are all customers thanked after
                      service and encouraged
                      to
                      visit again?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="230"
                        class="foodservice col-form-check form-check-inline question"
                        data-name="Are all customers thanked after service and encouraged to visit again?"
                      ><label
                          for=""
                          class="label"
                        >FOOD SERVICE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox93"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox93"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox93"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox93"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox93"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="231"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are all customers thanked after service and encouraged to visit again?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">f.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Is the lobby cool and are A/Cs
                      functioning at the
                      desired
                      temperature is 18 deg C.</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="232"
                        class="foodservice col-form-check form-check-inline question"
                        data-name="Is the lobby cool and are A/Cs functioning at the desired temperature is 18 deg C."
                      ><label
                          for=""
                          class="label"
                        >FOOD SERVICE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox94"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox94"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox94"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox94"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox94"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="233"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Is the lobby cool and are A/Cs functioning at the desired temperature is 18 deg C."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">g.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Do customers generally appear
                      happy or satisfied about
                      the
                      speed, quality of food and/or service and//or their experience
                      at this restaurant?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="234"
                        class="foodservice col-form-check form-check-inline question"
                        data-name="Do customers generally appear happy or satisfied about the speed, quality of food and/or service and//or their experience at this restaurant?"
                      ><label
                          for=""
                          class="label"
                        >FOOD SERVICE</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox95"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox95"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox95"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox95"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox95"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="235"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Do customers generally appear happy or satisfied about the speed, quality of food and/or service and//or their experience at this restaurant?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="d-flex">
                    <p
                      id="236"
                      class="subtitle question question-foodservice"
                      data-name="score earned"
                    >
                      <label
                        for=""
                        class="label"
                      >Food service</label>Score earned<input
                        type="number"
                        disabled
                        class="form-control"
                        v-model="scores.scoreE"
                      >
                    </p>
                    <p
                      id="237"
                      class="subtitle question question-foodservice"
                      data-name="percent earned"
                    > <label
                        for=""
                        class="label"
                      >Food service</label>Percent earned<input
                        type="number"
                        disabled
                        class="form-control"
                        v-model="percents.E"
                      >
                    </p>
                  </div>
                </div>
                <hr>

                <div>

                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1 text-bold">F.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5 text-bold"> HOSTING </p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5</p>
                    <p class="col-md-3 col-sm-3 col-xs-3 text-bold">Remarks</p>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">a.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are the lobby hosts in the lobby
                      wearing a smile and
                      eager to serve? </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="238"
                        class="hosting col-form-check form-check-inline question"
                        data-name="Are the lobby hosts in the lobby wearing a smile and eager to serve? "
                      ><label
                          for=""
                          class="label"
                        >HOSTING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox96"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox96"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox96"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox96"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox96"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="239"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are the lobby hosts in the lobby wearing a smile and eager to serve? "
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">b.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5"> Are customers asked if they
                      enjoyed their meals and
                      are all negative
                      verbal feedbacks passed on to the shift managers. </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="240"
                        class="hosting col-form-check form-check-inline question"
                        data-name="Are customers asked if they enjoyed their meals and are all negative verbal feedbacks passed on to the shift managers."
                      ><label
                          for=""
                          class="label"
                        >HOSTING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox97"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox97"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox97"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox97"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox97"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="241"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are customers asked if they enjoyed their meals and are all negative verbal feedbacks passed on to the shift managers."
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">c.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are customers handed response
                      cards and encouraged to
                      fill them? </p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="242"
                        class="hosting col-form-check form-check-inline question"
                        data-name="Are customers handed response cards and encouraged to fill them?"
                      ><label
                          for=""
                          class="label"
                        >HOSTING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox98"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox98"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox98"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox98"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox98"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="243"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are customers handed response cards and encouraged to fill them?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>
                  <div class="row container">
                    <p class="col-md-1 col-sm-1 col-xs-1">d.</p>
                    <p class="col-md-5 col-sm-5 col-xs-5">Are hosts cleaning up the tables
                      and chairs after
                      customers have
                      left in a timely manner?</p>
                    <div class="col-md-3 col-sm-3 col-xs-3">
                      <div
                        id="244"
                        class="hosting col-form-check form-check-inline question"
                        data-name="Are hosts cleaning up the tables and chairs after customers have left in a timely manner?"
                      ><label
                          for=""
                          class="label"
                        >HOSTING</label>
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox99"
                          value="1"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox99"
                          value="2"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox99"
                          value="3"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox99"
                          value="4"
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          @change="addScores"
                          name="inlineCheckbox99"
                          value="5"
                        >

                      </div>

                    </div>
                    <div
                      id="245"
                      class="col-md-3 col-sm-3 col-xs-3 question"
                      data-name="Are hosts cleaning up the tables and chairs after customers have left in a timely manner?"
                    ><label
                        for="inp"
                        class="label"
                      >Remarks</label><input
                        type="text"
                        class="form-control"
                      ></div>
                  </div>

                  <div class="d-flex">
                    <p
                      id="246"
                      class="subtitle question question-hosting"
                      data-name="score earned"
                    >
                      <label
                        for=""
                        class="label"
                      >Hosting</label>Score earned<input
                        type="number"
                        disabled
                        class="form-control"
                        v-model="scores.scoreF"
                      >
                    </p>
                    <p
                      id="247"
                      class="subtitle question question-hosting"
                      data-name="percent earned"
                    ><label
                        for=""
                        class="label"
                      >Hosting</label>
                      Percent earned
                      <input
                        type="number"
                        disabled
                        class="form-control"
                        v-model="percents.F"
                      >
                    </p>
                  </div>
                </div>
                <div
                  id="248"
                  class="form-group row question"
                  data-name="General Comments"
                >
                  <label
                    for="inputPassword"
                    class="form-label"
                  >General Comments</label>
                  <textarea
                    name=""
                    id=""
                    class="form-control"
                    rows="5"
                    cols="80"
                  ></textarea>
                </div>

                <div class="d-flex">
                  <p
                    id="249"
                    class="subtitle question question-total"
                    data-name="total score earned"
                  >
                    <label for="">Total Scores Earned:</label>
                    <input
                      type="number"
                      disabled
                      class="form-control"
                      v-model="totalScore"
                    ></p>
                  <p
                    id="250"
                    class="subtitle question question-total"
                    data-name="total score earned"
                  > <label for=""> Total Percent Earned:</label>
                    <input
                      type="number"
                      disabled
                      class="form-control"
                      v-model="totalPercent"
                    ></p>
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
      totalScore: "",
      totalPercent: "",
      scores: {
        scoreA: "",
        scoreB: "",
        scoreC: "",
        scoreD: "",
        scoreE: "",
        scoreF: "",
      },
      percents: {
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        F: "",
      },


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
      this.store_manager = ""
      this.stores.forEach((i) => {

        if (i.id === val) {
          this.store_manager = i.store_admin_name
        }
      })
    },
    'scores.scoreA': function (val) {
      this.percents.A = Math.ceil(val / 315 * 100);
      this.getTotal();
    },
    'scores.scoreB': function (val) {
      this.percents.B = Math.ceil(val / 70 * 100);
      this.getTotal();
    },
    'scores.scoreC': function (val) {
      this.percents.C = Math.ceil(val / 60 * 100);
      this.getTotal();
    },
    'scores.scoreD': function (val) {
      this.percents.D = Math.ceil(val / 112 * 100);
      this.getTotal();
    },
    'scores.scoreE': function (val) {
      this.percents.E = Math.ceil(val / 35 * 100);
      this.getTotal();
    },
    'scores.scoreF': function (val) {
      this.percents.F = Math.ceil(val / 20 * 100);
      this.getTotal();
    },
  },
  methods: {
    submitForm () {
      var html =
        '<img src="https://thumbs.gfycat.com/AchingSpeedyArmyworm-size_restricted.gif"/>';

      this.$swal.fire({
        title: "Processing",
        html: html,
        showConfirmButton: false,
        showCancelButton: false,
        width: "380px",
        allowOutsideClick: false
      });

      NodeList.prototype.forEach = Array.prototype.forEach;
      let newForm = this.form;
      var divs = document.querySelectorAll('.question').forEach(function (el) {
        let label = el.childNodes[0].innerText;
        let qtext = el.dataset.name.replace(/\n/g, ' ');
        let ans;
        // console.log(el.childNodes)
        if (el.childNodes.length == 2) {

          if (el.childNodes[1].localName == "input") {
            ans = el.childNodes[1].value;
          }
          if ((el.childNodes[1].localName == "div" && el.childNodes[1].childNodes[0])) {

            ans = el.childNodes[1].childNodes[0].value;
          }

        }
        if (el.childNodes.length == 6) {

          for (let i = 1; i < el.childNodes.length; i++) {

            if (el.childNodes[i].localName == "input" && el.childNodes[i].checked) {
              ans = el.childNodes[i].value;

            }

            if (el.childNodes[i].localName == "td" && el.childNodes[i].childNodes[0].checked) {
              ans = el.childNodes[i].childNodes[0].value;

            }

          }

        }
        if (el.childNodes.length == 3) {
          ans = el.childNodes[2].value;
        }
        if (ans == undefined) {
          ans = ' '
        }
        let index = el.id;
        newForm.question_answer.push({
          questionno: index,
          questiontext: qtext,
          questionlabel: label,
          answer: ans,
        })



      });
      // console.log(newForm)
      var req = {
        what: "foodsafety",
        data: newForm
      };
      // console.log(req.data);
      this.$socket
        .makePostRequest(req)
        .then(response => {
          // console.log(response);

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
    addScores () {
      let sumA = 0, sumB = 0, sumC = 0, sumD = 0, sumE = 0, sumF = 0;
      var scoreA = document.querySelectorAll('.hygiene').forEach(function (el) {
        el.childNodes.forEach((i) => {
          if (i.checked) {

            sumA += parseInt(i.value);
          }
        })
      });
      this.scores.scoreA = sumA;
      //house

      var scoreB = document.querySelectorAll('.house').forEach(function (el) {
        el.childNodes.forEach((i) => {
          if (i.checked) {

            sumB += parseInt(i.value);
          }
        })
      });
      this.scores.scoreB = sumB;
      //recipe
      var scoreC = document.querySelectorAll('.recipe').forEach(function (el) {
        el.childNodes.forEach((i) => {
          if (i.checked) {

            sumC += parseInt(i.value);
          }
        })
      });
      this.scores.scoreC = sumC;
      //FOOD

      var scoreD = document.querySelectorAll('.food').forEach(function (el) {

        el.childNodes.forEach((i) => {
          i.childNodes.forEach(j => {
            if (j.checked) {
              // console.log(j)
              sumD += parseInt(j.value);
              // console.log(sumD)
            }
          })

        })
      });
      this.scores.scoreD = sumD;

      //FOOD service

      var scoreE = document.querySelectorAll('.foodservice').forEach(function (el) {
        el.childNodes.forEach((i) => {
          if (i.checked) {

            sumE += parseInt(i.value);
          }
        })
      });
      this.scores.scoreE = sumE;

      //FOOD service

      var scoreF = document.querySelectorAll('.hosting').forEach(function (el) {
        el.childNodes.forEach((i) => {
          if (i.checked) {

            sumF += parseInt(i.value);
          }
        })
      });
      this.scores.scoreF = sumF;



      // let total_sum = 0;
      // var score = document.querySelectorAll('input:checked').forEach(function (el) {

      //   total_sum += parseInt(el.value)

      // });
      // this.totalScore = total_sum;
      // this.totalPercent = total_sum / 512 * 100;
    },
    getTotal () {

      var sum = 0;
      for (var property in this.scores) {
        let p = Number(this.scores[property]);
        sum += p
      }
      this.totalScore = sum;

      var psum = 0;
      for (var property in this.percents) {
        psum += Number(this.percents[property]);
      }
      this.totalPercent = Math.ceil(psum / 6);

    }
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
@media (max-width: 991px) {
  .form-group .form-control {
    height: auto;
  }
}
</style>
