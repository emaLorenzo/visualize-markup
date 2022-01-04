function createCursor() {
  new Blobity({
    zIndex: 1,
    size: 30,
    color: '#000000',
    fontColor: '#ffffff',
    fontSize: 16,
    tooltipPadding: 12,
    magnetic: false,
  })
}

function preventRightClick () {
  window.oncontextmenu = function () {
    return false;
  };
  
  document.addEventListener("keydown", function(event){
      var key = event.key || event.keyCode;
  
      if (key == 123) {
          return false;
      } else if ((event.ctrlKey && event.shiftKey && key == 73) || (event.ctrlKey && event.shiftKey && key == 74)) {
          return false;
      }
  }, false);
}

function handleSpotTagsScroll() {  
  if (window.scrollY > 0) {
    if (spotTagsContainer.classList.contains('slide-out')) {
      spotTagsContainer.classList.replace('slide-out', 'slide-in')
    } else {
      spotTagsContainer.classList.add('slide-in')
    }
  } else {
    if (spotTagsContainer.classList.contains('slide-in')) {
      spotTagsContainer.classList.replace('slide-in', 'slide-out')
    } else {
      spotTagsContainer.classList.add('slide-out')
    }
  }
}

function debounce(method, delay) {
  clearTimeout(method._tId);
  method._tId= setTimeout(function(){
      method();
  }, delay);
}

document.addEventListener('scroll', () => {
  debounce(handleSpotTagsScroll, 100)
})

const minimizeButton = document.querySelector('#minimize-spot-tags')
const spotTagsContainer = document.querySelector('.spot-the-tags-container')

minimizeButton.addEventListener('click', (e) => {
  spotTagsContainer.classList.add('minimized')

  e.stopPropagation()
})

spotTagsContainer.addEventListener('click', () => {
  console.log('spotTagsContainer')
  if (spotTagsContainer.classList.contains('minimized')) {
    spotTagsContainer.classList.remove('minimized')
  }
})

createCursor()
preventRightClick()