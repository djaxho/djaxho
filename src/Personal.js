import React, { Component } from 'react'
import './Personal.css';
import img1 from './img/panoramas/stewartisland.JPG';
import img2 from './img/panoramas/iran7.jpg';
import img3 from './img/panoramas/iran4.jpg';
import img4 from './img/panoramas/java.jpg';
import img5 from './img/panoramas/kepler.JPG';
import img6 from './img/panoramas/necropolis.jpg';
import img7 from './img/panoramas/iran6.jpg';
import img8 from './img/panoramas/iran3.jpg';
import img9 from './img/panoramas/newzealand.JPG';

class Personal extends Component {
    render() {
        return (
                <div className="Personal row small-12 columns">
                    <h3>Personal life</h3>
                    <p>
                        I love taking panoramas wherever I go, but there aren't many places to upload them, so I'll do it here -_-
                        <br />
                        I enjoy nerding, surfing, playing music, writing, painting, and sometimes trekking so the photos below will
                        likely consist of those things.
                        <br />
                        <small><em>
                        It's probably pointless for this to be a gallery, so I didn't waste time coding one. If you want to see them in good quality, view this page from a bigger screen.
                        <br /> And yes, I realize the grid on this page is different from the rest of the site, but bigger images look cooler so don't be pedantic.
                        </em></small>
                    </p>
                    <hr />
                    <div className="blog-post">
                        <h4>Rakiura Stewart Island - North West Track</h4>
                        <img className="thumbnail float-center" src={img1} alt="Rakiura Stewart Island"/>
                            <p>
                                Not many people in the world will ever step foot on this beach.
                                It was pretty shocking to see and feel the isolation.
                            </p>
                    </div>
                    <hr/>
                    <div className="blog-post">
                        <h4>Zoroastrian Tower of Silence</h4>
                        <img className="thumbnail float-center" src={img8} alt="Zoroastrian Tower of Silence"/>
                        <p>
                            Towers where the dead were taken by the Zoroastrians.
                        </p>
                    </div>
                    <hr/>
                    <div className="blog-post">
                        <h4>Iran</h4>
                        <img className="thumbnail float-center" src={img2} alt="Iran"/>
                        <p>
                            Seemingly unconventional travel destination but it holds the friendliest
                            people in the world and some of the coolest history.
                        </p>
                    </div>
                    <hr/>
                    <div className="blog-post">
                        <h4>Desert snow storm</h4>
                        <img className="thumbnail float-center" src={img3} alt="Snowy Iran"/>
                        <p>
                            Snow storm in the middle of the Iranian desert.
                        </p>
                    </div>
                    <hr/>
                    <div className="blog-post">
                        <h4>East Java, Indonesia</h4>
                        <img className="thumbnail float-center" src={img4} alt="East Java Indonesia"/>
                        <p>
                            Little town on the coast of east java in indonesia. Beautiful place and great food.
                        </p>
                    </div>
                    <hr/>
                    <div className="blog-post">
                        <h4>New Zealand Hikes</h4>
                        <img className="thumbnail float-center" src={img5} alt="Kepler lake New Zealand"/>
                        <p>
                            A cool lake that you'll come across if you do the kepler hike in New Zealand.
                        </p>
                    </div>
                    <hr/>
                    <div className="blog-post">
                        <h4>Necropolis</h4>
                        <img className="thumbnail float-center" src={img6} alt="Necropolis in Iran"/>
                        <p>
                            Burial tombs of some ancient Iranian figures like Xerxes.
                        </p>
                    </div>
                    <hr/>
                    <div className="blog-post">
                        <h4>Iran again</h4>
                        <img className="thumbnail float-center" src={img7} alt="Iranian historical site"/>
                        <p>
                            Yeah, I have a lot of Iranian photos, because the place is amazing.
                        </p>
                    </div>
                    <hr/>
                    <div className="blog-post">
                        <h4>New Zealand Lake</h4>
                        <img className="thumbnail float-center" src={img9} alt="Kepler lake new zealand"/>
                        <p>
                            Another shot from a lake in New Zealand on the kepler track.
                        </p>
                    </div>
                </div>

        );
    }
}

export default Personal