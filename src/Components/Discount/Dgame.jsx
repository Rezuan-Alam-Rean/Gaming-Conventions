import Dcard from "./Dcard";

const Dgame = ({games}) => {

    return (
        <div>
            <h1 className="text-center text-5xl font-bold mt-10">Discount offer</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                    {
                        // eslint-disable-next-line react/prop-types
                        games?.map(game=><Dcard key={game.id} game={game}></Dcard>).slice(0,3)
                    }
            </div>
        </div>
    );
};

export default Dgame;