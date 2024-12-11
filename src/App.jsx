import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Careers from './assets/Components/Navbar/Careers';
import Home from './Home';
import Layout from './Layout';
import Aboutus from './assets/Components/Navbar/Aboutus';
import Contactus from './assets/Components/Navbar/Contactus';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        
          <Home />
        
      ),
    },
    {
      path: '/careers',
      element: (
        <Layout>
          <Careers />
        </Layout>
      ),
    },
    {
      path: '/aboutus',
      element: (
        <Layout>
          <Aboutus />
        </Layout>
      ),
    },
    {
      path: '/contactus',
      element: (
        <Layout>
          <Contactus />
        </Layout>
      ),
    },
    


  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
