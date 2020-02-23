<template>
    <div class="start">
        <div>
            <h1>
                Turn up the heat
            </h1>
            <p>
                Our planet is slowly dying... and all of us with it.<br>
                See the real world impacts for yourself...
            </p>
            <button @click="$root.store.currentScreen = 'game-screen'" class="btn-start-game btn-orange">
                BEGIN
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @keyframes growIn {
        from {
            transform: scale(0.5);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
    @keyframes button {
        0% {
            transform: scale(1);
        }
        40% {
            transform: scale(1.1);
        }
        50% {
            transform: scale(0.9);
        }
        60% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
    h1 {
        font-family: 'Odibee Sans';
        font-size: 5rem;
        font-weight: 300;
        margin: 1rem;
    }
    .start {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100vh;
        background: #2f1a00;
        background: linear-gradient(180deg, rgba(47,26,0,0.5) 0%, rgba(47,26,0,1) 100%);
    }
    .start > div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        animation: growIn 1s ease;
    }

    .btn-start-game {
        margin-top: 2rem;
        font-size: 2rem;
        font-family: 'Odibee Sans';
        animation: button 2s ease infinite;
        animation-delay: 1.2s;
    }
</style>

<script>
    export default {
        name: "start-screen",
    }
</script>
