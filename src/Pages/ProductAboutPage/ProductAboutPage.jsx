import Footer from "../../Components/Footer/Footer";
import WhiteNav from "../../Components/WhiteNav/WhiteNav";
import "./ProductAboutPage.css";
import { useState } from 'react';
import Rating from "material-ui-rating/lib/components/Rating/Rating";
 
const ProductAboutPage=()=>{
const [value, setValue] = useState(4);
const [thumbsSwiper, setThumbsSwiper] = useState(null);
const [swippers, setSwippers] = useState([]);

// console.log(thumbsSwiper)
return(
<div className="productaboutpage">
    <WhiteNav />
    <div className="info">
        <div className="container">
            <div className="info-left">
  
 
            </div>
            <div className="info-right">
                <h2 className="info-title">
                    Бязь- 001
                </h2>

                <Rating name="simple-controlled" value={value} onChange={(event, newValue)=> {
                    setValue(newValue);
                    }}
                    />
                    <ul className="color-list">
                        <li className="color-item">
                            <span></span>
                        </li>
                        <li className="color-item">
                            <span></span>
                        </li>
                        <li className="color-item">
                            <span></span>
                        </li>

                    </ul>

                    <div className="info-flex">
                        <p className="info-price">
                            $1,5
                        </p>
                        <button className="info-btn">
                            Заказать
                        </button>
                    </div>
                    <div className="info-text">
                        Мятный свитер с вышитыми сердечками выполнен из мягкого вязаного трикотажа. Прямой крой,
                        воротник-стойка, длинные рукава с заниженной линией плеча, манжеты и эластичный низ.
                    </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
)
}

export default ProductAboutPage;