import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    el: '#modal',
    vuetify: new Vuetify(),
    data: () => ({
      dialog: false,
    }),
});
