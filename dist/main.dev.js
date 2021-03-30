"use strict";

var translateBtn = document.querySelector("#translate");
translateBtn.addEventListener("click", function () {
  translate();
});

var translate = function translate() {
  var input = document.querySelector("#input").value;
  var stringArr = input.split("");
  var outputArr = [];
  stringArr.forEach(function (letter) {
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

      case '10':
        outputArr.push('-----');
        outputArr.push(' ');
        break;

      case ' ':
        outputArr.push('/');
        outputArr.push(' ');
        break;

      default:
        break;
    }
  });
  document.querySelector('#translated-text').innerHTML = outputArr.join('');
}; // switch (letter.toLowerCase()) {
//   case 'a':
//     outputArr.push('.-');
//     break;
//   case 'b':
//     outputArr.push('-...');
//     break;
//   case 'c':
//     outputArr.push('-.-.');
//     break;
//   case 'd':
//     outputArr.push('-..');
//     break;
//   case 'e':
//     outputArr.push('.');
//     break;
//   case 'f':
//     outputArr.push('..-.');
//     break;
//   case 'g':
//     outputArr.push('--.');
//     break;
//   case 'h':
//     outputArr.push('....');
//     break;
//   case 'i':
//     outputArr.push('..');
//     break;
//   case 'j':
//     outputArr.push('.---');
//     break;
//   case 'k':
//     outputArr.push('-.-');
//     break;
//   case 'l':
//     outputArr.push('.-..');
//     break;
//   case 'm':
//     outputArr.push('--');
//     break;
//   case 'n':
//     outputArr.push('-.');
//     break;
//   case 'o':
//     outputArr.push('---');
//     break;
//   case 'p':
//     outputArr.push('.--.');
//     break;
//   case 'q':
//     outputArr.push('--.-');
//     break;
//   case 'r':
//     outputArr.push('.-.');
//     break;
//   case 's':
//     outputArr.push('...');
//     break;
//   case 't':
//     outputArr.push('-');
//     break;
//   case 'u':
//     outputArr.push('..-');
//     break;
//   case 'v':
//     outputArr.push('...-');
//     break;
//   case 'w':
//     outputArr.push('.--');
//     break;
//   case 'x':
//     outputArr.push('-..-');
//     break;
//   case 'y':
//     outputArr.push('-.--');
//     break;
//   case 'z':
//     outputArr.push('--..');
//     break;
//   case '1':
//     outputArr.push('.----');
//     break;
//   case '2':
//     outputArr.push('..---');
//     break;
//   case '3':
//     outputArr.push('...--');
//     break;
//   case '4':
//     outputArr.push('....-');
//     break;
//   case '5':
//     outputArr.push('.....');
//     break;
//   case '6':
//     outputArr.push('-....');
//     break;
//   case '7':
//     outputArr.push('--...');
//     break;
//   case '8':
//     outputArr.push('---..');
//     break;
//   case '9':
//     outputArr.push('----.');
//     break;
//   case '10':
//     outputArr.push('-----');
//     break;
//   case ' ':
//     outputArr.push('/');
//     break;
//   default:
//     break;
// }