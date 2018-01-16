<template>
    <div class="s-loading" :class="['s-loading--' + type, 's-loading--' + color]">
        <span class="s-loading__spinner" :class="['s-loading__spinner--' + type, 's-loading__spinner--' + color]">
            <i v-if="type === 'spinner'" v-for="item in 12" />
        </span>
    </div>
</template>
<script>
export default {
    name: "loading",
    props: {
        type: {
            type: String,
            default: "gradient-circle"
        },
        color: {
            type: String,
            default: "black"
        }
    }
};
</script>
<style lang="css">

</style>