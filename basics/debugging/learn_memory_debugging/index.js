let dates = [];

document.getElementById('dates').onclick = (event) => {
  for (let i = 0; i < 20; i++) {
    dates.push(new Date());
  }
};

document.getElementById('clear').onclick = (event) => {
  dates = [];
};
