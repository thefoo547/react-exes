import React, {Component} from 'react';
import {v4 as uuid} from 'uuid';
import './App.scss';

//Iteración de arreglos
//const frutas = ["piña", "sandía", "fresa", "kiwi", "pera"]

const images = [
    {
        author:{
            name: 'Vladpe',
            avatar: 'https://via.placeholder.com/150'
        },
        source: 'https://via.placeholder.com/150',
        views: 153,
        id: uuid()
    },
    {
        author:{
            name: 'Vladpe',
            avatar: 'https://via.placeholder.com/150'
        },
        source: 'https://via.placeholder.com/150',
        views: 153,
        id: uuid()
    },
    {
        author:{
            name: 'Vladpe',
            avatar: 'https://via.placeholder.com/150'
        },
        source: 'https://via.placeholder.com/150',
        views: 153,
        id: uuid()
    },
    {
        author:{
            name: 'Vladpe',
            avatar: 'https://via.placeholder.com/150'
        },
        source: 'https://via.placeholder.com/150',
        views: 153,
        id: uuid()
    }
]

const Image = (props)=>(
    <div className="card">
        <img src={props.image.source} alt="imagen" className="image"/>
        <div className="footer">
            <img className="avatar" src={props.image.author.avatar} alt="avatar"/>
            <div>
                {props.image.author.name}
            </div>
            <div>
                {props.image.views}
            </div>
        </div>
    </div>
)

class App extends Component {
    //Iteración de objetos
    /*state = {
        user: {
            name: "Pepito",
            country: "Perú",
            twitter: "@peperez",
            youtube: "uyunperuano"
        }
    }*/

    render() {
        return (
            <div className="images">
                {images.map(image=>(
                  <Image key={image.id} image={image}></Image>
                ))}
            </div>
        );
    }
}

export default App;
