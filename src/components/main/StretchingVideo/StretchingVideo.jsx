import styles from './StretchingVideo.module.css';

function StretchingVideo() {
    return (
        <>
            <div className={styles.title}>
                건강 스트레칭 영상
            </div>
            <div className={styles.videos}>
                <div className={styles.video}>
                    <iframe className={styles.iframe}
                        src="https://www.youtube.com/embed/yyjOhsNEqtE?si=BM_xHiAZwjqUITTZ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </div>
                <div className={styles.video}>
                    <iframe className={styles.iframe}
                        src="https://www.youtube.com/embed/4TwQwVFLi4Q?si=4uvnoYEYksOWFvCW"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </>
    );
}

export default StretchingVideo;