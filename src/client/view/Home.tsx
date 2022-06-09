import MiniFadeIn from '../components/MiniFadeIn'
import MiniParallax from '../components/MiniParallax'

const Home = () => {
    return (
        <div className='home'>
            <h1>this is home</h1>
            <MiniFadeIn />
            <MiniParallax />
            <div style={{ height: '500px', background: 'lightgray' }} />
        </div>
    )
}

export default Home
