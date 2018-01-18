<template>
    <section class="demo-layout">
        <demo-block title="基础用法">
            <s-row>
                <s-col span="8">span: 8</s-col>
                <s-col span="8">span: 8</s-col>
                <s-col span="8">span: 8</s-col>
            </s-row>

            <s-row>
                <s-col span="4">span: 4</s-col>
                <s-col span="10" offset="4">offset: 4, span: 10</s-col>
            </s-row>

            <s-row>
                <s-col offset="12" span="12">offset: 12, span: 12</s-col>
            </s-row>
        </demo-block>

        <demo-block title="间距">
            <s-row gutter="20">
                <s-col span="8">span: 8</s-col>
                <s-col span="8">span: 8</s-col>
                <s-col span="8">span: 8</s-col>
            </s-row>
        </demo-block>
    </section>
</template>
<script>
export default {
    data() {
        return {};
    }
};
</script>
<style lang="postcss">
.demo-layout{
    .s-col{
        color: #fff;
        font-size: 13px;
        line-height: 30px;
        text-align: center;
        margin-bottom: 10px;
        background-clip: content-box;
        &:nth-child(odd) {
            background-color: #39a9ed;
        }
        &:nth-child(even) {
            background-color: #66c6f2;
        }
    }
}
</style>
