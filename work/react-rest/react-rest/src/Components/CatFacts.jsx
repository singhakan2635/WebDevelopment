function CatFacts( { facts , start, size})
{
    const formattedFacts = facts.slice(start,start+size).map( fact => (<li key={fact}>{fact}</li>));
    return (
        <ul>
            {formattedFacts}
        </ul>
    );
}

export default CatFacts;