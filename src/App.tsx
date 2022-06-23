import { Route, Routes } from 'solid-app-router';

import type { Component } from 'solid-js';
import Header from './components/Header';
import Home from './pages/Home';
import Quote from './components/QuoteViewer';
import Quotes from './pages/Quotes';

const App: Component = () => {
  return <div id='theme' class="dark">
      <Header/>
      <Quote/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quotes' element={<Quotes />} />
      </Routes>
    </div>
  ;
};

export default App;
