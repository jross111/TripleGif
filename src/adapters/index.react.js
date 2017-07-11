

const prodUrl = 'https://twf-back.herokuapp.com/api/v1/'



export function fetchGifs(term, number, term_number){
  var http = require("http");
  setInterval(function() {
  http.get("https://twftime.com/");
  console.log("thanks for looking, im going to log this to keep my server awake")
}, 900000); // every 15 minutes (900000)

  return fetch(`${prodUrl}searches/${term}`)
  .then(res => res.json())

}

export function postPhrase(word_1, word_2, word_3){

  return fetch(`${prodUrl}phrases`, {
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
  return fetch(`${prodUrl}phrases/${hash_token}`, {
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
