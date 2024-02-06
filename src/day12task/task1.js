import { List } from "./list"
export const Table=()=>
{
    const arr=[
        {
            td1:"coulum1",
            td2:"column2",
            td3:"column3"
        },
        {
            td1:"coulum4",
            td2:"column5",
            td3:"column6"
        },
        {
            td1:"coulum7",
            td2:"column8",
            td3:"column9"
        }
    ]
    return(
        <>
      <table>
         
        {
            arr.map((val)=>
            
                <tr>
                    <td style={{border:"1px solid black"}}>
                        {val.td1}
                    </td>
                    <td style={{border:"1px solid black"}}>
                        {val.td2}
                    </td>
                    <td style={{border:"1px solid black"}}>
                        {val.td3}
                    </td>
                </tr>
            )
            
        }
      </table>
      <ul>
       <List/>

      </ul>
      </>
    )
}