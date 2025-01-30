import React from 'react';
import { NavLink } from 'react-router';

function UpcomingBatches() {
    const batches = [
        {
            "course": "Data Science",
            "date": "15th July 2021",
            "img": "/img/intro-bg1.jpg",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "course": "Machine Learning",
            "img": "/img/intro-bg1.jpg",
            "date": "20th July 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "course": "Artificial Intelligence",
            "img": "/img/intro-bg1.jpg",
            "date": "25th July 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "course": "Full Stack Development",
            "img": "/img/intro-bg1.jpg",
            "date": "30th July 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "course": "Cyber Security",
            "img": "/img/intro-bg1.jpg",
            "date": "5th August 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "course": "Cloud Computing",
            "img": "/img/intro-bg1.jpg",
            "date": "10th August 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        }
    ];

    return (
        <div id='batches' className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Upcoming Batches</h2>
                    <p>Enroll in our upcoming batches and learn from the best in the industry.</p>
                </div>
            </div>
            <div className='batches'>
                {
                    batches.map((batch) => (
                        <div className='batch' key={batch.course}>
                            <NavLink to={`https://drive.google.com/file/d/${batch.link}/view`} target="_blank">
                                <div className="img-container">
                                    <img src={batch.img} alt={batch.course} />
                                    <div className="overlay">
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </NavLink>
                            <div className="batch-info">
                                <h3>{batch.course}</h3>
                                <a href={`https://drive.google.com/file/d/${batch.link}/view`} target="_blank" rel="noopener noreferrer">
                                    Read More
                                </a>
                                <h4>{batch.date}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default UpcomingBatches;
