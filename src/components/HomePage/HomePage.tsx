import React from 'react';
import Card from '../Card/Card';
import styles from './HomePage.module.scss';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className={styles.page}>
      <div className={styles.documentViewer}>
        <Card>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At enim nec enim, at arcu
          scelerisque. Orci, mi mattis non auctor. Vel, risus nisl, lobortis venenatis, arcu donec
          metus sit euismod. Venenatis molestie volutpat nunc amet eget quis velit ultrices ac.
          Lectus semper ut odio ante tempor nunc tempor id. Imperdiet nisi aliquam leo, vitae tellus
          condimentum mauris, aliquet. Vestibulum, id nullam scelerisque sit ipsum at porta. Ut
          adipiscing tellus gravida sodales cursus ut rutrum. Gravida adipiscing elementum, amet dui
          vulputate maecenas imperdiet lacus. Facilisis eget tincidunt sem id et urna quisque. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. At enim nec enim, at arcu scelerisque.
          Orci, mi mattis non auctor. Vel, risus nisl, lobortis venenatis, arcu donec metus sit
          euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tellus
          porttitor donec amet, sollicitudin id volutpat. Ullamcorper risus tellus adipiscing ut.
          Mauris curabitur mauris erat purus lorem neque odio iaculis sed. Urna, tempus eleifend
          nisl justo ipsum dui nunc. Morbi eu pellentesque eleifend phasellus lorem. Dolor auctor
          nunc dolor lorem ornare pretium, in non. A tellus quis dolor elit vitae. Vitae vulputate
          donec nec porta id proin. Faucibus ut tortor condimentum elementum eu. Ut tellus etiam ut
          amet.
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
