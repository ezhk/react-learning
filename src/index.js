import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";

import { apiAppInstallURL } from "./constants";
import "./index.scss";
import App from "./App";

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

// Register service worker on page..
registerServiceWorker();

// Try to register push events.
registerPushEvents();

// Register WPA install.
registerAppInstallation();

// Setup fixed height for messages.
setupSiteHeight();

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  navigator.serviceWorker
    .register("/sw.js")
    .then((event) => {
      console.log("[Service Worker] Registered", event);
    })
    .catch((error) => {
      console.log(`[Service Worker] Registered error: ${error}`);
    });
}

function registerPushEvents() {
  if (!("PushManager" in window)) return;

  navigator.serviceWorker.ready.then((registration) => {
    if (!registration.pushManager) {
      console.log("[Subscription] Browser doesn't support push events");
      return false;
    }

    registration.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: "BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U",
      })
      .then((subscription) => {
        console.log("[Subscription] Successful subscribe: ", subscription.toJSON());
      })
      .catch((error) => {
        console.log(`[Subscription] Subscribe error: ${error}`);
      });
  });
}

function registerAppInstallation() {
  window.addEventListener("appinstalled", (event) => {
    console.log(`App installed: ${event}`);
    fetch(apiAppInstallURL, {
      method: "GET",
      credentials: "include",
    });
  });
}

/**
 * Mobile sites wrong define site's height to 100vh,
 * need to calculate it in JS and setup as var() to CSS.
 */
function setupSiteHeight() {
  const defineSiteHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--site-height", `${window.innerHeight}px`);
  };

  window.addEventListener("resize", defineSiteHeight);
  defineSiteHeight();
}
