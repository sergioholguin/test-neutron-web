import Banner from "../components/Banner";
import {AboutDescription, AboutInfo, AboutVideo} from "../components/About";


const About = () => {
    return (
        <section>
            <Banner section="Quiénes Somos" source="quienes-somos" />
            <AboutDescription />
            <AboutInfo />
            <AboutVideo />
        </section>
    );
};

export default About;
