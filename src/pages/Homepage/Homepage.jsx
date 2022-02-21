import './Homepage.scss';
import HomepageContent from '../../components/HomepageContent/HomepageContent';
import HomepageSlider from '../../components/HomepageSlider/HomepageSlider';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

export default function Homepage() {
    return (
        <div className="homepage">
            <HomepageContent />
            <HomepageSlider />
        </div>
    );
}
