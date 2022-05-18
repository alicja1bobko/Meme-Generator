import React from 'react';
import memesData from '../memesData';

export default function Meme() {
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        let randomNumber = Math.floor(Math.random() * memesArray.length);
       const url = memesArray[randomNumber].url;
    }

    return (
        <main>
        <div className='form'>
            <input type="text" className='form--input' placeholder='Top text' />
            <input type="text" className='form--input' placeholder='Bottom text'/>
            <button type="button" className='form--button' onClick={getMemeImage}>Get a new meme image &#128444;</button>
            </div>
            </main>
    )
}