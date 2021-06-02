import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import DailyChecking from './components/DailyChecking.vue'
import SpecificChecking from './components/SpecificChecking.vue'
import RecontrolPeriod from './components/RecontrolPeriod.vue'

const routes = [
    {
        name : 'Home',
        path : '/',
        component : Home
    }, 
    {
        name : 'DailyChecking',
        path : '/daily-checking',
        component : DailyChecking
    },
    {
        name : 'SpecificChecking',
        path : '/specific-checking',
        component : SpecificChecking 
    },
    {
        name : 'RecontrolPeriod',
        path : '/recontrol-period',
        component : RecontrolPeriod 
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;