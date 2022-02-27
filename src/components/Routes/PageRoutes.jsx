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
import {
    homePage,
    orderPage,
    orderStep1,
    orderStep2,
    orderStep3,
    orderStep4,
    orderStep5,
} from './routerPath';

export default function PageRoutes() {
    return (
        <Routes basename="/need_for_drive">
            <Route path={homePage} element={<HomepageLayout />}>
                <Route index element={<Homepage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
            <Route path={orderPage} element={<OrderLayout />}>
                <Route path={orderStep1} element={<OrderPage1 />} />
                <Route path={orderStep2} element={<OrderPage2 />} />
                <Route path={orderStep3} element={<OrderPage3 />} />
                <Route path={orderStep4} element={<OrderPage4 />} />
                <Route path={orderStep5} element={<OrderPage5 />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}
