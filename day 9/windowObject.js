// window.alert("hello World");
// alert("hii without window");

//PROMPT
// const input = prompt("enter INput");
// alert(input);

//CONFIRM
// if (confirm("Are You Sure")) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

let val;
val = outerHeight; //we can also write it window.outerHeight;
//831
val = outerWidth;
//748
val = innerHeight;
//412
val = innerWidth;
//732
//These values varies acc to window size

//Scroll Points
val = scrollX;
//0
//as no scroll bar is there
val = scrollY;
//0

//Location Object
val = location;

//Redirect
//location.href = "http://google.com";
//Reload
//location.reload();
//constantly reloads the page

//History object
//u can go to your browsing history
val = window.history.length;

//Navigator Object
//val = navigator;
val = navigator.appName;
//Netscape
val = navigator.userAgent;
val = navigator.language;
//en-US

console.log(val);
