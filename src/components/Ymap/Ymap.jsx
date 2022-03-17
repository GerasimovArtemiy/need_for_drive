import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { yandexMapKey } from '../../API/constants';
import { setPoint } from '../../store/Slices/AllFormSlice';
import placemark from '../../assets/icons/placemark.svg';
import './Ymap.scss';

export default function Ymap() {
    const dispatch = useDispatch();
    const { city, point } = useSelector((state) => state.allForm);
    const { fetchCityPoints } = useSelector((state) => state.fetchData);
    const [ymap, setYmap] = useState(null);
    const [zoom, setZoom] = useState(12);
    const [center, setCenter] = useState([54.31, 48.39]);
    const [coords, setCoords] = useState([]);
    const optionsForPlacemark = {
        iconLayout: 'default#image',
        iconImageSize: [16, 16],
        iconImageHref: placemark,
    };
    const stateForMap = {
        center,
        zoom,
    };
    function getGeocoder(ymaps) {
        setYmap(ymaps);
    }

    async function getGeolocation(address) {
        if (ymap) {
            const geocoder = await ymap.geocode(address);
            const pointLocation = geocoder.geoObjects.get(0).geometry.getCoordinates();
            return pointLocation;
        }
        return null;
    }
    async function getPointsMap(points) {
        const geoloacationPoints = [];
        for (const item of points) {
            const loacation = await getGeolocation(`${city.name},${item.address}`);
            geoloacationPoints.push({ coordinates: loacation, point: item });
        }
        setCoords(geoloacationPoints);
    }
    async function changeCenterState(address, isCity = false) {
        if (isCity) {
            setZoom(12);
        } else {
            setZoom(16);
        }
        const pointLocation = await getGeolocation(address);
        setCenter(pointLocation);
    }

    useEffect(() => {
        if (fetchCityPoints.data) {
            getPointsMap(fetchCityPoints.data);
        }
        if (city.name) {
            changeCenterState(city.name, true);
        }
    }, [fetchCityPoints.data]);

    useEffect(() => {
        if (!point.name && city.name) {
            changeCenterState(city.name, true);
        }
        if (point.name) {
            changeCenterState(`${city.name},${point.name}`);
        }
    }, [point.name]);

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
                        {coords &&
                            coords?.map((coordinate, index) => (
                                <Placemark
                                    key={index}
                                    geometry={coordinate.coordinates}
                                    options={optionsForPlacemark}
                                    onClick={() => {
                                        dispatch(
                                            setPoint({
                                                name: coordinate.point.address,
                                                id: coordinate.point.id,
                                            })
                                        );
                                    }}
                                />
                            ))}
                        {/* <Placemark geometry={point.name ? center : ['', '']} options={optionsForPlacemark} /> */}
                    </Map>
                </div>
            </YMaps>
        </div>
    );
}
