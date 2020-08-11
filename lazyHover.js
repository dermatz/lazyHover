; // LazyHover.JS
const hoverElement = "lazyhover";
const hoverTimeout = 1000;

let layzHover = {

  // Detect all hover ident elements
  getElements: function() {

    // if element(e) is not found the script will end here
    if (!document.getElementsByClassName(hoverElement).length) {
      return false;
    };

    return true;
  },

  setEventListener: function(el) {
    for (let i = 0; i < el.length; i++) {
      let timeout;

        // Detect enter event
				el[i].addEventListener('mouseenter', function (e) {
          clearTimeout(timeout) // stops running timeout
          e.target.classList.add("active");
				})

				// Detect leave event
				el[i].addEventListener('mouseleave', function (e) {
					  timeout = setTimeout(function () {
            e.target.classList.remove("active");
					}, hoverTimeout)
        })
    };
  },

  init: function () {
    layzHover.getElements();
    if(layzHover.getElements() === true) {
      layzHover.setEventListener(document.getElementsByClassName(hoverElement));
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  layzHover.init();
});

