import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services";
import Coverage from "../Pages/Coverage/Coverage";
import Error from "../Pages/Error/Error";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Story from "../Pages/AboutUs/Story";
import Success from "../Pages/AboutUs/Success";
import Mission from "../Pages/AboutUs/Mission";
import Team from "../Pages/AboutUs/team";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "coverage", Component: Coverage , loader:()=>fetch('warehouses.json').then(res=>res.json())}, 

      {
        path: "about",
        Component: AboutUs,
        children: [
          { path: "story", Component: Story },
          { path: "mission", Component: Mission },
          { path: "success", Component: Success },
          { path: "team", Component: Team },
        ],
      },
    ],
  },
]);
