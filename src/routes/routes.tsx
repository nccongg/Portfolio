import Contact from '../pages/Contact/contact';
import Home from '../pages/Home/home';
import Resume from '../pages/Resume/resume';
import Work from '../pages/Work/work';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/services', component: Resume },
  { path: '/resume', component: Resume },
  { path: '/work', component: Work },
  { path: '/contact', component: Contact },
];

export { publicRoutes };
