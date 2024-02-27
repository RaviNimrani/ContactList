import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CustomContactContext from "./contactContext";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "add-contact", element: <AddContact /> },
        { path: "edit-contact/:id", element: <EditContact /> },
      ],
    },
  ]);
  return (
    <>
      <CustomContactContext>
        <RouterProvider router={router} />
      </CustomContactContext>
    </>
  );
}

export default App;
