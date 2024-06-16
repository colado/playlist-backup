import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Overview from "./pages/Overview";
import PlaylistDetail from "./pages/PlaylistDetail";
import Connect from "./pages/Connect";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "overview",
    element: <Overview />,
  },
  {
    path: "playlist-detail",
    element: <PlaylistDetail />,
  },
  {
    path: "connect",
    element: <Connect />,
  },
]);
