<template>
    <section class="demo-tab">
        <s-tabs>
            <s-tab v-for="index in tabs" :key="index" :title="`${index}`">
                {{index}}
            </s-tab>
        </s-tabs>
    </section>
</template>
<script>
export default {
    name: "component_name",
    data() {
        return {
            tabs: [1, 2, 3, 4]
        };
    }
};
</script>
<style lang="postcss">
</style>
