let work = ["食器洗い", "赤子の風呂", "お弁当の準備", "赤子の寝かしつけ"]

const shuffle = ([...work]) => {
  for (let i = work.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [work[i], work[j]] = [work[j], work[i]];
  }
  return work;
}

const x = shuffle(work);

let li01 = document.getElementById("js-li01");
li01.textContent = x.slice(0, 1);

let li02 = document.getElementById("js-li02");
li02.textContent = x.slice(1, 2);

let li03 = document.getElementById("js-li03");
li03.textContent = x.slice(2, 3);

let li04 = document.getElementById("js-li04");
li04.textContent = x.slice(3, 4);
