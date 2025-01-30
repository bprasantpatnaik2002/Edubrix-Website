import React from 'react'
import { NavLink } from 'react-router';

function Discounts() {
    const coupons = [
        {
            "coupon": "Coupon1",
            "date": "15th July 2021",
            "img": "/img/intro-bg1.jpg",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "coupon": "Coupon2",
            "img": "/img/intro-bg1.jpg",
            "date": "20th July 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "coupon": "Coupon3",
            "img": "/img/intro-bg1.jpg",
            "date": "25th July 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "coupon": "Coupon4",
            "img": "/img/intro-bg1.jpg",
            "date": "30th July 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "coupon": "Coupon5",
            "img": "/img/intro-bg1.jpg",
            "date": "5th August 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        },
        {
            "coupon": "Coupon6",
            "img": "/img/intro-bg1.jpg",
            "date": "10th August 2021",
            "link": "1hAaANQb1WUXP9cN0SSoV9t6iBsUWZlok"
        }
    ];

    return (
        <div id='batches' className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Coupons</h2>
                    <p>Unlock Exclusive Savings with Our Special Coupons!</p>
                </div>
            </div>
            <div className='batches'>
                {
                   coupons.map((coupon) => (
                        <div className='batch' key={coupon.coupon}>
                            <NavLink to={`https://drive.google.com/file/d/${coupon.link}/view`} target="_blank">
                                <div className="img-container">
                                    <img src={coupon.img} alt={coupon.coupon} />
                                    <div className="overlay">
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </NavLink>
                            <div className="batch-info">
                                <h3>{coupon.coupon}</h3>
                                <a href={`https://drive.google.com/file/d/${coupon.link}/view`} target="_blank" rel="noopener noreferrer">
                                    Read More
                                </a>
                                <h4>{coupon.date}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Discounts