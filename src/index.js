import join from 'lodash/join'

function test() {
    const element = document.createElement('div');
    element.innerHTML = join(['Hello', 'webpack'], ' ');

    return element;
}
  
document.body.appendChild(test());