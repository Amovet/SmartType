import {useEffect, useState} from "react";
import Keyboard from "./components/keyboards/keyboard";
import {useGetText} from "./hooks/useGetText";
import Hands from "./components/hands/hands";
import {ENG_LITERATURE} from "./utils/constants";
import {useTimer} from "./hooks/useTimer";
import {checkSymbol, getSpeedIndo, selectAnotherType} from "./utils/functions";
import Modal from "./components/modal/modal";
import Header from "./components/header/header";
import Text from "./components/text/text";


function App() {
    const [isError, setIsError] = useState(false);
    const [position, setPosition] = useState(0);
    const [error, setError] = useState(0);
    const [isFinish, setIsFinish] = useState(false);
    const [type, setType] = useState(ENG_LITERATURE);
    const [isActive, setIsActive] = useState(false);
    const [result,setResult] = useState({time:0,letters:0, error:0})

    const {time} = useTimer(isActive)
    const {text, isLoading} = useGetText(type)

    const handleTimerStart = () => {
        setIsActive(true);
    };

    const handleTimerStop = () => {
        setIsActive(false)
    };

    const restart = () => {
        setType(selectAnotherType(type))
        setError(0)
        setIsError(false)
        setIsFinish(false)
        setPosition(0)
    }

    const finish = () => {
        setResult({time:time,letters:position, error:error})
        setIsFinish(true)
        handleTimerStop()
    }

    const onKeydown = (event) => {
        if (isActive === false) { handleTimerStart() }
        const isSymbol = checkSymbol(event.key)
        if (isSymbol) {
            const isRightSymbol = event.key == text[position]
            if (isRightSymbol) {
                setIsError(false)
                const isLastSymbol = position == text.length - 1
                if (isLastSymbol) {
                    finish()
                } else {
                    setPosition(prevState => prevState + 1)
                }
            } else {
                setError(prevState => prevState + 1)
                setIsError(true)
            }
        }

    }

    useEffect(() => {
        document.addEventListener('keydown', onKeydown);
        return () => document.removeEventListener('keydown', onKeydown);
    }, [position, text, type]);

  return (
    <section className="App">
      <Header error={error} time={time} speed={getSpeedIndo(time,position)} setType={setType}/>
      <Text text={text} position={position} isError={isError} isLoading={isLoading}/>
      <Keyboard letter={text[position]}/>
      <Hands letter={text[position]}/>
      <Modal isView={isFinish} restart={restart} result={result}/>
    </section>
  );
}

export default App;
