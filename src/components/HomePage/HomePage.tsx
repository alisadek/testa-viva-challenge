import React from 'react';
import Card from '../Card/Card';
import ParagraphCard from '../ParagraphCard/ParagraphCard';
import styles from './HomePage.module.scss';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className={styles.page}>
      <div className={styles.documentViewer}>
        <Card>
          <h1>Dokument</h1>
          <ParagraphCard>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At enim nec enim, at arcu
              scelerisque. Orci, mi mattis non auctor. Vel, risus nisl, lobortis venenatis, arcu
              donec metus sit euismod. Venenatis molestie volutpat nunc amet eget quis velit
              ultrices ac. Lectus semper ut odio ante tempor nunc tempor id. Imperdiet nisi aliquam
              leo, vitae tellus condimentum mauris, aliquet. Vestibulum, id nullam scelerisque sit
              ipsum at porta. Ut adipiscing tellus gravida sodales cursus ut rutrum. Gravida
              adipiscing elementum, amet dui vulputate maecenas imperdiet lacus. Facilisis eget
              tincidunt sem id et urna quisque.
            </p>
          </ParagraphCard>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
