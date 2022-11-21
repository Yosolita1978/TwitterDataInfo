import tweets from './tweets.js';
import { countTweets, grabTweets, stopWords, createObj, createTemplate } from './textdata.js';
import express from 'express';
import cors  from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My template ExpressJS' });
    //res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
  });


// creates an endpoint for the route /api/tweets
app.get('/api/tweets', async (req, res) => {
    let tweetsArray = grabTweets(tweets);
    let cleanWords = stopWords(tweetsArray);
    let dicTweets = createObj(cleanWords);
    const tweetsData = createTemplate(dicTweets);
    tweetsData.sort((a, b) => b.value - a.value);
    res.json(tweetsData.slice(0, 2500));
    //res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
  });


  // console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
