<template>
    <div>
        <model-newsfeed></model-newsfeed>
    </div>
</template>

<script>

    const modelContext = require.context("./models", true, /.vue/);

    export default {
        name: "layout",

        components: {
            // Load models
            ...modelContext.keys().reduce((accum, key) => {
                accum[modelContext(key).default.name] = modelContext(key).default;
                return accum;
            }, {})
        },
    }



</script>
