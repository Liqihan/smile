import install from './install';
import Loading from '../loading';
import Icon from '../icon';
export default function(sfc) {
    sfc.mixins = sfc.mixins || [];
    sfc.components = sfc.components || {};
    sfc.install = sfc.install || install;
    sfc.components.loading = Loading;
    sfc.components.icon = Icon;
    return sfc;
}
