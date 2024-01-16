import profile from "./profileimage.jpeg";

export const Card=(props)=>
{
    console.log(props)
    return(
        <>
   <div className="card" style={{width:"400px"}}>
    <img className="card-img-top" src={profile}alt="Card" style={{width:"100%"}}/>
    <div className="card-body">
      <h4 className="card-title">{props.details}</h4>
      <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
    </div>



        </>
    )
}