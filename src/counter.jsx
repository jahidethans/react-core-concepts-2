import { useState } from "react"

// main part
export default function Counter(){
    const [count, setCount] = useState(0);
// main part end


    const handleAdd =()=>{
        const newCount = count+1;
        setCount(newCount);
    }

    const handleReduce =()=>{
        if(count>0){
            const newCount = count-1;
        setCount(newCount);
        }else{
            alert('No likes to be removed')
        }
    }

    return(
        <div style={{border: '2px solid yellow',marginBottom: '30px', padding:'20px', backgroundColor:'gray'}}>
            <h3>Cunter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}