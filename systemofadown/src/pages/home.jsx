import Header from "../components/header";
import Footer from "../components/footer"
import styles from "../styles/home.module.css";
import serj from "../assets/serj.png";
import john from "../assets/john.png";
import daron from "../assets/daron.png";
import shavo from "../assets/shavo.png";

const Home = () => {
  return (
    <>
    <Header />
        <main className={styles.main}>

          <section className={styles.hero}>
            <video 
            src="/mainHomeVideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={styles.video}
            ></video>
          </section>

          <section className={styles.members}>
            <h2>Members</h2>
            <div className={styles.cards}>
              <article className={styles.card}>
                <img src={serj} alt="Serj Tankian" />
                <h3>Serj Tankian</h3>
                <p>Lead vocals, keyboards</p>
              </article>

              <article className={styles.card}>
                <img src={john} alt="John Dolmayan" />
                <h3>John Dolmayan</h3>
                <p>Drums</p>
              </article>

              <article className={styles.card}>
                <img src={daron} alt="Daron Malakian" />
                <h3>Daron Malakian</h3>
                <p>Lead guitar, vocals</p>
              </article>

              <article className={styles.card}>
                <img src={shavo} alt="Shavo Odadjian" />
                <h3>Shavo Odadjian</h3>
                <p>Bass</p>
              </article>
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
            <button>Know more about</button>
          </section>
        </main>
      <Footer/>
      </>
    );
};

export default Home;