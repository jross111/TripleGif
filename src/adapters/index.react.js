const baseUrl = 'http://localhost:3000/api/v1/phrases'



export function fetchGifs(term, number, term_number){
  return fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`)
  .then(res => res.json())
}



export function postPhrase(word_1, word_2, word_3){

  return fetch(`http://localhost:3000/api/v1/phrases`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        phrase: {
          user_id: 1,
          gif_1: word_1.gif,
          term_1: word_1.term,
          gif_2: word_2.gif,
          term_2: word_2.term,
          gif_3: word_3.gif,
          term_3: word_3.term
        }

      })
    }).then(response => response.json() )



}





function headers(){
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
  }
}
