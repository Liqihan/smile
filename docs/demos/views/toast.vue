<template>
    <section class="demo-toast">
        <demo-block title="sss">
            <s-button @click="showToast">默认toast</s-button>
        </demo-block>
        <demo-block title="sss">
            <s-button @click="showLoadingToast">loadingtoast</s-button>
        </demo-block>
        <demo-block title="高级用法">
            <s-button @click="showCustomizedToast">高级</s-button>
        </demo-block>
    </section>
</template>
<script>
import { Toast } from "packages";
export default {
    name: "demo-toast",
    data() {
        return {};
    },
    mounted() {},
    methods: {
        showToast() {
            Toast("11111");
        },
        showLoadingToast() {
            Toast.loading({ mask: true });
        },
        showCustomizedToast(duration) {
            const toast = Toast.loading({
                duration: 0,
                forbidClick: true,
                message: `倒计时3`
            });
            let second = 3;
            const timer = setInterval(() => {
                second--;
                if (second) {
                    toast.message = `倒计时${second}`
                } else {
                    clearInterval(timer);
                    Toast.clear();
                }
            }, 1000);
        }
    }
};
</script>
<style lang="css">
</style>
