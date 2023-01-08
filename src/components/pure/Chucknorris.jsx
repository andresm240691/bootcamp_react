import React, {useState} from 'react'
import axios from 'axios'

const configRequestHttp = axios.create({
    baseURL: 'https://api.chucknorris.io',
    responseType: 'json',
})


const Chucknorris = () => {
  
  const [joke, setJoke] = useState(null);

  const [likes, setLikes] = useState(0);

  const [unalike, setUnalike] = useState(0);

  const [clickJoke, setClickJoke] = useState(false);
  

  const getRandomJoke =() =>{
    return configRequestHttp.get('/jokes/random')
  }

  const clickGetJokes = async() =>{
    getRandomJoke()
        .then((response) => {
            console.log("RESPONSE: ", response.data);
            setJoke(response.data);
            setClickJoke(true);
        })
        .catch((error) => alert(`Fail request to chucknurris API ${error}`))
  }
  
  const countLikes = () =>{
    if(clickJoke){
        let aux = likes + 1;
        setLikes(aux);
        setClickJoke(false);
    }
  }

  const countUnalikes = () =>{
    if(clickJoke){
        let aux = unalike + 1;
        setUnalike(aux);
        setClickJoke(false);
    }
  }
  
  return (
    <div>
        {joke ?(
            <div>
                <h2>{joke.value}</h2>
                <img alt="icon" src={joke.icon_url}></img>
            </div>
        ):(
            <div>
                <p>Please Click on button for get a Joke</p>
            </div>
        )}
        <div>
            <h2>Like: {likes}</h2>
            <h2>Unalike: {unalike}</h2>
        </div>
        <button onClick={() => clickGetJokes()}>Get a Joke</button>
        <button onClick={() => countLikes()}>Like</button>
        <button onClick={() => countUnalikes()}>Unlike</button>
    </div>
  )
}

export default Chucknorris