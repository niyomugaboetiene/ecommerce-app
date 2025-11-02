import speaker1 from "../assets/speakers/speaker1.jpg";
import speaker2 from "../assets/speakers/speaker2.jpeg";
import speaker3 from "../assets/speakers/speaker3.jpeg";
import speaker4 from "../assets/speakers/speaker4.jpeg";
import speaker5 from "../assets/speakers/speaker5.jpeg";
import speaker6 from "../assets/speakers/speaker6.jpeg";
import speaker7 from "../assets/speakers/speaker7.jpeg";
import speaker8 from "../assets/speakers/speaker8.jpg";
import speaker9 from "../assets/speakers/speaker9.jpg";
import camera1 from "../assets/electrics/camera1.jpeg"
import electcar from "../assets/electrics/electcar.jpg"
import homeDesk from "../assets/electrics/homeDesk.jpeg"
import iphone from "../assets/electrics/iphone.jpg"
import joystick from "../assets/electrics/joystick.jpg"
import joystick1 from "../assets/electrics/joystick3.jpg"
import joystick2 from "../assets/electrics/joystick2.jpg"
import joystick3 from "../assets/electrics/joystick3.webp"
import { useState } from "react";


const Images = [
    {image: speaker1, decription: "speaker"},
    {image: speaker2, decription: "speaker"},
    {image: speaker3, decription: "speaker"},
    {image: speaker4, decription: "speaker"},
    {image: speaker5, decription: "speaker"},
    {image: speaker6, decription: "speaker"},
    {image: speaker7, decription: "speaker"},
    {image: speaker8, decription: "speaker"},
    {image: speaker9, decription: "speaker"},
    {image: camera1, decription: "speaker"},
    {image: electcar, decription: "speaker"},
    {image: homeDesk, decription: "speaker"},
    {image: iphone, decription: "speaker"},
    {image: joystick, decription: "speaker"},
    {image: joystick1, decription: "speaker"},
    {image: joystick2, decription: "speaker"},
    {image: joystick3, decription: "speaker"},
];

const BestSeller = () => {
    const [showAll, setShowAll] = useState(false);

    const imageToSHow = showAll ? Images : Images.slice(0, 8);
    const hasMoreItems = Images.length > 8;
    
    return (
        <div>
            <div>
                {imageToSHow.map((item, idx) => (
                    <div key={idx}>
                        <div>
                            <img src={item.image}/>
                            <p>{item.decription}</p>
                        </div>
                    </div>
                ))}
            </div>

            {hasMoreItems && !showAll && (
                <button
                  onClick={() => setShowAll(true)}
                >
                    Show All
                </button>
            )}
        </div>
    )

}

export default BestSeller;