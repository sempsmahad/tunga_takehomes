let titleTextArea = document.querySelector('#ttarea');
let postTextArea = document.querySelector('#ptarea');
let titletArea = document.querySelector('.tarea');
let postArea = document.querySelector('.parea');
let titlebtn = document.querySelector('#btn-title');
let postbtn = document.querySelector('#btn-post');

const setFocus = b=>{
  logg(b)
  b.focus();
}
const logg = l =>{
console.log(l);
}
const editTitle = () =>{
postbtn.style.visibility = 'visible';
// <input class="form-control" id="ttarea" placeholder="article title"></input><br>
$('#ttarea1').replaceWith(function(){
    return $('<input/>', {
              'class': 'form-control',
              'id': 'ttarea',
              'value': JSON.parse(localStorage.getItem('blog'))[0].title
     })
});
}
const editPost = () =>{
postbtn.style.visibility = 'visible';
// <textarea class="form-control" rows="5" id="ptarea" placeholder="write your post here"></textarea>
$('#ptarea1').replaceWith(function(){
    return $('<textarea/>', {
              'class': 'form-control',
              'rows': '5',
              'id': 'ptarea',
              'text': JSON.parse(localStorage.getItem('blog'))[0].body
     })
});
}
const connectUI = () =>{
    setFocus(titleTextArea);
    postbtn.addEventListener('click',replaceInputArea);
        // $("#ttarea").on("onfocusout", replaceInputArea("#ttarea"));

}
const replaceInputArea = () => {
  logg('target')
  postbtn.style.visibility = 'hidden';
  titleTextArea = document.querySelector('#ttarea');
  postTextArea = document.querySelector('#ptarea');
  localStorage.setItem("blog",JSON.stringify([{'title':titleTextArea.value,'body':postTextArea.value,'time':new Date()}]))
  $('#ptarea').replaceWith(function(){
      return $('<h6/>', {
                'class': 'lead text-center mb-0',
                'onclick': 'editPost(this)',
                'id': 'ptarea1',
                 text: this.value
       })
  });
  $('#ttarea').replaceWith(function(){
      return $('<h1/>', {
                'class': 'display-1',
                'onclick': 'editTitle(this)',
                'id': 'ttarea1',
                 text: this.value
       })
  });

};

connectUI();

// replace div wit p element

// launc on focus out
