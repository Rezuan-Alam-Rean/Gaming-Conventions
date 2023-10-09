
import Bennar from "../Components/Bennar";
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
        </div>
    );
};

export default Home;