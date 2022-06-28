const replyForm = document.getElementById('reply-form');
const inputReply = document.getElementById('reply')

const URL = "http://localhost:3000/page-ask/:id"

replyForm.addEventListener('submit', (e)=>{
    e.preventDefault(e);
    
    const reply = inputReply.value;

    axios.post(URL).then(res => console.log(res.data)).catch(err => console.log(err))
    
})