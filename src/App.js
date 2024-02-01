// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import BookTicketForm from './components/BookTicketForm';
import ShowDetails from './components/ShowDetails';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ShowList/>} />
      {/* <Route path="/show/:id" component={ShowSummary} />
      <Route path="/book-ticket/:id" component={BookTicketForm} /> */}
    <Route path="/detail/:id" element={<ShowDetails />} />

    </Routes>
  </Router>
);

export default App;
