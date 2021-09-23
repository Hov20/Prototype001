import { Component } from 'react';
import Showimages  from '../Components/Showimages/Showimages';
import HiddenText from '../Components/HiddenText/Hiddentext';
import style from './style.module.css';

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            images: [],
            hide: false
        };
    }
 getImages = async () => {
       const response = await fetch('https://dog.ceo/api/breeds/image/random');
       const imageObject = await response.json();
       const image = imageObject.message;
       this.setState({ images: [...this.state.images, image] });
    }
    

componentDidMount() {
//   fetch('https://dog.ceo/api/breeds/image/random')
//   .then((response) => {return response.json()})
//   .then((imageObject) => {
//     const image = imageObject.message;
//     this.setState({images: [image]})
//   })
 this.getImages();
}

handleLoadImage = () => {
    this.getImages();
}
toggleHide = () => {
    this.setState({
        hide: !this.state.hide
    })
}

    render() {
        return (
            <div className={style.div}>
            <div className={style.root}>
                <button 
                className={style.button} 
                onClick={this.handleLoadImage}> 
                Load new image
                </button>

                <button className={style.button}
                onClick={this.toggleHide}>
                {this.state.hide ? 'Show' : 'Hide'}
                </button>

                {this.state.hide 
                    ? (
                        <HiddenText />
                        )
                    : (
                        <Showimages images={this.state.images} />
                        )}
                <h1>The Dogs</h1>
            </div>
            </div>
        );
    }
}
