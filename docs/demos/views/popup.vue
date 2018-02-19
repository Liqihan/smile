<template>
    <section class="demo-popup">
        <demo-block title="基本用法">
            <s-button @click="show1=true">默认按钮</s-button>
            <s-popup v-model="show1" :prevent-scroll="true">123123123</s-popup>
        </demo-block>
        <demo-block title="弹出位置">
            <s-button @click="show2=true">底部弹出</s-button>
            <s-popup v-model="show2" position="bottom" :prevent-scroll="true">
                 <s-tabs>
                    <s-tab class="custom-pane" title="Tab1">
                        <ul class="scroller">
                        <li v-for="i in 30" :key="i" class="list-item">{{ i }} item item item</li>
                        </ul>
                    </s-tab>
                    <s-tab class="custom-pane" title="Tab2">
                        <p class="long-text">Lorem ipsum dolor sit amet, quis interdum et sollicitudin consectetuer scelerisque, gravida nulla consequatur dis mauris non morbi, dictum leo enim elementum ac wisi nullam, nam orci erat. Ultrices est. Nunc penatibus vel varius odio. Ullamcorper placerat amet amet sed, urna tempor, elit elit at. Eget congue. Sed proin metus sapien libero, pulvinar ut, ut aenean fermentum magna placerat dapibus voluptas, sed at lacinia pede fermentum rutrum et. Vitae nulla sapien vel in hac felis, montes in donec nulla eu volutpat augue.</p>
                    </s-tab>
                </s-tabs>
            </s-popup>
            <s-button @click="show3=true">顶部弹出</s-button>
            <s-popup v-model="show3" position="top" :overlay="false" :prevent-scroll="true">123123123</s-popup>
            <s-button @click="show4 = true">右侧弹出</s-button>
            <s-popup v-model="show4" position="right" :overlay="false">
                <s-button @click="show4 = false">关闭弹出</s-button>
            </s-popup>
        </demo-block>
    </section>
</template>
<script>
export default {
    data () {
        return {
            show1: false,
            show2: false,
            show3: false,
            show4: false
        };
    },
    watch: {
        show3(val) {
            if (val) {
                setTimeout(() => {
                    this.show3 = false;
                }, 3000);
            }
        }
    },
    methods: {
        showDialog() {
            console.log(1123123);
        }
    }
}
</script>
<style lang="postcss">
.demo-popup {
    .s-button{
        margin: 10px 0 10px 15px;
    }
    .s-popup{
        width: 60%;
        padding: 20px;
        border-radius: 5px;
        box-sizing: border-box;

        &--bottom {
            width: 100%;
            height: 200px;
            padding: 0;
            border-radius: 0;
        }
        &--top {
            color: #fff;
            width: 100%;
            border-radius: 0;
            line-height: 20px;
            background-color: rgba(0, 0, 0, 0.8);
        }
        &--left,
        &--right {
            width: 100%;
            height: 100%;
        }
        .s-tabs__content {
            height: 166px;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            .list-item {
                padding: 10px 10px;
                &:not(:last-child) {
                border-bottom: 1px solid #f9f9f9;
                }
            }
            .long-text {
                padding: 10px;
                line-height: 1.4;
                color: #666;
            }
        }
    }

}
</style>