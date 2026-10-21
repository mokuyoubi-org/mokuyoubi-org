// js/favicon.js
export const setFavicon = () => {
  const svg =
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='%232d6a4f'/></svg>";
  document.head.insertAdjacentHTML(
    "beforeend",
    `<link rel="icon" href="data:image/svg+xml,${svg}" />`,
  );
};