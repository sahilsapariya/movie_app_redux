import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom";

import Header from './components/Header'
import MovieDetail from './components/MovieDetail'
import PageNotFound from './components/PageNotFound'
import Home from './components/Home'
import Footer from './components/Footer'
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <div className="App">
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movie" component={MovieDetail} />
              <Route path="/*" component={PageNotFound} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </SkeletonTheme>
    </div>
  );
}

export default App;
