import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function SiteLayout() {
  return (
    <div className="w-full h-auto flex flex-col bg-[#f0f0f0]">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
