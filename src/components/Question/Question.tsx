import React, { JSX, useState } from 'react';
import styles from "./Question.module.scss";
import meme from "../../assets/quiz-images/мемы.jpg";

interface Option {
  label: string | JSX.Element;
  value: string;
}

interface QuestionProps {
  text: string;
  options: Option[];
  onAnswer: (value: string) => void;
}

const Question: React.FC<QuestionProps> = ({ text, options, onAnswer }) => {
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const [canProceed, setCanProceed] = useState(true);  // Новый стейт, чтобы блокировать переход

  const handleClick = (value: string) => {
    if (value === "turkmen" && canProceed) {
      setDisabled(true);
      setMessage("ДА ТЫ ЧТО, НЕУЖЕЛИ");

      // Блокируем переход, пока не выбрали другой вариант
      setCanProceed(false);

      setTimeout(() => {
        setMessage("");
        setDisabled(false);
        setCanProceed(true);  // Снимаем блокировку после 2 секунд
      }, 2000);
    } else {
      onAnswer(value);
    }
  };

  return (
    <div className={styles.question}>
      <h2>{text}{text === "Какой ты мем?" && <img src={meme} alt="мемы" />}</h2>

      {message && <p className={styles.message} style={{ fontSize: "2rem", color: "red" }}>{message}</p>} {/* Увеличиваем размер сообщения */}

      <ul style={text === "Какой ты мем?" ? { flexDirection: "row" } : undefined}>
        {options.map((option) => (
          <li key={option.value}>
            <button
              onClick={() => handleClick(option.value)}
              disabled={disabled && option.value === "turkmen"}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
