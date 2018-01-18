<template>
    <section class="demo-progress">
        <demo-block title="进度条">
            <s-progress :percentage="0" />
            <s-progress :percentage="46" />
            <s-progress :percentage="100" />
        </demo-block>

        <demo-block title="置灰">
            <s-progress inactive :percentage="0" />
            <s-progress inactive :percentage="46" />
            <s-progress inactive :percentage="100" />
        </demo-block>

        <demo-block title="样式定制">
            <s-progress pivot-text="红色" color="#ed5050" :percentage="26" />
            <s-progress pivot-text="橙子" color="#f60" :percentage="46" />
            <s-progress pivot-text="黄色" color="#f09000" :percentage="66" />
        </demo-block>
        <demo-block title="隐藏文字">
            <s-progress pivot-text="红色" :show-pivot="false" color="#ed5050" :percentage="26" />
            <s-progress pivot-text="橙子" color="#f60" :percentage="46" />
            <s-progress pivot-text="黄色" color="#f09000" :percentage="66" />
        </demo-block>
    </section>
</template>
<script>
export default {};
</script>
<style lang="postcss">
.demo-progress {
    .s-progress {
        margin: 20px 10px;
        &:first-of-type {
            margin-top: 10px;
        }
    }
}
</style>
