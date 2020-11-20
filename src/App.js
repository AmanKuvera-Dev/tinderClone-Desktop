import './App.css';
import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'

function App() {
  return (
    <div className="app">

          {/*Header*/}

        <Header/>
        <TinderCards />
        <SwipeButtons />


          {/*Tinder Cards*/}
          {/*Swipe Buttons*/}
    </div>
  );
}

export default App;
