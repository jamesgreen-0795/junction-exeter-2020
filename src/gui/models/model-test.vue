<template>
    <div>
        <div v-for="(region, index) in this.$root.store.models.regions">
            {{ region.name }} {{ region.state.corruption }}C
        </div>
    </div>
</template>

<script>
    export default {
        name: "model-test",
    }
</script>
