import './App.css';
import { Home,SingleHotelpage} from  "./pages" 
import { useRoutes } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/hotels/:name/:address/:state/:_id/reserve', element: <SingleHotelpage/>}
  ]);

  return routes;
}

export default App;
