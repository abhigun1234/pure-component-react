import React,{useState} from 'react';
function HooksCounter(props) {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('ravi')
    return (
        <div>
            {count}
            {name}
           <button onClick={()=>setCount(count+1)}>click</button> 
           <button onClick={()=>setName('raj')}>change name</button> 
        </div>
    );
}

export default HooksCounter;