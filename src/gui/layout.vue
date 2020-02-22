<template>
    <div class="layout">
        <model-newsfeed></model-newsfeed>
    </div>
</template>

<style>
    .layout {
        position: relative;
        display: inline-block;
        margin: 4rem auto;
        width: 800px;
        height: 450px;
        border-radius: 12px;
        background: var(--blue);
        box-shadow:  7px 7px 14px #111111, -7px -7px 14px #3d3d3d;
        transition: background 10s ease;
    }
</style>

<script>

    const modelsContext = require.context("./models", true, /.vue/);

    export default {
        name: "layout",

        components: {
            // Load models
            ...modelsContext.keys().reduce((models, contextKey) => {
                models[modelsContext(contextKey).default.name] = modelsContext(contextKey).default;
                return models;
            }, {})
        },
    }



</script>
