import React from 'react'
import '../App.css';


export default function About() {
    return (
        <div className="aboutPage">
            <div className="jumbotron text-center">
                <h1 className="aboutPageHeader">My First Bootstrap Page</h1>
                <p>Resize this responsive page to see the effect!</p> 
            </div>
  
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 ">
                        <h3 className="aboutPageHeader">Column 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                        <div className="col-sm-4">
                        <h3 className="aboutPageHeader">Column 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                        <div className="col-sm-4">
                        <h3 className="aboutPageHeader">Column 3</h3>        
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
