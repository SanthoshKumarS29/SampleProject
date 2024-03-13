import { useEffect, useState } from "react"

function Timer(){
    const [count ,setCount1] = useState(0);
    useEffect(()=>{
        console.log('Screen render')
        checkcount()
        // setCount1(1)
        // setTimeout(() => {
        //     setCount1((previous)=> { return previous + 1})
        // })
    })

     function checkcount(){
        if (count > 10){
            setCount1(1)
        }
     }

    function updatecount(){
        setCount1((previous) => { return previous + 1})
    }
    return(
        <>
        <h1>I have render  {count} times </h1>
        <button onClick={updatecount}>Increase count</button>
        </>
    )
}
export default Timer;