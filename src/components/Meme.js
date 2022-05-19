import React, {useEffect, useState} from 'react';


export default function Meme() {
    
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    
    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, []);


    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function getMemeImage() {
        let randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevState => ({
                ...prevState,
                randomImage: url
            }))
    }

    return (
        <main>
        <div className='form'>
                <input
                    type="text"
                    className='form--input'
                    placeholder='Top text'
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className='form--input'
                    placeholder='Bottom text'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
            <button type="button" className='form--button' onClick={getMemeImage}>Get a new meme image &#128444;</button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} alt="meme" className='meme--image' />
                <h2 className='meme--text top'>{ meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText }</h2>
                </div>
        </main>
        
    )
}