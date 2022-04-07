import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Display = (props) =>{
    const [info, setInfo] = useState({});
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${props.category}/${props.id}`)
            .then(response =>{
                console.log(response)
                setInfo(response.data)
            })
            .catch(err=>console.log(err))
    },[props.category, props.id])
    return(
        <div className="container w-50 mx-auto">
                {props.category === "people"? 
                    <div className="mt-3">
                        <h1>{info.name}</h1>
                        <div className="mt-3">
                            <p><b>Height: </b>{info.height}</p>
                            <p><b>Mass: </b>{info.mass}</p>
                            <p><b>Hair Color: </b>{info.hair_color}</p>
                            <p><b>Skin Color: </b>{info.skin_color}</p>
                        </div>
                    </div>:
                    props.category === "planets"?
                    <div className="mt-3">
                        <h1>{info.name}</h1>
                        <div>
                            <p><b>Climate: </b>{info.climate}</p>
                            <p><b>Terrain: </b>{info.mass}</p>
                            <p><b>Surface Water: </b>{info.hair_color}</p>
                            <p><b>Population: </b>{info.skin_color}</p>
                        </div>
                    </div>:
                    props.category === "films"?
                    <div className="mt-3">
                        <h1>{info.title}</h1>
                        <div>
                            <p><b>Director: </b>{info.director}</p>
                            <p><b>Producer: </b>{info.producer}</p>
                            <p><b>Release Date: </b>{info.release_date}</p>
                        </div>
                    </div>:
                    props.category === "species"?
                    <div className="mt-3">
                        <h1>{info.name}</h1>
                        <div>
                            <p><b>Classification: </b>{info.classification}</p>
                            <p><b>Average Height: </b>{info.average_height}</p>
                            <p><b>Language: </b>{info.language}</p>
                            <p><b>Skin Colors: </b>{info.skin_colors}</p>
                        </div>
                    </div>:
                    props.category === "starships"?
                    <div className="mt-3">
                        <h1>{info.name}</h1>
                        <div>
                            <p><b>Model: </b>{info.model}</p>
                            <p><b>Manufacturer: </b>{info.manufacturer}</p>
                            <p><b>Cost In Credits: </b>{info.cost_in_credits}</p>
                            <p><b>Length: </b>{info.length}</p>
                            <p><b>Max Atmospheric Speed: </b>{info.max_atmosphering_speed}</p>
                        </div>
                    </div>:""
                }
        </div>
    )
}

export default Display;