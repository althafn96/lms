import './app-bootstrap';


import KTBlockUI from '../core/js/components/blockui'
window.KTBlockUI = KTBlockUI;

import KTCookie from '../core/js/components/cookie'
window.KTCookie = KTCookie;

import KTDialer from '../core/js/components/dialer'
window.KTDialer = KTDialer;

import KTDrawer from '../core/js/components/drawer'
window.KTDrawer = KTDrawer;

import KTEventHandler from '../core/js/components/event-handler'
window.KTEventHandler = KTEventHandler;

import KTFeedback from '../core/js/components/feedback'
window.KTFeedback = KTFeedback;

import KTImageInput from '../core/js/components/image-input'
window.KTImageInput = KTImageInput;

import KTMenu from '../core/js/components/menu'
window.KTMenu = KTMenu;

import KTPasswordMeter from '../core/js/components/password-meter'
window.KTPasswordMeter = KTPasswordMeter;

import KTScroll from '../core/js/components/scroll'
window.KTScroll = KTScroll;

import KTScrolltop from '../core/js/components/scrolltop'
window.KTScrolltop = KTScrolltop;

import KTSearch from '../core/js/components/search'
window.KTSearch = KTSearch;

import KTStepper from '../core/js/components/stepper'
window.KTStepper = KTStepper;

import KTSticky from '../core/js/components/sticky'
window.KTSticky = KTSticky;

import KTSwapper from '../core/js/components/swapper'
window.KTSwapper = KTSwapper;

import KTToggle from '../core/js/components/toggle'
window.KTToggle = KTToggle;

import KTApp from '../core/js/layout/app'
window.KTApp = KTApp;

import KTLayoutHeader from '../core/js/layout/header'
window.KTLayoutHeader = KTLayoutHeader;

import KTLayoutAside from '../core/js/layout/aside'
window.KTLayoutAside = KTLayoutAside;

import KTLayoutSearch from '../core/js/layout/search'
window.KTLayoutSearch = KTLayoutSearch;

import { createApp, provide, h } from 'vue';
import App from './App.vue';
import { createApolloProvider } from '@vue/apollo-option'
import apolloClient from './apollo.config';
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { createPinia } from 'pinia'
import { useAuth } from './stores/auth'
import CKEditor from '@ckeditor/ckeditor5-vue';
import ElementPlus from 'element-plus'

const pinia = createPinia()
const app = createApp({
    setup () {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
})

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})
app.use(pinia)
app.use(apolloProvider)
app.use(CKEditor)

const auth = useAuth()

auth.me().then(() => {
    const routes = setupLayouts(generatedRoutes)
    const router = createRouter({ history: createWebHistory(), routes })

    app.use(router)
    app.use(ElementPlus)

    app.mount('#app')
})
