import Vue from "vue";
import docConfig from "./doc.config";
import componentDocs from "../markdown";
import DemoPage from './components/demo.vue';
import componentDemos from '../demos';
console.log(componentDemos);
const registerRoute = isExample => {
    const route = [
        {
            path: "*",
            redirect: to => `/demo`
        }
    ];
    const navs = docConfig["nav"] || [];
    navs.forEach(nav => {
        if (nav.groups) {
            nav.groups.forEach(group => {
                group.list.forEach(page => addRoute(page));
            });
        } else if (nav.children) {
            nav.children.forEach(page => addRoute(page));
        } else {
            addRoute(nav);
        }
    });
    return route;
    function addRoute(page) {
        const { path } = page;
        if (path) {
            let component;
            const name = path.replace("/", "");
            if (path === "/demo") {
                component = DemoPage;
            } else {
                component = isExample
                    ? componentDemos[path.replace("/", "")]
                    : componentDocs[name];
            }

            route.push({
                name,
                component,
                path: `/component${path}`
            });
        }
    }
};
export default registerRoute;
