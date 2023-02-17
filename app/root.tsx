import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header className="GlobalHeader">
          <h1 className="_a11y_hidden">Artifice Games</h1>

          <div className="GlobalHeader-container _container">
            <svg className="GlobalHeader-logo" viewBox="0 0 552 533" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M147.24 146.929L275.873 275.456L404.991 146.444L276.358 17.9165L147.24 146.929Z" fill="#EC008C" stroke="black" strokeWidth="25.0038" strokeMiterlimit="2.5" strokeLinecap="round"/>
              <path d="M275.877 275.46L404.51 403.987L533.629 274.975L404.996 146.448L275.877 275.46Z" fill="#00AEEF" stroke="black" strokeWidth="25.0038" strokeMiterlimit="2.5" strokeLinecap="round"/>
              <path d="M18.1216 275.941L146.755 404.468L275.873 275.456L147.24 146.929L18.1216 275.941Z" fill="#FFF200" stroke="black" strokeWidth="25.0038" strokeMiterlimit="2.5" strokeLinecap="round"/>
            </svg>

            <nav className="Navbar">
              <ul>
                <li>
                  <a href="/" className="-is-active">Home</a>
                </li>

                <li>
                  <a href="/what-is-artifice">What is Artifice?</a>
                </li>

                <li>
                  <a href="/games">Games</a>
                </li>

                <li>
                  <a href="/how-to-play">How to play</a>
                </li>

                <li>
                  <a href="/blog">Updates</a>
                </li>

                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <Outlet />

        <footer className="GlobalFooter">
          🎨 Artifice 🤖 Games 🕹️
        </footer>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
