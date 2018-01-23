<template>
    <section class="demo-icon">
        <demo-block title="Icon">
            <s-col span="8" v-for="icon in icons" :key="icon">
                <s-icon :name="icon" />
                <span>{{ icon }}</span>
            </s-col>
        </demo-block>
    </section>
</template>
<script>
const icons = require('../../../packages/smile-css/scripts/icon-config.js');
export default {
    data() {
        return {
            icons: icons.glyphs.map(icon => icon.css)
        };
    }
};
</script>
<style lang="postcss">
.demo-icon {
    .s-icon {
        display: block;
        font-size: 32px;
        margin: 15px 0;
        color: rgba(69,90,100,.8);
    }
    .s-col {
        text-align: center;
        height: 100px;
        float: none;
        display: inline-block;
        vertical-align: middle;
    }
}
</style>
