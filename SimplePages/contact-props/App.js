import React from "react"

/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

function App() {
    return (
        <div className="contacts">
        
            <div className="contact-card">
                <img src="./images/cat1.png"/>
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <img src="./images/cat5.png" />
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img src="./images/cat6.png" />
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src="./images/cat2.png"/>
                <h3>Fluffykins</h3>
                <div className="info-group">
                    <img src="./images/cat5.png" />
                    <p>(212) 555-2345</p>
                </div>
                <div className="info-group">
                    <img src="./images/cat6.png" />
                    <p>fluff@me.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src="./images/cat3.png"/>
                <h3>Felix</h3>
                <div className="info-group">
                    <img src="./images/cat5.png" />
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img src="./images/cat6.png" />
                    <p>thecat@hotmail.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src="./images/cat4.png"/>
                <h3>Pumpkin</h3>
                <div className="info-group">
                    <img src="./images/cat5.png" />
                    <p>(0800) CAT KING</p>
                </div>
                <div className="info-group">
                    <img src="./images/cat6.png" />
                    <p>pumpkin@scrimba.com</p>
                </div>
            </div>
            
        </div>
    )
}

export default App