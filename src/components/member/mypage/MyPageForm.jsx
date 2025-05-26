import { useState } from 'react';
import Profile from './profile/Profile';
import LikeList from './likeList/LikeList';
import styles from './MyPageForm.module.css';


function MyPageForm() {
    const [activeTab, setActiveTab] = useState('profile'); // 기본값: profile

    return (
        <>
            <div>
                <div className={styles.menu}>
                    <div className={`${styles.profile} 
                    ${activeTab === 'profile' ? styles.active : ''}`}
                        onClick={() => setActiveTab('profile')}>
                        회원 정보
                    </div>
                    <div className={styles.between}>

                    </div>
                    <div className={`${styles.likeList} 
                        ${activeTab === 'likeList' ? styles.active : ''}`}
                        onClick={() => setActiveTab('likeList')}>
                        관심 목록
                    </div>
                </div>
                <div className={styles.content}>
                    {activeTab === 'profile' ? <Profile /> : <LikeList />}
                    {/* {activeTab === 'profile' ? <Profile /> : <InfoEdit />} */}

                </div>
            </div>
        </>
    );
}

export default MyPageForm;