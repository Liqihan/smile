import DemoBlock from './demo-block.vue';
import { create } from 'packages/utils';
const components = [
    DemoBlock
]
const install = Vue => {
    components.forEach(component => {
        // 没有的注册vue.component
        let newComponent = component.install ? component : create(component);
        Vue.use(newComponent);
    });
};
export default {
    install
}