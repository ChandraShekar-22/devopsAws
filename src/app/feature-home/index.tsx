import { lazyLoad } from 'utils/loadable';

export const HomePage = lazyLoad(
  () => import('./feature-home'),
  (module) => module.FeatureHome
);
