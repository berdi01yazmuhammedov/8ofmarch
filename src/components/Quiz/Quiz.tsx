import React, { useState } from 'react';
import Question from '../Question/Question';
import styles from "./Quiz.module.scss";
import firstMeme from "../../assets/quiz-images/1.jpg";
import secondMeme from "../../assets/quiz-images/2.jpg";
import thirdMeme from "../../assets/quiz-images/3.jpg";
import fourthMeme from "../../assets/quiz-images/4.jpg";
import sticker1 from "../../assets/result/sticker1.webp";
import sticker2 from "../../assets/result/sticker2.webp";
import sticker3 from "../../assets/result/sticker3.webp";
import sticker4 from "../../assets/result/sticker4.webp";
import sticker5 from "../../assets/result/sticker5.webp";
import sticker6 from "../../assets/result/sticker6.webp";
import sticker7 from "../../assets/result/sticker7.webp";
import sticker8 from "../../assets/result/sticker8.webp";
import sticker9 from "../../assets/result/sticker9.webp";

interface Option {
  label: string;
  value: string;
}

interface QuestionType {
  id: number;
  text: string;
  options: Option[];
}

const quizQuestions: QuestionType[] = [
  {
    id: 1,
    text: 'Какое ты время года?',
    options: [
      { label: 'Весна', value: 'spring' },
      { label: 'Лето', value: 'summer' },
      { label: 'Осень', value: 'autumn' },
      { label: 'Зима', value: 'winter' },
    ],
  },
  {
    id: 2,
    text: 'Какие у тебя любимые цветы?',
    options: [
      { label: 'Розы', value: 'rose' },
      { label: 'Лилии', value: 'lily' },
      { label: 'Орхидеи', value: 'orchid' },
      { label: 'Тюльпаны', value: 'tulip' },
      { label: 'Пионы', value: 'peony' },
      { label: 'Герберы', value: 'gerbera' },
      { label: 'Сакуры', value: 'sakura' },
    ],
  },
  {
    id: 3,
    text: 'Какой ты мем?',
    options: [
      { label: firstMeme, value: 'shrek' },
      { label: secondMeme, value: 'ospa' },
      { label: thirdMeme, value: 'hihis' },
      { label: fourthMeme, value: 'chengizkhan' },
    ],
  },
  {
    id: 4,
    text: 'Какой второй язык ты учишь?',
    options: [
      { label: 'Испанский', value: 'spanish' },
      { label: 'Немецкий', value: 'german' },
      { label: 'Китайский', value: 'chinese' },
      { label: 'Английский', value: 'english' },
      { label: 'Туркменский', value: 'turkmen' },
    ],
  },
  {
    id: 5,
    text: 'Любишь осипову?',
    options: [
      { label: 'НЕТ', value: 'no' },
    ],
  },
  {
    id: 6,
    text: 'В твоем имени есть буквы?',
    options: [
      { label: 'Да', value: 'yes' },
      { label: 'Нет', value: 'no' },
    ],
  },
  {
    id: 7,
    text: 'Кто лучший рэпер?',
    options: [
      { label: 'Эминем.', value: 'eminem' },
    ],
  },
];

const STICKERS = [sticker1, sticker2, sticker3, sticker4, sticker5, sticker6, sticker7, sticker8, sticker9];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [resultSticker, setResultSticker] = useState<number>(-1);

  const randomizeStickers = () => {
    const randomSticker = Math.floor(Math.random() * STICKERS.length);
    return randomSticker;
  };
  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
  
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const randomSticker = Math.floor(Math.random() * STICKERS.length);
      setResultSticker(randomSticker); 
      setShowResult(true);
    }
  };
  

  const renderResult = () => {
    return (
      <div className={styles.result}>
        <h2>Я угадал, кто ты!</h2>
        ТЫ - {resultSticker !== -1 && <img src={STICKERS[resultSticker]} alt="Sticker" />}
      </div>
    );
  };
  

  return (
    <div className={styles.quiz}>
      {showResult ? (
        renderResult()
      ) : (
        <Question
          text={quizQuestions[currentQuestion].text}
          options={quizQuestions[currentQuestion].options.map(option => ({
            label: quizQuestions[currentQuestion].text === "Какой ты мем?"
              ? <img src={option.label} alt="Meme" />
              : option.label,
            value: option.value,
          }))}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
