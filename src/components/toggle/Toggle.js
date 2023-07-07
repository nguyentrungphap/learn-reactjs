import React, {useState} from "react"


function Toggle(){
    // const array = useState(false);
    // console.log(array); //[false, funtion] function dung de update
    // console.log(array[0]);
    // console.log(array[1]);
    //initializ value:bloolean(true,false) , number(1,2,3,4), string("asdfaf") ,undefined , null , array , object
    //statee changes ->  re-render -> cap nhap lai dom
    const [on , setOn] = useState(false)
    console.log(on);
    return(
        <div className="toggle" onClick={() => setOn(true)}>Click {on ?"On" : "Off"}</div>
    )
}
export default Toggle;

//1. enabling state : useState(initialize value)
// 2. initialize state (gias tri khoi tao) : useState(false)
// 3.reading state
// 4.update state