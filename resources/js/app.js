
require('./bootstrap');
import Vue from 'vue'

//vform package
import { Form, HasError, AlertError } from 'vform'
window.Form = Form

//start for progressbar
import VueProgressBar from 'vue-progressbar'
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
//end progressbar

//start for Snotify package
import Snotify, { SnotifyPosition } from 'vue-snotify'
const SnotifyOptions = {
    toast: {
        position: SnotifyPosition.rightTop
    }
}
Vue.use(Snotify, SnotifyOptions)
//end snotity


Vue.component('customers-component', require('./components/CustomersComponent.vue').default);
Vue.component('pagination', require('./components/partial/PaginationComponent').default);

//vform package
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);


const app = new Vue({
    el: '#app'
});
