import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import BlogHome from './components/Blog/BlogHome';
import AllBlogs from './components/Blog/AllBlogs';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import NavigationMenu from './components/Header/NavigationMenu';
import WorkPage from './work/WorkPage';  // Компонент для відображення робіт
import WorkDetail from './work/WorkDetail';
import Footer from './components/Footer/Footer';


const App = () => {
  const location = useLocation(); // Отримуємо поточний шлях

  return (
    <div>
      <NavigationMenu />
      {/* Відображаємо Header тільки на головній сторінці та індивідуальних блогах */}
      {!(
  location.pathname === '/all-blogs' || 
  location.pathname === '/works' || 
  location.pathname.startsWith('/works/') || 
  location.pathname.startsWith('/blog/')
) && <Header />}



      <main>
        <Routes>
          {/* Маршрути для блогу */}
          <Route path="/" element={<><BlogHome /><WorkPage /></>} />
          <Route path="/all-blogs" element={<AllBlogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/works" element={<WorkPage />} /> {/* Одна компонента для частини вакансій та всіх вакансій */}
          <Route path="/works/:id" element={<WorkDetail />} /> {/* Деталі конкретної вакансії */}
        </Routes>
        <Footer/>
      </main>
   
    </div>
  );
};

export default App;



