<template>
    <div class="wrapper">
        <model-scores></model-scores>
        <div class="map">
            <model-inventory style="z-index: 50;"></model-inventory>
            <model-newsfeed class="newsfeed"></model-newsfeed>
            <model-map></model-map>
        </div>
    </div>
</template>

<style lang="scss">
    .wrapper {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: #{calc(100vh - 1rem)};
    }
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
        width: 90vw;
        height: 80vh;
        max-width: 950px;
        max-height: 620px;
        top: 0.5rem;
        border-radius: 12px;
        background: var(--black);
        box-shadow:  7px 7px 14px #111111, -7px -7px 14px #3d3d3d;
        transition: background 10s ease;
        overflow: hidden;

        .newsfeed {
            z-index: 5;
        }
    }
</style>

<script>

    const modelsContext = require.context("./../models", true, /.vue/);

    export default {
        name: "game-screen",

        components: {
            // Load models
            ...modelsContext.keys().reduce((models, contextKey) => {
                models[modelsContext(contextKey).default.name] = modelsContext(contextKey).default;
                return models;
            }, {})
        },
    }
</script>
