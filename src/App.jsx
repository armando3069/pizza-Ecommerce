
import Navbar from './components/navbar1'
import Footer from './components/footer'
import Menu from './pages/menu';
import Home from './pages/home'
import Contact from './pages/contact';
import NotFound from './pages/404';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="App">

<Router>
      <Navbar  />
        <Switch>
          <Route className='App'  path={'/home'} exact component={Home} />
          <Route  path={'/menu'} exact component={Menu} />
          <Route  path={'/contact'} exact component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
</Router>

    </div>
  )
}

export default App
