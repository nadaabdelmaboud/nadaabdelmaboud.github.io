new WOW().init();
$(window).on("load", function () {
  $("#loadingImg").fadeOut(1500, function () {
    let body = document.getElementsByTagName("body");
    body[0].style = "overflow-y :auto;";
    $("#loading").fadeOut(1000);
  });
});

$(document).ready(function () {
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
    new TypeWriter(txtElement, words, wait);
  }

  setTimeout(init, 2500);

  $("#HomeButton").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#header").offset().top,
      },
      500
    );
  });
  $("#SkillsButton").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#skills").offset().top,
      },
      500
    );
  });
  $("#ProjectsButton").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#projects").offset().top,
      },
      500
    );
  });
});
