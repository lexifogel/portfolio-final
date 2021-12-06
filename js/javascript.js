/* Sidebar */

/* Set the width of the sidebar to Xpx and the left margin of the page content to Xpx */
// function openNav() {
//     document.querySelector("#mySidebar").style.width = "200px";
//     document.querySelector("#main").style.marginLeft = "200px";
//   }
  
// /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
// function closeNav() {
//   document.querySelector("#mySidebar").style.width = "0";
//   document.querySelector("#main").style.marginLeft = "0";
// }
/* end sidebar */


/* new nav */
document.addEventListener("DOMContentLoaded", function(){
  var btn = document.getElementById("myBtn");
  var element = document.getElementById("myDropdown");

  // Create a dropdown instance
  var myDropdown = new bootstrap.Dropdown(element);

  btn.addEventListener("click", function(){
      myDropdown.toggle();
  });
});
/* end new nav*/



