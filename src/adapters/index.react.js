import {debounce} from 'throttle-debounce';


const devUrl = 'http://localhost:3000/api/v1/phrases'
const prodUrl = 'https://twf-back.herokuapp.com/api/v1/phrases'



export function fetchGifs(term, number, term_number){

  return fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`)
  .then(res => res.json())
  .then(handleNoGifs)


}

export function postPhrase(word_1, word_2, word_3){

  return fetch(`${prodUrl}`, {
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
  return fetch(`${prodUrl}` + `${hash_token}`, {
      method: 'GET',
      headers:   {'content-type': 'application/json',
                  'accept': 'application/json',
                  'token': hash_token
                }
    }).then(response => response.json() )
}


function handleNoGifs(response) {

    if (response.data.length < 1) {

        response.data = [
          {id: "3ohzdYt5HYinIx13ji"},
          {id: "26FPKsfr1V9Yw4eru"},
          {id: "xTiTnIc6PO7tUWcq6A"},
          {id: "oe33xf3B50fsc"},
          {id: "VpmPTHI4ZwTm0"},
          {id: "FLo2RkzqiukkE"},
          {id: "QGzPdYCcBbbZm"},
          {id: "QzqXexkCcb0Zi"},
          {id: "3oGRFlFN8w1ARq97ji"},
          {id: "djeEV9ttVKWKfvLCw3C"},
          {id: "3ohze1eJu9ir7isDOE"},
          {id: "3oKIPpHDWIuw3BIoW4"},
          {id: "PvyOQKzATkEdG"},
          {id: "cRwkBGqJaQunm"},
          {id: "13mHK22oGcYsJa"},
          {id: "xT1XGyUR9PSfwfUeAw"},
          {id: "xT1XGUVLI4qcZl8LZe"},
          {id: "xUA7b2S7SxhM1cGdsQ"},
          {id: "l4FGAPIreAB99uMLu"},
          {id: "3o6Zt05B3aZGi6pLVu"},
          {id: "AEsUINFBsRVN6"},
          {id: "qgkv7fBPGLOb6"},
          {id: "RpIXT68Tc2FPO"},
          {id: "y2x1uWlpyOioU"},
          {id: "1qm2GETIhzRAY"}
        ]

    }

    return response;

}





function headers(){
  return {
    'content-type': 'application/json',
    'accept': 'application/json'
  }
}
