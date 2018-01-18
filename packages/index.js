import Button from './button';
import Row from './row';
import Col from './col';
import Progress from './progress';

const components = [
    Button,
    Row,
    Col,
    Progress
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
    Progress,
    install,
    version
}
export default {
    install,
    version
}