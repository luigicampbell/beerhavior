let wrapperMenu = document.querySelector('.wrapper-menu');

let x = '0%';

function openNav() {
  document.getElementById('navbar').style.height = '100%';

  wrapperMenu.classList.toggle('open');
  x = document.getElementById('navbar').style.height;
  console.log(`opened ${x}`);
  var elem = document.getElementsByClassName('drpbtn');
    elem[0].parentNode.removeChild(elem[0]);
    var elem2 = document.getElementsByClassName('fa fa-caret-down');
      elem2[0].parentNode.removeChild(elem2[0]);
    return false;
}

function closeNav() {
  document.getElementById('navbar').style.height = '0%';
  x = document.getElementById('navbar').style.height;
  console.log(`closed ${x}`);
  wrapperMenu.classList.toggle('open');
}



function toggleOverlay(){
  if (x === '0%'){
    console.log(`x should be 0%: ${x}`);
    openNav();
  }
  else if (x === '100%'){
    console.log(`x should be 100%: ${x}`);
    closeNav();
  }
}
