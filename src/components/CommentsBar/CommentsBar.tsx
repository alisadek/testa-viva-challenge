import React, { useState, useRef } from 'react';
import styles from './CommentsBar.module.scss';
import commentIcon from '../../assets/icon-comment.png';
import trashIcon from '../../assets/icon-trash.png';
import addIcon from '../../assets/icon-add.png';
import arrowIcon from '../../assets/icon-arrow.png';
import { Comment } from '../../types';
import useOutsideClick from '../../hooks/useOnClickOutside';

type Props = {
  onInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  comments?: Comment[] | null;
  onSubmit: () => void;
  onSelectComment: (comment?: Comment) => void;
  activeComment: Comment | null;
  onAddComment: () => void;
  onDelete: () => void;
};

const MAX_VISIBLE_COMMENTS = 4;
const CommentsBar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollBoundaries, setScrollBoundaries] = useState<{ start: number; end: number }>({
    start: 0,
    end: MAX_VISIBLE_COMMENTS
  });

  const ref = useRef();
  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  const { onInputChange, comments, onSubmit, onDelete } = props;
  const ACTIVE_COMMENTS = comments?.slice(scrollBoundaries.start, scrollBoundaries.end);
  const handleScrollDown = () => {
    if (comments && comments.length > MAX_VISIBLE_COMMENTS) {
      if (
        scrollBoundaries.end <= comments.length &&
        scrollBoundaries.end - scrollBoundaries.start === MAX_VISIBLE_COMMENTS
      ) {
        setScrollBoundaries(prevBoundaries => ({
          end: prevBoundaries.end + 1,
          start: prevBoundaries.start + 1
        }));
      }
    }
  };
  const handleScrollUp = () => {
    if (comments && comments.length > MAX_VISIBLE_COMMENTS) {
      if (scrollBoundaries.end > MAX_VISIBLE_COMMENTS && scrollBoundaries.start > 0) {
        setScrollBoundaries(prevBoundaries => ({
          end: prevBoundaries.end--,
          start: prevBoundaries.start--
        }));
      }
    }
  };
  return (
    <div className={`${styles.bar} ${isOpen && styles.isOpen}`} ref={ref as any}>
      {isOpen && (
        <div className={styles.commentSection}>
          <textarea
            onChange={onInputChange}
            placeholder="Enter your comment..."
            className={styles.textArea}
            value={props.activeComment?.comment || ''}
          />
          <div className={styles.actionsSection}>
            <button onClick={onSubmit}>Gem</button>
            <img
              src={trashIcon}
              alt="trash icon"
              onClick={() => {
                onDelete();
                setIsOpen(false);
              }}
            />
          </div>
        </div>
      )}
      <div className={styles.iconsColumn}>
        <div className={styles.upperIcons}>
          <img
            className={`${styles.icon} ${styles.arrowUp}`}
            src={arrowIcon}
            alt="arrow up icon"
            onClick={handleScrollUp}
          />
          {!!comments?.length && (
            <div className={styles.commentIcons}>
              {ACTIVE_COMMENTS?.map(comment => (
                <img
                  onClick={() => {
                    if (isOpen && props.activeComment?.id === comment.id) {
                      props.onSelectComment(comment);

                      setIsOpen(false);
                      return;
                    }
                    setIsOpen(true);
                    props.onSelectComment(comment);
                  }}
                  className={styles.commentIcon}
                  src={commentIcon}
                  key={comment.id}
                  alt="Comment Icon"
                />
              ))}
            </div>
          )}
          <img
            className={styles.icon}
            src={addIcon}
            alt="Plus Icon"
            onClick={() => {
              setIsOpen(true);
              props.onAddComment();
            }}
          />
        </div>
        <img
          className={styles.icon}
          src={arrowIcon}
          alt="arrow down Icon"
          onClick={handleScrollDown}
        />
      </div>
    </div>
  );
};

export default CommentsBar;
