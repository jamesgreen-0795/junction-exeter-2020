<template>
    <div>
        <div v-for="(region, index) in $root.store.models.regions" :key="region.uuid" v-if="region.state.hasOil">
            {{ region.name }} has oil!
        </div>
    </div>
</template>

<script>
    export default {
        name: "model-test",
    }
</script>
