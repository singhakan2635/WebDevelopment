import { compare } from '../compare';
import SecretWord from './SecretWord';
import NotValid from './NotValid';
import ValidMatches from './ValidMatches';

const CompareWord = ( {word} ) =>
{
    const secretword = 'RECAT';
    const cleanedWord = word.replace(/[^A-Za-z]+/g, '');
    const wordCount = cleanedWord.length;
    const matches = compare(cleanedWord);
    if(wordCount<5 || wordCount>5)
    {
        return (
                <NotValid userWord={word} />
        )
    }
    else{
        if(secretword.toLowerCase()===word.toLowerCase())
        {
            return (
                    <SecretWord userWord={word} />
            )
        }
        else{
            return (
                <ValidMatches userWord={word} matches={matches} />
            )
        }
    }
}

export default CompareWord;