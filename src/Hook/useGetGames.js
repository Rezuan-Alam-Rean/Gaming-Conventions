import  { useEffect, useState } from 'react';

const useGetGames = () => {
    const [games,setGames] = useState()

    useEffect(()=>{

        fetch('/games.json')
        .then(res=>res.json())
        .then(data => setGames(data))

    },[])

    return [games]

};

export default useGetGames;