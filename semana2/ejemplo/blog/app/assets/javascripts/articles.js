button = document.getElementById('like-button')
button.addEventListener('click', likeArticle, false)

function likeArticle () {
  button.classList.add('liked');
  button.innerHTML = "Liked!";
  document.querySelector('h1').style.color = "red";
}