<template>
    <div class="scores">
        <span class="label">
            Points
        </span>
        <div class="bar points">
            <span class="progress" :style="`width:${pointsPercentage}%;`"></span>
        </div>
        <span class="label">
            Temperature
        </span>
        <div class="bar temperature">
            <span class="progress" :style="`width:${temperaturePercentage * 100}%;`">
                <div class="overlay" :style="`background: var(--red);opacity:${temperaturePercentage}`"></div>
            </span>
        </div>
    </div>
</template>

<style lang="scss">
    .scores {
        position: absolute;
        top: 2.5vh;
        right: 5vw;
        display: flex;
        align-items: center;
    }
    .label {
        display: inline-block;
        margin-left: 2rem;
        font-size: 0.85rem;
    }
    .bar {
        position: relative;
        display: inline-flex;
        width: 200px;
        height: 1rem;
        margin-left: 0.5rem;
        border-radius: 1rem;
        background: #{var(--white)};
        overflow: hidden;
        backface-visibility: hidden;
        box-shadow: inset 0 0 4px #353535, 0 0 4px #{var(--black)};

        .progress {
            position: relative;
            display: inline-block;
            height: 100%;
            min-width: 0.5rem;
            transition: width 1s ease;
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
    .points .progress {
        background: #{var(--yellow)};
    }
    .temperature .progress {
        background: #{var(--green)};
    }
</style>

<script>
    export default {
        name: "model-scores",
        computed: {
            pointsPercentage(){
                return (this.$root.store.points / this.$root.store.maxPoints)*100;
            },
            temperaturePercentage(){
                return ((this.$root.store.fuzzTemperature - 15) / this.$root.store.maxTemperature);
            },
        }
    }
</script>
