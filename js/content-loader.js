document.addEventListener('DOMContentLoaded', function () {
  var content = window.SITE_CONTENT || {};

  document.querySelectorAll('[data-key]').forEach(function (el) {
    var key = el.getAttribute('data-key');
    if (content[key] !== undefined) {
      el.textContent = content[key];
    }
  });

  document.querySelectorAll('[data-alt-key]').forEach(function (el) {
    var key = el.getAttribute('data-alt-key');
    if (content[key] !== undefined) {
      el.setAttribute('alt', content[key]);
    }
  });
});
