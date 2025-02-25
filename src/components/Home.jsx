import Banner from "./banner/Banner";
import ExtraSection1 from "./ExtraSection1";
import ExtraSection2 from "./ExtraSection2";
import LatestVisa from "./LatestVisa";

const Home = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Banner></Banner>
            <LatestVisa></LatestVisa>
            <ExtraSection1></ExtraSection1>
            <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default Home;