<template>
  <div class="content">
    <div class="md-layout">

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Forms</h4>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="orange"></ordered-table>
          </md-card-content>
        </md-card>
      </div>

    </div>
  </div>
</template>

<script>
import {

  OrderedTable
} from "@/components";

export default {
  components: {
    OrderedTable
  },
  beforeCreate: function () {
    document.body.className.replace("home", "");
  },
  data () {
    return {
      role: "",
    };
  },
  mounted () {

    this.role = this.$store.getters.role;
    this.getStores()
  },
  methods: {
    getStores () {
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
      this.$store.dispatch("stores")
        .then(response => {
          // this.$swal.fire("", "", "success");
        })
        .catch(error => {
          this.$swal.fire("Error", error.message, "error");
        });

    }
  }

};
</script>
