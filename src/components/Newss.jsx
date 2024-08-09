import React,{useEffect, useState} from 'react'
import axios from 'axios'
import NewsModal from './NewsModal';

const categories=[
    'general',
    'world',
    'business',
    'technology',
    'entertainment',
    'sports',
    'science',
    'health',
    'nation'
]

export default function Newss()
{
    const[headline,setHeadline]=useState(null);
    const[news,setNews]=useState([]);
    const[selectedCategory,setSelectedCategory]=useState('general');
    const[showModal,setShowModal]=useState(false);
    const[selectedArticle,setSelectedArticle]=useState(null);

    useEffect(()=>{
        const fetchNews=async()=>{
            const url= `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&apikey=9c404c552f6102517c9c531e4d8475da`
            const response=await axios.get(url);
            
            const fetchedNews=response.data.articles;

            setHeadline(fetchedNews[0]);
            setNews(fetchedNews.slice(1,7));

            console.log(response);
        } 

        fetchNews();
    },[selectedCategory])

    const handleCategoryClick=(e,category)=>{
        e.preventDefault()
        setSelectedCategory(category)

    }

    const handleArticleClick=(article)=>{
        setSelectedArticle(article);
        setShowModal('true');

        console.log(article);
    }
    return(
        <div className="news-app">
            <div className="news-header">
                <h1 className="logo">News App</h1>
            </div>
            <div className="news-content">
                <nav className="navbar">
                    <h1 className="nav-heading">Categories</h1>
                    <div className="categories">
                        {categories.map((category)=>
                        (<a href="#" className="nav-link" key={category} onClick={(e)=>handleCategoryClick(e,category)}>{category}</a>))}
                    {/* <a href="#" className="nav-link">General</a>
                    <a href="#" className="nav-link">World</a>
                    <a href="#" className="nav-link">Business</a>
                    <a href="#" className="nav-link">Technology</a>
                    <a href="#" className="nav-link">Entertainment</a>
                    <a href="#" className="nav-link">Sports</a>
                    <a href="#" className="nav-link">Science</a>
                    <a href="#" className="nav-link">Health</a>
                    <a href="#" className="nav-link">Nation</a> */}
                    </div>
                </nav>
                <div className="news-section">
                    <div>
                    {headline && (<div className="headline" onClick={()=>handleArticleClick(headline)}>
                        <img src={headline.image} alt={headline.title}/>
                        <h2 className="headline-title">{headline.title}</h2>
                    </div>)}
                    {/* <div className="headline">
                        <img src={headline.image} alt={headline.title}/>
                        <h2 className="headline-title">{headline.title}</h2>
                    </div> */}
                    <div className="news-grid">
                        {news.map((article,index)=>(
                            <div className="news-grid-item" key={index} onClick={()=>handleArticleClick(article)}>
                            <img src={article.image} alt={article.title} />
                            <h3>{article.title}</h3>
                        </div>
                        ))};
                        {/* <div className="news-grid-item">
                            <img src="https://github.com/themewagon/fruitables/blob/main/img/vegetable-item-6.jpg?raw=true" alt="News Img" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>
                        <div className="news-grid-item">
                            <img src="https://github.com/themewagon/fruitables/blob/main/img/vegetable-item-6.jpg?raw=true" alt="News Img" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>
                        <div className="news-grid-item">
                            <img src="https://github.com/themewagon/fruitables/blob/main/img/vegetable-item-6.jpg?raw=true" alt="News Img" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>
                        <div className="news-grid-item">
                            <img src="https://github.com/themewagon/fruitables/blob/main/img/vegetable-item-6.jpg?raw=true" alt="News Img" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>
                        <div className="news-grid-item">
                            <img src="https://github.com/themewagon/fruitables/blob/main/img/vegetable-item-6.jpg?raw=true" alt="News Img" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>
                        <div className="news-grid-item">
                            <img src="https://github.com/themewagon/fruitables/blob/main/img/vegetable-item-6.jpg?raw=true" alt="News Img" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div> */}
                    </div>
                    </div>
                </div>
                <NewsModal show={showModal} article={selectedArticle} onClose={()=>setShowModal(false)}/>
            </div>
            <footer>
                <p className="copyright">
                    <span>News App</span>
                </p>
                <p>&copy; All Rights Reserved.By Code And Create</p>
            </footer>

        </div>
    );
}