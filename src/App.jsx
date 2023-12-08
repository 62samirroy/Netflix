import React from 'react';
import Header from './component/header';
import { Enjoy } from './component/Enjoy';
import { Download } from './component/Download';
import { Watch } from './component/Watch';
import { Questions } from './component/Questions';
import { Kids } from './component/kids';
import { Footer } from './component/Footer';
// Import other components...
function App() {
  return (
    <div className="App">
      <Header />
      <Enjoy/>
      <Download/>
      <Watch/>
      <Kids/>
      <Questions/>
      <Footer/>
    </div>
  );
}

export default App;
