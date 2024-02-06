import { Component } from "react";
import { Bars } from 'react-loader-spinner';

class Loader extends Component
{

 
   render()
   {
    return(<Bars
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />)
   }
}
export default Loader