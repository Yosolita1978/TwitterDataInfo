import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { useState  } from "react";
import Button from 'react-bootstrap/Button';
import Spinner from './spinner';

const MyWordCloud = () =>{

    const [words, setWords] = useState(null);
    const [loading, setLoading] = useState(false);

  const loadWords = () =>{
    setLoading(true);
    // A function to fetch the all the data
    fetch("http://localhost:8080/api/tweets")
    .then((response) => response.json())
    .then((tweets) => {
          setWords(tweets);
          setLoading(false);
        });
  }

  const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);


    return (
        <div>
        <h1>Clouds with Twitter</h1>
      <Button variant="info" onClick={loadWords}>Generate Cloud</Button>
      {loading ? <Spinner/> : null}
      {!words ? (null) : (<WordCloud data={words}
      width={400}
      height={400}
      font="Times"
      fontSize={(word) => (word.value/2000) * 32}
      rotate={(word) => word.value % 45}
      padding={5}
      random={Math.random}
      fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
      onWordClick={(event, d) => {
        console.log(`onWordClick: ${d.text}`);
      }}/>)}
     </div>
    )
}

export default MyWordCloud;