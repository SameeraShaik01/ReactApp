export const List=()=>
{
    let arr=[{
        li:"hi"
    },{li:"hello"},{li:"bye"}]
    return(
        <ul>
            {
                arr.map((val)=>
               <li>{val.li}</li>)
            }
            
        </ul>
    )
}