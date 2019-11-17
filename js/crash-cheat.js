var oldTitle = document.title;
var titleTime; //標題恢復計時器
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.querySelector("[rel='icon']").setAttribute("href", "https://i.loli.net/2018/08/24/5b7fcb00ed9bf.png");
    document.title = "網站崩潰了！";
    clearTimeout(titleTime);
  } else {
    document.title = "其實並沒有！";
    document.querySelector("[rel='icon']").setAttribute("href", "/images/apple-touch-icon-next.png");
    titleTime = setTimeout(function () {
      document.title = oldTitle;
    }, 1000);
  }
});