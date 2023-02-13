import React, { useState, useEffect } from 'react';
import styles from './CommentsBar.module.scss';
import commentIcon from '../../assets/icon-comment.png';
import trashIcon from '../../assets/icon-trash.png';
import addIcon from '../../assets/icon-add.png';
import arrowIcon from '../../assets/icon-arrow.png';

type Props = {};

const CommentsBar = (props: Props) => {
  const [open, toggleOpen] = useState(false);
  useEffect(() => {
    console.log('IsOpen:', open);
  }, [open]);

  return (
    <div className={`${styles.bar} ${open && styles.isOpen}`}>
      {open && (
        <div className={styles.commentSection}>
          <textarea placeholder="Enter your comment..." className={styles.textArea} />
          <div className={styles.actionsSection}>
            <button>Gem</button>
            <img src={trashIcon} alt="trash icon" />
          </div>
        </div>
      )}
      <div className={styles.iconsColumn}>
        <div className={styles.upperIcons}>
          <img className={`${styles.icon} ${styles.arrowUp}`} src={arrowIcon} alt="arrow up icon" />
          <div className={styles.commentIcons}>
            <img
              onClick={() => toggleOpen(!open)}
              className={styles.commentIcon}
              src={commentIcon}
              alt="Comment Icon"
            />
            <img className={styles.commentIcon} src={commentIcon} alt="Comment Icon" />
            <img className={styles.commentIcon} src={commentIcon} alt="Comment Icon" />
          </div>
          <img className={styles.icon} src={addIcon} alt="Plus Icon" />
        </div>
        <img className={styles.icon} src={arrowIcon} alt="Plus Icon" />
      </div>
    </div>
  );
};

export default CommentsBar;
