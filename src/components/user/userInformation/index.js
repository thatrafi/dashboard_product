import Card from 'components/card';
import styles from './UserInformation.module.scss';

const UserInformation = (props) => {
  return (
    <Card className="full">
      <div className={styles.wrapper}>
        <h3>User Information</h3>
        <img src={props.image || 'https://img.innoloft.com/users/user_8d48197d.png'} />
        <h4>{props.userName || 'Name'}</h4>
        <p>{props.companyName || 'Company Name'}</p>
      </div>
    </Card>
  );
};

export default UserInformation;
