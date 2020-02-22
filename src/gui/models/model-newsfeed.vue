<template>
    <div class="model-newsfeed">
        <div v-for="(item, index) in recentNews" :key="item.uuid" class="item">
            <span v-html="item.message"></span>
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
        computed: {
            recentNews(){
                return this.$root.store.newsfeed.filter(news => !!this.isNewsRecent(news, this.$root.frame));
            },
        },
        methods: {
            isNewsRecent(item){
                return item.timestamp > ( Date.now() - 5000);
            }
        }
    }
</script>
