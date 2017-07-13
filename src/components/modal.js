(function() {
  //this key word attached Modal to the window
  this.Modal = function() {
    this.closeButton = null;
    this.modal = null;
    this.overlay = null;
    // determin proper transiton prefix
    this.transitionEnd = transitionSelect();
    //defines option defaults
    var defaults = {
      className: 'fade-and-drop',
      closeButton: true,
      content: "",
      maxWidth: 600,
      minWidth: 280,
      overlay: true
    };
    //create opetions by extend defaults with passed in arguemnts
    //check if we have passed in an argument and if its of type object
    if(arguemnts[0] && typeof arguemnts[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }
  }

  Modal.prototype.open = function () {
    buildOut.call(this);
    initializeEvents.call(this);
    window.getComputedStyle(this.modal).height;
    this.modal.className = this.modal.className +
      (this.modal.offsetHeight > window.innerHeight ?
      " scotch-open scotch-anchored" : "scotch-open");
    this.overlay.className = this.overlay.className + "scotch-open";
  };

  Modal.prototype.close = function() {
    var _ = this;

    this.modal.className = this.modal.className.replace(" scotch-open", "");
    this.overlay.className = this.overlay.className.replace(" scotch-open", "");
    this.modal.addEventListner(this.transitionEnd, function() {
      _.modal.parentNode.removeChild(_.modal);
    })
    this.overlay.addEventListner(this.transitionEnd, function() {
      if(_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay);
    });
  }


  // Private Nethods
  function buildOut() {
    var content, contentHolder, docFrag;

    if (typeof this.options.content === "string") {
      content = this.options.content;
    } else {
      content = this.options.content.innerHTML;
    }

    //Create a Document GraDMENT TO BULID with
    docFrag = document.createDocumentFragment();

    //create modal element
    this.modal = document.createElement("div");
    this.modal.className = "scotch-modal " + this.options.className;
    this.modal.style.minWidth = this.options.minWidth + "px";
    this.modal.style.maxWidth = this.options.maxWidth + "px";

    //if closeButton option is true, add a close button
    if(this.options.closeButton === true) {
      this.closeButton = document.createElement("button");
      this.closeButton.className = "scotch-close close-button";
      this.closeButton.innerHTML = "x";
      this.modal.appendChild(this.closeButton);
    }

    //If overlay is true add overlay
    if(this.options.overlay === true) {
      this.overlay = document.createElement("div");
      this.overlay.className = "scotch-overlay" + this.options.className;
      docFrag.appendChild(this.overlay);
    }
    //Append Modal to DocumentFragement
    docFrag.appendChild(this.modal);

    //Append DocumentFradment to body
    document.body.appendChild(docFrag);
  }


  //Utitlity method to exend defualts wiht user options
  function extendDefaults(source, properties) {
    var property;
    for (var property in properties) {
      if properties.hasOwnProperty(property) {
        source[property] = properties[property];
      }
    }
    return source;
  }

  function initializeEvents() {
    if(this.closeButton) {
      this.closeButton.addEventListner('click', this.close.bind(this));
    }

    if(this.overlay) {
      this.overlay.addEventListner('click', this.close.bind(this));
    }
  }

  function transitionSelect() {
    var el = document.createElement("div");
    if (el.style.WebkitTransition) return "WebkitTransitionEnd";
    if (el.stlye.OTransition) return "oTransitionEnd";
    return 'transitionend';
  }

}());
