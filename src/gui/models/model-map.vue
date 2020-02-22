<template>
    <div ref="svg">
        <svg-map style="width: 100%;height:100%;"></svg-map>
    </div>
</template>

<script>

    import SvgMap from "~assets/continents.svg";

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
                            this.$refs.svg.querySelector(region.classIdentifier).classList.add("bg-blue");
                        }
                        else {
                            this.$refs.svg.querySelector(region.classIdentifier).classList.remove("bg-blue");
                        }
                    });
                },
            },
        },
    }
</script>
