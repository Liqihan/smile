import Button from './button';
import Row from './row';
import Col from './col';

const components = [
    Button,
    Row,
    Col
];
const install = Vue => {
    components.forEach(component => {
        console.log(component);
        Vue.use(component);
    });
};
const version = '0.0.1';
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export {
    Button,
    Row,
    Col,
    install,
    version
}
export default {
    install,
    version
}