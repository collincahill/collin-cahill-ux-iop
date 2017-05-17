'use strict';

function Profile(data){
  this.table = data.querySelector('table');
  this.content = data.querySelector('tbody[aria-hidden]');
  this.button = data.querySelector('button');

  (function(self) {
    self.button.addEventListener('click', function() {
      self.toggleVisibility();
    });
  })(this);

  this.toggleVisibility = function() {
    if (this.content.isHidden()) {
      this.show();
    } else {
      this.hide();
    }
  };

  this.content.isHidden = function(){
    return this.getAttribute('aria-hidden') === 'true';
  };
  this.hide = function() {
    this.table.style.width = this.table.offsetWidth + 'px';
    this.content.setAttribute('aria-hidden', 'true');
    this.button.setAttribute('data-content-hidden', 'true');
  };
  this.show = function() {
    this.table.style.width = 'auto';
    this.content.setAttribute('aria-hidden', 'false');
    this.button.setAttribute('data-content-hidden', 'false');
  };
}

var profiles = [],
    p = document.querySelectorAll('article');
p.forEach(function(profile){
  profiles.push(new Profile(profile));
});
