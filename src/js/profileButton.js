function Profile(data){
  this.data = data;
  this.table = data.querySelector('table');
  this.content = data.querySelector('tbody[aria-hidden]');
  this.button = data.querySelector('button');

  (function(self) {
    self.button.addEventListener('click', function() {
      self.toggleVisibility();
    });
  })(this);

  this.content.isHidden = function(){
    return this.getAttribute('aria-hidden') == 'true';
  };

  this.toggleVisibility = function() {
    if (this.content.isHidden()) {
      this.hideOrShow('show');
    } else {
      this.hideOrShow('hide');
    }
  };

  this.hideOrShow = function(hideOrShow) {
    var toggleArgument;
    if (hideOrShow == 'hide') {
      this.table.setAttribute('width', this.table.offsetWidth);
      toggleArgument = 'true';
    } else {
      this.table.setAttribute('width', 'auto');
      toggleArgument = 'false';
    }
    this.content.setAttribute('aria-hidden', toggleArgument);
    this.button.setAttribute('data-content-hidden', toggleArgument);
  };
}

var profiles = [],
    p = document.querySelectorAll('article');
p.forEach(function(profile){
  profiles.push(new Profile(profile));
});
