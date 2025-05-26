import { useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import {useEffect, useState} from 'react';
import BlogGrade from 'components/common/BlogGrade/BlogGrade';
import TodoList from 'components/blog/TodoList/TodoList';
import "./FullCalendar.css";
import styles from './OnesTodoPage.module.css';

/**
 * TODO 페이지
 */
function OnesTodoPage() {
    const [dateData, setDateData] = useState({});
    const [nickname, setNickname] = useState('유성재');
    const [grade, setGrade] = useState(999);
    const [menuTodoList, setMenuTodoList] = useState(null);
    const [exerciseTodoList, setExerciseTodoList] = useState(null);

    const navigate = useNavigate();

    const getUserBoards = async () => {
        // const data = axios.get('blog/todoList',{context의 토큰값 혹은 아이디값});
        const data = {
            '2025-05-01': [
                { id: 1, title: '오운완아진짜아 알베겼어' },
                { id: 2, title: '오식완' },
                { id: 3, title: '가'}
            ],
            '2025-05-03': [
                { id: 3, title: '회식' }
            ],
            '2025-05-10': [
                { id: 4, title: '스터디' }
            ]
        };
        return data;
    };
    
    useEffect(() => {
        getUserInfo();
        loadInitialData();
        getMenuTodoList();
        getExerciseTodoList();
    }, []);

    // 로그인 정보로 닉네임, 블로그 점수 api 요청
    const getUserInfo = async () => {
        // const data = axios.get('info/userinfo',{토큰값 혹은 context의 아이디값});
        // setNickname(data.nickname);
        // setGrade(data.grade);
    }

    // 로그인 정보로 MenuTodoList api 요청
    const getExerciseTodoList = async () => {
        // const data = axios.get('info/exerciseTodoList',{토큰값 혹은 context의 아이디값});
        // setTodoList(data.todoList);
        
        // 운동 더미데이터
        setExerciseTodoList({
            todoId:1,
            category:'exercise',
            startAt:new Date().toLocaleDateString(),
            EndAt:new Date(2026,0,30).toLocaleDateString(),
            list: [
                { name:'스쿼트', met:'30'},
                { name:'벤치프레스', met:'50'},
                { name:'달리기', met:'70'},
                { name:'풀업', met:'20'},
                { name:'레그프레스', met:'130'}
            ]
        });
    }

    const getMenuTodoList = () => {
        // const data = axios.get('info/menuTodoList',{토큰값 혹은 context의 아이디값});
        // setTodoList(data.todoList);

        // 식단 더미데이터
        setMenuTodoList({
            todoId:2,
            category:'menu',
            startAt:new Date().toLocaleDateString(),
            EndAt:new Date(2026,0,30).toLocaleDateString(),
            list: [
                { name:'흰쌀밥(250kcal) + 고등어구이(160kcal) + 미역국(200kcal)', calorie:'610'},
                { name:'현미밥(220kcal) + 닭다리조림(179kcal) + 된장국(220kcal)', calorie:'619'},
                { name:'잡곡밥(230kcal) + 북어조림(182kcal) + 소고기무국(220kcal)', calorie:'632'}
            ]
        });
    }

    // 캘린더의 제목 클릭시 해당 게시글 상세 페이지로 이동
    const boardDetailHandler = (boardId) => {
        // <Route path="/blog/boardDetail/:boardId" element={<BoardDetail />} />
        // navigate('/blog/boardDetail/'+boardId);
    }

    // 전체 날짜별 데이터 세팅
    const loadInitialData = async () => {
        const data = await getUserBoards();
        setDateData(data); 
    };

    // 달력에 표시할 제목이 너무 길면 ...으로 축약
    const overTitle = (title) => {
        if(title.length > 11){
            return title.slice(0, 10) + '...';
        }
        return title;
    }

    // 게시물이 3개까지 꽉 찼다면 + 버튼 비활성화
    const isOverBoard = (data) => {
        if(data.length >= 3) {
            return true;
        }
    }

    return (
        <div className='todoPage todoPage-main container'>
            <div className={styles.nameGrade}>
                <span className={styles.name}>{nickname}
                    <span className={styles.TODOText}>TODO</span>
                </span>
                <span className={styles.grade}><BlogGrade grade={grade}/></span>
            </div>

            <div className={styles.calendarContainer}>
                <div className={styles.fullCalendar}>
                    <FullCalendar
                    key={JSON.stringify(dateData)} // 상태 변경 시 리렌더 유도하는 속성. 외부에서 컴포넌트 사용할때 key예약어로 값을 지정하면 값에 변경이 있을때마다 리렌더를 시킨다.
                    plugins={[dayGridPlugin, interactionPlugin]} // dayGridPlugin : 한 달 달력 보기, interactionPlugin : 클릭, 선택 등 사용자 상호작용 활성화
                    initialView="dayGridMonth" // initialView : 처음 렌더링으로 어떤 뷰가 보일것인가?, dayGridMonth : 한 달 단위로 날짜를 그리드 형태로 보기
                    locale={koLocale}  // 한국어 설정
                    dayCellContent={(arg) => {  // 각 날짜에 보여줄 것을 정의
                        const date = new Date(arg.date);
                        date.setDate(date.getDate() + 1);
                        const currDate = date.toISOString().split("T")[0];

                        return (
                        <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                            <div className={styles.dateNum}>
                            {arg.dayNumberText}
                            </div>
                            <button
                            className={styles.addBoard}
                            onClick={(e) => {
                                e.stopPropagation();
                                alert(`${currDate} 클릭됨`);
                            }}
                            disabled={isOverBoard(dateData[currDate] || [])}
                            >
                            +
                            </button>
                            {dateData[currDate]?.map(todo => (
                            <div className={styles.registedBoard} key={todo.id} onClick={()=>{boardDetailHandler(todo.id)}}>
                                {overTitle(todo.title)}
                            </div>
                            ))}
                        </div>
                        );
                    }}
                    dayCellDidMount={(info) => {  // DOM이 렌더링된 후처리에 대한 함수 작성
                        const date = new Date(info.date);
                        date.setDate(date.getDate() + 1);
                        const currDate = date.toISOString().split("T")[0];

                        const todos = dateData[currDate];
                        if (todos?.length === 1) {
                            info.el.classList.add("oneTodo");
                        } else if (todos?.length >= 2) {
                            info.el.classList.add("multiTodo");
                        }

                    }}
                    />

                </div>
            </div>
            <div className={styles.todoContainer}>
                <TodoList todoList={exerciseTodoList}/>
                <TodoList todoList={menuTodoList}/>
            </div>
        </div>
    );
}

export default OnesTodoPage;