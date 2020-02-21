<template>
    <div class="model-newsfeed">
        <div v-for="(item, index) in $root.store.newsfeed" :key="item.uuid" class="item">
            {{ item.message }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "model-newsfeed",
    }
</script>
