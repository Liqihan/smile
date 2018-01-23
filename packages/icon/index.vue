<template>
    <i class="s-icon" :class="`s-icon-${name}`" v-on="$listeners">
        <slot />
        <div v-if="info" class="s-icon__info">{{ info }}</div>
    </i>
</template>

<script>
import install from "../utils/install";
export default {
    install,
    name: "s-icon",
    props: {
        name: String,
        info: String
    }
};
</script>
