const container = document.querySelector('#container');

const content = document.createElement('p');
content.style.color = 'red';
content.textContent = 'HEY IM RED!';

container.appendChild(content);

const contentt = document.createElement('h3');
contentt.style.color = 'blue';
contentt.textContent = 'HEY IM BLUE!';

container.appendChild(contentt);

const newdiv = document.createElement('div');
newdiv.style.cssText = 'border-style: solid; border-color: black; background: pink;';  

const divh1 = document.createElement('h1');
divh1.textContent = 'Im in a div!';
newdiv.appendChild(divh1);

const divp = document.createElement('p');
divp.textContent = 'Me too!';
newdiv.appendChild(divp);


container.appendChild(newdiv);