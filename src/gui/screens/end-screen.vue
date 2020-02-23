<template>
    <div class="end">
        <h1>
            You won,
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;but at what cost?
        </h1>
    </div>
</template>

<style lang="scss">
    h1 {
        font-family: 'Odibee Sans';
        font-size: 5rem;
        font-weight: 300;
        margin: 1rem;
    }
    .end {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        background: #{var(--red)};
        color: #fff;
    }
</style>

<script>
    export default {
        name: "end-screen",
    }
</script>
