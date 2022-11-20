import './App.css';
import { useState  } from "react";
import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';



function App() {

  const [words, setWords] = useState(null);

  const loadWords = () =>{
    // A function to fetch the all the data
    fetch("http://localhost:8080/api/tweets")
    .then((response) => response.json())
    .then((tweets) => {
          setWords(tweets);
        });
  }

  const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);

  return (
    <div className="App">
      <h1>Clouds with Twitter</h1>
      <button type="Submit" onClick={loadWords}>Create Cloud</button>
      {!words ? (<h3>Thank you for visiting our project</h3>) : (<WordCloud data={words}
      width={400}
      height={400}
      font="Times"
      //fontSize={(word) => Math.log10(word.value) * 5}
      fontSize={(word) => (word.value/2000) * 32}
      rotate={(word) => word.value % 45}
      padding={5}
      random={Math.random}
      fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
      onWordClick={(event, d) => {
        console.log(`onWordClick: ${d.text}`);
      }}/>)}
      
    </div>
  );
}

export default App;
