import { Outlet } from 'react-router-dom';
import './HomepageLayout.scss';
import Navbar from '../../../components/Navbar/Navbar';

export default function Layout() {
    return (
        <div className="homepage">
            <Navbar />
            <Outlet />
        </div>
    );
}
