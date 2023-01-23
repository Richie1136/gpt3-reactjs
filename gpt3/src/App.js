import './App.css';
import { Footer, Blog, Possibility, Features, WhatGpt3, Header } from './containers';
import { CallToAction, Brand, NavBar } from './components';

const App = () => (
  <div className="App">
    <div className='gradient-bg'>
      <NavBar />
      <Header />
    </div>
    <Brand />
    <WhatGpt3 />
    <Features />
    <Possibility />
    <CallToAction />
    <Blog />
    <Footer />
  </div>
);

export default App;
