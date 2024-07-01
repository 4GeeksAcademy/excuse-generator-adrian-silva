/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function excuseGenerator() {
  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "my phone ", "the car "];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];

  let sentencias = [who, action, what, when];
  let randomNum = "";
  let phrase = "";

  for (let i = 0; i < sentencias.length; i++) {
    for (let j = 0; j < 1; j++) {
      randomNum = Math.floor(Math.random() * sentencias[i].length);
      phrase += sentencias[i][randomNum];
    }
  }
  return phrase;
}

window.onload = function() {
  let excusa = excuseGenerator();
  document.querySelector("#excuse").innerHTML = excusa;
};
