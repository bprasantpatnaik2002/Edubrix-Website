import React from 'react'
import { NavLink } from 'react-router';

function NewsUpdate() {
    const newsUpdate = [
        {
            "news": "News1",
            "img": "/img/intro-bg1.jpg",
            "date": "15th July 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "news": "News2",
            "img": "/img/intro-bg1.jpg",
            "date": "20th July 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "news": "News2",
            "date": "25th July 2021",
            "img": "/img/intro-bg1.jpg",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "news": "News3",
            "img": "/img/intro-bg1.jpg",
            "date": "30th July 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "news": "News4",
            "img": "/img/intro-bg1.jpg",
            "date": "5th August 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "news": "News5",
            "img": "/img/intro-bg1.jpg",
            "date": "10th August 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        }
    ];

    return (
        <div id='batches' className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>News & Update</h2>
                    <p>Stay Informed, Stay Ahead: Latest News & Updates!</p>
                </div>
            </div>
            <div className='batches'>
                {
                    newsUpdate.map((news)=>(
                        <div className='batch' key={news.news}>
                            <NavLink to={`https://drive.google.com/file/d/${news.link}/view`} target="_blank">
                                <div className="img-container">
                                    <img src={news.img} alt={news.news} />
                                    <div className="overlay">
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </NavLink>
                            <div className="batch-info">
                                <h3>{news.news}</h3>
                                <a href={`https://drive.google.com/file/d/${news.link}/view`} target="_blank" rel="noopener noreferrer">
                                    Read More
                                </a>
                                <h4>{news.date}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default NewsUpdate