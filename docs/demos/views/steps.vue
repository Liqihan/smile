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
        <demo-block title="垂直方向">
            <s-steps direction="vertical" :active="active" active-color="#f60">
                <s-step>
                    <h3>11111</h3>
                    <p>2016-07-12 12:40</p>
                </s-step>
                <s-step>
                    <h3>22222</h3>
                    <p>2016-07-11 10:00</p>
                </s-step>
                <s-step>
                    <h3>33333</h3>
                    <p>2016-07-10 09:30</p>
                </s-step>
                <s-step>
                    <h3>44444</h3>
                    <p>2016-07-10 09:30</p>
                </s-step>
            </s-steps>
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
