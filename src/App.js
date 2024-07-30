import './App.css';
import { Home,SingleHotelpage,Searchresult} from  "./pages" 
import { useRoutes } from 'react-router-dom';

function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/hotels/:name/:address/:state/:_id/reserve', element: <SingleHotelpage/>},
    { path: '/hotels/:address', element: <Searchresult/>}
  ]);

  return routes;
}

export default App;
