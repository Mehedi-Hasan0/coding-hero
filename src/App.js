import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import FAQ from './components/FAQ/FAQ';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/',
          element: <Sidebar></Sidebar>
        },
        {
          path: '/courses',
          element: <Courses></Courses>
        },
        {
          path: '/blogs',
          element: <Blog></Blog>,
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ],
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
