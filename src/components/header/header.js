import './header.css'
import {ENG_DOCUMENTATION, ENG_LITERATURE, ENG_RANDOM} from "../../utils/constants";


function Header({error,speed,time,setType}) {
    return (
        <header>
            <div className="header__container">
                <div className='header__menu menu'>
                    <div className='element' onClick={()=>setType(ENG_LITERATURE)}>Literature text</div>
                    <div className='element' onClick={()=>setType(ENG_RANDOM)}>Random text</div>
                    <div className='element' onClick={()=>setType(ENG_DOCUMENTATION)}>Documentation text</div>
                </div>
                <div className='header__results header__menu'>
                    <div className='header__error element'>Errors: {error}</div>
                    <div className='header__speed element'>Speed: {speed}</div>
                    <div className='header__time element'>Time: {time}s</div>
                </div>
            </div>
        </header>
    );
}
export default Header