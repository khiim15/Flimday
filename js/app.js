document.addEventListener('init', function(event) {
    var page = event.target;
  
    if (page.id === 'Hmovie') {
      page.querySelector('#pic1').onclick = function () {
        document.querySelector('#myNavigator').pushPage('../views/movie1.html')
    }
    page.querySelector('#pic2').onclick = function () {
        document.querySelector('#myNavigator').pushPage('../views/movie2.html')
    }
    page.querySelector('#pic3').onclick = function () {
        document.querySelector('#myNavigator').pushPage('../views/movie3.html')
    }
    } else if (page.id === 'page2') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
  });