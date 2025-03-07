import React, { useState, useRef, useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import Card from '../../components/Card/Card';
import styles from "./Womansday.module.scss";
import Header from '../../components/Header/Header';
import Quiz from '../../components/Quiz/Quiz';
import Congrats from '../../components/Congrats/Congrats';
import Smile from '../../components/Smile/Smile';
import Footer from '../../components/Footer/Footer';
import Backstage from '../../components/Backstage/Backstage';


function Womansday() {
    const [startQuiz, setStartQuiz] = useState(false);
    const [confetti, setConfetti] = useState(false);
    const [noCount, setNoCount] = useState(0);
    useEffect(() => {
        setConfetti(true);
        const timer = setTimeout(() => {
            setConfetti(false);
        }, 10000);
        return () => clearTimeout(timer);
    }, []);
    const handleActionYes = () => {
        setStartQuiz(true);
        setNoCount(0);
    }
    const handleActionNo = () => {
        setStartQuiz(false);
        setNoCount(prev => prev + 1);

    }
    return (
        <div className={styles.womansday}>
            <Header />
            {confetti && <ReactConfetti width={window.innerWidth} height={window.innerHeight} />}
            {startQuiz ? <Quiz /> : <div className={styles.quizAction}>Хочешь узнаю кто ты?
                <div className={styles.action}>
                    <button onClick={handleActionYes}>Да 😊</button>
                    {noCount >= 9 ? " " : <button onClick={handleActionNo}>Нет 😒</button>}
                </div>
            </div>}
            {(noCount === 1 || noCount === 2) && <p className={styles.no}>Как хочешь 🤧...</p>}
            {(noCount === 3 || noCount === 4) && <p className={styles.no}>Не жми так много пожалуйста 😣</p>}
            {(noCount === 5 || noCount === 6) && <p className={styles.no}>Да я понял-понял 🙄</p>}
            {(noCount === 7 || noCount === 8) && <p className={styles.no}> Может хватит? 😤</p>}
            <Congrats />
            <Smile />
            <Backstage />
            <Footer />
        </div>
    )
}

export default Womansday;
