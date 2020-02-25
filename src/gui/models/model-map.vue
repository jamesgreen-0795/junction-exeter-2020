<template>
    <div class="bg-grey">
        <div ref="svg" class="model-map">
            <div style="padding-bottom: 64%;">
                <div class="overlay" ref="overlay">
                    <div
                        v-for="(region, index) in regionsWithTokens"
                        :key="region.uuid"
                        @click="useToken(region.state.activeToken)"
                        class="token"
                        :style="getStyle(region)"
                    >
                        <div class="value">
                            <component v-if="region.state.activeToken.icon" :is="region.state.activeToken.icon"></component>
                            <br>
                            <span class="points">
                                {{ region.state.activeToken.points }}
                            </span>
                        </div>
                    </div>
                </div>
                <svg-map class="svg-map"></svg-map>
                <div class="svg-map-overlay" :style="`background: var(--red);opacity:${temperaturePercentage * 0.75}`"></div>
            </div>
        </div>
        <div class="zoom">
            <button @click="panzoom.zoomIn()">+</button>
            <button @click="panzoom.zoomOut()">-</button>
        </div>
        <div class="information">
            <div class="key bg-blue">
                Flooded
            </div>
            <div class="key bg-orange">
                Wildfires
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    g {
        transition: all 10s ease;
    }

    path {
        fill: #{var(--grey)};
        stroke: #{var(--grey)};
    }
    .model-map {
        background: #{var(--white)};
        // height: 100%;
        // width: 100%;
        border-radius: 0.25rem;
        cursor: grab !important;
        overflow: hidden;
        &.is-moving {
            cursor: grabbing !important;
        }
    }
    .model-map, .svg-map, svg {
        width: 950px;
        height: 620px;
    }

    svg {
        filter: drop-shadow( 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, .1));
        path, g {
            transition: fill 0.3s ease;
        }
    }

    .svg-map-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .zoom {
        position: absolute;
        right: 0.5rem;
        bottom: 0.5rem;
        button {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 2rem;
            height: 2rem;
            border: 0;
            border-radius: 0.25rem;
            background-color: #{var(--teal)};
            color: #{var(--white)};
            font-size: 1.25rem;
            outline: 0 !important;
            cursor: pointer;
            filter: contrast(1);

            &:hover, &:active {
                filter: contrast(2);
            }
        }
    }

    .information {
        position: absolute;
        left: 0.5rem;
        top: 0.5rem;

        .key {
            display: inline-block;
            padding: 0.25rem;
            margin-right: 0.25rem;
            font-size: 0.85rem;
            border-radius: 0.25rem;
        }
    }
    @keyframes token {
        0%{
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 20;
    }
    .token {
        position: absolute;
        width: 3rem;
        height: 3rem;
        background: #{var(--darkred)};
        border-radius: 50%;
        color: #{var(--darkred)};
        opacity: 0.8;
        transform: translate(-50%, -50%);
        cursor: pointer;
        filter: saturate(1);
        transition: filter 0.15s ease;
        filter: drop-shadow(0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.1));
        animation: token 0.4s ease infinite;

        &:hover {
            filter: saturate(1.5);
            z-index: 5;
        }

        .value {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 5;
            color: #fff;
            text-align: center;

            svg {
                color: #fff;
                width: 0.75rem;
                height: auto;
                path {
                    fill: #fff;
                }
            }

            .points {
                font-size: 0.85rem;
            }
        }
    }
</style>

