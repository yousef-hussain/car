/**************************** Start Header Section *******************/
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  if (this.scrollY >= 20) {
    header.classList.add("fixed");
  } 
  else {
    header.classList.remove("fixed");
  }
});

/**************************** End Header Section ******************/

/**************************** Start Aside Section ******************/
let aside = document.querySelector("aside"),
    showMenuInHeader = document.querySelector("header .head-menu .bars");

showMenuInHeader.addEventListener("click", ()=> {
    if(aside.className == "show") {
      aside.classList.remove("show");
    } else {
      aside.classList.add("show");
    }
});
/**************************** End Aside Section ******************/

/****************** Start Chat Section ********************/
let chatButton = document.getElementsByClassName("chat-button"),
    chatBox = document.getElementsByClassName("chat-message"),
    iconDeleteChatBox = document.querySelector(".chat-message span.delete");
    iconDeleteChatBox.addEventListener("click", function () {
      chatBox[0].classList.add("d-none");
      chatButton[0].setAttribute("data-active","active");
    })
chatButton[0].addEventListener("click", function () {
  if (this.getAttribute("data-active") == "active") {
    this.setAttribute("data-active","not-active");
    chatBox[0].classList.remove("d-none");
  } else {
    this.setAttribute("data-active","active");
    chatBox[0].classList.add("d-none");
  }
  
});

let visibilityChat = document.getElementsByClassName("chat-button");

window.addEventListener("scroll", function () {
  if (this.scrollY >= 1200) {
    visibilityChat[0].classList.add("visible-button");
  } 
  if (this.scrollY <= 200 ) {
    visibilityChat[0].classList.remove("visible-button");
    if (!chatBox[0].classList.contains("d-none")) {
      chatBox[0].classList.add("d-none");
    }
  }
});
/****************** End Chat Section ********************/




