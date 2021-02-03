let friendsButton = document.getElementsByClassName("friendsButton")[0];
let recentButton = document.getElementsByClassName("recentButton")[0];
let chatCloseButton = document.getElementsByClassName("chatCloseButton")[0];
let chatWindow = document.getElementsByClassName("chatOuter")[0];
let addFriendButton=document.getElementsByClassName("addFriendButton")[0]
let addFriendPopUp = document.getElementsByClassName("addFriendPopUp")[0]
let searchCloseButton = document.getElementsByClassName("searchCloseButton")[0]
let requestCloseButton = document.getElementsByClassName("requestCloseButton")[0]
let requestPopUp = document.getElementsByClassName("requestPopUp")[0]
let requestButton = document.getElementsByClassName("requestButton")[0]

friendsButton.addEventListener("click", (event) => {
  friendsButton.style.background = "orange";
  recentButton.style.background = "#282828";
  recentButton.style.color = "#fafbfb";
  friendsButton.style.color = "#282828";
  friendsButton.style.cursor = "auto";
  recentButton.style.cursor = "pointer";
});

recentButton.addEventListener("click", (event) => {
  recentButton.style.background = "orange";
  friendsButton.style.background = "#282828";
  recentButton.style.color = "#282828";
  friendsButton.style.color = "#fafbfb";
  recentButton.style.cursor = "auto";
  friendsButton.style.cursor = "pointer";
});

chatCloseButton.addEventListener("click", (event) => {
  chatWindow.style.display = "none";
});
addFriendButton.addEventListener("click",(event)=>{
  addFriendPopUp.style.display="flex";
  addFriendButton.style.background="orange"
  addFriendButton.style.color="#282828"
  requestPopUp.style.display="none";
  requestButton.style.color="#fafbfb"
  requestButton.style.background="#282828"
});
searchCloseButton.addEventListener("click",(event)=>{
  addFriendPopUp.style.display="none";
  addFriendButton.style.color="#fafbfb"
  addFriendButton.style.background="#282828"
  
})
requestButton.addEventListener("click",(event)=>{
  requestPopUp.style.display="flex";
  requestButton.style.background="orange"
  requestButton.style.color="#282828"
  addFriendPopUp.style.display="none";
  addFriendButton.style.color="#fafbfb"
  addFriendButton.style.background="#282828"
  
});
requestCloseButton.addEventListener("click",(event)=>{
  requestPopUp.style.display="none";
  requestButton.style.color="#fafbfb"
  requestButton.style.background="#282828"
  
})








