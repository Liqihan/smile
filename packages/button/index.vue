<template>
  <component
    :is ="tag"
    :type = "nativeType"
    :disabled = "disabled"
    class="s-button"
    @click="onClick"
    :class="[
        's-button--' + type,
        's-button--' + size,
        {
            's-button--disabled': disabled,
            's-button--loading': loading,
            's-button--block': block,
            's-button--bottom-action': bottomAction
        }
    ]"
  >
    <loading
        v-if="loading"
        class="s-button__icon-loading"
        type="circle"
        :color="type === 'default' ? 'black' : 'white'"
    />
    <span class="s-button__text">
        <slot />
    </span>
  </component>
</template>
<script>
import {create} from '../utils';
export default create({
    name: "s-button",
    props: {
        block: Boolean,
        loading: Boolean,
        disabled: Boolean,
        nativeType: String,
        bottomAction: Boolean,
        tag: {
            type: String,
            default: "button"
        },
        type: {
            type: String,
            default: "default"
        },
        size: {
            type: String,
            default: "normal"
        }
    },
    methods: {
        onClick(e) {
            if (!this.loading && !this.disabled) {
                this.$emit("click", e);
            }
        }
    }
});
</script>
