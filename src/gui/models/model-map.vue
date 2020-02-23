<template>
    <div class="bg-grey">
        <div ref="svg" class="model-map">
            <div style="padding-bottom: 64%;">
                <svg-map class="svg-map"></svg-map>
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
        path, g {
            transition: fill 0.3s ease;
        }
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

                        try {
                            var element = this.getSvgRegion(region);
                            var toggleClass = (prop, cName) => { element && element.classList[prop ? 'add':'remove'](cName); }

                            toggleClass(region.state.flooding, 'fill-blue');
                            toggleClass(region.state.wildfire, 'fill-orange');

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
