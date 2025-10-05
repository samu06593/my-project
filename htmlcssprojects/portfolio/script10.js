var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details) {
  // Get rectangle position and width
  var rectanglelocation = rect.getBoundingClientRect();
  var insiderectval = details.clientX - rectanglelocation.left;

  if (insiderectval < rectanglelocation.width / 2) {
    // LEFT side → red
    var redcolor = gsap.utils.mapRange(
      0, rectanglelocation.width / 2, 255, 0, insiderectval
    );

    gsap.to(rect, {
      backgroundColor: `rgb(${redcolor},0,0)`,
      ease: "power4.out"
    });
  } else {
    // RIGHT side → blue
    var bluecolor = gsap.utils.mapRange(
      rectanglelocation.width / 2, rectanglelocation.width, 0, 255, insiderectval
    );

    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${bluecolor})`,
      ease: "power4.out"
    });
  }
});
