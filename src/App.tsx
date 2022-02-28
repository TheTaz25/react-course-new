import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Details from './pages/Details';
import Landing from './pages/Landing';
import Greeting from './pages/Greetings';
import AppContextProvider from './contexts/appContext';
import PersonComponent from './pages/Person';
import CoffeeKitchen from './pages/CoffeeKitchen';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="kitchen" element={<CoffeeKitchen />} />
            <Route path="details" element={<Details />}>
              <Route path="person" element={<PersonComponent />} />
              <Route path=":name" element={<Greeting />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  )
};

export default App;
