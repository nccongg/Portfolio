// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from '../pages/Contact/contact';
import Home from '../pages/Home/home';
import Resume from '../pages/Resume/resume';
import Services from '../pages/Services/services';
import Work from '../pages/Work/work';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/resume', component: Resume },
  { path: '/work', component: Work },
  { path: '/contact', component: Contact },
];

export { publicRoutes };
