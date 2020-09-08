(function () {

  if (saveToLocal.get("bg")) {
  
    let web_bg = document.getElementById("web_bg");
    let animation = saveToLocal.get("animation");
    let type = saveToLocal.get("type");
  
    web_bg.style.background = saveToLocal.get("bg");
    web_bg.setAttribute("data-type", type);
    if (animation) {
      web_bg.style.animation = animation;
    }
  }
  
  const cardStyle = document.createElement('style');
  cardStyle.innerHTML = `
  [data-theme=light] {
    --card-bg: rgb(255, 255, 255, ${saveToLocal.get("opacity") || 0.7});
  }
  [data-theme=dark] {
    --card-bg: rgb(18, 18, 18, ${saveToLocal.get("opacity") || 0.7});
  }
  `;
  document.head.appendChild(cardStyle);
  
  })();
  