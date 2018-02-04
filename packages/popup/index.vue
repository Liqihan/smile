<template>
    <transition :name="currentTransition">
        <div v-show="value" class="s-popup" :class="{ [`s-popup--${position}`]: position }">
            <slot />
        </div>
    </transition>ÎÎ
</template>
<script>
import { create } from "../utils";
import Popup from "../mixins/popup";
export default {
    name: "s-popup",
    mixins: [Popup],
    props: {
        transition: String,
        overlay: {
            type: Boolean,
            default: true
        },
        lockOnScroll: {
            type: Boolean,
            default: false
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: true
        },
        position: {
            type: String,
            default: ""
        }
    },
    data() {
        const transition =
            this.transition ||
            (this.position === "" ? "s-fade" : `popup-slide-${this.position}`);
        return {
            currentValue: false,
            currentTransition: transition
        };
    },
    mounted() {
        if (this.value) {
            this.open();
        }
    }
};
</script>
<style lang="css">
</style>
