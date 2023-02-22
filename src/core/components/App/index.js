import React from 'react';
import { RecoilRoot } from 'recoil';
import ScopedCssBaseline from '@mui/material/CssBaseline';
import Routes from '../Routes';

const App = () => {
  return (
    <RecoilRoot>
    <ScopedCssBaseline>
      <Routes></Routes>
    </ScopedCssBaseline>
    </RecoilRoot>
  );
};

export default App;
