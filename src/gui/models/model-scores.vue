<template>
    <div class="scores">
        <div class="bar points">
            <span class="progress" :style="`width:${$root.store.points / $root.store.maxPoints}%;`"></span>
        </div>
        <div class="bar temperture">
            <span class="progress" :style="`width:${$root.store.temperature / $root.store.maxTemperature}%;`"></span>
        </div>
    </div>
</template>

<style lang="scss">
    .scores {
        position: absolute;
        top: 2.5vh;
        right: 5vw;
    }
    .bar {
        display: inline-flex;
        width: 200px;
        height: 0.85rem;
        margin-left: 5rem;
        border-radius: 0.5rem;
        background: #{var(--white)};
        overflow: hidden;
        backface-visibility: hidden;
        box-shadow: inset 0 0 4px #353535, 0 0 4px #{var(--black)};

        .progress {
            display: inline-block;
            height: 100%;
            min-width: 0.5rem;

        }
    }
    .points .progress {
        background: #{var(--green)};
    }
    .temperture .progress {
        background: #{var(--blue)};
    }
</style>

<script>
    export default {
        name: "model-scores",
    }
</script>
