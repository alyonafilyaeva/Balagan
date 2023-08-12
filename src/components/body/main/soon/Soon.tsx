import Event from "../../events/event/Event";
import "./Soon.scss"

const Soon = () => {
    return (
        <div >
            <div className="soon">
                <h1>Скоро</h1>
                <div className="soon__events">
                    <Event />
                    <Event />
                    <Event />
                </div>

            </div>
        </div>
    );
};

export default Soon;