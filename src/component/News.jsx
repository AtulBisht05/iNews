import React, { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState('')


  const capitalizeFirstLetter =(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  

  const updateNews = async () => {
    try{
    props.setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}
    &pageSize=${props.pageSize}`;

    setLoading(true);

    let data = await fetch(url);

    props.setProgress(40);

    let parsedData = await data.json();

    props.setProgress(70);

    setArticles(parsedData.articles);
    setTotalResults(totalResults);
    setLoading(false);

    props.setProgress(100);
    }
    catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title=`iNews- ${props.category} - Top stories`
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page +1}
    &pageSize=${props.pageSize}`;

    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
   
   
  };

  return (
    <>
    {error && <p className="text-danger">{error}</p>}
      <h2 className="text-center" style={{marginTop:'90px'}}>iNews- {capitalizeFirstLetter(props.category)+''} Top  Stories</h2>
      <div className="container">{loading && <Spinner />}</div>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >

        <div className="container my-4 ">
          <div className="row ">
            {articles.map((e) => {
              return (
                <div className="col-md-4 " key={e.url}>
                  <NewsItem
                    title={e.title}
                    imgUrl={e.urlToImage}
                    newsUrl={e.url}
                    author={e.author}
                    source={e.source.name}
                    date={e.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
