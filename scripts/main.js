(function(){
  'use strict';

  var baseUrl = "https://api.github.com/users/mcleanbh/";

  $(document).ready(function() {
    if (typeof githubToken !== 'undefined' ){
    $.ajaxSetup({
      headers: {'Authorization': 'token ' + githubToken }
    });
  }

  var repoTemplate = _.template($('[data-template-name=repo]').text());
  var $list = $('.repo-list');

    $.ajax(baseUrl + "repos").done(function(repos) {
      _.each(repos, function(repos){
        var repoText = renderTemplate('repo-list', {
          name: repos.name,
          language: repos.language,
          starred: repos.stargazers_count,
          forks: repos.forks_count,
        });
        $list.append(repoText);
      });
      });
    });

  function renderTemplate(name, data) {
    var $template = $('[data-template-name=' + name + ']').text();
    $.each(data, function(prop, value) {
      $template = $template.replace('<% ' + prop + ' %>', value);
    });
    return $template;
  }
})();




// _.template(templateString, [settings])
