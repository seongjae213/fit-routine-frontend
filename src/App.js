import styles from './assets/styles/common/Reset.module.css'

import { BrowserRouter } from 'react-router-dom';

import Header from 'components/layout/Header/Header';
import Footer from 'components/layout/Footer/Footer';
import OnesTodoPage from 'pages/blog/OnesTodoPage/OnesTodoPage';
import BoardAddEditPage from 'pages/blog/BoardAddEditPage/BoardAddEditPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <div className={styles.layout}>
          <BoardAddEditPage/>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
