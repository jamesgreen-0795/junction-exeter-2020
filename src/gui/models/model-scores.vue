<template>
    <div class="scores">
        <span :class="`label ${activeTweens ? 'is-tweening':''}`">
            {{ tweenedPointsFloored }} Carbon Points
        </span>
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

<style lang="scss" scoped>
    @keyframes growing {
        0% {
            transform: translateZ(0) scale(1);
        }
        50% {
            transform: translateZ(0) scale(1.15);
        }
        100% {
            transform: translateZ(0) scale(1);
        }
    }
    .scores {
        position: absolute;
        top: 2.5vh;
        left: 50%;
        transform: translateX(-50%);
        max-width: 90vw;
        display: flex;
        align-items: center;
    }
    .label {
        display: inline-block;
        margin-left: 3rem;
        font-size: 0.85rem;
        min-width: 75px;
        white-space: nowrap;
        backface-visibility: hidden;
        transform: translateZ(0);

        &.is-tweening {
            animation: growing 0.2s ease infinite;
        }
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
    import { TweenLite } from "gsap";

    export default {
        name: "model-scores",

        data(){
            return {
                tweenedPoints: 0,
                activeTweens: 0,
            }
        },

        computed: {
            pointsPercentage(){
                return (this.$root.store.points / this.$root.store.maxPoints)*100;
            },
            temperaturePercentage(){
                return ((this.$root.store.fuzzTemperature - 15) / this.$root.store.maxTemperature);
            },
            tweenedPointsFloored(){
                return Math.floor(this.tweenedPoints);
            },
        },

        watch: {
            '$root.store.points': {
                deep: true,
                handler: function(newValue, oldValue){
                    this.activeTweens = this.activeTweens + 1;
                    TweenLite.to(this.$data, 0.5, {
                        tweenedPoints: newValue,
                        onComplete: () => {
                            setTimeout(() => {
                                this.activeTweens = this.activeTweens - 1;
                            }, 200);
                        }
                    });
                }
            }
        }
    }
</script>
