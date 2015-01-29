(function(){
  'use strict';

  var baseUrl = "https://api.github.com/users/mcleanbh/";
  var repoUrl = "https://api.github.com/users/mcleanbh/repos/";
  var starsUrl = "https://api.github.com/users/mcleanbh/starred/";
  var orgUrl = "https://api.github.com/users/mcleanbh/orgs/";

  $(document).ready(function(){
    if (typeof githubToken !== 'undefined' ){
    $.ajaxSetup({
      headers: {'Authorization': 'token ' + githubToken }
    });
  }

  var renderUserTemplate = _.template($('[data-template-name=user]').text());
  var $sidebar = $('.profile-info');
    $.ajax(baseUrl + "").done(function(sidebars) {
        console.log(sidebars);
        var sidebarText = renderTemplate('profile-info', {
        avatar: sidebars.avatar_url,
        name: sidebars.name,
        user: sidebars.login,
        company: sidebars.company,
        location: sidebar.location,
        joined: moment(sidebars.created_at).format('MMM Do, YYYY'),
        followers: sidebars.followers,
        following: sidebars.following,
        organizations: sidebars.organizations_url,
      });
      $sidebar.append(sidebarText);
    });

// console.log(userTemplate(user)); /// **CANNOT FIGURE OUT WHAT'S GOING ON HERE (I.E. what I'm missing to populate sidebar with user profile data.)
// console.log(user.name, user.blog, user.location, user.email, user.avatar_url, user.html_url);
// **DUE TO THIS, WILL TRY TO USE API W/O UNDERSOCRE, AND THEN CORRECT LATER

// var userTemplate = $('.profile-info');

//     var userText = renderTemplate('.profile-info', {
//       name: user.name,
//       blog: user.blog,
//       location: user.location,
//       email: user.email,
//       avatar_url: user.avatar_url,
//       html_url: user.html_url,
//     });
//     $sidebar.append$('.profile-info');
//   });
// });
// _.template(templateString, [settings])

  var repoTemplate = _.template($('[data-template-name=repo]').text());
  var $repo = $('.repo-list');
    $.ajax(baseUrl + "repos").done(function(repos) {
      _.each(repos, function(repo){
        console.log(repo);
        var repoText = renderTemplate('repo-list', {
          name: repo.name,
          description: repo.description,
          updated_at: moment(repo.updated_at).fromNow(),
          language: repo.language,
          stargazers_url: repo.stargazers_url,
          stargazers_count: repo.stargazers_count,
          forks_url: repo.forks_url,
          forks_count: repo.forks_count,
        });
        $repo.append(repoText);
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
