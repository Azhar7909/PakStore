import React from 'react'
import '../../src/App.css';
import Banner0 from '../Assets/Banners/apple-iphone-smartphone-desk-4158.jpg';
import Banner1 from '../Assets/Banners/close-up-of-camera-over-black-background-306763.jpg';
import Banner2 from '../Assets/Banners/person-holding-black-android-smartphone-861126.jpg';
import Banner3 from '../Assets/Banners/person-holding-silver-iphone-6-taking-photo-105254.jpg';
import Banner4 from '../Assets/Banners/silver-iphone-x-beside-succulent-plant-1069798.jpg';
import Banner5 from '../Assets/Banners/space-gray-iphone-8-818043.jpg';
export default function Banner() {
    return (
        <div className="bannerContainer">
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Banner0} alt="Banner0" width="1100" height="500" />
                        <div className="carousel-caption textBannerColor">
                            <h3>Apple Iphone</h3>
                            <p>We love the Apple!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner1} alt="Banner01" width="1100" height="500" />
                        <div className="carousel-caption textBannerColor">
                            <h3>Apple Iphone</h3>
                            <p>We love the Apple!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner2} alt="Banner02" width="1100" height="500" />
                        <div className="carousel-caption textBannerColor">
                            <h3>Apple Iphone</h3>
                            <p>We love the Apple!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner3} alt="Banner03" width="1100" height="500" />
                        <div className="carousel-caption textBannerColor">
                            <h3>Apple Iphone</h3>
                            <p>We love the Apple!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner4} alt="Banner04" width="1100" height="500" />
                        <div className="carousel-caption textBannerColor">
                            <h3>Apple Iphone</h3>
                            <p>We love the Apple!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner5} alt="Banner05" width="1100" height="500" />
                        <div className="carousel-caption textBannerColor">
                            <h3>Apple Iphone</h3>
                            <p>We love the Apple phone!</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>

    )
}
