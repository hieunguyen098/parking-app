import React, { useEffect, useState } from 'react';

export function useCountDown() {
    const [remainingTime, setRemainingTime] = useState(0); // Set the initial remaining time to 60 seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => (prevRemainingTime - 1 >= 0 ? prevRemainingTime - 1 : 0)); // Update the remaining time every second
        }, 1000);

        return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, []);

    return { remainingTime, setRemainingTime };
}
