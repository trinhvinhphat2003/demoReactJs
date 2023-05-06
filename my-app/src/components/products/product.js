import './product.scss'
import sneaker1 from "../../assets/images/sneaker1.jpg"
import sneaker2 from "../../assets/images/sneaker2.jpg"
import sneaker3 from "../../assets/images/sneaker3.jpg"
import Lightbox from 'react-image-lightbox';
import { useState } from 'react'
const Product = () => {
    const [mainImg, setMainImg] = useState(sneaker1);
    const [isOpen, setIsOpen] = useState(false);
    const [images, setImages] = useState([
        sneaker1,
        sneaker2,
        sneaker3
    ]);
    const [photoIndex, setPhotoIndex] = useState(0)
    const handleUpImgClick = () => {
        setIsOpen(true)
        let index = images.findIndex((elemnt) => elemnt === mainImg)
        setPhotoIndex(index)
    }
    return (
        <div className='Container'>
            <div className="Content-left">
                <div className='MainImg'>
                    <img src={mainImg} onClick={() => handleUpImgClick()}></img>
                </div>
                <div className='AlternativeImg'>
                    <img src={sneaker1} className={sneaker1 === mainImg ? "active" : ""} onClick={() => setMainImg(sneaker1)}></img>
                    <img src={sneaker2} className={sneaker2 === mainImg ? "active" : ""} onClick={() => setMainImg(sneaker2)}></img>
                    <img src={sneaker3} className={sneaker3 === mainImg ? "active" : ""} onClick={() => setMainImg(sneaker3)}></img>
                </div>
                <div>
                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() =>
                                setPhotoIndex((photoIndex + images.length - 1) % images.length)
                            }
                            onMoveNextRequest={() =>
                                setPhotoIndex((photoIndex + 1) % images.length)
                            }
                        />
                    )}
                </div>
            </div>
            <div className="Content-right">
                <div>
                    name
                </div>
                <div>
                    price
                </div>
                <div>
                    <input type='number' />
                </div>
                <div>
                    <button type='button'>Buy now</button>
                </div>
            </div>
        </div >
    )
}

export default Product