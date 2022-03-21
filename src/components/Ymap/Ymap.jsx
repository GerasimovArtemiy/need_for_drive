import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { setMapCenter } from '../../store/Slices/FetchLocationSlice';
import { yandexMapKey } from '../../API/constants';
import { setPoint } from '../../store/Slices/AllFormSlice';
import placemark from '../../assets/icons/placemark.svg';
import './Ymap.scss';

export default function Ymap() {
    const dispatch = useDispatch();
    const { city, point } = useSelector((state) => state.allForm);
    const { mapCenter } = useSelector((state) => state.fetchLocation);
    const { fetchCityPoints } = useSelector((state) => state.fetchLocation);
    const [ymap, setYmap] = useState(null);
    const [coords, setCoords] = useState([]);
    const optionsForPlacemark = {
        iconLayout: 'default#image',
        iconImageSize: [16, 16],
        iconImageHref: placemark,
    };

    async function getGeocoder(ymaps) {
        if (ymaps) {
            setYmap(ymaps);
        }
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
            dispatch(setMapCenter({ zoom: 12 }));
        } else {
            dispatch(setMapCenter({ zoom: 16 }));
        }
        const pointLocation = await getGeolocation(address);
        dispatch(setMapCenter({ center: pointLocation }));
    }

    useEffect(() => {
        if (ymap) {
            if (fetchCityPoints.data) {
                getPointsMap(fetchCityPoints.data);
            }
            if (city.name) {
                changeCenterState(city.name, true);
            }
        }
    }, [fetchCityPoints.data, ymap]);

    useEffect(() => {
        if (ymap) {
            if (!point.name && city.name) {
                changeCenterState(city.name, true);
            }
            if (point.name) {
                changeCenterState(`${city.name},${point.name}`);
            }
        }
    }, [point.name, ymap]);

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
                    <Map className="yandexmap__map" state={mapCenter} onLoad={(ymaps) => getGeocoder(ymaps)}>
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
                    </Map>
                </div>
            </YMaps>
        </div>
    );
}
