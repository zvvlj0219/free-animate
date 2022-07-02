import { Link } from 'react-router-dom'
import MiniFadeIn from '../components/MiniFadeIn'
import MiniParallax from '../components/MiniParallax'
import DeviceImage from '../components/DeviceImage'
import '../scss/home.scss'

const Home = () => {
    return (
        <div className='home'>
            <div className='section a'>
                <div className='describe a'>
                    <div className='title'>
                        <div>Free</div>
                        <div>Animate</div>
                    </div>
                    <div className='commentary'>
                        You can create unique animation with simple settings.
                        <br />
                        There are an infinite number of combinations.
                    </div>
                    <div className='link'>
                        <Link to='/edit_animate'>
                            Get Start →
                        </Link>
                    </div>
                </div>
                <DeviceImage />
            </div>
            <div className='spacer' />
            <div className='section b'>
                <div className='describe b'>
                    <div>"Makes srcolling fun"</div>
                    <div className='commentary'>
                        Choose from "Fade-In" and "Parallax" animations and set the text
                        and images yourself.
                    </div>
                    <div className='link'>
                        <Link to='/edit_animate'>
                            Get Start →
                        </Link>
                    </div>
                </div>
                <div className='mini_fadein'>
                    <h3>Fade-In</h3>
                    <MiniFadeIn />
                </div>
                <div className='mini_parallax'>
                    <h3>Parallax</h3>
                    <MiniParallax />
                </div>
            </div>
            <div className='link_button'>
                <Link to='/edit_animate'>
                    Get Start
                </Link>
            </div>
        </div>
    )
}

export default Home
