import "./Poster.scss"
import { NavLink } from "react-router-dom";

const Poster = () => {
    return (
        <div className="poster">
            <div className="poster__buttons">
                <NavLink to="/">Стать партнером</NavLink>
                <NavLink to="/">Найти событие</NavLink>
            </div>
        </div>
    );
};

export default Poster;