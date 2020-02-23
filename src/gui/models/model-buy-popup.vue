<template>
    <div class="popup">
        <div class="header">
            {{ title }}
        </div>
        <div class="content">
            <slot></slot>
        </div>
        <div class="footer">
            <slot #footer></slot>
        </div>
    </div>
</template>

<style lang="scss">
    .popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 50vw;
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #{var(--white)};
        color: #{var(--dark)};
        z-index: 20;
    }
</style>

<script>
    export default {
        name: "model-buy-popup",
        props: {
            title: String,

        }
    }
</script>
