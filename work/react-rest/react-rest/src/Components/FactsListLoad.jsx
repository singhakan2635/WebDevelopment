import { fetchCats } from '../services';
import '../CatsFacts.css';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import ShowFactList from './ShowFactList';

const FactsListLoad = ({size}) =>
{
    const [facts, setShowFacts ]= useState([]);
    const [isLoading, setIsLoading] =useState(false);

    useEffect( () =>
    {
        setIsLoading(true);
        fetchCats()
        .then( (facts) =>{
            setShowFacts(facts);
            setIsLoading(false);
        })
        .catch( err=> { 
            console.warn(err);
        });
    },[]);

    return(
        <div className="listing-loading-container">
            { isLoading ? <Loading /> :  <ShowFactList facts={facts} size={size} />}
        </div>
    );
}
export default FactsListLoad;