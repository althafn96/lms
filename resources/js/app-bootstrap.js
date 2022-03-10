import _ from 'lodash';
import axios from 'axios';

window._ = _;
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import * as bootstrap from 'bootstrap'
window.bootstrap = bootstrap;

// Wnumb - Number & Money formatting. Learn more: https://refreshless.com/wnumb/
import wnumb from 'wnumb'
window.wNumb = wnumb;

// Moment - Parse, validate, manipulate, and display dates and times in JavaScript. Learn more: https://momentjs.com/
import moment from 'moment'
window.moment = moment;

import * as es6Shim from 'es6-shim/es6-shim'

import KTUtil from '../core/js/components/util'
window.KTUtil = KTUtil;


/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';
// import Pusher from 'pusher-js';

// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
