import React,{useState} from 'react';
import Search from './Components/Search';
import Results from './Components/Results';
import Moreinfo from './Components/moreinfo';
import axios from "axios";
function App() {
  const apiurl = "https://www.omdbapi.com/?apikey=dfe6d885";
  const [state,setState] = useState({
    s:"",//search query
    results:[],
    selected:{}
  });
  const search = (e)=>{
    if(e.key==="Enter"){
      axios(apiurl+"&s="+state.s).then(({data})=>{
        console.log(data);
        let resluts=data.Search;
        console.log(data.Search);
        setState(prevState=>{
          return {...prevState,results:resluts}
        })
      });
    }
  }
  const handleInput=(e)=>{
    let s=e.target.value;
    setState(prevState=>{
      return {...prevState,s:s}
    });
    // console.log(state.s);
  }
  const openPopup=id=>{
    axios(apiurl+"&i="+id).then(({data})=>{
      let result=data;
      // console.log(result);
      setState(prevState=>{
        return {...prevState,selected:result}
      });
    });
  }
  const closePop=()=>{
    setState(prevState=>{
      return {...prevState,selected:{}}
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Binge What?</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results} openPopup={openPopup}/>
        {(typeof state.selected.Title != "undefined")?<Moreinfo selected={state.selected} closePopup={closePop}/>:false}
      </main>
    </div>
  );
}

export default App;
