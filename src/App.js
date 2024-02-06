 // eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
// import Theme from './taskday9';
import { Table } from './day12task/task1';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import Myfisrtapp from  './build-component/build_component';
// function Importing()
// {
//   return(<Myfisrtapp/>)
// }
// export default Importing;
// //testing
// //testing2
// //testing3
// //testing4
//  firstClass from './buildcomponent2/buildcomponent2';
// import FirstClass from './buildcomponent2/buildcomponent2';
// import { ImageAlter } from './imagealter/imagealter';
// import { ApiCall } from './exception/exception';
import { BootStrap } from './bootstrap/bootstrap';
import { Header } from './day12task/header';
import { UseStateEx } from './hooks/usestate';
import { UseStateEx1 } from './hooks/usestate1';
import { FormUseRef } from './hooks/formvalidity';
import { AddCircle } from './hooks/addcircle';
import { Counter } from './lifecyclemethods/mount';
import Loader from './lifecyclemethods/loader';
import { UpdatePhase } from './lifecyclemethods/updatePhase/render';
import { Unmounting } from './lifecyclemethods/unmounting/unmount';

function ImportBC2()
{
  const greenColor="green"
  return(
    <>
    {/* <FirstClass/>
    <Theme/>
    <ImageAlter/>
    <ApiCall/> */}
    {/* <Header/>
    <BootStrap/>
    <Table/> */}
    {/* <UseStateEx/> */}
    {/* <UseStateEx1/> */}
    {/* <FormUseRef></FormUseRef> */}
    {/* <AddCircle/> */}
    
    {/* <Counter color={greenColor}/> */}
    {/* <Loader/> */}
    {/* <UpdatePhase favColor={greenColor}/> */}
    <Unmounting/>
    </>
  ) 
}
export default ImportBC2