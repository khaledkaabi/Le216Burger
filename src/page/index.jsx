import FooterContext from "../components/FooterContext";
import FooterMedia from "../components/FooterMedia";
import ImageListSection from "../components/ImageList";
import SectionHome from "../components/SectionHome";


const Home = () => {

    return (
        <>
            <SectionHome />
            <ImageListSection />
            <FooterContext />
            <FooterMedia />
        </>
    )
}
export default Home;