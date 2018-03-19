var names=['東','南','西','北']
var tags=['east','south','west','north']
function changeWind() {
  const $round = document.getElementById('round');
  $round.innerHTML = names[(names.indexOf($round.innerHTML)+1)%4];
}
function changeRound() {
  const $count = document.getElementById('count');
  $count.innerHTML = (+$count.innerHTML+1)%5 ||1;
}
function touched(seat,isScore) {
  if(!isScore){
    off=tags.indexOf(seat)
    for(i=0;i<4;i++){
      document.getElementById('label-' + tags[(off+i)%4]).innerHTML =
        names[i%4];
    }
  return
  }
  const $ctx = document.getElementById('ctx-' + seat)
  const nv = prompt()
  if(nv)$ctx.innerHTML = nv
}

