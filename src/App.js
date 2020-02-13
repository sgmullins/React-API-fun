import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//component imports
import Nav from './components/NavBar/Nav';
import Loading from './components/Loader/Loading';

//Dynamic imports of componetns--------------------------
const PopCategories = React.lazy(() =>
  import('./components/Categories/PopCategories'),
);
const Battle = React.lazy(() => import('./components/battles/Battle'));

function App() {
  return (
    <Router>
      <div className='container'>
        <Nav />
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path='/' component={PopCategories} />
            <Route path='/battle' component={Battle} />
            <Route
              render={() => (
                <>
                  <h1 className='fourohfour'>404:</h1>
                  <h2 className='fourohfour'>
                    Not all who wander are lost, but you are lost
                  </h2>
                </>
              )}
            />
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;
