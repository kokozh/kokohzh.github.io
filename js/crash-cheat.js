var oldTitle = document.title;
var titleTime; //標題恢復計時器
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.querySelector("[rel='icon']").setAttribute("href", "1.png");
    document.title = "ko等你回来！";
    clearTimeout(titleTime);
  } else {
    document.title = "欢迎回来！";
    document.querySelector("[rel='icon']").setAttribute("href", "/images/apple-touch-icon-next.png");
    titleTime = setTimeout(function () {
      document.title = oldTitle;
    }, 1000);
  }
});