<template>
    <transition name="s-fade">
        <div
            v-show="visible"
            class="s-modal"
            :class="className"
            :style="style"
            @touchmove.prevent.stop
            @click="$emit('click', $event)"
        >

        </div>
    </transition>
</template>
<script>
export default {
    name: "s-modal",
    props: {
        visible: Boolean,
        zIndex: Number,
        className: String,
        customStyle: Object
    },
    computed: {
        style() {
            return {
                zIndex: this.zIndex,
                ...this.customStyle
            };
        }
    }
};
</script>
