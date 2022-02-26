import { homePage } from '../../components/Routes/routerPath';

export default function NotFountPage() {
    return (
        <div>
            Вы перешли на несуществующую страницу
            <a href={homePage}>Вернуться на главную</a>
        </div>
    );
}
