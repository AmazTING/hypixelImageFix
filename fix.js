images = document.querySelectorAll('img.bbImage')
for (i = 0; i < images.length; i++) {
    if (images[i]['src'].includes("/proxy.php")) {
        images[i]['src'] = images[i].dataset['url']
    }
}