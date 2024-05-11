import bannerImg from '../assets/banner.png'
import bannerBack from '../assets/bannerBack.jpg'

const Banner = () => {
    return (
        <div className="hero h-[80vh]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='relative'>
                <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl z-10" />
                <img src={bannerBack} className="max-w-sm rounded-lg shadow-2xl absolute left-6 top-36 z-[-20]" />
                </div>
                <div className='md:w-1/2'>
                    <span className='text-orange-700 font-semibold'>Learn together</span>
                    <h1 className="text-5xl font-bold text-yellow-600">Online Group Study Sessions!</h1>
                    <p className="py-6">Join our online group study sessions for collaborative learning wherever you are. Connect with peers, share knowledge, and excel together.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;