const routes = {
    "/": "pages/home.html",
    "/books": "pages/books.html",
    "/graphics": "pages/graphics.html",
};

const cssFiles = {
    "/": "css/pages/index.css",
    "/books": "css/pages/books.css",
    "/graphics": "css/pages/graphics.css",
};

const scriptFiles = {
    "/books": "js/books.js",
};

const route = (event) => {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const loadJS = async (route) => {
    const scriptPath = getJSPath(route);

    if (scriptPath && !document.querySelector(`script[src="${scriptPath}"]`)) {
        const body = document.body || document.getElementsByTagName('body')[0];
        const script = document.createElement('script');

        script.src = scriptPath;
        script.type = 'text/javascript';

        await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
            body.appendChild(script);
        });
    }
};

const loadCSS = (route) => {
    const cssPath = getCSSPath(route);

    if (cssPath && !document.querySelector(`link[href="${cssPath}"]`)) {
        const head = document.head || document.getElementsByTagName('head')[0];
        const link = document.createElement('link');

        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = cssPath;

        head.appendChild(link);
    }
};

const getCSSPath = (route) => cssFiles[route];
const getJSPath = (route) => scriptFiles[route];

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path];
    const html = await fetch(route).then(data => data.text());

    const mainHeader = document.getElementById("main-header");
    mainHeader.classList.toggle("sm", route !== "pages/home.html");

    document.getElementById("root").innerHTML = html;
    loadCSS(path);
    await loadJS(path);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
