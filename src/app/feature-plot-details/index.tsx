import { lazyLoad } from 'utils/loadable';

export const PlotDetailsPage = lazyLoad(
  () => import('./feature-plot-details'),
  (module) => module.FeaturePlotDetails
);
