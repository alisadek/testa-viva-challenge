import React, { useEffect, useState } from 'react';
import { useDocuments } from '../../hooks/documents.hook';
import { Comment, Document } from '../../types';
import axios from 'axios';
import Card from '../Card/Card';
import ParagraphCard from '../ParagraphCard/ParagraphCard';
import TabsBar from '../TabsBar/TabsBar';
import styles from './HomePage.module.scss';
import CommentsBar from '../CommentsBar/CommentsBar';
import { useComments, useCommentsMutation } from '../../hooks/comments.hook';

type Props = {};
const COMMENTS = ['mido', 'zizo', 'dido', 'fido', 'kiko'];
const HomePage = (props: Props) => {
  const { data: documents, isLoading, error } = useDocuments();
  const [activeDocument, setActiveDocument] = useState<Document | null | undefined>(null);
  const [mode, setMode] = useState<'create' | 'update' | null>(null);
  const [activeComment, setActiveComment] = useState<Partial<Comment> | null>(null);
  const { add, update, remove } = useCommentsMutation();
  const { data: commentsData, isLoading: isCommentsLoading, error: commentsError } = useComments();
  const [comments, setComments] = useState<Partial<Comment>[] | null>(null);

  const handleCommentTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    const updatedComment = { ...activeComment, comment: value };
    setActiveComment(updatedComment);
    const filteredComments = comments?.filter(comment => comment.id !== activeComment?.id);
    const newComments = [...(filteredComments as Comment[]), updatedComment];
    setComments(newComments);
  };
  const handleSubmit = () => {
    const creationDate = new Date();
    if (mode === 'create') {
      if (activeComment)
        add.mutate({
          comment: activeComment.comment,
          author: 'Ali Sadek',
          created: creationDate,
          document: activeDocument?.id.toString()
        });
    }
    if (mode === 'update') {
      if (activeComment)
        update.mutate({
          id: activeComment.id,
          comment: activeComment.comment,
          author: 'Ali Sadek',
          created: creationDate,
          document: activeComment.document
        });
    }
  };
  const handleTabChange = (selectedId: number) => {
    const currentDocument = documents?.find(doc => doc.id === selectedId);
    setActiveComment(null);
    if (currentDocument) setActiveDocument(currentDocument);
  };
  const handleSelectComment = (comment?: Partial<Comment>) => {
    setMode('update');
    if (activeDocument && comment) setActiveComment(comment);
  };
  const handleAddComment = () => {
    const date = new Date();
    setMode('create');
    if (activeDocument) {
      const newComment = {
        id: Math.floor(Math.random() * 10 * Date.now()),
        author: 'Ali Sadek',
        document: activeDocument.id.toString(),
        created: date
      };
      setActiveComment(newComment);
      setComments(prevComments => [...(prevComments as any), newComment]);
    }
  };

  useEffect(() => {
    if (commentsData) {
      comments?.filter(comment => comment.document === activeDocument?.id);
      setComments(commentsData);
    }
  }, [commentsData, activeDocument]);

  useEffect(() => {
    setActiveDocument(documents?.[0]);
  }, [documents]);

  if (isLoading) return <h1>Loading...</h1>;
  if (error && axios.isAxiosError(error))
    return <h3 style={{ color: 'red' }}>An error has occurred: {error.message}</h3>;

  return (
    <div className={styles.page}>
      <TabsBar
        onChange={handleTabChange}
        tabs={documents?.map(doc => ({ id: doc.id, title: doc.title })) || []}
      />
      <div className={styles.documentViewer}>
        <Card>
          <h1>{activeDocument?.title}</h1>
          <ParagraphCard>
            <div className={styles.textAndBarContainer}>
              <pre className={styles.text}>{activeDocument?.content}</pre>
              <CommentsBar
                onInputChange={handleCommentTextChange}
                comments={comments}
                onSubmit={handleSubmit}
                onSelectComment={handleSelectComment}
                activeComment={activeComment}
                onAddComment={handleAddComment}
              />
            </div>
          </ParagraphCard>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
