import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Category from './components/Category/Category';
import Checkout from './components/Checkout/Checkout';
import Courses from './components/Courses/Courses';
import FAQ from './components/FAQ/FAQ';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Main from './layout/Main';
import error from './assets/error.svg';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch(' https://coding-hero-server-mehedi-hasan0.vercel.app/courses'),
          element: <Home></Home>
        },
        {
          path: '/courses',
          loader: () => fetch(' https://coding-hero-server-mehedi-hasan0.vercel.app/courses'),
          element: <Courses></Courses>
        },
        {
          path: '/category/:id',
          loader: ({ params }) => fetch(` https://coding-hero-server-mehedi-hasan0.vercel.app/category/${params.id}`),
          element: <Category></Category>
        },
        {
          path: '/courses/:id',
          loader: ({ params }) => fetch(` https://coding-hero-server-mehedi-hasan0.vercel.app/courses/${params.id}`),
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
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
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ],
    },
    {
      path: '*',
      element: <div>
        <h1 className='font-poppins font-medium text-4xl sm:text-5xl mx-auto mt-5'>Page not found <span className=' text-blue-400'> :(</span></h1>
        <img className='w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] mx-auto' src={error} alt="error" /></div>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
