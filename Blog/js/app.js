 function toggleCard(el){
 'use strict';
  self = {};
  self.isOpen = el.classList.contains('active');
  self.wrapper = document.getElementById('wrapper');
  self.animation = t => t;

  if(self.isOpen){
    // reset
    el.scrollTo(0,0);  
    setTimeout(()=>{
      el.style.position = null;
      el.style.top = null;
      el.style.zIndex = null;
    }, 700);
    
  } else {
    el.style.position = 'fixed';
    el.topFixed = el.getBoundingClientRect().top - self.wrapper.scrollTop;
    
    el.style.top = el.topFixed + 'px';
    el.style.zIndex = 1020;
  }
  // runs after the browser recalculate the el layout
  setTimeout(() => el.classList.toggle('active'));
}


var tabs = document.getElementsByClassName('nav-item');
var activeEl = tabs[0];

function select(el){
  activeEl.classList.remove('active');
  activeEl = el;
  document.body.style.background = activeEl.dataset.color;
  activeEl.classList.add('active');
}

select(activeEl);

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // At last, if the user has denied notifications, and you 
  // want to be respectful there is no need to bother them any more.
}