<script>

    import SvgMap from "~assets/regions.svg";
    import Panzoom from '@panzoom/panzoom';
    import relativeElementPosition from "./../misc/relativeElementPosition";

    const svgImpactsContext = require.context("~assets/icons/impacts", true, /.svg/);
    const svgUpgradesContext = require.context("~assets/icons/upgrades", true, /.svg/);
    const svgWeatherContext = require.context("~assets/icons/weather", true, /.svg/);
    const svgTravelContext = require.context("~assets/icons/travel", true, /.svg/);
    const svgRenewableEnergyContext = require.context("~assets/icons/renewable-energy", true, /.svg/);

    export default {
        name: "model-map",

        components: {
            SvgMap,

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

        data(){
            return {
                panzoom: null,
                tokens: {},
                currentZoom: 1,
                regionsWithTokens: [],
            }
        },

        computed: {
            svgPosition(){
                return this.$refs.svg.getBoundingClientRect();
            },
            temperaturePercentage(){
                return ((this.$root.store.fuzzTemperature - 15) / this.$root.store.maxTemperature);
            },
        },

        watch: {
            '$root.store.models.regions': {
                deep: true,
                handler: function(updatedRegions, previousRegions){
                    this.tokens = {};
                    JSON.parse(JSON.stringify(updatedRegions)).forEach(region => {
                        try {
                            var element = this.getSvgRegion(region);
                            var toggleClass = (prop, cName) => { element&&element.classList[prop ? 'add':'remove'](cName); }
                            toggleClass(region.state.flooding, 'fill-blue');
                            toggleClass(region.state.wildfire, 'fill-orange');
                        } catch (error){console.warn(error)}
                    });

                    this.regionsWithTokens = JSON.parse(JSON.stringify(updatedRegions)).filter(region => {
                        return region.state.activeToken && region.state.activeToken.timestamp;
                    });
                },
            },
            '$root.store.user.focusedRegionUuid': {
                deep: true,
                handler: function(updatedFocusedRegionUuid, previousFocusedRegionUuid){
                    this.panToRegion(this.getRegionByUuid(JSON.parse(JSON.stringify(updatedFocusedRegionUuid))));
                },
            }
        },

        methods: {
            panToRegion(region){
                const element = this.getSvgRegion(region);

                if (typeof element == "undefined"){
                    console.error("Unable to find region in SVG? ", region, this.$refs["svg"]);
                    return;
                }

                var svgPosition = this.$refs.svg.getBoundingClientRect();
                var regionPosition = element.getBoundingClientRect();

                var coords = {
                    x: regionPosition.x - svgPosition.x - (svgPosition.width / 2),
                    y: regionPosition.y - svgPosition.y - (svgPosition.height / 2),
                };

                // this.panzoom.zoom(1.1, {animate: true});

                // this.panzoom.moveTo(coords.x, coords.y);
            },
            getSvgRegion(region){
                var element = [...this.$refs.svg.querySelectorAll("path")].find(element => (element.getAttribute("class")+"").includes(region.name.toLowerCase()));
                return element;
            },
            getRegionByName(name){
                return this.$root.store.models.regions.find(region => region.name == name);
            },
            getRegionByUuid(uuid){
                return this.$root.store.models.regions.find(region => region.uuid == uuid);
            },
            getStyle(region){
                try {
                    var element = this.getSvgRegion(region);
                    var regionPosition = element.getBoundingClientRect();
                    var left = regionPosition.x - this.svgPosition.x;
                    var top = regionPosition.y - this.svgPosition.y;
                    var color = region.state.activeToken.color; 
                    return `background:#${color}; top: ${top}px; left: ${left}px;`;
                }
                catch (error){
                    console.warn("Unable to get style for region", region.name.toLowerCase(), error);
                }
            },
            useToken(token){
                window.mutations.useToken(token);
            },
        },

        mounted(){
            this.panzoom = new Panzoom(this.$refs['svg'], {
                contain: "outside",
                maxScale: 2,
                // minScale: 1,

            });
            this.panzoom.zoom(1, {animate: true});
            // this.panzoom.zoom(1, {animate: true});
            // Bind to mousewheel
            this.$refs["svg"].parentElement.addEventListener('wheel', this.panzoom.zoomWithWheel);
            this.$refs["svg"].addEventListener("panzoomstart", () => {
                this.$refs["svg"].classList.add("is-moving");
            });
            this.$refs["svg"].addEventListener("panzoomend", () => {
                this.$refs["svg"].classList.remove("is-moving");
            });

            this.$refs["svg"].addEventListener("panzoomchange", event => {
                this.currentZoom = event.detail.scale;
            });

            this.$refs["svg"].addEventListener("panzoomzoom", event => {
                this.currentZoom = event.detail.scale;
            });
        },

        beforeDestroy(){

        },
    }
</script>
