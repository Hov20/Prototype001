import { Component } from "react";
import style from './style.module.css';

export default class Showimages extends Component {
    render() {
        const { images } = this.props
        return (
            <div className={style.imageContainer}>
                {images.map((image) => (
                    <img 
                        className={style.image}
                        key={image}
                        src={image}
                        alt="dog"
                    />
                ))}      
            </div>
        );
    }
}