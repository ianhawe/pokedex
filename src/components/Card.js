import React from 'react';
import './Card.css'


const Card = ({name, index}) => {
   

    return(   
        <div className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'>
             <img src={`https://pokeres.bastionbot.org/images/pokemon/${index}.png`} alt='pokemon'/>
           
            <div>
                <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                <p>#{index}</p>
            </div>
        </div>
    );

}
export default Card;