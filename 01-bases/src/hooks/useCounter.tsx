import { useState } from "react";

export const useCounter = () => {
    const [count, setCount] = useState<number>(10)

    const increaseBy = (value: number) => {
        //setCount(count+value);
        //setCount((current) => current + value);
        setCount((current) => Math.max(current + value, 0));
    }

    return {
        // Properties
        count,

        // Actions
        increaseBy,
    }

}
