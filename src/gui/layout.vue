<template>
    <div>
        <div class="map">
            <model-test class="test"></model-test>
            <model-newsfeed class="newsfeed"></model-newsfeed>
            <model-map></model-map>
            <div class="current-frame-iteration">
                {{ $root.frame }}
            </div>
        </div>

        <button @click="mutateOil">
            Oil
        </button>
    </div>
</template>

<style lang="scss">
    .test {
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        z-index: 5;
        font-size: 0.6em;
        background-color: rgba(255,255,255, 0.5);
        padding: 0.25rem;
        color: #000;
    }



    .map {
        position: relative;
        display: inline-block;
        margin: 3rem auto;
        width: 55vw;
        height: 40vh;
        border-radius: 12px;
        background: var(--black);
        box-shadow:  7px 7px 14px #111111, -7px -7px 14px #3d3d3d;
        transition: background 10s ease;
        overflow: hidden;

        .current-frame-iteration {
            position: absolute;
            bottom: 0.5rem;
            right: 0.5rem;
            font-size: 0.75rem;
        }

        .newsfeed {
            z-index: 5;
        }
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

        methods: {
            mutateOil(){
                window.mutations.upgrades.oil1();
            }
        }
    }



</script>
