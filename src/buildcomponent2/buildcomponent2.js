



export const BuildComponent2=()=>
{
    const obj={name:"sameera",age:21,branch:"ece",yearofpassing:2023};
    const arr=["google","amazon","ibm","techm"];
    let arr1=[];
  arr.forEach((val,ind)=>
    {
        arr1.push(<li key={ind}>{val}</li>)
    })
    return(
         <div>
        <h1>{obj.name}</h1>
        <h2>{obj.age}</h2>
        <h3>{obj.branch}</h3>
        <img height="100px"width="100px"alt="pic"src="https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW55fGVufDB8fDB8fHww"></img>
        <details>
            <summary>Top Companies:</summary>
           <ul>{arr1}</ul>
        </details>
        
        </div>
    )
}