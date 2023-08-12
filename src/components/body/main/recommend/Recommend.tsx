import Event from "../../events/event/Event";
import "./Recommend.scss"

const Recommend = () => {
    return (
        <div>
            <div className="recommend">
                <h1>Рекомендуем</h1>
                <div className="recommend__events">
                    <Event />
                    <Event />
                    <Event />
                </div>
            </div>
        </div>
    );
};

export default Recommend;