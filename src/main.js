import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import store from './store';
import BaseButton from '@/components/UI/BaseButton.vue'

const app = createApp(App);

app.use(router);
app.use(store);
app.component('base-button', BaseButton)

app.mount('#app')
