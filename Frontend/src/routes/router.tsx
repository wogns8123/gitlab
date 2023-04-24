import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import App from "../pages/App";

const IntroPage = lazy(() => import('../pages/IntroPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '', element: <IntroPage/>},
            {path: 'login', element: <LoginPage/>},
            {path: 'home', element: <HomePage/>},
        ]
    }
])

export default router;