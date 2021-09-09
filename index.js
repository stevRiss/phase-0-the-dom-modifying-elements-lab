// 1
const  main = document.getElementById("main");
main.remove();

//2
/*
const newHeader = document.createElement("h1");
document.body.append(newHeader);

const newHead = document.getElementsByTagName('h1');
newHead.id = 'victory';
document.body.append(newHead);
*/
//3
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = '<p> Stephen is the champion! </p>';
document.body.appendChild(newHeader);




