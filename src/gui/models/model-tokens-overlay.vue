<template>
    <div class="overlay" ref="overlay">
        <div
            v-for="(uuid, index) in Object.keys(value)"
            :key="uuid"
            @click="useToken(value[uuid].data)"
            class="token"
            :style="value[uuid].style"
        >
            <svg-map-marker></svg-map-marker>

            <div class="value">
                + {{ value[uuid].data.points }}
                <component v-if="value[uuid].data.icon" :is="value[uuid].data.icon"></component>
            </div>
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
        color: #{var(--orange)};
        opacity: 0.8;
        transform: translate(-50%, -50%);
        cursor: pointer;
        filter: saturate(1);
        transition: filter 0.15s ease;

        &:hover {
            filter: saturate(1.5);
        }

        .value {
            position: absolute;
            top: 1rem;
            left: 50%;
            transform: translateX(-50%);
            z-index: 5;
            color: #fff;
        }
    }
</style>

<script>

    import svgMapMarker from "~assets/icons/misc/map-marker-solid.svg";

    const svgImpactsContext = require.context("~assets/icons/impacts", true, /.svg/);
    const svgUpgradesContext = require.context("~assets/icons/upgrades", true, /.svg/);
    const svgWeatherContext = require.context("~assets/icons/weather", true, /.svg/);
    const svgTravelContext = require.context("~assets/icons/travel", true, /.svg/);
    const svgRenewableEnergyContext = require.context("~assets/icons/renewable-energy", true, /.svg/);

    export default {
        name: "model-tokens-overlay",

        components: {
            svgMapMarker,
            // Load svgs - `<svg-${basename}/>`
            ...svgImpactsContext.keys().reduce((svgs, contextKey) => {
                svgs[`svg-impacts-${contextKey.replace(/\.\//, "").replace(/\.svg/, "")}`] = svgImpactsContext(contextKey);
                return svgs;
            }, {}),
            ...svgUpgradesContext.keys().reduce((svgs, contextKey) => {
                svgs[`svg-upgrades-${contextKey.replace(/\.\//, "").replace(/\.svg/, "")}`] = svgUpgradesContext(contextKey);
                return svgs;
            }, {}),
            ...svgWeatherContext.keys().reduce((svgs, contextKey) => {
                svgs[`svg-weather-${contextKey.replace(/\.\//, "").replace(/\.svg/, "")}`] = svgWeatherContext(contextKey);
                return svgs;
            }, {}),
            ...svgTravelContext.keys().reduce((svgs, contextKey) => {
                svgs[`svg-travel-${contextKey.replace(/\.\//, "").replace(/\.svg/, "")}`] = svgTravelContext(contextKey);
                return svgs;
            }, {}),
            ...svgRenewableEnergyContext.keys().reduce((svgs, contextKey) => {
                svgs[`svg-renewable-energy-${contextKey.replace(/\.\//, "").replace(/\.svg/, "")}`] = svgRenewableEnergyContext(contextKey);
                return svgs;
            }, {}),
        },

        props: ["value"],

        methods: {
            useToken(token){
                window.mutations.useToken(token);
                console.log("used token", token)
            }
        }
    }
</script>
