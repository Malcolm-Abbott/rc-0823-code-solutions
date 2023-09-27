const $iCircleNodeList = document.querySelectorAll('.fa-circle');
console.log('$iCircleNodeList:', $iCircleNodeList);

let index = 1;
let node = null;
let previousNode = null;

const intervalID = setInterval(() => {
  switch (true) {
    case index < $iCircleNodeList.length:
      node = $iCircleNodeList[index];
      console.log('node:', node);
      node.className = 'fa-solid fa-circle';
      previousNode = $iCircleNodeList[index - 1];
      console.log('previousNode:', previousNode);
      previousNode.className = 'fa-regular fa-circle';
      index++;
      console.log('index:', index);
      break;
    default:
      index = 1;
      node = null;
      previousNode = null;
      console.log($iCircleNodeList[$iCircleNodeList.length - 1]);
      $iCircleNodeList[$iCircleNodeList.length - 1].className =
        'fa-regular fa-circle';
      $iCircleNodeList[0].className = 'fa-solid fa-circle';
      break;
  }
}, 2000);

clearInterval(intervalID);
