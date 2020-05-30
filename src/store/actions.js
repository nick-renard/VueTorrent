import Vue from 'vue'
import qbit from '../services/qbit'

export default {
    INIT_INTERVALS: async context => {
        context.state.intervals[0] = setInterval(() => {
            context.commit('updateMainData')
        }, 2000)
    },
    LOGIN: async (context, payload) => {
        const res = await qbit.login(payload)
        console.log(res)
        if (res === 'Ok.') {
            Vue.$toast.success('Successfully logged in!')
            context.commit('LOGIN', true)
            context.commit('updateMainData')
            context.commit('SET_SETTINGS')
            return true
        }
        Vue.$toast.error('Log in failed 😕')
        return false
    }
}
