<template>
  <div class="content">
    <div class="md-layout">
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
                  id="6"
                  class="question points"
                  data-name="points earned"
                >
                  <label
                    for=""
                    class="label"
                  >opening procedures</label>
                  <input
                    v-model="points.p1"
                    type="number"
                    max="35"
                    class="form-control"
                  />
                </td>
                <td class="possible">35</td>
                <td
                  id="7"
                  class="question percent "
                  data-name="percent earned"
                >
                  <label
                    for=""
                    class="label"
                  >opening procedures</label><input
                    type="number"
                    max="100"
                    disabled
                    class="form-control"
                    v-model="percents.p1"
                  />
                </td>
              </tr>
              <tr>
                <td>Staff Issues</td>
                <td
                  id="8"
                  class="question points"
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
                  id="9"
                  class="question percent"
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
                  id="10"
                  class="question points"
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
                  id="11"
                  class="question percent"
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
                  id="12"
                  class="question points"
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
                  id="13"
                  class="question percent"
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
                  id="14"
                  class="question points"
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
                  id="15"
                  class="question percent"
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
                  id="16"
                  class="question points"
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
                  id="17"
                  class="question percent"
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
                  id="18"
                  class="points question"
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
                  id="19"
                  class="percent question"
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
                  /></th>
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
      stores: [],
      qa: [],
      store_manager: "",
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
        taskplanner: [],
        images: []
      }
    };
  },
  created () {
    this.stores = this.$store.getters.stores;
    let qa = this.$store.getters.ammvr;
    this.form.store_id = qa[0];
    this.form.question_answer = qa[1];
    this.points = qa[2];
    this.form.taskplanner = qa[3]
    this.form.images = qa[4];
    this.setPercents();
    this.getTotal();

  },
  mounted () {

    this.submitForm();
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
    'points.p1': function (val) {
      this.percents.p1 = Math.ceil(val / 35 * 100);
      this.getTotal();
    },
    'points.p2': function (val) {
      this.percents.p2 = Math.ceil(val / 20 * 100);
      this.getTotal();
    },
    'points.p3': function (val) {
      this.percents.p3 = Math.ceil(val / 35 * 100);
      this.getTotal();
    },
    'points.p4': function (val) {
      this.percents.p4 = Math.ceil(val / 35 * 100);
      this.getTotal();
    },
    'points.p5': function (val) {
      this.percents.p5 = Math.ceil(val / 60 * 100);
      this.getTotal();
    },
    'points.p6': function (val) {
      this.percents.p6 = Math.ceil(val / 65 * 100);
      this.getTotal();
    },
  },
  methods: {
    setPercents () {
      this.percents.p1 = Math.ceil(this.points.p1 / 35 * 100);
      this.percents.p2 = Math.ceil(this.points.p2 / 20 * 100);
      this.percents.p3 = Math.ceil(this.points.p3 / 35 * 100);
      this.percents.p4 = Math.ceil(this.points.p4 / 35 * 100);
      this.percents.p5 = Math.ceil(this.points.p5 / 60 * 100);
      this.percents.p6 = Math.ceil(this.points.p6 / 65 * 100);
    },
    submitForm () {
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
      var divs = document.querySelectorAll('.points').forEach(function (el) {
        let label = el.childNodes[0].innerText;
        let qtext = el.dataset.name.replace(/\n/g, ' ');
        let ans = el.childNodes[1].value;
        let index = el.id;

        that.form.question_answer.push({
          questionno: index,
          questiontext: qtext,
          questionlabel: label,
          answer: ans,
        })
      });
      var divs = document.querySelectorAll('.percent').forEach(function (el) {
        let label = el.childNodes[0].innerText;
        let qtext = el.dataset.name.replace(/\n/g, ' ');
        let ans = el.childNodes[1].value;
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
      // console.log(req.data)
      this.$socket
        .makePostRequest(req)
        .then(response => {
          console.log(response.data.message);

          this.$swal.fire("Success", response.data.message, "success");
          // location.reload();
          this.$store.dispatch('updateAmmvr', {})
          this.$router.push('openingsoa')
        })
        .catch(error => {
          console.log(error);
          this.$swal.fire("Error", error.message, "error");
          this.form.question_answer = [];
          this.$store.dispatch('updateAmmvr', {})
          this.$router.push('openingsoa')

        });
    },

    getTotal () {

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
.md-card img {
  width: 200px !important;
  height: 200px !important;
}
.label {
  display: none;
}
@media (max-width: 991px) {
  .form-group .form-control {
    height: auto;
  }
}
.hidden {
  display: none;
}
</style>
