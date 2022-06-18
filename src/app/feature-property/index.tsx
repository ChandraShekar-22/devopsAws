import { lazyLoad } from 'utils/loadable';

export const PropertyPage = lazyLoad(
  () => import('./feature-property'),
  (module) => module.FeatureProperty
);
