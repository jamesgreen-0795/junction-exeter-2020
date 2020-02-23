<template>
    <component :is="$root.store.currentScreen"></component>
</template>

<script>

    const screensContext = require.context("./screens", true, /.vue/);

    export default {
        name: "layout",

        components: {
            ...screensContext.keys().reduce((screens, contextKey) => {
                screens[screensContext(contextKey).default.name] = screensContext(contextKey).default;
                return screens;
            }, {}),
        }
    }
</script>
