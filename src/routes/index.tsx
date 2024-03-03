import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './RootLayout';
import MainPage from '../pages/MainPage';
import LeadersPage from '../pages/LeadersPage';

export const routes = createBrowserRouter([
    { 
        path: '/',
        element: <RootLayout />,
        errorElement: <div>404: Page Not Found!</div>,
        children: [
            { 
                index: true, element: <MainPage />
            },
            {
                path: 'leaders',
                element: <LeadersPage />
            }
        ]
    },
])