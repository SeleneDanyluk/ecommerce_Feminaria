import { useState } from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Authors from './components/authors/Authors';

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />
    },
    {
      path: "/authors",
      element: (
        <Layout>
          <Authors />
        </Layout>
      ),
    },
    //falta las demas rutas
  ]);
  return <RouterProvider router={router} />;
}

export default App
