import catPic from '../cuteCat.png';
import '../CatsFacts.css';

function CatImage()
{
    return (
        <img src={catPic} alt="Cat Pic" className="cat-header" />
    )
}

export default CatImage;