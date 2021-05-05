const SecretWord = ( {userWord} ) =>
{
    const word = userWord;
    return (
        <h3>{word} is the secret word</h3>
    );
};

export default SecretWord;