import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import className from 'classnames';
import { ReactComponent as OrderArrNav } from '../../../assets/icons/order-arrow_nav.svg';
import './MyNavLink.scss';

export default function MyNavLink({ id, href, linkName, step}) {
    
    const validPageState = useSelector((state) => state.validPage);
    const location = useLocation();
    const navLinkClass = className({
        'orderpage__navigation_link': location.pathname !== href && validPageState[step] === true,
        'orderpage__navigation_link-active': location.pathname === href,
        'orderpage__navigation_link-disabled': location.pathname !== href && validPageState[step] === false
    });

    return (
        <div key={id} className="orderpage__navigation_item">
            <div className="orderpage__navigation_links">
                <NavLink className={navLinkClass} to={href}>
                    {linkName}
                </NavLink>
            </div>

            {id !== 4 && <OrderArrNav className="orderpage__navigation_arr" />}
        </div>
    );
}
MyNavLink.propTypes = {
    id: PropTypes.number,
    href: PropTypes.string,
    linkName: PropTypes.string,
    step: PropTypes.string,
};
MyNavLink.defaultProps = {
    id: 0,
    href: '/need_for_drive',
    linkName: 'Далее',
    step: '',
};
