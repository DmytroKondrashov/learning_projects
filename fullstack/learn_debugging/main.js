const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', handleClick);

function handleClick(e) {
  if (btn.innerText === 'updated') {
    btn.innerText = 'click me';
    container.innerText = '';
    return;
  }
  let text = 'updated';
  btn.innerText = text;

  handleContainer();
}

function handleContainer() {
  let content = 'the button has been updated';
  container.innerText = content;
}
