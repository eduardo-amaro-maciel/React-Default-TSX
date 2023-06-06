import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import Loading from '../components/Loading';

// Components - Routes
const Main = lazy(() => import('../pages/Main'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function RoutesApp() {

    return (
        <Router>
            <Suspense fallback={ <Loading />}>
                <Routes>
                    <Route path='/main' index element={ <Main /> } />
                    <Route path='*' element={ <NotFound /> } />
                </Routes>
            </Suspense>
        </Router>
    );
}