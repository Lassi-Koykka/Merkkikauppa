import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Startpage from './components/Startpage/Startpage';
import Menu from './components/Startpage/Menu/Menu'
import Salepage from './components/Myynti-ilmoitus/Salepage';
import AddListing from './components/AddListing/AddListing';

function App() {
  // const [listings, setListings] = useState<Array<IListing>>([])

  // useEffect(() => {
  //   const getListings = async () => {
  //     return await axios.get(`/listings`)
  //       .then(response => {
  //         console.log(response.data)
  //         setListings(response.data);
  //       })
  //       .catch(err => console.log(err));
  //   }

  //   getListings();
  // }, [])

  return (
    <Router>
      <Switch>
        <Route path="/kirjaudu">
          <Login />
        </Route>
        <Route path="/rekisteroidy">
          <Registration />
        </Route>
        <Route path="/myynti/lisaa">
          <AddListing />
        </Route>
        <Route path="/myynti">
          <Salepage />
          <Menu />
        </Route>
        <Route path="/">
          <Startpage />
          <Menu/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
