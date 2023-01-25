import './App.css';
import { Footer, Blog, Possibility, Features, WhatGpt3, Header } from './containers';
import { ClickToAction, Brand, NavBar } from './components';

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
    <ClickToAction />
    <Blog />
    <Footer />
  </div>
);

export default App;
