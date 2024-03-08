import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../components/ui/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <div>Home</div>  //Insert your Home  Page component here
            },
            {
                path: "/about",
                element: <div>About</div>,  //Insert your About Page component here
            },
            // Include others routes here;
            //................................................................
            //................................................................
        ]
    }
]);

export default router;