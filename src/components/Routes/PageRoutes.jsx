import { Routes, Route } from 'react-router-dom';
import HomepageLayout from '../../pages/Layout/HomepageLayout/HomepageLayout';
import Homepage from '../../pages/Homepage/Homepage';
import OrderPage1 from '../../pages/OrderPage1/OrderPage1';
import OrderPage2 from '../../pages/OrderPage2/OrderPage2';
import OrderPage3 from '../../pages/OrderPage3/OrderPage3';
import OrderPage4 from '../../pages/OrderPage4/OrderPage4';
import OrderPage5 from '../../pages/OrderPage5/OrderPage5';
import NotFoundPage from '../../pages/NotFoundPage/NotFountPage';
import OrderLayout from '../../pages/Layout/OrderLayout/OrderLayout';
import routerPath from './routerPath';

export default function PageRoutes() {
    return (
        <Routes basename="/need_for_drive">
            <Route path={routerPath.homePage} element={<HomepageLayout />}>
                <Route index element={<Homepage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
            <Route path={routerPath.orderPage} element={<OrderLayout />}>
                <Route path={routerPath.orderStep1} element={<OrderPage1 />} />
                <Route path={routerPath.orderStep2} element={<OrderPage2 />} />
                <Route path={routerPath.orderStep3} element={<OrderPage3 />} />
                <Route path={routerPath.orderStep4} element={<OrderPage4 />} />
                <Route path={routerPath.orderStep5} element={<OrderPage5 />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}
