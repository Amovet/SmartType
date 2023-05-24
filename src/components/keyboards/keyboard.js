import './keyboard.css';
import {
    useEffect,
    useState
} from "react";
import {checkUpperCase} from "../../utils/functions";



function Keyboard({letter}) {

    const [isUpperCase, setIsUpperCase] = useState(false)

    useEffect(() => {
        if (checkUpperCase(letter)) {
            setIsUpperCase(true)
        } else {
            setIsUpperCase(false)
        }
    }, [letter])

    const indicateNextLetter = (symbol) => {
        if (letter.toLowerCase() == symbol) {
            return 'indicate'
        }
    }

    return (
        <div className='keyboard'>
            <div className='keyboard-row'>
                <div className={`key ${indicateNextLetter('~')}`}>~</div>
                <div className={`key ${indicateNextLetter('!')}`}>!</div>
                <div className={`key ${indicateNextLetter('@')}`}>@</div>
                <div className={`key ${indicateNextLetter('#')}`}>#</div>
                <div className={`key ${indicateNextLetter('$')}`}>$</div>
                <div className={`key ${indicateNextLetter('%')}`}>%</div>
                <div className={`key ${indicateNextLetter('^')}`}>^</div>
                <div className={`key ${indicateNextLetter('&')}`}>&</div>
                <div className={`key ${indicateNextLetter('*')}`}>*</div>
                <div className={`key ${indicateNextLetter('(')}`}>(</div>
                <div className={`key ${indicateNextLetter(')')}`}>)</div>
                <div className={`key ${indicateNextLetter('-')}`}>-</div>
                <div className={`key ${indicateNextLetter('=')}`}>=</div>
                <div className='key right-keys backspace'>Backspace</div>
            </div>
            <div className='keyboard-row'>
                <div className='key left-keys tab'>Tab</div>
                <div className={`key ${indicateNextLetter('q')}`}>q</div>
                <div className={`key ${indicateNextLetter('w')}`}>w</div>
                <div className={`key ${indicateNextLetter('e')}`}>e</div>
                <div className={`key ${indicateNextLetter('r')}`}>r</div>
                <div className={`key ${indicateNextLetter('t')}`}>t</div>
                <div className={`key ${indicateNextLetter('y')}`}>y</div>
                <div className={`key ${indicateNextLetter('u')}`}>u</div>
                <div className={`key ${indicateNextLetter('i')}`}>i</div>
                <div className={`key ${indicateNextLetter('o')}`}>o</div>
                <div className={`key ${indicateNextLetter('p')}`}>p</div>
                <div className={`key ${indicateNextLetter('[')}`}>[</div>
                <div className={`key ${indicateNextLetter(']')}`}>]</div>
                <div className={`key ${indicateNextLetter('|')}`}>|</div>
            </div>
            <div className='keyboard-row'>
                <div className='key left-keys caps-lock'>Caps Lock</div>
                <div className={`key ${indicateNextLetter('a')}`}>a</div>
                <div className={`key ${indicateNextLetter('s')}`}>s</div>
                <div className={`key ${indicateNextLetter('d')}`}>d</div>
                <div className={`key ${indicateNextLetter('f')}`}>f</div>
                <div className={`key ${indicateNextLetter('g')}`}>g</div>
                <div className={`key ${indicateNextLetter('h')}`}>h</div>
                <div className={`key ${indicateNextLetter('j')}`}>j</div>
                <div className={`key ${indicateNextLetter('k')}`}>k</div>
                <div className={`key ${indicateNextLetter('l')}`}>l</div>
                <div className={`key ${indicateNextLetter(';')}`}>;</div>
                <div className={`key ${indicateNextLetter('"')}`}>"</div>
                <div className='key right-keys enter'>Enter</div>
            </div>
            <div className='keyboard-row'>
                <div className={`key left-keys shift  ${isUpperCase ? 'indicate' : null}`}>Shift</div>
                <div className={`key ${indicateNextLetter('z')}`}>z</div>
                <div className={`key ${indicateNextLetter('x')}`}>x</div>
                <div className={`key ${indicateNextLetter('c')}`}>c</div>
                <div className={`key ${indicateNextLetter('v')}`}>v</div>
                <div className={`key ${indicateNextLetter('b')}`}>b</div>
                <div className={`key ${indicateNextLetter('n')}`}>n</div>
                <div className={`key ${indicateNextLetter('m')}`}>m</div>
                <div className={`key ${indicateNextLetter(',')}`}>,</div>
                <div className={`key ${indicateNextLetter('.')}`}>.</div>
                <div className={`key ${indicateNextLetter('/')}`}>/</div>
                <div className='key right-keys shift'>Shift</div>
            </div>
            <div className='keyboard-row space-row'>
                <div className={`key space ${indicateNextLetter(' ')}`}/>
            </div>
        </div>
    );
}

export default Keyboard;
