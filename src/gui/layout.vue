<template>
    <div class="wrapper">
        <model-scores></model-scores>
        <div class="map">
            <div class="sidebar">
                <h5 style="text-align:center;">Inventory</h5>
                <model-inventory></model-inventory>
            </div>
            <model-test class="test"></model-test>
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

    .sidebar {
        position: absolute;
        bottom: 0;
        left: 0;
        display: inline-flex;
        flex-direction: column;
        width: 25%;
        background: #{var(--teal)};
        border-radius: 0 12px 0 12px;
        z-index: 5;
        opacity: 0.75;
        transform: #{translateY(calc(100% - 3.85rem))};
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
        transition: opacity 0.15s ease, transform 0.3s ease;

        &:hover {
            opacity: 1;
            transform: #{translateY(0)};
        }
    }

    .map {
        position: relative;
        display: inline-block;
        width: 90vw;
        height: 85vh;
        max-width: 950px;
        max-height: 620px;
        top: 0.25rem;
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
