function name_doc(){
  var fileName = location.href.split("/").slice(-1)[0];
  var src = fileName.split(".")[0];
  return src;
}

function load_img() {
  //Chargement de l'image de présentation
  var src = name_doc();
  var w = window.matchMedia("(max-width: 640px)");
  var images = document.getElementsByClassName("pres_img");
  change_img_on_mobile(w)

  //Chargement de l'image de background
  var b_i = document.getElementsByClassName("story")[0];
  var url = "url(../Svg/bg"+src.toLowerCase()+".svg";
  b_i.style.backgroundImage = url;
}

function change_img_on_mobile(x) {
  to_c = document.getElementsByClassName("pres_img")[0];
  if (x.matches) { // If media query matches

    to_c.setAttribute("src", "../SvgMobile/"+name_doc()+".svg")
  } else {
    to_c.setAttribute("src", "../Svg/"+name_doc()+".svg")
  }
  console.log("ok");
}

var w = window.matchMedia("(max-width: 640px)")
change_img_on_mobile(w)
w.addListener(change_img_on_mobile) // Attach listener function on state changes
