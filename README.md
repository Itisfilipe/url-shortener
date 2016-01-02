# URL Shortener
## Created for [Free Code Camp](http://freecodecamp.com)

### User stories:

  1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
  2. When I visit that shortened URL, it will redirect me to my original link.

### Example creation usage:
```
https://url-shortener-xfilipe.herokuapp.com/new/https://www.google.com

https://url-shortener-xfilipe.herokuapp.com/new/http://freecodecamp.com/news
```

### Example creation output:
```
{
  originalURL: "http://freecodecamp.com/news",
  shortUrl: "http://url-shortener-xfilipe.herokuapp.com/KXE"
}
```
### Usage:
```
http://url-shortener-xfilipe.herokuapp.com/KXE
```
###Will redirect to:
```
http://freecodecamp.com/news
```
