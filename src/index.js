import join from 'lodash/join';
import './style.css';
import Icon from './icon.png';
import printMe from './print.js';

function test() {
    const element = document.createElement('div');

    element.innerHTML = join(['Hello', 'webpack!'], ' ');

    element.classList.add('hello');

    const btn = document.createElement('button');
    btn.innerHTML = 'Click me';
    btn.onclick = printMe;
  
    element.appendChild(btn);

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}
  
document.body.appendChild(test());

if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
      printMe();
    })
}