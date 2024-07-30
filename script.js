// Get the navigation element
const navigation = document.getElementById('navigation');

// Change navigation background color on scroll
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    navigation.style.backgroundColor = '#555';
  } else {
    navigation.style.backgroundColor = '#333';
  }
});

// Change menu item color on hover
const menuLinks = document.querySelectorAll('#navigation a');
menuLinks.forEach(function(link) {
  link.addEventListener('mouseover', function() {
    this.style.color = '#ff0';
  });
  link.addEventListener('mouseout', function() {
    this.style.color = '#fff';
  });
});
