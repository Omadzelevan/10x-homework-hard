window.addEventListener("load", () => {
  document.querySelectorAll(".progress-bar-fill").forEach((el) => {
    const w = el.dataset.width || el.getAttribute("data-width") || "100%";
    requestAnimationFrame(() => (el.style.width = w));
  });

  document.querySelectorAll(".circle-progress-bar").forEach((el) => {
    const target = Math.min(
      100,
      Math.max(0, parseInt(el.dataset.percentage || "0", 10))
    );
    const label = el.querySelector(".circle-label");
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const animate = () => {
      current += step;
      if (current > target) current = target;
      el.style.setProperty("--p", current);
      if (current < target) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  });
});

let body = document.querySelector("body");
let main = document.querySelector(".main");
let titles = document.querySelectorAll(".layout-head");
let texts = document.querySelectorAll(".layout-text");
let name_color = document.querySelectorAll(".name-color");
let profile_text = document.querySelectorAll(".biograp");
let border_color = document.querySelectorAll(".layout");
let personal_head = document.querySelectorAll(".personal-head");
let personal_head_p = document.querySelectorAll(".personal-head p");
let work_place_head = document.querySelectorAll(".work-place-head");
let place = document.querySelectorAll(".place");
let progress_bar = document.querySelectorAll(".progress-bar");
let circle_bars = document.querySelectorAll(".circle-bars");
let logo = document.querySelectorAll(".logo");
let logo_p = document.querySelectorAll(".logo p");
let second_side = document.querySelectorAll(".second-side");
let p_c_s = document.querySelectorAll(".p-c-s");
let p_n = document.querySelectorAll(".p-n");
let white_column = document.querySelector(".white-column");
let photo_border = document.querySelector(".border");
let line_map = document.querySelectorAll(".line-map");
let dark_circle = document.querySelectorAll(".dark-circle");
let dark_logo = document.querySelector(".logo-img");
let btn_1 = document.querySelector(".btn1");

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {


    body.style.backgroundColor = "#f5f5f5";
    titles.forEach((title) => {
      title.style.color = "#333";
    });
    texts.forEach((text) => {
      text.style.color = "#333";
    });
    name_color.forEach((name) => {
      name.style.color = "#333";
    });
    profile_text.forEach((profile) => {
      profile.style.color = "#333";
    });
    border_color.forEach((border) => {
      border.style.borderColor = "#ddd";
    });
    personal_head.forEach((head) => {
      head.style.borderBottomColor = "#ddd";
    });
    personal_head_p.forEach((p) => {
      p.style.color = "#333";
    });
    work_place_head.forEach((head) => {
      head.style.color = "#333";
    });
    place.forEach((p) => {
      p.style.color = "#333";
    });
    progress_bar.forEach((bar) => {
      bar.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    });
    logo_p.forEach((p) => {
      p.style.color = "#333";
    });
    p_c_s.forEach((section) => {
      section.style.backgroundColor = "#fff";
      section.style.borderColor = "#ddd";
    });
    p_n.forEach((section) => {
      section.style.backgroundColor = "#fff";
      section.style.borderBottomColor = "#ddd";
    });
    second_side.forEach((section) => {
      section.style.backgroundColor = "#fff";
    });
    white_column.style.backgroundColor = "#333";
    photo_border.style.borderColor = "#333";
    line_map.forEach((line) => {
      line.style.backgroundColor = "#333";
    });
    dark_circle.forEach((circle) => {
      circle.style.backgroundColor = "#333";
    });
    btn_1.style.backgroundColor = "#000000ff";
    dark_logo.src = "./darklogo.png";
  });
});

document.querySelectorAll(".btn1").forEach((button) => {
  button.addEventListener("click", () => {
    titles.forEach((title) => {
      title.style.color = "rgba(255, 255, 255, 1)";
    });
    texts.forEach((text) => {
      text.style.color = "rgba(255, 255, 255, 1)";
    });
    name_color.forEach((name) => {
      name.style.color = "rgba(255, 255, 255, 1)";
    });
    profile_text.forEach((profile) => {
      profile.style.color = "rgba(255, 255, 255, 1)";
    });
    border_color.forEach((border) => {
      border.style.borderColor = "rgba(255, 255, 255, 1)";
    });
    personal_head.forEach((head) => {
      head.style.borderBottomColor = "rgba(255, 255, 255, 1)";
    });
    personal_head_p.forEach((p) => {
      p.style.color = "rgba(255, 255, 255, 1)";
    });
    work_place_head.forEach((head) => {
      head.style.color = "rgba(255, 255, 255, 1)";
    });
    place.forEach((p) => {
      p.style.color = "rgba(255, 255, 255, 1)";
    });
    progress_bar.forEach((bar) => {
      bar.style.backgroundColor = "rgba(244, 239, 253, 0.2)";
    });
    logo_p.forEach((p) => {
      p.style.color = "rgba(255, 255, 255, 1)";
    });
    p_c_s.forEach((section) => {
      section.style.backgroundColor = "";
      section.style.borderColor = "";
    });
    p_n.forEach((section) => {
      section.style.backgroundColor = "";
      section.style.borderBottomColor = "rgba(255, 255, 255, 1)";
    });
    second_side.forEach((section) => {
      section.style.backgroundColor = "";
    });
    white_column.style.backgroundColor = "";
    photo_border.style.borderColor = "";
    line_map.forEach((line) => {
      line.style.backgroundColor = "rgba(255, 255, 255, 1)";
    });
    dark_circle.forEach((circle) => {
      circle.style.backgroundColor = "";
    });
    dark_logo.src = "./Group 1.png";

  });
});
