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
    }
    .svg-map {
        transform: scale(1.1);
    }
</style>

<script>

    import SvgMap from "~assets/regions.svg";
    import PanZoom from "panzoom";

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
        },

        mounted(){
            this.panzoom = new PanZoom(this.$refs['svg'], {
                bounds: true,
                boundsPadding: 1,
                maxZoom: 3,
                minZoom: 1
            });
        },

        beforeDestroy(){

        },
    }
</script>
