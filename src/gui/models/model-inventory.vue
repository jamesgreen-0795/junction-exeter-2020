<template>
    <div class="inventory">

		<button
            v-for="(upgrade, index) in $root.store.availableUpgrades"
            :key="upgrade.uuid"
            class="upgrade"
            @click="runUpgrade($event, upgrade)"
        >
			<span class="name">
                {{ upgrade.name }}
            </span>
		</button>
    </div>
</template>

<style lang="scss">
    .inventory {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        border-radius: 0 0 0.5rem 0.5rem;
        background-color: rgba(0, 0, 0, 0.1);

        .upgrade {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            padding-bottom: 50%;
            background: rgba(0, 0, 0, 0.4);
            border: 0;
            cursor: pointer;
            transform: scale(1);
            text-align: center;
            color: #{var(--white)};
            transition: background 0.15s ease, transform 0.15s ease;

            &:hover {
                background: rgba(0, 0, 0, 0.3);
            }

            .name {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
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
            runUpgrade($event, upgrade){
                // remove focus from button after 200ms
                const target = $event.target;
                setTimeout(() => {
                    target.blur();
                }, 200);
                upgrade.onPurchase();
            },
        },
    }
</script>
