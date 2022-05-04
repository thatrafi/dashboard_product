import React from 'react';
import ReactDOM from 'react-dom';

import Card from 'components/card';
import Button from 'components/button';
import styles from './Modal.module.scss';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const Modal = (props) => {
  return (
    <div className={styles.modal}>
      <Card className="rounded">
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
          {props.result && <p>{props.result}</p>}
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm} label="Ok" className="primary rounded" />
        </footer>
      </Card>
    </div>
  );
};

const MyModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          result={props.result}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('modal-root')
      )}
    </React.Fragment>
  );
};

export default MyModal;
