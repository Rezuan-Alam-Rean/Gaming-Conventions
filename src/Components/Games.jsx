

import Gamescards from "./Gamescards";


// eslint-disable-next-line react/prop-types
const Games = ({games}) => {
    
    
    return (
        <div>
            <h1 className="text-center text-5xl font-bold mt-10">Lists of video games</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                    {
                        // eslint-disable-next-line react/prop-types
                        games?.map(game=><Gamescards key={game.id} game={game}></Gamescards>)
                    }
            </div>
        </div>
    );
};

export default Games;