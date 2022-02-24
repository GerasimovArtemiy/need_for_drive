import { NavLink } from 'react-router-dom';
import { ReactComponent as OrderArrNav } from '../../assets/icons/order-arrow_nav.svg';
import orderNavigationLinks from './constants';
import './OrderNavLinks.scss';

export default function OrderNavLinks() {
    return (
        <div className="orderpage__navigation">
            <hr className="orderpage__hr_bot" />
            <hr className="orderpage__hr_top" />
            {orderNavigationLinks.map(({ id, href, linkName }) => (
                <>
                    <NavLink key={id} className="orderpage__navigation_link" to={href}>
                        {linkName}
                    </NavLink>
                    {id === 4 ? '' : <OrderArrNav className="orderpage__navigation_arr" />}
                </>
            ))}
        </div>
    );
}
