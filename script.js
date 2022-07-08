// let navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
// // console.log(navMenuAnchorTags);
// for (let i = 0; i < navMenuAnchorTags.length; i++) {
//   navMenuAnchorTags[i].addEventListener("click", function (event) {
//     event.preventDefault();
//     let targetSectionID = this.textContent.trim().toLowerCase();
//     let targetSection = document.getElementById(targetSectionID);
//     console.log(targetSection);

//     let interval = setInterval(function () {
//       let targetSectionCoordinates = targetSection.getBoundingClientRect();
//       if (targetSectionCoordinates.top <= 0) {
//         clearInterval(interval);
//         return;
//       }
//       window.scrollBy(0, 50);
//     }, 20);
//   });
// }

// console.log(document.querySelectorAll(".nav-menu a"));
