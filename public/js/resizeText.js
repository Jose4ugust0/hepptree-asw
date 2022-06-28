const text = document.querySelector('textarea');


text.addEventListener('keyup', e =>{
    text.style.height = '40px';
    let scHeight = e.target.scrollHeight;
    
    text.style.height = `${scHeight}px`;
})