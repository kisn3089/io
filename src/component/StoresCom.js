import '../css/StoresCom.css';
import {Link, useParams} from "react-router-dom";

function StoresCom(props) {

    return (
        <>
            <div className="card_wrap">
                {/*<h2>{props.data.id}</h2>*/}
                <Link to="/stores/:{props.data.id}"><div className="card">
                    <img className="pic" src={props.data.thumb} />
                </div></Link>
            </div>

        </>
    )
}


export default StoresCom;