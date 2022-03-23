import "./scss/main.scss";
import { isEven } from "./isEven.js";
import { isDivisibleByTen } from "./isDivisibleByTen.js";
/* import * as properties from "./properties.js"; */

const div = document.getElementById("root");

div.innerHTML = `
    <div class="container">
        <div class="main">
            <h3 class="main_subtitle">Mentorship - Session 2:</h3>
            <h1 class="main_title">Webpack Basics 🖥</h1>
            <ul class="main_list">
                <li><label><input type="checkbox" checked>Create a project with npm, git and webpack</label></li>
                <li><label><input type="checkbox" checked>Install and use html-loader</label></li>
                <li><label><input type="checkbox" checked>Get the main HTML element, append information and change colors</label></li>
                <li><label><input type="checkbox" checked>Create production bundle</label></li>
                <li><label><input type="checkbox" checked>Use git and upload the project to github</label></li>
                <li><label><input type="checkbox" checked>Implement HotReload🌶 to Webpack</label></li>
            </ul>
        </div>
        <div class="main">
            <h3 class="main_subtitle">Mentorship - Session 3:</h3>
            <h1 class="main_title">JS Basics and ES6</h1>
            <div class="main_container">
                <p><strong>Introduce a number and check if is EVEN or ODD and if is divisible by 10.</strong></p>
                <input type="number" placeholder="Enter a number" id="numberValue"> <span>↵</span>
                <div id="result"></div>
            </div>
        </div>
    </div>
`;

// --------- Session 3 ----------

const inputNumber = document.getElementById("numberValue");

inputNumber.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    if (inputNumber.value) {
      reportResult(detectNumber(numberObject(inputNumber.value)));
      const numberProps = numberObject(inputNumber.value);
      console.log(numberProps);
      const numberPropsTwo = { ...numberProps };
      numberPropsTwo.number = 8;
      numberPropsTwo.isEven = false;
      console.log(numberProps);
      console.log(numberPropsTwo);
    }
  }
});

function numberObject(number) {
  return {
    number: number,
    isEven: isEven(number),
    isDivisibleByTen: isDivisibleByTen(number),
  };
}

function detectNumber(object) {
  return `The number ${object.number} is ${
    object.isEven ? "EVEN" : "ODD"
  } and ${
    object.isDivisibleByTen ? "is divisible by 10" : "isn't divisible by 10"
  }.`;
}

function reportResult(resultText) {
  document.getElementById("result").innerHTML = `<p>${resultText}</p>`;
}
