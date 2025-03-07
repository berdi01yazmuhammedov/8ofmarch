import React, { useState } from 'react';
import styles from "./Footer.module.scss";
import instagramIcon from "../../assets/instagram.svg";
const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <footer className={styles.footer}>
      <a

        onClick={openModal}
        className={styles.telegramLink}
      >
        нюдсы
      </a>
      <p className={styles.signature}>
        П.С. Если ты смеешься – значит, весна уже в твоем сердце!
      </p>
      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <p className={styles.modalText}>ай-ай-ай сестра, ццц, я же ведь тоже чей то брат🙄</p>
            <div className={styles.action}>
              <button className={styles.closeButton} onClick={closeModal}>Закрыть</button>
              <a className={styles.link} href="https://t.me/bieerdy" target="_blank" rel="noopener noreferrer">
                ладно, вот
              </a>
            </div>
          </div>
        </div>
      )}
      <div className={styles.links}>
        <a href="  https://www.instagram.com/why_berdy/" target="_blank"><img src={instagramIcon} alt="Instagram icon" /></a>
      </div>

    </footer>
  );
};

export default Footer;
