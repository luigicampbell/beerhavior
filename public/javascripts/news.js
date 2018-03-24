const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('d10143647486436eb3ea50b3c1e7362b');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.everything({
  // sources: 'bbc-news,the-verge,cbc-news',
  q: 'beer',
  language: 'en'
}).then(response => {
  var news = response.articles;
for (i=0; i<10;i++)  {console.log(news[i]);
  console.log(`author: ${news[i].author}`);
  console.log(`title: ${news[i].title}`);
  console.log(`description: ${news[i].description}`);
  console.log(`url: ${news[i].url}`);
  console.log(`urlToImage: ${news[i].urlToimage}`);

}
