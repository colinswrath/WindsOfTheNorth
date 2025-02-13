(function(document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');
  let scrollPosition = 0;

  document.addEventListener('click', function(e) {
    var target = e.target;
    if (target === checkbox || target === toggle) {
      
      if(target === toggle){
        scrollPosition = window.scrollY;
      }

      checkbox.checked = !checkbox.checked;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'auto'
      });
 
      return;
    }
    
    if (!checkbox.checked || sidebar.contains(target)) return;
  }, false);

})(document);
