import React from 'react';
import leftLogo from '../public/image/welcome-left.png';
import centerLogo from '../public/image/to-do.png';
import rightLogo from '../public/image/welcome-right.png';
const HomePage = () => {

    return (
        <div className="home">
            <div className="home__content">
                <div className="home__content__left">
                    <img src={leftLogo} alt='left logo'/>
                </div>
                <div className="home__content__centre">
                    <div className="home__content__centre__logo">
                        <img src={centerLogo} alt='center logo'/>
                    </div>
                    <div className="home__content__centre__title">
                        <span>My To Do</span>
                        <p>Start planning your schedule together with My To Do now</p>
                    </div>
                    <div className="home__content__centre__activity">
                        <button type="button" className="btn btn-primary">Start</button>
                    </div>
                </div>
                <div className="home__content__right">
                    <img src={rightLogo} alt='right logo'/>
                </div>
            </div>
            <footer className="home__footer">

            </footer>
        </div>
    )
}

export default HomePage;