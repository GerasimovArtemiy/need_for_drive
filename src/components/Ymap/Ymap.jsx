import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { yandexMapKey } from '../../API/constants';
import placemark from '../../assets/icons/placemark.svg';
import './Ymap.scss';

export default function Ymap({ city, point }) {
    const [ymap, setYmap] = useState(null);
    const [zoom, setZoom] = useState(12);
    const [center, setCenter] = useState([54.31, 48.39]);
    const stateForMap = {
        center,
        zoom,
    };
    const optionsForPlacemark = {
        iconLayout: 'default#image',
        iconImageSize: [16, 16],
        iconImageHref: placemark,
    };

    async function getGeolocation() {
        if (point.name) {
            const geocoder = await ymap.geocode(`${city.name} ${point.name}`);
            const coords = geocoder.geoObjects.get(0).geometry.getCoordinates();
            setCenter(coords);
        }
    }
    function changeZoom() {
        if (point.name) {
            setZoom(16);
        } else {
            setZoom(12);
        }
    }
    function getGeocoder(ymaps) {
        setYmap(ymaps);
    }
    useEffect(() => {
        getGeolocation();
        changeZoom();
    }, [point]);

    return (
        <div>
            <YMaps
                query={{
                    ns: 'use-load-option',
                    load: 'geocode',
                    apikey: yandexMapKey,
                }}
            >
                <div>
                    <Map className="yandexmap__map" state={stateForMap} onLoad={(ymaps) => getGeocoder(ymaps)}>
                        <Placemark geometry={point.name ? center : ['', '']} options={optionsForPlacemark} />
                    </Map>
                </div>
            </YMaps>
        </div>
    );
}
Ymap.propTypes = {
    city: PropTypes.instanceOf(Object),
    point: PropTypes.instanceOf(Object),
};
Ymap.defaultProps = {
    city: {},
    point: {},
};
