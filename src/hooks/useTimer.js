import {useEffect, useState} from "react";


export const useTimer = (isActive) => {
    const [time, setTime] = useState(0)

    useEffect(() => {
        let interval = null;

        if (isActive === true) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
        } else {
            clearInterval(interval);
            setTime(0)
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive]);

    return {time:time}
}








