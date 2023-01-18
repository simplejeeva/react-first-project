
import './App.css'



export default function App(){
  return(
    <div className="app">
      <Msg
      name="dhoni"
      pic="https://www.jagranimages.com/images/newimg/16052022/16_05_2022-ms-dhoni-global-school_22718499.jpg"
      /> 
      <Msg
      name="vijay"
      pic="https://i.pinimg.com/736x/e4/ac/ff/e4acffae14795389e4dd1fe9614fa3f8.jpg"/>
      <Msg
      name="surya"
      pic="https://images.indianexpress.com/2020/09/suriya1200.jpg"/>
    </div>
  );
}

function Msg({pic,name}){
  return(
    <div>
    <img className='user-pic' src={pic} alt={name}/>
    <h1>
      Hello,<span className="user-name">{name}</span>👏🎉👏
    </h1>
    </div>
  );
}