import './main.css';
import Slider from './slider/slider';
import Gallery from './gallery/Gallery';

const Main = () =>{
    return(
        <div className='mainWrap'>
            <main className='main'>
                <Slider/>
                <Gallery/>
            </main>
        </div>
    )
}

export default Main;