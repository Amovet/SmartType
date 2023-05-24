import './modal.css'
import {useEffect, useMemo} from "react";
import {createPortal} from "react-dom";
import {getSpeedIndo} from "../../utils/functions";

const modalRootElement = document.querySelector('#modal');

const Modal = ({isView,restart,result}) => {
    const element = useMemo(()=>document.createElement('div',[]))

    useEffect(()=>{
        modalRootElement.appendChild(element)

        return ()=>{
            modalRootElement.removeChild(element)
        }
    })

    if(isView){
        return createPortal(
            <>
             <div className='background' onClick={restart}/>
             <div className='modal'>
                 <div className='modal__container'>
                     <div className='modal__info'>
                         <span>Speed:</span> {getSpeedIndo(result.time,result.letters)} lpm
                     </div>
                     <div className='modal__info'>
                         <span>Time:</span> {result.time} sec
                     </div>
                     <div className='modal__info'>
                         <span>Letters:</span> {result.letters}
                     </div>
                     <div className='modal__info'>
                         <span>Errors:</span> {result.error}
                     </div>
                     <button onClick={restart} className='modal__btn'>Restart</button>
                 </div>
             </div>
            </>,
            element
        )
    }
    return null


}
export default Modal