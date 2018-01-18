<template>
    <section class="demo-button">
      <demo-block title="按钮类型">
        <s-button type="default">默认按钮</s-button>
        <s-button type="primary">主要按钮</s-button>
        <s-button type="danger">危险按钮</s-button>
      </demo-block>
      <demo-block title="按钮尺寸">
        <s-button size="large">large</s-button>
        <s-button size="normal">normal</s-button>
        <s-button size="small">small</s-button>
        <s-button size="mini">mini</s-button>
      </demo-block>
       <demo-block title="禁用状态">
        <s-button disabled>disabled</s-button>
      </demo-block>
      <demo-block title="Loading">
        <s-button loading />
        <s-button loading type="primary" />
      </demo-block>
      <demo-block title="自定义">
        <s-button tag="a" href="https://www.baidu.com" target="_blank">
          链接
        </s-button>
        <s-button tag="p">
          文本
        </s-button>
      </demo-block>
      <demo-block title="块级元素">
        <s-button type="default" block>块级元素</s-button>
        <s-button type="default" block>块级元素</s-button>
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
.demo-button{
  .s-button {
    user-select: none;
    &--small,
    &--normal{
      margin-right: 10px;
    } 
    &--large,  
    &--bottom-action {
      margin-bottom: 15px;
    }
    &--block {
      margin-bottom: 15px;
    }
  }
}
</style>
