<template>
    <div class="s-steps" :class="`s-steps--${direction}`">
        <div class="s-steps__items s-steps__items--alone">
            <slot />
        </div>
    </div>
</template>
<script>
import { create } from "../utils";
export default create({
    name: "s-steps",
    props: {
        active: Number,
        direction: {
            type: String,
            default: "horizontal"
        },
        activeColor: {
            type: String,
            default: "#06bf04"
        }
    },
    data() {
        return {
            steps: []
        };
    }
});
</script>
