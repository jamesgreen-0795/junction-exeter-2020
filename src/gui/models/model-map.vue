<template>
    <div ref="svg" class="model-map">
        <div>
            <svg-map class="svg-map"></svg-map>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    g {
        transition: all 10s ease;
    }

    path {
        fill: #{var(--teal)};
    }
    .model-map {
        background: #{var(--white)};
        border-radius: 0.25rem;
        cursor: grab !important;
        &.is-moving {
            cursor: grabbing !important;
        }
    }
    .svg-map {
        transform: scale(1.1);
    }
</style>

<script>

    import SvgMap from "~assets/regions.svg";
    import Panzoom from '@panzoom/panzoom';
    import relativeElementPosition from "./../misc/relativeElementPosition";

    export default {
        name: "model-map",

        components: {
            SvgMap,
        },

        data(){
            return {
                panzoom: null,
            }
        },

        watch: {
            '$root.store.models.regions': {
                deep: true,
                handler: function(updatedRegions, previousRegions){
                    JSON.parse(JSON.stringify(updatedRegions)).forEach(region => {
                        if (region.state.flooding){
                            console.log("flood", this.$refs.svg.querySelector(region.classIdentifier));
                            // this.$refs.svg.querySelector(region.classIdentifier).classList.add("flooding");
                        }
                        else {
                            // this.$refs.svg.querySelector(region.classIdentifier).classList.remove("flooding");
                        }
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
                const element = this.$refs.svg.querySelector(`.${region.name}`);

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

                console.log(coords);

                this.panzoom.pan(coords.x, coords.y);
                this.panzoom.zoom(5, {animate: true});
                // this.panzoom.moveTo(coords.x, coords.y);
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
                minScale: 1,
                // zoom: 2,
                // panOnlyWhenZoomed: true,
            });
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
