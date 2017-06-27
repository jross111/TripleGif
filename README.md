# Three Word Fraiser
Ever found it hard to express yourself using mere words?
 Simply type 3 words and this app will suggest how you could get your message across in Gif form.

Made using the lovely open developer API from [Giphy](https://giphy.com/)

## Front End Client
###Make a phrase:
![Three Word Fraiser](http://preview.ibb.co/bYG0nk/Screen_Shot_2017_06_27_at_11_40_15.png)

###Send them to your friends/enemies:
![Three Word Fraiser](http://preview.ibb.co/meZmSk/Screen_Shot_2017_06_27_at_11_40_26.png)

[Frontend Github Link](https://github.com/jonathanandrewsuk/twf-front)

## Associated API

We are pulling from the GIPHY API for the content, but there a couple of edgecases that require going through our own server first:


### StopWords

Some words like "I", "and", "the" can return GIFs that just don't make sense. So when this request comes in the TWF backend can jump in and provide some curated suggestions.

[API Github Link](https://github.com/twf-back)

## Tech

Reactjs Front End (with ReactStrap styling), Rails API Backend

## License

This project is licensed under the MIT License

## Acknowledgments

* Giphy [THANKS!](https://giphy.com/gifs/mailchimp-thanks-applause-26BGM86XngBjKOqXu)
