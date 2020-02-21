<template>
    <div>
        <model-newsfeed></model-newsfeed>
    </div>
</template>

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
