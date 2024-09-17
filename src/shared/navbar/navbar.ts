import './navbar.css';

export const displayNavbar = () => {
  return `
    <nav class="container-nav">
      <div class="container-acronym nav-option">
        <a href="#" data-route="/" class="acronym-link">
          EB
        </a>
      </div>

      <ul class="nav-options">
        <li class="nav-option">
          <a href="#" data-route="/chat">Ai-Chat</a>
        </li>
        <li class="nav-option">
          <a href="#" data-route="/about">About</a>
        </li>
      </ul>
    </nav>
  `;
};

export const setupNavbarNavigation = (onRouteChange: (route: string) => void) => {
  document.querySelectorAll('.nav-option').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const route = (event.target as HTMLAnchorElement).getAttribute('data-route');

      if (route) {
        window.history.pushState({}, "", route);
        onRouteChange(route);
      }
    });
  });
}
