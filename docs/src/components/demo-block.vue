<template>
    <div class="s-demo-block">
        <h2 class="s-demo-block__title">{{title}}</h2>
        <section class="s-demo-block__content">
            <slot />
        </section>
    </div>
</template>
<script>
export default {
    name: "demo-block",
    props: {
        title: String
    }
};
</script>
<style lang="postcss">
.s-demo-block__title{
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    color: rgba(69,90,100,.6);
    padding: 30px 15px 10px;
}
.s-demo-block__content{
    padding: 0 15px;
}
</style>
