import { NavLink } from "@remix-run/react"

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "What is Artifice?",
    href: "/what-is-artifice",
  },
  {
    label: "Games",
    href: "/games",
  },
  {
    label: "How to play",
    href: "/how-to-play",
  },
  {
    label: "Updates",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const GlobalHeader = () => {
  return (
    <header className="GlobalHeader">
      <h1 className="_a11y_hidden">Artifice Games</h1>

      <div className="GlobalHeader-container _container">
        <a href="/" title="Home">
          <svg className="GlobalHeader-logo" width="100" height="100" viewBox="0 0 552 533" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M147.24 146.929L275.873 275.456L404.991 146.444L276.358 17.9165L147.24 146.929Z" fill="#EC008C" stroke="black" strokeWidth="25.0038" strokeMiterlimit="2.5" strokeLinecap="round"/>
            <path d="M275.877 275.46L404.51 403.987L533.629 274.975L404.996 146.448L275.877 275.46Z" fill="#00AEEF" stroke="black" strokeWidth="25.0038" strokeMiterlimit="2.5" strokeLinecap="round"/>
            <path d="M18.1216 275.941L146.755 404.468L275.873 275.456L147.24 146.929L18.1216 275.941Z" fill="#FFF200" stroke="black" strokeWidth="25.0038" strokeMiterlimit="2.5" strokeLinecap="round"/>
          </svg>
        </a>

        <nav className="GlobalHeader-nav">
          <ul>
            {navigation?.map((item: { 
              label: string;
              href: string;
            }) => {
              const { label, href } = item;

              return (
                <li key={item.label}>
                  <NavLink 
                    to={href} 
                    className={({ isActive }) => isActive ? '-is-active' : undefined}>
                    {label}
                  </NavLink> 
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
