import React from 'react';
import { Link } from 'react-router-dom';

const Gamecard = ({game}) => {

    const { id, game_image, game_name, prize, game_details } = game || {};
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className=' w-8/12' src={game_image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl">{game_name}</h2>
    <p className='mt-10 text-2xl'>{game_details}</p>
    <div className="card-actions  items-center flex gap-24 mb-5">
    <h3 className="text-center font-bold justify-center " >PRICE : {prize}$</h3>
     <div>
        <Link to="/" >
        
        <button  className="btn btn-primary">go home</button>
        </Link>
     
     </div>
    </div>
  </div>
</div>
    );
};

export default Gamecard;