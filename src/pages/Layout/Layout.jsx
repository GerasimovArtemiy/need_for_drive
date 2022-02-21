import './Layout.scss';
import Navbar from '../../components/Navbar/Navbar';
import Homepage from '../Homepage/Homepage';

export default function Layout() {
    return (
        <div className="wrapper">
            <div className="content">
                <Navbar />
                <Homepage />
            </div>
        </div>
    );
}
