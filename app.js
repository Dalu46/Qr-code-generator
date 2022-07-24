const container = document.querySelector('.container')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const img = document.querySelector('.img')

function createQR() {
  let url = input.value;
  
  if(!url) return;
  let qrApi = `http://api.qrserver.com/v1/create-qr-code/?data=${url}&size=100x100`
  img.src = qrApi;
  // .catch((error) => alert('Make sure to connect to the internet'))
  input.value = ''
}

btn.addEventListener('click', createQR);




