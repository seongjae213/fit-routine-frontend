import {Link} from "react-router-dom";
import Button from 'components/common/Button/Button';
import styles from 'components/layout/Header/Header.module.css';

export default function Login() {

    return (
        <div className={styles.headerRight}>
            {/* <Button className={styles.Button}>로그인</Button> <br /> */}
            <Button size="logInOut" text="로그인"/>
            <Link to="#" ><p>회원가입</p></Link>
        </div>
   );

};