import Header from "./components/Header/Header";
import Block from "./components/Block/Block";
import Footer from "./components/Footer/Footer";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

//Images
import first from './images/first.png';
import firstSmall from './images/first-small.png';
import second from './images/second.png';
import secondSmall from './images/second-small.png';
import third from './images/third.png';
import thirdSmall from './images/third-small.png';
import fourth from './images/fourth.png';
import fourthSmall from './images/fourth-small.png';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />

      <main>
          <Block
              title={<h2 className='title'>ut aliquip<br /> ex ea commodo<br /> consequat</h2>}
              firstImgBig={first}
              firstImgSmall={firstSmall}
              secondImgBig={second}
              secondImgSmall={secondSmall}
              subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              text='Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
          />

          <SmoothScroll title={<h2 className='slider__title'>Lorem ipsum<br/> dolor sit amet</h2>}/>

          <Block
              title={<h2>ut aliquip<br /> ex ea commodo<br /> consequat</h2>}
              firstImgBig={third}
              firstImgSmall={thirdSmall}
              secondImgBig={fourth}
              secondImgSmall={fourthSmall}
              subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              text='Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
          />
      </main>

      <Footer />
    </div>
  );
}

export default App;
