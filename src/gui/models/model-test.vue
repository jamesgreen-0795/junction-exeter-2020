<template>
    <div>
        <div v-for="(region, index) in this.$root.store.models.regions">
            {{ region.name }} {{ region.climate.temperature }}C
        </div>
    </div>
</template>

<script>
    export default {
        name: "model-test",
    }
</script>
