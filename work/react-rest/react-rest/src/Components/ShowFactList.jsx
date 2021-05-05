import { useState, useEffect } from 'react';
import CatFacts from './CatFacts';


const ShowFactList = ({ facts, size}) =>
{
    const length = facts.length;
    const [start, setStart] = useState(1);
    const [isPreviousDisabled, setPreviousIsDisabled] = useState(true);
    const [isEndDisabled, setEndDisabled] = useState(false);
    let endValue = start+size>=length ? length : start+size;

    const handlePreviousButton = ( ) =>
    {
        const value = start-size;
        if(value<=1)
        {
            setStart(1);
            setPreviousIsDisabled(true);
            
        }
        else{
            setStart(value);
            setEndDisabled(false);
        }
    }
   
    const handleNextButton = () =>
    {
        const startValue = start+size;
        const endValue = startValue+size;
        if(endValue>=90)
        {
            setStart(startValue)
            setEndDisabled(true);
            setPreviousIsDisabled(false);
        }
        else
        {
            setStart(startValue);
            setPreviousIsDisabled(false);
        }
    }

    const updateOnSizeChange = () =>
    {
        if(endValue===length)
        {
            setEndDisabled(true);
        }
        else{
            setEndDisabled(false);
        }
    }

    useEffect( 
        updateOnSizeChange, [size]
    );
    
    return(
        <div className="show-list"> 
            <div className="showing-fact">
                <h2>Showing Facts {start} - {endValue-1}</h2>
            </div>
            
            <CatFacts facts={facts} start={start} size={size}/>
            <div className="button-handler">
                <button onClick={handlePreviousButton}  disabled={isPreviousDisabled}>Previous</button>
                <button onClick={handleNextButton} disabled={isEndDisabled}>Next</button>
            </div>
        </div>
    )
}

export default ShowFactList;