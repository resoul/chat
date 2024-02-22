// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import store from "./store";
import App from "./App";
import Footer from "./components/footer";

import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    store,
    el: "#app",
    components: { App },
    template: "<App/>"
});

new Vue({
    store,
    el: "#footer",
    components: { Footer },
    template: "<Footer/>"
});
