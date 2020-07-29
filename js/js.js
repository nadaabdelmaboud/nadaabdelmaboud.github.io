$(window).on("load", function () {
  $("#loadingImg").fadeOut(1500, function () {
    let body = document.getElementsByTagName("body");
    new WOW().init();
    body[0].style.overflow = "auto";
    $("#loading").fadeOut(1000, function () {
      /* Acknowledgment the typewriter code is inspired by https://www.youtube.com/watch?v=POX3dT-pB4E */
      class TypeWriter {
        constructor(txtElement, words, wait = 100) {
          this.txtElement = txtElement;
          this.words = words;
          this.txt = "";
          this.wordIndex = 0;
          this.wait = parseInt(wait, 10);
          this.type();
          this.isDeleting = false;
        }

        type() {
          const current = this.wordIndex % this.words.length;
          const fullTxt = this.words[current];

          if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
          }

          this.txtElement.innerHTML = this.txt;

          let typeSpeed = 100;

          if (this.isDeleting) {
            typeSpeed /= 2;
          }

          if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
          } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 100;
          }

          setTimeout(() => this.type(), typeSpeed);
        }
      }

      function init() {
        const txtElement = document.querySelector(".txt-type");
        const words = JSON.parse(txtElement.getAttribute("data-words"));
        const wait = txtElement.getAttribute("data-wait");
        // Init TypeWriter
        new TypeWriter(txtElement, words, wait);
      }
      init();
    });
  });
});
