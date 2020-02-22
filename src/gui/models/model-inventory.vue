<template>
    <div class="inventory">
		
		<li v-for="upgrade in $root.store.availableUpgrades">
			{{ upgrade.name }}
		</li>
        <button class="upgrade" @click="upgrade($event, 'fossil-fuels')">
            Fossil Fuels
        </button>
        <button class="upgrade" @click="upgrade($event, 'transportation')">
            Transportation
        </button>
        <button class="upgrade" @click="upgrade($event, 'destruction')">
            Destruction
        </button>
        <button class="upgrade" @click="upgrade($event, 'waste')">
            Waste
        </button>
    </div>
</template>

<style lang="scss">
    .inventory {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        border-radius: 0 0 0.5rem 0.5rem;

        .upgrade {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 50%;
            background: #{var(--black)};
            border-color: #{var(--grey)};
            border-width: 1px;
            cursor: pointer;
            transform: scale(1);
            text-align: center;
            color: #{var(--white)};
            transition: background 0.15s ease, transform 0.15s ease;

            &:hover {
                background: #{var(--dark)};
            }

            &:hover:focus {
                transform: scale(0.95);
                border: 1px solid #{var(--grey)} !important;
            }

            &:nth-child(1){
                border-left: 0;
                border-top: 0;
            }
            &:nth-child(2){
                border-right: 0;
                border-top: 0;
            }
            &:nth-child(3){
                border-radius: 0 0 0 0.5rem;
                border-left: 0;
                border-bottom: 0;
            }
            &:nth-child(4){
                border-right: 0;
                border-bottom: 0;
            }
        }
    }
</style>

<script>

    const svgUpgradesContext = require.context("~assets/icons/upgrades", true, /.svg/);

    export default {
        name: "model-inventory",

        components: {
            // Load svgs - `<svg-${basename}/>`
            ...svgUpgradesContext.keys().reduce((svgs, contextKey) => {
                svgs[`svg-${contextKey.replace(/\.\//, "").replace(/\.svg/, "")}`] = svgUpgradesContext(contextKey);
                return svgs;
            }, {})
        },

        methods: {
            upgrade($event, type){
                console.log(`TODO: upgrade method handling in 'src/gui/models/model-inventory.default.methods.upgrade($event, '${type}')'`);

                // remove focus from button after 200ms
                const target = $event.target;
                setTimeout(() => {
                    target.blur();
                }, 200);
            },
        },
    }
</script>
