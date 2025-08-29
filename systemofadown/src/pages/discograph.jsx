import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/discograph.module.css';
import soadLiveImage from '../assets/soadLive.png';
import chopSueyVideo from '../assets/chopsuey.png';
import aerialsVideo from '../assets/aerials.png';
import lonelyDayVideo from '../assets/lonelyDay.png';

const Discograph = () => {
 return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.musicHeader}>
          <h1>SYSTEM OF A DOWN</h1>
          <img src={soadLiveImage} alt="System of a Down Live Concert" className={styles.soadLive} />
          <div className={styles.quoteBlock}>
            <h2>Music</h2>
            <p>
              "SOAD's music is a mix of metal, punk, Armenian folk, and experimental
              sounds. Their lyrics cover war, politics, inequality, and human
              struggles, always with intensity and emotion."
            </p>
          </div>
        </div>

        <section className={styles.videoSection}>
          <div className={styles.videoItem}>
            <iframe width="460" height="218" src="https://www.youtube.com/embed/CSvFpBOe8eY?si=APlPM7kYqPZMxwM6" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen frameborder="0"></iframe>
            <div className={styles.videoInfo}>
              <h3>System Of A Down - Chop Suey! (Official HD Video)</h3>
              <p>1.4 Bi Views • At 15 years ago</p>
            </div>
          </div>
          <div className={styles.videoItem}>
            <iframe width="420" height="218" src="https://www.youtube.com/embed/L-iepu3EtyE?si=wM7EabO8bx6YpgpJ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen frameborder="0"></iframe>
            <div className={styles.videoInfo}>
              <h3>System Of A Down - Aerials (Official HD Video)</h3>
              <p>517 Mi Views • At 15 years ago</p>
            </div>
          </div>
          <div className={styles.videoItem}>
            <iframe width="460" height="218" src="https://www.youtube.com/embed/DnGdoEa1tPg?si=qnW96lgQ7EZCBwPr" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen frameborder="0"></iframe>
            <div className={styles.videoInfo}>
              <h3>System Of A Down - Lonely Day (Official HD Video)</h3>
              <p>423 Mi Views • At 15 years ago</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Discograph;