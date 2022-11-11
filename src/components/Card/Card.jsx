import {useRef} from "react";

import './Card.scss';

const Card = ({image}) => {
    const ref = useRef(null);

    const constrain = (val, min, max) => {
        if (val < min) return min;
        if (val > max) return max;
        return val;
    }

    return (<div
        onMouseMove={(e) => {
            let x = 2 * (e.clientX) / window.innerWidth - 1;
            let y = 2 * (e.clientY) / window.innerHeight - 1;

            x = constrain(x, -1, 1);
            y = constrain(y, -1, 1);

            ref.current.style.setProperty("--x", x.toFixed(3));
            ref.current.style.setProperty("--y", y.toFixed(3));
        }
        }
        onMouseOut={() => {
            ref.current.style.setProperty("--x", 0);
            ref.current.style.setProperty("--y", 0);
        }}
        ref={ref}
        className='parallax-card'
        style={{backgroundImage: `url(${image})`}}
    >
    </div>)
}

export default Card;