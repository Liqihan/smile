<template>
    <div 
    class="s-col"
    :class="{
        [`s-col-${span}`]: span,
        [`s-col-offset-${offset}`]: offset
    }"
    :style="style"
    >
        <slot />
    </div>
</template>
<script>
import { create } from "../utils";
export default create({
    name: "s-col",
    props: {
        span: [Number, String],
        offset: [Number, String]
    },
    computed: {
        gutter() {
            return (this.$parent && Number(this.$parent.gutter)) || 0;
        },
        style() {
            const padding = `${this.gutter / 2}px`;
            return this.gutter
                ? {
                      paddingLeft: padding,
                      paddingRight: padding
                  }
                : {};
        }
    }
});
</script>
