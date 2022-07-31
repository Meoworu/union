export const remInit = function () {
  const html = document.documentElement;
  function setFontAndView() {
    const dpr = window.devicePixelRatio;
    const meta: HTMLMetaElement = document.querySelector('meta[name=viewport]') || document.createElement('meta');
    meta.name = 'viewport';
    meta.content = `width=device-width,initial-scale=${1 / dpr},minimum-scale=${1 / dpr},maximum-scale=${
      1 / dpr
    },user-scalable=no`;
    document.head.appendChild(meta);
    const clientWidth = html.clientWidth || document.body.clientWidth;
    html.style.fontSize = `${clientWidth / 10}px`;
  }
  setFontAndView();
  window.addEventListener('resize', setFontAndView, false);
};
