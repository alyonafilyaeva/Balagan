import Categories from "../../main/categories/Categories";
import "./ActiveEvent.scss"
import monetochkaBig from "../../../../imgs/monetochkaBig.png"
import heart from "../../../../imgs/heart.svg"
import { YMaps, Map } from '@pbe/react-yandex-maps';

const ActiveEvent = () => {
    return (
        <div className="container">
            <Categories />
            <div className="active">
                <div className="active__picture">
                    <img src={monetochkaBig} alt="monetochkaBig" />
                    <div className="active__picture__text">
                        <div className="active__picture__text__top">
                            <div className="active__picture__text__top__name">Монеточка</div>
                            <div className="active__picture__text__top__date">12 июня · 12:00</div>
                            <div className="active__picture__text__top__price">300</div>
                            <div className="active__picture__text__top__place">Свобода, 5 км</div>
                        </div>
                        <div className="active__picture__text__bottom">
                            <button>Купить билет</button>
                            <img src={heart} alt="heart" />
                        </div>
                    </div>
                </div>
                <div className="active__description">
                    <h1>О концерте</h1>
                    <p>
                        Текст о концерте, что там будет, кто выступает, что зацепит слушателя. У меня сосед сверху каждый день передвигает мебель.Сосед справа уже год ремонт <br></br> делает, постоянно что-то долбит и сверлит.Соседи слева, молодожёны, постоянно скандалят, орут на весь дом.Сосед снизу, псих, бьёт молотком по <br></br> батареям.И как мне в таких условиях учиться играть на барабанах?! <br></br>
                        Текст о концерте, что там будет, кто выступает, что зацепит слушателя. У меня сосед сверху каждый день передвигает мебель.Сосед справа уже год ремонт <br></br> делает, постоянно что-то долбит и сверлит.Соседи слева, молодожёны, постоянно скандалят, орут на весь дом.Сосед снизу, псих, бьёт молотком по <br></br> батареям.И как мне в таких условиях учиться играть на барабанах?! <br></br>
                        Текст о концерте, что там будет, кто выступает, что зацепит слушателя. У меня сосед сверху каждый день передвигает мебель.Сосед справа уже год ремонт <br></br> делает, постоянно что-то долбит и сверлит.Соседи слева, молодожёны, постоянно скандалят, орут на весь дом.Сосед снизу, псих, бьёт молотком по <br></br> батареям.И как мне в таких условиях учиться играть на барабанах?! <br></br>
                    </p>
                </div>
                <div className="active__address">
                    <h1>Адрес</h1>
                    <YMaps>
                        <div >
                            <Map defaultState={{ center: [56.822, 60.554], zoom: 15 }} /* className="active__address__map" */ width='100%'
                                height='371px' />
                        </div>
                    </YMaps>
                    <div>
                        <p>Свобода</p>
                        <p>ул. Черкасская, 12</p>
                        <p>+7 (343) 328-43-37</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActiveEvent;