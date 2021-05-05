import '../CatsFacts.css';
import DropDownSelection from "./DropDownSelection";
import FactLoad from "./FactLoad";
import { useState } from 'react';
import CatImage from './CatImage';
import FactsListLoad from './FactsListLoad';

function CatFactsHeader ( {flag} ) 
{
    const [selectSize, setSelectSize] = useState(5); 
    const handleSelectValue = (e) =>
    {
        if(e.target.value==="5")
        {
            setSelectSize(5)
        }
        else{
            setSelectSize(10)
        }
    }

    return (
        <div>
            <div className="top-header">
           <CatImage />
           {flag ? <FactLoad size={selectSize} /> : <FactLoad size={0} />}
           <DropDownSelection handleSelectValue={handleSelectValue} selectSize={selectSize} />
           
        </div>
        {flag ? <FactsListLoad size={selectSize}/>: null}
        </div>
       
    )
}

export default CatFactsHeader;