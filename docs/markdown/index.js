import progress from 'nprogress'
function wrapper(component) {
    return function (r) {
        progress.start();
        component(r).then(() => {
            progress.done();
        }).catch(() => {
            progress.done();
        })
    }
}
export default {
    'demo': wrapper(r => require.ensure([], () => r(require('./test.md')), 'demo')),
}