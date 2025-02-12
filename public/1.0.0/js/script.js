(function(document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  document.addEventListener('click', function(e) {
    var target = e.target;
    if (target === checkbox || target === toggle) {
      checkbox.checked = !checkbox.checked;
      return;
    }

    if (!checkbox.checked || sidebar.contains(target)) return;
  }, false);
})(document);
