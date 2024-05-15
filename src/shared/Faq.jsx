import { Fade } from 'react-awesome-reveal';
import faqImg from '../assets/faq.png';

const Faq = () => {
    return (
        <div className='mt-16'>
            <div className='text-center mb-14'>
            <h2 className='text-4xl font-bold text-yellow-600 mb-2'>FAQ</h2>
            <Fade>
            <p className='text-slate-600'>Have any questions? Here you will find the answer most valued by our partners, along with access to step-by-step instructions and support</p>
            </Fade>
            </div>
            <div className='flex flex-col md:flex-row gap-5'>
                <div>
                <img src={faqImg} alt="" />
            </div>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                    How does the online group study work?
                    </div>
                    <div className="collapse-content">
                        <p>Our platform facilitates real-time collaboration among students. You can join existing study groups or create your own. Once in a group, you can discuss topics, share resources, and work together on assignments or projects.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    Is the platform accessible on all devices?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, our website is optimized for use on desktops, laptops, tablets, and smartphones. You can participate in group study sessions from any device with an internet connection.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    How do I join a study group?
                    </div>
                    <div className="collapse-content">
                        <p>Simply browse through the available study groups on our platform and join the ones that match your interests or academic needs. You can also send invitations to friends or classmates to join your study group.</p>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Faq;