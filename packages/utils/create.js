import install from './install';
import Loading from '../loading';
export default function(sfc) {
    sfc.mixins = sfc.mixins || [];
    sfc.components = sfc.components || {};
    sfc.install = sfc.install || install;
    sfc.components.loading = Loading;
    return sfc;
}
