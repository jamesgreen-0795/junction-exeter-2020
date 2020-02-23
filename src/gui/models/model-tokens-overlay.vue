<template>
    <div class="overlay" ref="overlay">
        <div
            v-for="(uuid, index) in Object.keys(value)"
            :key="uuid"
            @click="useToken(value[uuid].data)"
            class="token"
            :style="value[uuid].style"
        >
            {{ value[uuid].data.type }}
        </div>
    </div>
</template>

<style lang="scss">
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 20;
    }
    .token {
        position: absolute;
        width: 4rem;
        height: 4rem;
        background: #{var(--blue)};
        color: #fff;
        border-radius: 2rem;
        opacity: 0.8;
        transform: translate(-50%, -50%);
    }
</style>

<script>
    export default {
        name: "model-tokens-overlay",

        props: ["value"],

        methods: {
            useToken(token){
                window.mutations.useToken(token);
                console.log("used token", token)
            }
        }
    }
</script>
