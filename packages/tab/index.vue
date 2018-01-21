<template>
    <div class="s-tab__pane" :class="{
        's-tab__pane--select': index === parentGroup.curActive
    }">
        <slot />
    </div>
</template>
<script>
import { create } from "../utils";
import findParent from "../mixins/find-parent";
export default {
    name: "s-tab",
    mixins: [findParent],
    props: {
        title: {
            type: String,
            required: true
        },
        disabled: Boolean
    },
    computed: {
        index() {
            return this.parentGroup.tabs.indexOf(this);
        }
    },
    created() {
        this.findParentByName("s-tabs");
        this.parentGroup.tabs.push(this);
    },
    destroyed() {
        this.parentGroup.tabs.splice(this.index, 1);
    }
};
</script>