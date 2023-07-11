import { showError404 } from './pages/404/index.js'
import { showError500 } from './pages/500/index.js'
import { showAvatar } from './pages/avatar/index.js'
import { showLogin } from "./pages/login/index.js";
import { showPassword } from './pages/password/index.js'
import { showRegistration } from "./pages/registration/index.js";
import { showSettings } from './pages/setting/index.js'
// const { chats, profile } = data;
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("app");
    root.innerHTML = "";
    const loc = window.location.pathname;
    const loadPage = (path) => {
        switch (path) {
            case '/login':
            case '':
            case '/':
                return showLogin();
            case '/password':
                return showPassword();
            case '/settings':
                return showSettings();
            case '/registration':
                return showRegistration()
            case '/avatar':
                return showAvatar()
            case '/500':
                return showError500()
            case '/404':
            default:
                return showError404()

        }
    };
    root.innerHTML = loadPage(loc);
});