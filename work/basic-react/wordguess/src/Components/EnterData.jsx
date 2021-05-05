import { useState } from 'react';

const EnterData = ( {OnInput} ) =>
{
    const [tempWord, setTempWord] = useState('');

    const updateWord = (e) => setTempWord(e.target.value);

    const onButtonClick = () =>
    {
        OnInput(tempWord);
        setTempWord('');
    }

    return (
        <div>
            <h2>Guess 5 letter Word</h2> <br />
            <span className="input-word">
                <input onChange={ updateWord } value={tempWord} maxLength={5} />
            </span>
            <br />
            <button onClick={onButtonClick}> Guess </button>
        </div>
    );

};
export default EnterData;
