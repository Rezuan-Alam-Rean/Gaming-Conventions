import { Link } from "react-router-dom";


const Gamescards = ({ game }) => {

  const { id, game_image, game_name, game_details, prize, } = game || {};
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 h-48">
        <img src={game_image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{game_name}</h2>
        <p>{game_details}</p>
        <div className="card-actions  items-center flex gap-24 mt-5">
          <h3 className="text-center font-bold justify-center " >PRICE : {prize}$</h3>

          <div >
            <Link to={`/Game/${id}`} state={game_name}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Gamescards;