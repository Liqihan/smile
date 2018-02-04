<template>
    <transition :name="currentTransition">
        <div v-show="value" class="s-popup" :class="{ [`s-popup--${position}`]: position }">
            <slot />
        </div>
    </transition>ÎÎ
</template>
<script>
import { create } from '../utils';
import Popup from '../mixins/popup';
export default {
    name: "s-popup",
    data() {
        return {};
    }
};
</script>
<style lang="css">
</style>
