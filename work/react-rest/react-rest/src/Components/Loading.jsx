import loding from '../sample.gif';
const Loading = () =>
{
    return (
        <div className="loading-header">
            <h1>Loading ...</h1>
            <img src={loding} alt="loading.." className="loading-image" />
        </div>
        
        
    )
}
export default Loading;