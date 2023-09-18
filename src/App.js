import OrderForm from './components/OrderForm';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import FileUploadForm from './components/FileUploadForm';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './App.css';








const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <Navigate to={"login"} />,
        index: true
      },
      {
        path: "login",
        element: <LoginForm />,
        index: true
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "OrderForm",
        element: <OrderForm />,
      },
      {
        path: "FileUploadForm",
        element: <FileUploadForm />,
      },

    ]
  }
])



// note : this form customises output based on keys only in object structure
function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
