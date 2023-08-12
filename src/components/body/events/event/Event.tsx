import { IEvent } from '../../../../models';
import { NavLink } from "react-router-dom";
import './Event.scss'
import monetochka from '../../../../imgs/monetochka.png'
import heart from '../../../../imgs/heart.svg'

interface EventProps {
    event: IEvent
}

const Event = (/* props: EventProps */) => {
    return (
        <NavLink to="/event" className="event">
            <div className="event__top">
                <img src={monetochka} alt='monetochka'/>
                <img src={heart} alt='heart' className="event__top__heart"/>
            </div>
            <div className="event__bottom">
                <div className="event__bottom__name">Монеточка</div>
                <div className="event__bottom__date">12 июня · 12:00</div>
                <div className="event__bottom__price">300</div>
                <div className="event__bottom__place">Свобода, 5 км</div>
            </div>
        </NavLink>
    );
};

export default Event;