<template>
    <div class="model-newsfeed">
        <div v-for="(item, index) in recentNews.reverse()" v-if="isNewsRecent(item)" :key="item.uuid" class="item">
            <span v-html="item.message" :style="`opacity: ${(Math.abs(Date.now() - item.timestamp)/100)};`"></span>
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
        font-size: 0.65em;
        text-align: right;
        opacity: 0.75;

        .item {
            display: inline-block;
            margin-bottom: 0.25rem;
            padding: 0.25rem 0.5rem;
            background-color: #{var(--black)};
            border-radius: 0.25rem;
            color: #{var(--white)};
            max-width: 25vw;
            text-align: left;
            opacity: 0.85;
            transition: opacity 0.2s ease;
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
