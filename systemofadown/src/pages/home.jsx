import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/home.module.css";
import serj from "../assets/serj.png";
import john from "../assets/john.png";
import daron from "../assets/daron.png";
import shavo from "../assets/shavo.png";
import video from "../assets/mainHomeVideo.mp4"

const  membersData = [
  { name: "Serj Tankian", role: "Lead vocals, keyboards", image: serj, alt: "Serj Tankian" },
  { name: "John Dolmayan", role: "Drums", image: john, alt: "John Dolmayan" },
  { name: "Daron Malakian", role: "Lead guitar, vocals", image: daron, alt: "Daron Malakian" },
  { name: "Shavo Odadjian", role: "Bass", image: shavo, alt: "Shavo Odadjian" },
]

const Home = () => {
  return (
    <>
    <Header />
        <section className="videoContainer">
          <video 
            loop
            muted 
            autoPlay 
            playsInline
            src={video}
            className="video"
          />
        </section>
      <main className={styles.main}>
        <section className={styles.members}>
          <h2>Members</h2>
          <div className={styles.cards}>
            {membersData.map((member) => (
              <article key={member.name} className={styles.card}>
                <img src={member.image} alt={member.alt} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </section>


        <section className={styles.quote}>
          <blockquote>
            “Why don’t presidents fight the war? <br />
            Why do they always send the poor?”
          </blockquote>
          <cite>B.Y.O.B - System of a Down</cite>
        </section>

        <section className={styles.cta}>
        <Link to="/historic">
          <button>Know more about</button>
        </Link>
        </section>
        </main>
      <Footer/>
      </>
    );
};

export default Home;