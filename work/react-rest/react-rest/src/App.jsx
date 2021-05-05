import { useState } from 'react';
import './CatsFacts.css';
import CatFactsHeader from './Components/CatFactsHeader';

function App() {

  const [showfacts, setShowFacts] = useState(false);

    if(showfacts)
    {
      return (
        <div className="App">
          <div className="top-container">
            <CatFactsHeader flag={true} />
          </div>
        </div>
      );
    }
    else{
      return (
        <div className="App">
          <div className="top-container">
            <CatFactsHeader flag={false} />
            <div className="button-showFacts">
              <button onClick={()=> setShowFacts(true)}>Show Facts</button> 
            </div>
          </div>
        </div>
      );
    }

  // if(showfacts)
  // {
  //   return(
  //     <div className="App">
  //       <div className="top-container">
  //         <div className="top-header">
  //         <img src={catPic} alt="Cat Pic" className="cat-header" />
  //         <FactLoad size={selectSize} />
  //         <label>FactsPerPage : </label>
  //         <div class="dropdown-select">
  //         <select onChange = {handleSelectValue} value={selectSize}>
  //               <option value="5">5</option>
  //               <option value="10">10</option>
  //           </select>
  //         </div>
  //         </div>
  //           <FactsListLoad size={selectSize}/>
  //       </div>
        
  //     </div>
  //   )
  // }
  // else
  // {
  //   return(
  //     <div className="App">
  //       <div className="top-container">
  //         <div className="top-header">
  //           <img src={catPic} alt="Cat Pic" className="cat-header" />
  //         <FactLoad size={0} />
  //       <label>FactsPerPage : </label>
  //           <select onChange = {handleSelectValue} value={selectSize}>
  //               <option value="5">5</option>
  //               <option value="10">10</option>
  //           </select>
  //           <div className="button-showFacts">
  //             <button onClick={()=> setShowFacts(true)}>Show Facts</button> 
  //           </div>
  //         </div> 
  //       </div> 
  //     </div>
  //   )
  // }


  
}

export default App;
