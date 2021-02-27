/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';

const Lolipop = () => {
    return (
        <div className="Lolipop">
            <img src="https://cdn.pixabay.com/photo/2017/08/19/17/12/candy-2659233_960_720.jpg" />
            <h3><Link to="/">Go Back</Link></h3>
        </div>
    )
}

export default Lolipop;