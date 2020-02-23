<template>
    <div class="inventory">
        <model-buy-popup v-if="showPopup" title="popupTitle">
            Apply upgrade?
            Cost: {{ openUpgrade.price }}

            <template #footer>
                <button @click="runUpgrade(openUpgrade, openUpgradeCategoryKey)"></button>
            </template>
        </model-buy-popup>
		<button
            v-for="(upgradeCategoryKey, index) in availableUpgradeKeys"
            :key="upgradeCategoryKey"
            v-if="$root.store.availableUpgrades[upgradeCategoryKey].length"
            class="upgrade"
            :disabled="!canUpgrade($root.store.availableUpgrades[upgradeCategoryKey][0])"
            @click="startUpgrade($event, $root.store.availableUpgrades[upgradeCategoryKey][0], upgradeCategoryKey)"
        >
			<span class="name">
                {{ $root.store.availableUpgrades[upgradeCategoryKey][0].name }}
                <br>
                <span class="price bg-yellow">
                    {{ $root.store.availableUpgrades[upgradeCategoryKey][0].price }}
                </span>
            </span>
		</button>
    </div>
</template>

<style lang="scss">
    @keyframes flashred {
        0% {
            background: #{var(--red)};
        }
        50% {
            background: #{var(--yellow)};
        }
        100% {
            background: #{var(--red)};
        }
    }

    .inventory {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        border-radius: 0 0 0.5rem 0.5rem;
        background-color: rgba(0, 0, 0, 0.1);

        .price {
            display: inline-block;
            padding: 0.25rem;
            border-radius: 0.25rem;
            margin-top: 0.25rem;
            color: #{var(--black)};
        }

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
            transition: background 0.15s ease, transform 0.15s ease, filter 0.15s ease;

            &[disabled]{
                background: var(--dark);
                cursor: default;
            }

            &:not([disabled]).hover {
                background: rgba(0, 0, 0, 0.3);
            }

            .name {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            &:not([disabled]).hover:focus {
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

    import modelBuyPopup from "./model-buy-popup.vue";

    const svgUpgradesContext = require.context("~assets/icons/upgrades", true, /.svg/);

    export default {
        name: "model-inventory",

        components: {
            "model-buy-popup": modelBuyPopup,

            // Load svgs - `<svg-${basename}/>`
            ...svgUpgradesContext.keys().reduce((svgs, contextKey) => {
                svgs[`svg-${contextKey.replace(/\.\//, "").replace(/\.svg/, "")}`] = svgUpgradesContext(contextKey);
                return svgs;
            }, {})
        },

        data(){
            return {
                showPopup: false,
                popupTitle: "",
                openUpgrade: null,
                openUpgradeCategoryKey: null,
            }
        },

        computed: {
            availableUpgradeKeys(){
                return Object.keys(this.$root.store.availableUpgrades);
            },
        },

        methods: {
            runUpgrade(upgrade, upgradeCategoryKey){
                upgrade.onPurchase();
                window.mutations.upgrades.removeUpgrade(upgrade, upgradeCategoryKey);
                this.closeOpenUpgrade();
            },
            closeOpenUpgrade(){
                this.popupTitle = null;
                this.openUpgrade = null;
                this.openUpgradeCategoryKey = null;
                this.showPopup = false;
            },
            startUpgrade($event, upgrade, upgradeCategoryKey){

                const target = $event.target;
                // remove focus from button after 200ms and remove upgrade from list

                setTimeout(() => {
                    target.blur();
                }, 200);

                this.openUpgrade = upgrade;
                this.openUpgradeCategoryKey = upgradeCategoryKey;
                this.popupTitle = upgrade.name;
                this.showPopup = true;
            },
            canUpgrade(upgrade){
                return upgrade.points <= this.$root.store.points;
            },
        },
    }
</script>
