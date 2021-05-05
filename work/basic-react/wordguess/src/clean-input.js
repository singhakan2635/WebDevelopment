export const cleanInput = ( userWord ) =>
{
    const cleanedWord = userWord.replace(/[^A-Za-z]+/g, '');
    return cleanedWord;
}