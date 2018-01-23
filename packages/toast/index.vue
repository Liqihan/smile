<template>
    <transition name="s-fade">
        <div class="s-toast-wrapper" v-show="visible">
            <div class="s-toast" :class="[`s-toast--${displayStyle}`, `s-toast--${position}`]">
                <div v-if="displayStyle === 'text'">{{ message }}</div>
                <div v-if="displayStyle === 'html'" v-html="message" />
            </div>
            <!-- with icon -->
            <template v-if="displayStyle === 'default'">
                <loading v-if="type === 'loading'" color="white" />
                <icon v-else class="s-toast__icon" :name="type" />
                <div v-if="message !== undefined" class="s-toast__text">{{ message }}</div>
            </template>
            <div class="s-toast__overlay" :class="{ 's-toast__overlay--mask': mask }" v-if="forbidClick || mask" />
        </div>
    </transition>
</template>
<script>
import { create } from '../utils';
const DEFAULT_STYLE_LIST = ['success', 'fail', 'loading'];
export default create({
    name: "s-toast",
    props: {
        mask: Boolean,
        message: [String, Number],
        forbidClick: Boolean,
        type: {
            type: String,
            default: 'text'
        },
        position: {
            type: String,
            default: 'middle'
        }
    },
    data () {
        return {
            visible: false
        };
    },
    computed: {
        displayStyle () {
            return DEFAULT_STYLE_LIST.indexOf(this.type) !== -1 ? 'default' : this.type;
        }
    }
})
</script>
<style lang="css">
</style>
