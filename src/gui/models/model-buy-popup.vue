<template>
    <div class="popup">
        <div class="header">
            <h2>
                {{ title }}
            </h2>
        </div>
        <div class="content">
            <slot></slot>
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
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #{var(--white)};
        padding: 2rem;
        color: #{var(--dark)};
        box-shadow: 0 0 5rem rgba(0, 0, 0, 0.5);
        z-index: 20;

        .header, .content {
            padding: 0 0 2rem 0;
        }
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
