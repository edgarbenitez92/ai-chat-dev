import { aboutPage } from '../../pages/about/about';
import { aiChatPage } from '../../pages/ai-chat/ai-chat';
import { homePage } from '../../pages/home/home';
import { displayNavbar, setupNavbarNavigation } from '../navbar/navbar';
import './layout.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="layout">
    <nav id=navbar></nav>

    <div id=content></div>
  </div>
`;

const renderRoute = (route: string) => {
  const contentElement = document.querySelector<HTMLDivElement>('#content');

  if (!contentElement) return;

  switch (route) {
    case '/':
      contentElement.innerHTML = homePage();
      break;
    case '/chat':
      contentElement.innerHTML = aiChatPage();
      break;
    case '/about':
      contentElement.innerHTML = aboutPage();
      break;
    default:
      contentElement.innerHTML = '<h1>404 - Page Not Found</h1>';
  }
};

// Navbar element
const navbarElement = document.querySelector<HTMLDivElement>('#navbar');
if (navbarElement) navbarElement.innerHTML = displayNavbar();

setupNavbarNavigation((route: string) => renderRoute(route));

renderRoute(window.location.pathname);