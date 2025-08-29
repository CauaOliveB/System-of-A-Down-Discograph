import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/historic.module.css";
import Background from "../assets/historicBackground.png"
import SOAD from "../assets/SOAD.png"


const Historic = () => {
return (
    <>
    <Header />
    <img src={SOAD} alt="SOAD Group Image" className={styles.SOADGroup} />
    <img src={Background} className={styles.background}/>
    
    <main>
    <section className={styles.informationBlock}>
        <h2>History & Social Struggle</h2>
        <p>
            System of a Down was formed in Los Angeles between 1994 and 1998 by four Armenian-descendant musicians who immediately used their platform to raise awareness about the Armenian Genocide. After gaining attention in underground clubs, they signed with producer Rick Rubin and released their debut album in 1998, introducing an aggressive and experimental new sound with songs like Sugar and Spiders.
            Their breakthrough came with Toxicity (2001), which propelled them to worldwide fame thanks to anthems like Chop Suey!, Toxicity, and Aerials. Released just before 9/11, some of their politically charged songs faced censorship, reinforcing their image as a band unafraid to challenge authority.
            Between 2004 and 2006, System of a Down became deeply involved in activism, opposing the Iraq War, demanding recognition of the Armenian Genocide, and supporting humanitarian causes in Armenia. Despite going on hiatus in 2006 due to internal conflicts, they reunited in 2010 and have since maintained cult status. In 2020, they released new songs, Protect the Land and Genocidal Humanoidz, in support of Armenia during the Nagorno-Karabakh conflict.
        </p>
        <blockquote className={styles.quote}>
            “System of a Down was never just about music. They became a voice against war, inequality, and historical denial, using their art as a form of resistance.”
        </blockquote>
    </section>
    </main>


    <Footer/>
    </>
    
);
};
export default Historic;