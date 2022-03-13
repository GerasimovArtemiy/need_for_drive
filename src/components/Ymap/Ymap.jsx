import { YMaps, Map } from 'react-yandex-maps';
import './Ymap.scss';

export default function Ymap() {
    return (
        <div>
            <div>
                <YMaps>
                    <div>
                        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                    </div>
                </YMaps>
            </div>
        </div>
    );
}
