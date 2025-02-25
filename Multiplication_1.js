function hack99Math() {
    for(let ssi = 0; ssi < 9; ssi++) {
         document.getElementsByClassName("button__delete")[0].click();
    }
    let d = document.getElementsByClassName("math99-game-question-view")[0].innerText.split(' ');
    let ds = parseFloat(d[0]) * parseFloat(d[2]);
    console.log(ds);
    let dsa = [...(ds).toString()];
    for(let i = 0; i < dsa.length; i++) {clickCorrespondingKey(dsa[i]);}
    document.getElementsByClassName("button__submit")[0].click();
    window.b99mclick=setInterval(function() {
    hack99Math();clearInterval(window.b99mclick);}, 1);
}
function clickCorrespondingKey(key) {
  arrayLikeObjToArr(document.getElementsByClassName("buttons-row__button")).filter(function(e) { return (e.innerText == key); })[0].click();
}

function arrayLikeObjToArr(alo) {
  let r = [];
  for(let i = 0; i < alo.length; i++) {
     r[i] = alo[i];
  }
  return r;
}
