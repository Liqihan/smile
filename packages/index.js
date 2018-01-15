const components = [];
const install = Vue => {
    components.forEach(component => {
        Vue.use(component);
    });
};
const version = '0.0.1';
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export {
    install,
    version
}
export default {
    install,
    version
}