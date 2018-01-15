import progress from 'nprogress';
function asyncWrapper(component) {
    return function (r) {
        progress.start();
        component(r).then(() => {
            progress.done();
        }).catch(() => {
            progress.done();
        });
    };
}
function componentWrapper(component, name) {
    component = component.default;
    component.name = 'demo-' + name;
    return component;
}
export default {
    'demo': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/demo'), 'demo')), 'demo')),
}