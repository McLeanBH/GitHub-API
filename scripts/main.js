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
      _.each(repos, function(repo){
        console.log(repo);
        var repoText = renderTemplate('repo-list', {
          name: repo.name,
          description: repo.description,
          updated_at: repo.updated_at,
          language: repo.language,
          stargazers_url: repo.stargazers_url,
          stargazers_count: repo.stargazers_count,
          forks_url: repo.forks_url,
          forks_count: repo.forks_count,
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
