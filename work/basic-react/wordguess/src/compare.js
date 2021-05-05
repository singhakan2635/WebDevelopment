export const compare = ( userword ) =>
{
    const secretword = 'RECAT';
    let matches = 0;
        const lettercount ={};  

        for( let letter of secretword.toLowerCase())
        {
            if(!lettercount[letter])
            {
                lettercount[letter] =1;
            }
            else
            {
                lettercount[letter]++;
            }
        }
        for( let letter of userword.toLowerCase() )
        {
            if(lettercount[letter]>0)
            {
                lettercount[letter]--;
                matches++;
            }
        } 
        return matches;
}
