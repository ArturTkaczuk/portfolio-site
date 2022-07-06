const sections = [
  document.querySelector("#about"),
  document.querySelector("#skills"),
  document.querySelector("#projects"),
  document.querySelector("#contact"),
];

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");
    // console.log(sectionId);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('li a[href*="' + sectionId + '"]')
        .classList.add("active");
    } else {
      document
        .querySelector('li a[href*="' + sectionId + '"]')
        .classList.remove("active");
    }
  });
});
