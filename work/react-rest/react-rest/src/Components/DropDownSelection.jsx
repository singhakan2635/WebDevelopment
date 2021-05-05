function DropDownSelection( {handleSelectValue, selectSize} ) 
{
    return(
        <div>
            <label>FactsPerPage : </label>
            <div className="dropdown-select">
                <select onChange = {handleSelectValue} value={selectSize}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div>
       
    );
};

export default DropDownSelection;