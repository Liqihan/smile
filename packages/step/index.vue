<template>
    <div class="s-step s-hairline" :class="[`s-step--${$parent.direction}`, { [`s-step--${status}`]: status }]">
         <div class="s-step__circle-container">
            <i class="s-step__circle" v-if="status !== 'process'" />
            <icon v-else name="checked" :style="{ color: $parent.activeColor }" />
        </div>
        <div class="s-step__title" :style="titleStyle">
            <slot />
        </div>
        <div class="s-step__line" />
    </div>
</template>
<script>
import { create } from "../utils";
export default create({
    name: "s-step",
    beforeCreate() {
        this.$parent.steps.push(this);
    },
    computed: {
        status() {
            const index = this.$parent.steps.indexOf(this);
            const active = this.$parent.active;
            if (index < active) {
                return "finish";
            } else if (index === active) {
                return "process";
            }
        },
        titleStyle() {
            return this.status === "process"
                ? {
                      color: this.$parent.activeColor
                  }
                : {};
        }
    }
});
</script>
