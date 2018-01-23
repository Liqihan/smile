<template>
    <section class="demo-toast">
        <demo-block title="sss">
            <s-button @click="showToast">默认toast</s-button>
        </demo-block>
    </section>
</template>
<script>
import {Toast} from 'packages'
export default {
    name: "demo-toast",
    data() {
        return {};
    },
    mounted () {
    },
    methods: {
        showToast () {
            Toast('11111');
        }
    }
};
</script>
<style lang="css">
</style>
