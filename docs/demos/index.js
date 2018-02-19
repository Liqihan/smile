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
    'button': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/button'), 'button')), 'button')),
    'layout': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/layout'), 'layout')), 'layout')),
    'progress': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/progress'), 'progress')), 'progress')),
    'tab': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/tab'), 'tab')), 'tab')),
    'icon': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/icon'), 'icon')), 'icon')),
    'toast': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/toast'), 'toast')), 'toast')),
    'steps': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/steps'), 'steps')), 'steps')),
    'popup': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./views/popup'), 'popup')), 'popup'))
}