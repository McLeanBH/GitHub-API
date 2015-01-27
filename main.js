(function(){
  'use strict';

  var repoResults = rawRepoData;
  var userResults = rawUserData;

  $(document).ready(function(){

    var $list = $('.repo-list');

    repoResults.forEach(function(repo){
      var repoText = renderTemplate('repo-list', {
        name: repo.name,
        language: repo.language,
        starred: repo.stargazers_count,
        forks: repo.forks_count,
      });
      $list.append(repoText);
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
