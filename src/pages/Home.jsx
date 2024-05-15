import Banner from "../shared/Banner";
import Faq from "../shared/Faq";
import Features from "../shared/Features";
import SomeAssignments from "../shared/SomeAssignments";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <SomeAssignments></SomeAssignments>
            <Faq></Faq>
        </div>
    );
};

export default Home;