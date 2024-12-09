console.log("Baby");

// function zetDark(){
//   console.log("ik ben naar dark mode");
// }

// function zetLight(){
//   console.log("ik ben naar light mode");
// }

// function omschakelenTussenLightEnDark(modus){
//   if(modus == 1){
//     console.log("ik ga light");
//   } else if(modus == 2) {
//     console.log("ik ga dark");
//   }
// }

// omschakelenTussenLightEnDark(2);
document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
  
    acceptButton.addEventListener('click', () => {
      cookieBanner.style.display = 'none';
      console.log("Cookie-melding weggeklikt.");
    });
  });
  