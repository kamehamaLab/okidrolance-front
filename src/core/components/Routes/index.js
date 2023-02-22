import React, { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Home from '../../../home/screens/Home';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default AppRoutes;
