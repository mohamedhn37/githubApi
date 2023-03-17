$(document).ready(function () {
    $('#enter-button').on('click', function() {
      let valeurInput= $('#ipt').val();
      fetch(`https://api.github.com/users/${valeurInput}`).then((response) => {
          return response.json();
        }).then((data) => {
          
          let image = data.avatar_url;
          let name = data.login;
          let repo = data.public_repos;
          let col = document.querySelector('#info-content')
          col.innerHTML = ""

          let card = document.createElement('div')
          card.classList.add('card','shadow','rounded','my-4')
  
          let cardBody = document.createElement('div')
          cardBody.classList.add('card-body')
  
          let titleTodo = document.createElement('h5')
          titleTodo.classList.add('card-title')
          titleTodo.textContent = name
  
          let cardImage = document.createElement('img')
          cardImage.classList.add('card-img-top')
          cardImage.src = image
  
          let cardText = document.createElement('p')
          cardText.classList.add('card-text')
          cardText.textContent = `Number of repositories: ${repo}`
  
          cardBody.appendChild(titleTodo)
          cardBody.appendChild(cardImage)
          cardBody.appendChild(cardText)
          card.appendChild(cardBody)
          col.appendChild(card)
        })
        .catch((error) => {
          console.log(error);
        });
    });
});
  