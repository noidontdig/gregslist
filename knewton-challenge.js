//
// Knewton Challenge JS: "Improve the user's experience"
//

fixDOM();
makeMoreAccessible();
useLongCityNames();

function fixDOM () {
  var center = document.getElementById('center');
  var tr = document.querySelector('#container tr');
  tr.insertBefore(center, tr.firstChild);

  var postLinks = document.getElementById('postlks');
  var topban = document.getElementById('topban');
  var search = document.getElementById('search');
  topban.appendChild(postLinks);
  topban.appendChild(search);

  var br = document.querySelector('#search br');
  br.parentNode.removeChild(br);

  var logo = document.getElementById('logo');
  topban.insertBefore(logo, topban.firstChild);
}

function makeMoreAccessible () {
  var skip = '<a href="#post" id="skip" class="skip">Skip to main content</a>';
  document.querySelector('.body').insertAdjacentHTML('beforebegin', skip);

  document.querySelector('#search div').outerHTML = '<label for="query">search gregslist</label>'
  document.getElementById('query').setAttribute('placeholder', 'search');
  document.getElementById('go').setAttribute('value', 'submit');
}

function useLongCityNames () {
  var cities = document.querySelectorAll('#topban .sublinks a');
  for (var i = 0; i < cities.length; i++) {
    cities[i].innerText = cities[i].getAttribute('title');
  }
}
