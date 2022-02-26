import MyRadioButton from '../../components/UI/MyRadioButton/MyRadioButton';
import './OrderPage2.scss';

export default function OrderPage2() {
    return (
        <div className="orderpage__step-2">
            <div className="orderpage__step-2_container">
                <form className="orderpage__step-2_filter-models">
                    <MyRadioButton labelText="Все модели" name="class-auto" id="1" />
                    <MyRadioButton labelText="Эконом" name="class-auto" id="2" />
                    <MyRadioButton labelText="Премиум" name="class-auto" id="3" />
                </form>
                OrderPage22222Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Earum est et dicta saepe veniam consectetur dignissimos libero, laudantium
                sed molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quidem officiis ipsam mollitia labore temporibus nobis architecto natus
                soluta numquam minus!Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Earum est et dicta saepe veniam consectetur dignissimos libero,
                laudantium sed molestias. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quidem officiis ipsam mollitia labore temporibus nobis
                architecto natus soluta numquam minus!Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Earum est et dicta saepe veniam consectetur
                dignissimos libero, laudantium sed molestias. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quidem officiis ipsam mollitia labore
                temporibus nobis architecto natus soluta numquam minus!
            </div>
        </div>
    );
}
