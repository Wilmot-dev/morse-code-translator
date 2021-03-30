"use strict";

var translateBtn = document.querySelector("#translate");
translateBtn.addEventListener("click", function () {
  translate();
});
var changeTranslate = document.querySelector("#translate-type");
changeTranslate.addEventListener("click", function () {
  changeTranslate.classList.toggle("morse-to-english");

  if (changeTranslate.classList.contains("morse-to-english")) {
    changeTranslate.innerHTML = "Morse Code to English";
  } else {
    changeTranslate.innerHTML = "English to Morse Code";
  }
});

var translate = function translate() {
  var input = document.querySelector("#input").value;
  var outputArr = [];

  if (changeTranslate.classList.contains("morse-to-english")) {
    var stringArr = input.split(" ");
    stringArr.forEach(function (letter) {
      switch (letter.toLowerCase()) {
        case '.-':
          outputArr.push('a');
          break;

        case '-...':
          outputArr.push('b');
          break;

        case '-.-.':
          outputArr.push('c');
          break;

        case '-..':
          outputArr.push('d');
          break;

        case '.':
          outputArr.push('e');
          break;

        case '..-.':
          outputArr.push('f');
          break;

        case '--.':
          outputArr.push('g');
          break;

        case '....':
          outputArr.push('h');
          break;

        case '..':
          outputArr.push('i');
          break;

        case '.---':
          outputArr.push('j');
          break;

        case '-.-':
          outputArr.push('k');
          break;

        case '.-..':
          outputArr.push('l');
          break;

        case '--':
          outputArr.push('m');
          break;

        case '-.':
          outputArr.push('n');
          break;

        case '---':
          outputArr.push('o');
          break;

        case '.--.':
          outputArr.push('p');
          break;

        case '--.-':
          outputArr.push('q');
          break;

        case '.-.':
          outputArr.push('r');
          break;

        case '...':
          outputArr.push('s');
          break;

        case '-':
          outputArr.push('t');
          break;

        case '..-':
          outputArr.push('u');
          break;

        case '...-':
          outputArr.push('v');
          break;

        case '.--':
          outputArr.push('w');
          break;

        case '-..-':
          outputArr.push('x');
          break;

        case '-.--':
          outputArr.push('y');
          break;

        case '--..':
          outputArr.push('z');
          break;

        case '.----':
          outputArr.push('1');
          break;

        case '..---':
          outputArr.push('2');
          break;

        case '...--':
          outputArr.push('3');
          break;

        case '....-':
          outputArr.push('4');
          break;

        case '.....':
          outputArr.push('5');
          break;

        case '-....':
          outputArr.push('6');
          break;

        case '--...':
          outputArr.push('7');
          break;

        case '---..':
          outputArr.push('8');
          break;

        case '----.':
          outputArr.push('9');
          break;

        case '-----':
          outputArr.push('0');
          break;

        case '/':
          outputArr.push(' ');
          break;

        default:
          break;
      }
    });
  } else {
    var _stringArr = input.split("");

    _stringArr.forEach(function (letter) {
      switch (letter.toLowerCase()) {
        case 'a':
          outputArr.push('.-');
          outputArr.push(' ');
          break;

        case 'b':
          outputArr.push('-...');
          outputArr.push(' ');
          break;

        case 'c':
          outputArr.push('-.-.');
          outputArr.push(' ');
          break;

        case 'd':
          outputArr.push('-..');
          outputArr.push(' ');
          break;

        case 'e':
          outputArr.push('.');
          outputArr.push(' ');
          break;

        case 'f':
          outputArr.push('..-.');
          outputArr.push(' ');
          break;

        case 'g':
          outputArr.push('--.');
          outputArr.push(' ');
          break;

        case 'h':
          outputArr.push('....');
          outputArr.push(' ');
          break;

        case 'i':
          outputArr.push('..');
          outputArr.push(' ');
          break;

        case 'j':
          outputArr.push('.---');
          outputArr.push(' ');
          break;

        case 'k':
          outputArr.push('-.-');
          outputArr.push(' ');
          break;

        case 'l':
          outputArr.push('.-..');
          outputArr.push(' ');
          break;

        case 'm':
          outputArr.push('--');
          outputArr.push(' ');
          break;

        case 'n':
          outputArr.push('-.');
          outputArr.push(' ');
          break;

        case 'o':
          outputArr.push('---');
          outputArr.push(' ');
          break;

        case 'p':
          outputArr.push('.--.');
          outputArr.push(' ');
          break;

        case 'q':
          outputArr.push('--.-');
          outputArr.push(' ');
          break;

        case 'r':
          outputArr.push('.-.');
          outputArr.push(' ');
          break;

        case 's':
          outputArr.push('...');
          outputArr.push(' ');
          break;

        case 't':
          outputArr.push('-');
          outputArr.push(' ');
          break;

        case 'u':
          outputArr.push('..-');
          outputArr.push(' ');
          break;

        case 'v':
          outputArr.push('...-');
          outputArr.push(' ');
          break;

        case 'w':
          outputArr.push('.--');
          outputArr.push(' ');
          break;

        case 'x':
          outputArr.push('-..-');
          outputArr.push(' ');
          break;

        case 'y':
          outputArr.push('-.--');
          outputArr.push(' ');
          break;

        case 'z':
          outputArr.push('--..');
          outputArr.push(' ');
          break;

        case '1':
          outputArr.push('.----');
          outputArr.push(' ');
          break;

        case '2':
          outputArr.push('..---');
          outputArr.push(' ');
          break;

        case '3':
          outputArr.push('...--');
          outputArr.push(' ');
          break;

        case '4':
          outputArr.push('....-');
          outputArr.push(' ');
          break;

        case '5':
          outputArr.push('.....');
          outputArr.push(' ');
          break;

        case '6':
          outputArr.push('-....');
          outputArr.push(' ');
          break;

        case '7':
          outputArr.push('--...');
          outputArr.push(' ');
          break;

        case '8':
          outputArr.push('---..');
          outputArr.push(' ');
          break;

        case '9':
          outputArr.push('----.');
          outputArr.push(' ');
          break;

        case '0':
          outputArr.push('-----');
          outputArr.push(' ');
          break;

        case ' ':
          outputArr.push('/');
          outputArr.push(' ');
          break;

        default:
          outputArr.push('wrong language submitted.');
          break;
      }
    });
  }

  document.querySelector('#translated-text').innerHTML = outputArr.join('');
};