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
          words : [
            {text: word_1.text, gif_id: word_1.gif_id, text_theme: word_1.text_theme, gif_theme: word_1.gif_theme},
            {text: word_2.text, gif_id: word_2.gif_id, text_theme: word_2.text_theme, gif_theme: word_2.gif_theme},
            {text: word_3.text, gif_id: word_3.gif_id, text_theme: word_3.text_theme, gif_theme: word_3.gif_theme},
          ]
      }})
    }).then(response => response.json() )



}

export function fetchPhrase(hash_token){

  return fetch(`http://localhost:3000/api/v1/phrases/${hash_token}`, {
      method: 'GET',
      headers:   {'content-type': 'application/json',
                  'accept': 'application/json',
                  'token': hash_token
                }
    }).then(response => response.json() )



}






function headers(){
  return {
    'content-type': 'application/json',
    'accept': 'application/json'
  }
}
