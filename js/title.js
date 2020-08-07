(function () {
  let OriginTitle = document.title;
  let titleTime;
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      $('[rel="icon"]').attr("href", "/img/favicon.ico");
      document.title = "不要看我！！";
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr("href", "/img/favicon.ico");
      document.title = "(*´∇｀*) 呀~" + OriginTitle;
      titleTime = setTimeout(function () {
        document.title = OriginTitle;
      }, 2000);
    }
  });
})();
