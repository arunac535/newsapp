
import React, { Component ,useState,useEffect} from 'react'
import Newitem from './Newitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {

  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(false)
  const [page,setPage]= useState(1)
  const [totalResults,settotalResults]= useState(0)
  const [category,setcategory] = useState("general")

  // async updateNews(){
  //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a36183bd672c4f7ea86b90c9f79f6f5f&page=${page}&pageSize=${props.pageSize}`;
  //   this.setState({loading:true})
  //   let data=await fetch(url)
  //   let parsedData= await data.json()
  //   console.log(parsedData)
  //   this.setState({articles:parsedData.articles,totalArticles:parsedData.totalResults,loading:false})

  // }

  
const updateNews=async()=>{
    props.setProgress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a36183bd672c4f7ea86b90c9f79f6f5f&page=${page}&pageSize=${props.pageSize}`;
    
    setLoading({loading:true})
    let data=await fetch(url)
    let parsedData= await data.json()
    console.log(parsedData)
    setArticles(parsedData.articles)
    setLoading(false)
    settotalResults(parsedData.totalResults)
      props.setProgress(100);
  }

  useEffect(()=>{
    updateNews();
  },[])




  // handlenextclick=async  ()=>{
  //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a36183bd672c4f7ea86b90c9f79f6f5f&page=${this.state.page+1}&pageSize=${props.pageSize}`;
  //   this.setState({loading:true})
  //   let data=await fetch(url)
  //   let parsedData= await data.json()
  //   console.log(parsedData)
  //   this.setState({
  //     page:this.state.page+1,
  //     articles:parsedData.articles,
  //     loading:false
  //   })


  // }
  // handleprevclick=async()=>{
  //   if(this.state.page+1>Math.ceil(this.state.totalArticles/props.pageSize)){

  //   }else{
  //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a36183bd672c4f7ea86b90c9f79f6f5f&page=${this.state.page-1}&pageSize=${props.pageSize}`;
  //   this.setState({loading:true})
  //   let data=await fetch(url)
  //   let parsedData= await data.json()
  //   console.log(parsedData)
  //   this.setState({
  //     page:this.state.page-1,
  //     articles:parsedData.articles,
  //     loading:false

  //   })
  // }

  // }
  const fetchMoreData = async() => {
    
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a36183bd672c4f7ea86b90c9f79f6f5f&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    setLoading({loading:true})
    let data=await fetch(url)
    let parsedData= await data.json()
    console.log(parsedData)
    setArticles(articles.concat(parsedData.articles))
    setLoading(false)
    settotalResults(parsedData.totalResults)

  };








    return (
      <>
        <h2 className="text-center mx-5 my-10" style={{marginTop:'90px'}}>Newsify - Top {props.category} Headlines</h2>
        {/* {this.state.loading && <Spinner/>} */}
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className='container my-5'>
        <div className="row">
        {articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <Newitem  title={element.title?element.title:""} description={element.description?element.description.slice(0,120):" "} imageurl={element.urlToImage?element.urlToImage:"https://images.macrumors.com/t/XdaV_-3VoCGLtnbfoJldxfrJlPc=/1600x/article-new/2022/09/f1662570472.jpg"} 
          newsurl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} 
          apiKey={element.apiKey} source={element.source.name?element.source.name:"Wired"}/>
          </div>
        })}

        </div>
        </div>
        </InfiniteScroll>
      </>
    )

}

export default News


News.defaultProps={
  country:"in",
  pageSize:8,
  category:"business",
  totalResults:0,
}
News.propTypes={
  contry:PropTypes.string,
  pageSize:PropTypes.number

}

