<template>
    <div class="bg-grey">
        <div ref="svg" class="model-map">
            <div style="padding-bottom: 64%;">
                <model-tokens-overlay v-model="tokens"></model-tokens-overlay>
                <svg-map class="svg-map"></svg-map>
            </div>
        </div>
        <div class="zoom">
            <button @click="panzoom.zoomIn()">+</button>
            <button @click="panzoom.zoomOut()">-</button>
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
</style>

<script>

    import SvgMap from "~assets/regions.svg";
    import Panzoom from '@panzoom/panzoom';
    import relativeElementPosition from "./../misc/relativeElementPosition";
    import modeltokensOverlay from "./model-tokens-overlay.vue";

    export default {
        name: "model-map",

        components: {
            SvgMap,
            "model-tokens-overlay": modeltokensOverlay,
        },

        data(){
            return {
                panzoom: null,
                tokens: {},
            }
        },

        computed: {
            svgPosition(){
                return this.$refs.svg.getBoundingClientRect();
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

                            if (element){
                                var toggleClass = (prop, cName) => { element.classList[prop ? 'add':'remove'](cName); }

                                toggleClass(region.state.flooding, 'fill-blue');
                                toggleClass(region.state.wildfire, 'fill-orange');

                                var regionPosition = element.getBoundingClientRect();

                                var left = regionPosition.x - this.svgPosition.x;
                                var top = regionPosition.y - this.svgPosition.y;

                                if (region.state.activeToken && region.state.activeToken.timestamp){
                                    this.tokens[region.uuid] = {
                                        region: region,
                                        data: region.state.activeToken,
                                        style: `top: ${top}px; left: ${left}px;`,
                                    };
                                }
                            }

                        } catch (error){console.warn(error)}
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

                console.log(svgPosition, regionPosition);

                // this.panzoom.zoom(1.1, {animate: true});

                // this.panzoom.moveTo(coords.x, coords.y);
            },
            getSvgRegion(region){
                var element = [...this.$refs.svg.querySelectorAll("path")].find(element => element.getAttribute("class") == region.name.toLowerCase());
                return element;
            },
            getRegionByName(name){
                return this.$root.store.models.regions.find(region => region.name == name);
            },
            getRegionByUuid(uuid){
                return this.$root.store.models.regions.find(region => region.uuid == uuid);
            },
        },

        mounted(){
            this.panzoom = new Panzoom(this.$refs['svg'], {
                contain: "outside",
                maxScale: 10,
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
        },

        beforeDestroy(){

        },
    }
</script>
