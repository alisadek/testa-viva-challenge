import React, { useEffect, useState } from 'react';
import { useDocuments } from '../../hooks/documents.hook';
import { Document } from '../../types';
import axios from 'axios';
import Card from '../Card/Card';
import ParagraphCard from '../ParagraphCard/ParagraphCard';
import TabsBar from '../TabsBar/TabsBar';
import styles from './HomePage.module.scss';

type Props = {};

const HomePage = (props: Props) => {
  const { data: documents, isLoading, error } = useDocuments();
  const [activeDocument, setActiveDocument] = useState<Document | null | undefined>(null);

  useEffect(() => {
    setActiveDocument(documents?.['hydra:member']?.[0]);
  }, [documents]);

  if (isLoading) return <h1>Loading...</h1>;
  if (error && axios.isAxiosError(error))
    return <h3 style={{ color: 'red' }}>An error has occurred: {error.message}</h3>;

  const handleChange = (selectedId: number) => {
    const currentDocument = documents?.['hydra:member'].find(doc => doc.id === selectedId);
    if (currentDocument) setActiveDocument(currentDocument);
  };

  return (
    <div className={styles.page}>
      <TabsBar
        onChange={handleChange}
        tabs={documents?.['hydra:member'].map(doc => ({ id: doc.id, title: doc.title })) || []}
      />
      <div className={styles.documentViewer}>
        <Card>
          <h1>{activeDocument?.title}</h1>
          <ParagraphCard>
            <p>{activeDocument?.content}</p>
          </ParagraphCard>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
