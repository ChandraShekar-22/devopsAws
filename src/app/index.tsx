import { AppLayout } from 'layout';
import { PROPERTY } from 'libs/shared/constants/tab-routes';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from 'utils/router-wrapper';
import { HomePage } from './feature-home';
import { PropertyPage } from './feature-property';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route path='' element={<PublicRoute title='Home' Component={HomePage} />} />
        <Route path={PROPERTY} element={<PublicRoute title='plot-details' Component={PropertyPage} />} />
        <Route path='*' element={<div>no found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
