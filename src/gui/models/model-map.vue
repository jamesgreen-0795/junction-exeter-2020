<template>
    <div ref="svg" class="model-map">
        <svg-map style="width: 100%;"></svg-map>
    </div>
</template>

<style lang="scss" scoped>
    g {
        transition: all 10s ease;
    }

    .model-map {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        transform: scale(1.005);
    }

</style>

<script>

    import SvgMap from "~assets/regions.svg";

    export default {
        name: "model-map",

        components: {
            SvgMap,
        },

        watch: {
            '$root.store.models.regions': {
                deep: true,
                handler: function(updatedRegions, previousRegions){
                    JSON.parse(JSON.stringify(updatedRegions)).forEach(region => {
                        if (region.state.flooding){
                            console.log("flood", this.$refs.svg.querySelector(region.classIdentifier));
                            this.$refs.svg.querySelector(region.classIdentifier).classList.add("flooding");
                        }
                        else {
                            this.$refs.svg.querySelector(region.classIdentifier).classList.remove("flooding");
                        }
                    });
                },
            },
        },
    }
</script>
