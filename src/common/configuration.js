export const Configuration = {
    host: location.host,
    origin: location.protocol == "file:" ? location.origin + location.pathname : location.origin,
    root: document.getElementById("root"),
    userAgent: navigator.userAgent,
};

console.log(location);