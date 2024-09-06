import React, { Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HomePage = React.lazy(() => import('../pages/HomePage'));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));

const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            </Suspense>
        </Router>
    )
};

export default AppRoutes;