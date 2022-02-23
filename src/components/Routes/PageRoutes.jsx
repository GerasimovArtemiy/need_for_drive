import { Routes, Route } from 'react-router-dom';
import Layout from '../../pages/Layout/HomepageLayout/HomepageLayout';
import Homepage from '../../pages/Homepage/Homepage';
import OrderPage1 from '../../pages/OrderPage1/OrderPage1';
import OrderPage2 from '../../pages/OrderPage2/OrderPage2';
import OrderPage3 from '../../pages/OrderPage3/OrderPage3';
import OrderPage4 from '../../pages/OrderPage4/OrderPage4';
import OrderPage5 from '../../pages/OrderPage5/OrderPage5';
import NotFoundPage from '../../pages/NotFoundPage/NotFountPage';
import OrderPage from '../../pages/Layout/OrderLayout/OrderLayout';

export default function PageRoutes() {
    return (
        <Routes>
            <Route path="need_for_drive/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
            <Route path="need_for_drive/order" element={<OrderPage />}>
                <Route path="step_1" element={<OrderPage1 />} />
                <Route path="step_2" element={<OrderPage2 />} />
                <Route path="step_3" element={<OrderPage3 />} />
                <Route path="step_4" element={<OrderPage4 />} />
                <Route path="step_5" element={<OrderPage5 />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}
