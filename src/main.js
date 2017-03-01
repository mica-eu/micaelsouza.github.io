(function ($) {
 'use strict';

 var // DOM cache
  $name = $('.name'),
  $avatar = $('.avatar'),
  $bio = $('.bio');

// social networks
 var social = {
   github: 'micaelsouza'
 };

 $.get('https://api.github.com/users/' + social.github)
  .done(function (data) {
    $name.text(data.name);
    $avatar.attr('src', data.avatar_url);
    $bio.text(data.bio);
  });

})(jQuery);
