import {
    FOREFINGER_LEFT, FOREFINGER_RIGHT,
    LITTLE_LEFT,
    LITTLE_RIGHT,
    MIDDLE_LEFT, MIDDLE_RIGHT,
    RING_LEFT,
    RING_RIGHT, Symbols,
    THUMB_RIGHT
} from "../../utils/constants";
import LeftHandSvgImg from "./leftHand";
import RightHandSvgImg from "./rightHand";
import {checkUpperCase} from "../../utils/functions";


function Hands({letter}) {
    const selectLeftHandFinger=(letter)=>{
        const isLittleLeft = Symbols.LITTLE_LEFT.includes(letter)||checkUpperCase(letter)
        const isRingLeft = Symbols.RING_LEFT.includes(letter)
        const isMiddleLeft = Symbols.MIDDLE_LEFT.includes(letter)
        const isForefingerLeft = Symbols.FOREFINGER_LEFT.includes(letter)
        if(isLittleLeft){return LITTLE_LEFT}
        if(isRingLeft){return RING_LEFT}
        if(isMiddleLeft){return MIDDLE_LEFT}
        if(isForefingerLeft){return FOREFINGER_LEFT}
    }
    const selectRightHandFinger=(letter)=>{
        const isThumb = Symbols.THUMB.includes(letter)
        const isLittleRight = Symbols.LITTLE_RIGHT.includes(letter)
        const isRingRight = Symbols.RING_RIGHT.includes(letter)
        const isMiddleRight = Symbols.MIDDLE_RIGHT.includes(letter)
        const isForefingerRight = Symbols.FOREFINGER_RIGHT.includes(letter)
        if(isThumb){return THUMB_RIGHT}
        if(isLittleRight){return LITTLE_RIGHT}
        if(isRingRight){return RING_RIGHT}
        if(isMiddleRight){return MIDDLE_RIGHT}
        if(isForefingerRight){return FOREFINGER_RIGHT}
    }

    return (
        <>
            <LeftHandSvgImg finger={selectLeftHandFinger(letter)}/>
            <RightHandSvgImg finger={selectRightHandFinger(letter)}/>
        </>
    );
}
export default Hands