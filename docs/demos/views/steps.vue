<template>
    <section class="demo-steps">
        <demo-block title="步骤条">
            <s-steps :active= "active">
                <s-step>1111</s-step>
                <s-step>2222</s-step>
                <s-step>3333</s-step>
                <s-step>4444</s-step>
            </s-steps>
            <s-button @click="nextStep">下一步</s-button>
        </demo-block>
    </section>
</template>
<script>
export default {
    name: "demo-steps",
    data() {
        return {
            active: 0
        };
    },
    methods: {
        nextStep() {
            this.active = ++this.active % 4;
        }
    }
};
</script>
<style lang="postcss">
.demo-steps{
    .s-button{
        margin: 15px 0 0 15px;
    }
}
</style>
