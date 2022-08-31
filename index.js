document.querySelectorAll('.button-input').forEach((e, i, a) => {
    e.addEventListener('click', () => {
        for(var u = 0; u <= i; u++) {
            a[u].classList.add('bi-bg-2')
        }
        for(var n = i+1; n > i && n < a.length; n++) {
            if(a[n].classList.contains('bi-bg-2')) {
            a[n].classList.remove('bi-bg-2');
            } else {
            return 0;
            }
        }
    })
})

tkRate = '';
document.querySelectorAll('.button-input').forEach(e => {
    e.addEventListener('click', () => {
        tkRate = 'You selected ' + e.value + ' out of 5';
        localStorage.setItem("tkRate", tkRate);
    })
})

document.querySelector('#text-rate').value = localStorage.tkRate
