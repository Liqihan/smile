<template>
    <section class="demo-button">
      <demo-block title="是是是">
        <s-button type="default">默认按钮</s-button>
        <s-button type="primary">主要按钮</s-button>
        <s-button type="danger">危险按钮</s-button>
      </demo-block>
    </section>
</template>
<script>
export default {
  data () {
    return {
    };
  }
}
</script>
<style lang="postcss">
.demo-button{
  .s-button {
   &--normal{
     margin-right: 10px;
   } 
  }
}
</style>