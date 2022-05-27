import { AppLayout } from 'layout';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from 'utils/router-wrapper';
import { HomePage } from './feature-home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route path='/' element={<PublicRoute title='Home' Component={HomePage} />} />
      </Route>
    </Routes>
  );
}

export default App;
