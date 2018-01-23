<template>
    <section class="demo-tab">
        <demo-block title="基础用法">
            <s-tabs>
                <s-tab v-for="index in 4" :key="index" :title="`${index}`">
                    {{index}}
                </s-tab>
            </s-tabs>
        </demo-block>
        <demo-block title="横向滚动">
            <s-tabs>
                <s-tab v-for="index in 8" :key="index" :title="`${index}`">
                    {{index}}
                </s-tab>
            </s-tabs>
        </demo-block>
        <demo-block title="禁用">
            <s-tabs @disabled="onClickDisabled">
                <s-tab v-for="index in 8" :key="index" :disabled="index === 2" :title="`${index}`">
                    {{index}}
                </s-tab>
            </s-tabs>
        </demo-block>
        <demo-block title="换种样式">
            <s-tabs type="card" @click="handleTabClick">
                <s-tab v-for="index in 8" :key="index" :title="`${index}`">
                    {{index}}
                </s-tab>
            </s-tabs>
        </demo-block>
        <demo-block title="粘性布局">
            <s-tabs :active="active" sticky>
                <s-tab v-for="index in 8" :key="index" :title="`${index}`" >
                    {{index}}
                </s-tab>
            </s-tabs>
        </demo-block>
    </section>
</template>
<script>
export default {
    data() {
        return {
            active: 2,
            tabs: [1, 2, 3, 4]
        };
    },
    mounted() {},
    methods: {
        onClickDisabled() {
            console.log("Disabled");
            // Toast("Disabled!");
        },
        handleTabClick(index) {
            console.log(index);
            // Toast(index);
        }
    }
};
</script>
<style lang="postcss">
.demo-tab {
    margin-bottom: 1000px;
    .s-demo-block__content {
        padding: 0;
    }
    .s-tab__pane {
        padding: 20px;
    }
    &:last-child {
        .s-tab__pane {
            background-color: #fff;
            padding: 50px 20px;
        }
    }
}
</style>
