let img_counter = 0;
img_container1 = [
  "./jmi images/small1.jpg",
  "./jmi images/small2.jpg",
  "./jmi images/small3.jpg",
  "./jmi images/small4.jpg",
];
img_container2 = [
  "./jmi images/small5.jpg",
  "./jmi images/small6.jpg",
  "./jmi images/small7.jpg",
  "./jmi images/small8.jpg",
];
function home_click() {
  let color_changer, bg_color_changer;
  bg_color_changer = document.getElementById("home_li");
  color_changer = document.getElementById("home_a");
  color_changer.classList.add("green-white");
  bg_color_changer.style.background = "#5ea983";
}
function about_click() {
  let color_changer, bg_color_changer;
  bg_color_changer = document.getElementById("about_li");
  color_changer = document.getElementById("about_a");
  color_changer.classList.add("green-white");
  bg_color_changer.style.background = "#5ea983";
}
function study_click() {
  let color_changer, bg_color_changer;
  bg_color_changer = document.getElementById("study_at_jmi_li");
  color_changer = document.getElementById("study_at_jmi_a");
  color_changer.classList.add("green-white");
  bg_color_changer.style.background = "#5ea983";
}

$(document).ready(function () {
  let newfeed = [
    "International Conference on Recent Advances in Computer Science and Engineering (ICRACSE-2022)",
    "Regarding Exhibition on Sardar Patel - The Architect of Unification and other activities",
    "JMI calls for Applications for Admission to short-term Online/Offline Courses",
    "List of documents required for BDS Course Admission 2022-23",
    "MSc. in Virology 2022-23",
  ];

  posttext = document.getElementById("mymarquee1");
  let post_counter = 0;

  setInterval(post_news, 12000);
  // setTimeout(post_news, 12000);
  function post_news() {
    let post = newfeed[post_counter];
    posttext.innerHTML = post;
    changer();
  }
  function changer() {
    if (post_counter < newfeed.length) {
      post_counter = post_counter + 1;
    }
    console.log("hi");
    if (post_counter >= newfeed.length) {
      post_counter = 0;
    }
  }

  function img_caller() {
    let fourimgdiv = ["img_div_0", "img_div_1", "img_div_2", "img_div_3"];
    for (let i = 0; i <= 3; i++) {
      let img1 = document.getElementById(fourimgdiv[i]);
      console.log(img1);
      let created_img = document.createElement("img");
      // // created_img.setAttribute("src");
      created_img.id = "img" + i;
      created_img.className = "img-fluid";
      img1.appendChild(created_img);
      // img1.getAttribute = "alt";
    }
  }
  img_caller();
  function img_changer() {
    for (let i = 0; i <= 3; i++) {
      let img_post = document.getElementById("img" + i);
      if (img_counter <= 1.0) {
        img_post.setAttribute("src", img_container1[i]);
        img_counter = img_counter + 0.25;
      }
      if (img_counter > 1.0 && img_counter <= 2.0) {
        img_post.setAttribute("src", img_container2[i]);
        img_counter = img_counter + 0.25;
      }
      if (img_counter > 2.0) {
        img_counter = 0;
      }
    }
  }
  setInterval(img_changer, 5000);
});
