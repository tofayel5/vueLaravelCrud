
require('./bootstrap');
import Vue from 'vue'
import { Form, HasError, AlertError } from 'vform'
window.Form = Form

import VueProgressBar from 'vue-progressbar'

import Snotify, { SnotifyPosition } from 'vue-snotify'

const SnotifyOptions = {
    toast: {
        position: SnotifyPosition.rightTop
    }
}

Vue.use(Snotify, SnotifyOptions)

const VueProgressBarOptions = {
    color: '#50d38a',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
};
Vue.use(VueProgressBar, VueProgressBarOptions);
Vue.component('customers-component', require('./components/CustomersComponent.vue').default);
Vue.component('pagination', require('./components/partial/PaginationComponent').default);
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);



const app = new Vue({
    el: '#app'
});
