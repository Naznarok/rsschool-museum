document
  .getElementById("headerButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const nav = document.getElementById("headerNav");
    const welcomeContent = document.getElementById("welcomeContent");
    const icon = document.getElementById("headerIcon");

    nav.classList.toggle("active");
    welcomeContent.classList.add("disabled");

    if (nav.classList.contains("active")) {
      icon.querySelector("use").setAttribute("xlink:href", "#hb-close");
    } else {
      icon.querySelector("use").setAttribute("xlink:href", "#hb-default");
      welcomeContent.classList.remove("disabled");
    }
  });
