import styles from "./Backstage.module.scss";
import screenshot from "../../assets/screenshot.jpg";
import bant from "../../assets/videos/bant.mp4";
import dolboeb1 from "../../assets/videos/dolboeb1.mp4";
import dolboeb2 from "../../assets/videos/dolboeb2.mp4";
import dolboeb3 from "../../assets/videos/dolboeb3.mp4";
import gifts from "../../assets/videos/gifts.mp4";
const Backstage = () => {
    return (
        <div className={styles.backstageContainer}>
            <div className={styles.backstage}>
                <h3>Бекстейдж</h3>
                <div className={styles.media}>
                    <div className={styles.circles}>
                        <h4>Это у меня в 5 утра горит с того что я неуспеваю</h4>
                        <div className={styles.dolboeb}>
                            <video src={dolboeb1} controls width={200}></video>
                            <video src={dolboeb2} controls width={200}></video>
                            <video src={dolboeb3} controls width={200}></video>
                        </div>
                    </div>

                    <div className={styles.bant}>
                        <h4>А это Эзиз фигачит бантики</h4>
                        <div className={styles.bantEziz}>
                            <img src={screenshot} alt="Screenshot" />
                            <video src={bant} controls></video>
                        </div>
                    </div>
                    <div className={styles.timelapse}>
                        <h4>Финалито</h4>
                        <video src={gifts} controls></video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backstage