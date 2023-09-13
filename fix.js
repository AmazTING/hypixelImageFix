images = document.querySelectorAll('img.bbImage')
for (i = 0; i < images.length; i++) {
    images[i]['src'] = images[i].dataset['url']
}