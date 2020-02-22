import vue from 'vue/dist/vue.js';

import layout from "./layout.vue";

window.gui = {
    vue: new vue({
        el: "#app",
        components: {
            layout,
        },
        template: "<layout/>",
        data: {
            store: window.store,
        },
        computed: {
            frame(){
                return this.store.currentFrame;
            },
        },
    }),
};
