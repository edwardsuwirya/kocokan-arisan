import './App.css';
import Kocokan from "./components/Kocokan";
import {PLAYER, TITLE} from "./utils/constants";
import titleImage from './assets/title.png';

function App() {
    return (
        <div className='App'>
            <div className='header-title'>
                <img src={titleImage} className='title-image' alt='background title'/>
                <div className='title'>
                    {TITLE}
                </div>
            </div>
            <div className='body'>
                <Kocokan daftarPemain={PLAYER}/>
            </div>

        </div>
    );
}

export default App;
