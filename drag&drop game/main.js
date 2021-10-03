const container = document.querySelector(".image-container");
const startButton = document.querySelector(".start-button");
const gameText = document.querySelector(".game-text");
const playTime = document.querySelector(".play-time");

const tileCount = 16;
let tiles = [];
const dragged = {
  el: null,
  class: null,
  index: null,
};
let isPlaying = false;
let timeInterval = null;
let time = 0;
// function

function setGame() {
  isPlaying = true;
  time = 0;
  container.innerHTML = "";
  gameText.style.display = "none";
  clearInterval(timeInterval);
  timeInterval = setInterval(() => {
    playTime.innerText = time;
    time++;
  }, 1000);

  tiles = createImageTiles();
  tiles.forEach((tile) => {
    container.appendChild(tile);
  });
  setTimeout(() => {
    container.innerHtml = "";
    shuffle(tiles).forEach((tile) => {
      container.appendChild(tile);
    });
  }, 2000);
}

function createImageTiles() {
  const tmpArray = [];
  Array(tileCount) // tileCount의 개수 만큼 [ <16 empty items > ]
    .fill() // 16개의 원소를 undefined고 채우기[undefined, undefined, ...]
    .forEach((_, idx) => {
      // 각각의 undefined 요소에 forEach 작업
      const li = document.createElement("li");
      li.setAttribute("data-index", idx);
      li.setAttribute("draggable", "true");
      li.classList.add(`list${idx}`);
      tmpArray.push(li);
    });
  return tmpArray;
}

function shuffle(array) {
  let index = array.length - 1;
  while (index > 0) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
    index--;
  }
  return array;
}

function checkStatus() {
  const currentList = [...container.children];
  const unMatchedList = currentList.filter((child, index) => {
    return Number(child.getAttribute("data-index")) !== index;
  });
  if (unMatchedList.length === 0) {
    console.log("끝");
    gameText.style.display = "block";
    isPlaying = false;
    clearInterval(timeInterval);
  }
}

// event

container.addEventListener("dragstart", (e) => {
  if (!isPlaying) return;
  const obj = e.target;
  // 현재 셔플된 배열에서 드래그 중인 요소가 몇번째 인덱스인지 파악
  dragged.el = obj;
  dragged.class = obj.className;
  dragged.index = [...obj.parentNode.children].indexOf(obj);
});
container.addEventListener("dragover", (e) => {
  e.preventDefault();
});
container.addEventListener("drop", (e) => {
  if (!isPlaying) return;
  const obj = e.target;

  if (obj.className !== dragged.class) {
    let originPlace;
    let isLast = false;

    // nextSibling : drag해서 가져온 요소의 다음꺼
    // previousSibling : drag해서 가져온 요소의 전꺼
    // 그니까 드래그해서 드랍하면 드랍된 자리에 dragged.el이 들어가고
    // 드랍된 자리에 있던 원래 요소는 Sibling을 통해서 위치를 알아내서
    // dragged.el의 위치로 가도록
    // 그런데 마지막 요소는 nextSibling이 없고 previousSibling만 있다.
    // 그래서 마지막 요소인 경우에는 원래 있던 위치값을 previousSibling으로 잡아주고
    // 120번 라인에서 마지막 요소인 경우 previousSibling의 after위치에
    // 마지막 요소가 아니라면 nextSibling의 before위치에 원래 해당 자리에 있던 요소를 옮겨준다.
    if (dragged.el.nextSibling) {
      originPlace = dragged.el.nextSibling;
    } else {
      originPlace = dragged.el.previousSibling;
      isLast = true;
    }
    const droppedIndex = [...obj.parentNode.children].indexOf(obj);
    dragged.index > droppedIndex
      ? obj.before(dragged.el) // before : dragged.el을 obj 앞에다가 집어 넣어라
      : obj.after(dragged.el); // after : dragged.el을 obj 뒤에다가 집어 넣어라
    // 109까지만 하면 순서가 좌우로 1칸씩만 바뀜
    isLast ? originPlace.after(obj) : originPlace.before(obj);
  }
  checkStatus();
});

startButton.addEventListener("click", () => {
  setGame();
});
