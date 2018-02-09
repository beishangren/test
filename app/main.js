import React from 'react'
import {render} from 'react-dom'
import Greeter from './Greeter'
import one from '../img/1.jpg';
import two from '../img/2.jpg';
import three from '../img/3.jpg';
let pic1={
    src:one,
    name:1
}

let pic2={
    src:two,
    name:2
}

let pic3={
    src:three,
    name:3
}

let images=[];
images.push(pic1,pic2,pic3);
render(<Greeter images={images}/>,document.getElementById('root'));