import Vuex from 'vuex';
import user from './modules/user';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        user
    }
});