import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Likes from 'components/common/Likes/Likes';
import styles from './BoardPreview.module.css';

/**
 * 게시물 카드 형식 미리보기 컴포넌트
 * 
 * @param {string} imgSrc 파일 저장된 주소값
 * @param {string} boardWriter 게시물 작성자
 * @param {string} boardTitle 게시물 제목
 * @param {number} boardId 게시물 번호
 */
function BoardPreview(
    {
        imgSrc,
        boardWriter,
        boardTitle,
        boardId
    }
) {
    const [likeCount, setLikeCount] = useState(null);
    const [isLiked, setIsLiked] = useState(null);
    const navigate = useNavigate();

    // Likes 컴포넌트에 데이터 보내는 함수
    const likesData = async () => {
        // [임시데이터]추후 boardId로 좋아요 수, 로그인 유저의 좋아요 클릭 유무 api요청
        const items = {likeCount:300, isLiked:true} 
        setLikeCount(items.likeCount);
        setIsLiked(items.isLiked);
    }

    useEffect(()=>{
        likesData(); // boardId 들어갈 예정
    },[]);

    // 게시물 클릭시 해당 게시물 상세 정보 페이지 이동
    const boardDetailHandler = (boardId) => {
        // navigate('/board/detail?boardId='+boardId);
    }

    // 미리보기에 표시할 제목이 너무 길면 ...으로 축약
    const overTitle = (title) => {
        if(title.length > 18){
            return title.slice(0, 17) + '...';
        }
        return title;
    }

    return(
                    <div className={styles.container} onClick={boardDetailHandler(boardId)}>
                        <div className={styles.imgContainer}>
                            <img className={styles.previewImg} src={imgSrc} alt='게시물 미리보기'/>
                        </div>
                        <hr className={styles.horizon}></hr>
                        <div className={styles.nameText}>{boardWriter}</div>
                        <div className={styles.titleText}>{overTitle(boardTitle)}</div>{/* 최대 14 */}
                        <div className={styles.heartComponent}>
                            <Likes count={likeCount} isBig={isLiked}/>
                        </div>
                    </div>
    )
}

export default BoardPreview;