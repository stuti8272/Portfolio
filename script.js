//------------------------------ABOUT------------------------------------------

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){  //onClick hide underline and content
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    // Add underline to experience and education
    event.currentTarget.classList.add("active-link");
    //Add content to experience and eduaction
    document.getElementById(tabname).classList.add("active-tab");
}
//Responsiveness
/*let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";//whenever right is 0 it is visible
}
function closemenu(){
    sidemenu.style.right = "-200px";//whenever  menu is closed
}*/
function openmenu() {
    let side_menu = document.getElementById("sidemenu");
    side_menu.style.right = "0";
  }

  function closemenu() {
    let side_menu = document.getElementById("sidemenu");
    side_menu.style.right = "-200px";
  }






