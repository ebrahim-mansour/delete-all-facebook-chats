let i = 1;

function myLoop() {
  setTimeout(function() {
    let iElement = document.querySelector("[aria-label='Chats'] .x1n2onr6 .x1n2onr6 .x1n2onr6").querySelector("[aria-label='Menu'] i")
    
    if (iElement) {
      iElement.click()

      setTimeout(function () {
        let spanTags = document.getElementsByTagName("span");
        let searchText = "Delete chat";
        let found;
            
        for (let i = 0; i < spanTags.length && !found; i++) {
          if (spanTags[i].textContent == searchText) {
            found = spanTags[i];
          }
        }
        
        if (found) {
          found.click()

          setTimeout(function () {
              console.log("found1", document.querySelector("[aria-label='Delete chat']").lastElementChild.lastElementChild.lastElementChild.firstElementChild.querySelector('span'))
              document.querySelector("[aria-label='Delete chat']").lastElementChild.lastElementChild.lastElementChild.firstElementChild.click()
          }, 1500)
        }
      }, 1500)
    }
      
    i++;
    if (i < 100) {
      myLoop();
    }
  }, 3000)
}

myLoop();  
