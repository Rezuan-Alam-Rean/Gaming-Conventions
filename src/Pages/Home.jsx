
import Bennar from "../Components/Bennar";
import Dgame from "../Components/Discount/Dgame";
import Games from "../Components/Games";
import Hero from "../Components/Hero";
import useGetGames from "../Hook/useGetGames";




const Home = () => {
    const [games] = useGetGames()
    // console.log(games);
   
    return (
        <div>
            
            <Bennar></Bennar>
            <Games games={games} >  </Games>

            <Hero></Hero>
            <Dgame games={games} ></Dgame>
        </div>
    );
};

export default Home;