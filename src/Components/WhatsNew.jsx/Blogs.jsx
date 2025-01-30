import React from 'react'
import { NavLink } from 'react-router';

function Blogs() {
    const blogs = [
        {
            "blog": "Blog1",
            "date": "15th July 2021",
            "img": "/img/intro-bg1.jpg",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "blog": "Blog2",
            "img": "/img/intro-bg1.jpg",
            "date": "20th July 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "blog": "Blog3",
            "img": "/img/intro-bg1.jpg",
            "date": "25th July 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "blog": "Blog4",
            "img": "/img/intro-bg1.jpg",
            "date": "30th July 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "blog": "Blog5",
            "img": "/img/intro-bg1.jpg",
            "date": "5th August 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "blog": "Blog6",
            "img": "/img/intro-bg1.jpg",
            "date": "10th August 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        }
    ];

    return (
        <div id='batches' className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Blogs</h2>
                    <p>Insights & Ideas: Explore Our Latest Blogs.</p>
                </div>
            </div>
            <div className='batches'>
                {
                    blogs.map((blog) => (
                        <div className='batch' key={blog.blog}>
                            <NavLink to={`https://drive.google.com/file/d/${blog.link}/view`} target="_blank">
                                <div className="img-container">
                                    <img src={blog.img} alt={blogs.blog} />
                                    <div className="overlay">
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </NavLink>
                            <div className="batch-info">
                                <h3>{blog.blog}</h3>
                                <a href={`https://drive.google.com/file/d/${blog.link}/view`} target="_blank" rel="noopener noreferrer">
                                    Read More
                                </a>
                                <h4>{blog.date}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Blogs