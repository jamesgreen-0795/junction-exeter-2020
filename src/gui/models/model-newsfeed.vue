<template>
    <div class="model-newsfeed">
        <div v-for="(item, index) in $root.store.newsfeed" v-if="index < 3" :key="item.uuid" class="item">
            {{ item.message }}
        </div>
    </div>
</template>

<style lang="scss">
    .model-newsfeed {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-size: 0.85em;
        text-align: right;

        .item {
            display: inline-block;
            margin-bottom: 0.25rem;
            padding: 0 0.25rem;
            background-color: #{var(--white)};
            border-radius: 0.25rem;
            color: #{var(--black)};
        }
    }
</style>

<script>
    export default {
        name: "model-newsfeed",
    }
</script>
