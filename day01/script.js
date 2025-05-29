const $screen = document.querySelector("#screen");
const $toggleButton = document.querySelector("#button");
let timeInterval;
let stopWatchOn = false;
let seconds = 0;

console.log("screen:", $screen);
console.log("toggleButton:", $toggleButton);

if ($screen && $toggleButton) {
  //첫번째 아규먼트: 문자열(이벤트 이름)
  //두번째 아규먼트: 함수 주소값 >>콜백함수
  function clickBtn() {
    alert("하하");
  }

  // $toggleButton.addEventListener('click', clickBtn);
  //   $toggleButton.addEventListener('click', function () {
  //     alert('호호');
  //     0;
  //   });
  $toggleButton.addEventListener("click", () => {
    stopWatchOn = !stopWatchOn;
    console.log("stopWatchOn:", stopWatchOn);
    $toggleButton.innerHTML = stopWatchOn ? "■" : "▶";
    $toggleButton.style.backgroundColor = stopWatchOn ? "tomato" : "steelblue";
    // style. 인라인을 그대로 먹일때 사용하는 방법
    $toggleButton.classList.toggle("stop-color");
    if (stopWatchOn) {
      //첫번째 인자 : 콜백함수
      //두번째인자 : Number - ms
      timeInterval = setInterval(() => {
        /*
        1초 > 100
        1분 > 60초 > 6000
        */
        seconds++;
        const mm = String(Math.floor(seconds / 6000) % 60).padStart(2, "0");
        const ss = String(Math.floor(seconds / 100) % 60).padStart(2, "0");
        const cs = String(seconds % 100).padStart(2, "0");
        $screen.innerText = `${mm}:${ss}:${cs}`;
      }, 10);
    } else {
        clearInterval(timeInterval);
        seconds = 0;
        $screen.innerHTML = '00:00:00';
    }
  });
}
