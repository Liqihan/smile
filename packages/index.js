import Button from './button';
import Row from './row';
import Col from './col';
import Progress from './progress';
import Tabs from './tabs';
import Tab from './tab';
import Icon from './icon';
import Toast from './toast';
import Steps from './steps';
import Step from './step';
const components = [
    Button,
    Row,
    Col,
    Progress,
    Tabs,
    Tab,
    Icon,
    Step,
    Steps
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
    Tabs,
    Tab,
    Icon,
    Toast,
    Steps,
    Step,
    install,
    version
}
export default {
    install,
    version
}