import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Robot from './component/Robot';
import { useState } from 'react';

function App() {

  const [search ,setSearch] = useState("")
  const [image ,setImage] = useState([])
  const [data ,setData] = useState([])

  return (
    <div className ="container1">
      <div>
           <Header search={search} setSearch={setSearch} image={image}setImage={setImage}  data={data} setData={setData}/>
           </div>

           <div>
             <Robot search={search} setSearch={setSearch} image={image}setImage={setImage} data={data} setData={setData}/>
           </div>
    </div>
  );
}

export default App;
