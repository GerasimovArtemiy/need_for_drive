import orderNavigationLinks from './constants';
import MyNavLink from './MyNavLink/MyNavLink';
import './OrderNavLinks.scss';

export default function OrderNavLinks() {
    return (
        <div className="orderpage__navigation">
            <hr className="orderpage__hr_bot" />
            <hr className="orderpage__hr_top" />
            {orderNavigationLinks.map(({ id, href, linkName, step }) => (
                <div key={id} className="orderpage__navigation_item">
                    <MyNavLink
                        id={id}
                        href={href}
                        linkName={linkName}
                        step={step}
                    />
                </div>
            ))}
        </div>
    );
}
