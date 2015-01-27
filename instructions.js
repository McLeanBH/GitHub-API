// github-api-profile
//
// Description
//
// Recreate your (or my) GitHub repositories tab
//
// Objectives
//
// Learning Objectives
//
// After completing this assignment, you should:
//
// Grasp why functions are important
// Understand arrays and loops
// Be able to breakdown a complex sequence into a series of steps, use jQuery AJAX, handle callbacks and asynchronous code, and write to the DOM with JS
// Performance Objectives
//
// After completing this assignment, you should be able to effectively create a
// simple website that utilizes HTML, CSS, and JS.
//
// Details
//
// Deliverables
//
// index.html
// main.js
// main.scss
// Requirements
//
// No JSHint warnings or errors
// No JS errors in the browser
// All functions and code should work according to the following description.
// Normal Mode
//
// Recreate the UI for the Github Repos page (e.g.
// https://github.com/jacobthemyth?tab=repositories).
//
// The information from the Github API that you will display includes information
// from your github user account and repositories.
//
// Write $.ajax() requests to:
//
// Switch out your own username for in the following URLs:
//
// https://api.github.com/users/ ---> https://github.com/McLeanBH
// https://api.github.com/users//repos --> https://github.com/McLeanBH?tab=repositories
// https://api.github.com/users//starred -- >https://github.com/stars
// https://api.github.com/users//orgs --> https://github.com/TIY-GVL-FEE-2015-Jan
// After loading data from the Github API, write at least the following
// information to the DOM:
//
// name
// Ben McLean
// McLeanBH


// blog
//

// location
// location-img Greenville, South Carolina, USA

// email
//  email-img mcleanbh@gmail.com

// avatar_url
// html_url

// and list all of your repositories
// 1. https://github.com/McLeanBH/Homework, 2. https://github.com/McLeanBH/1st-Page-Coded-Day1-TIY 3. https://github.com/McLeanBH/Project----Surf-Paddle-Co.
// 4. https://github.com/McLeanBH/Surf-and-Paddle-CSS-Sassified 5. https://github.com/McLeanBH/Responsive-Columns 6. https://github.com/McLeanBH/Responsive-Forms
// 7. https://github.com/McLeanBH/Calculator 8. https://github.com/McLeanBH/homework-8-js-exercises 9. https://github.com/McLeanBH/hw9
// 10. https://github.com/McLeanBH/jQuery-Practice 11. https://github.com/McLeanBH/Etsy-Recreation 12. https://github.com/McLeanBH/GitHub-API



// Hard Mode
//
// Recreate the Contributions tab




// ------------------------------------------------------------------------------------------
// var user = "jgoley",
//     starredData = "/starred";
//
// // Gets text of html script tags injects data based on passed object then appends created html to apprpriate html element
// function renderTemplate(data, scriptID, whereTo) {
//     _.each(data, function(i) {
//         var templateFunction = _.template($("#" + scriptID).text());
//         var renderedTemplate = templateFunction(i);
//         $(whereTo).append(renderedTemplate);
//     });
// }
//
// // Parses data based on passed api and filters or sorts based on needs
// function parseData(api, scriptID, whereTo, sort) {
//
//     var apiPath = api,
//         returnData;
//     if (api == "profile") apiPath = "";
//     $.getJSON("https://api.github.com/users/" + user + apiPath).done(function(data) {
//         // Get data for Profile
//         if (api == "profile") {
//             //Get Starred
//             $.getJSON("https://api.github.com/users/" + user + starredData).done(function(stars) {
//                 var starred = stars.length;
//                 data.joinDate = moment(data.created_at).format('MMM D, YYYY');
//                 data.starred = starred;
//                 returnData = [data];
//
//                 // Render template for page title
//                 renderTemplate(returnData, "page-title", "title");
//                 // Render template header login info
//                 renderTemplate(returnData, "header-user-info", ".header-user");
//                 // Render aside template and add data
//                 renderTemplate(returnData, scriptID, whereTo);
//             });
//         }
//
//         // Get data for Organizations
//         else if (api == "/orgs") {
//             returnData = _.map(data, function(org) {
//                 return {
//                     orgName: org.login,
//                     orgUrl: org.url,
//                     orgImage: org.avatar_url,
//                 };
//             });
//             // Render the Repo template
//             renderTemplate(returnData, scriptID, whereTo);
//         }
//
//         // Get data for Repos
//         else if (api == "/repos") {
//             // Clear contents of Repo list but only for filtering
//             if(sort != "starred" && sort != "contributions")$(".repo-list").html("");
//             returnData =
//                 _.chain(data)
//                 .sortBy(function(e) {
//                     if (sort == "starred") return e.stargazers_count;
//                     else return e.pushed_at;
//                 })
//                 .reverse()
//                 .filter(function(e) {
//                     if (sort == "all" || sort == "starred") return e;
//                     else if (sort == "public") return !e.private;
//                     else if (sort == "private") return e.private;
//                     else if (sort == "forks" || sort == "contributions") return e.fork;
//                     else if (sort == "mirrors") return e.mirror_url;
//                     else if (sort == "sources") return !e.fork;
//                 })
//                 .map(function(e) {
//                     return {
//                         title: e.name,
//                         url: e.html_url,
//                         date: moment(e.pushed_at).fromNow(),
//                         lang: e.language || "",
//                         fork: e.fork,
//                         html_url: e.html_url,
//                         full_name: e.full_name,
//                         forks: e.forks_count,
//                         forksUrl: e.forks_url,
//                         stars: e.stargazers_count,
//                         starsUrl: e.stargazers_url,
//                         description: e.description,
//                         user: e.owner.login
//                     };
//                 }).value();
//
//             if(sort=="starred" || sort == "contributions") returnData = _.first(returnData, 5);
//
//             // Render the Repo template
//             renderTemplate(returnData, scriptID, whereTo);
//         }
//
//     });
// }
//
// function showContributions(){
//         parseData("/repos", "popular-repos-template", ".popular-repos", "starred");
//         parseData("/repos", "contributed-to-template", ".contributed-repos", "contributions");
// }
//
//
// // Show or hide Main content based on the selected tab
// function mainContent(content){
//     if(content == "contributions"){
//         $(".repo-list").hide().prev().hide();
//         if(!$(".contributions-content").hasClass("full")) showContributions();
//         $(".contributions-content").addClass("full");
//         $(".contributions-content").toggleClass("hidden");
//     }
//     else if(content == "repositories"){
//         $(".repo-list").show().prev().show();
//         $(".contributions-content").addClass("hidden");
//         //showPublicActivity();
//     }
//     if(content == "public-activity"){
//         $(".repo-list").hide().prev().hide();
//         $(".contributions-content").addClass("hidden");
//         //showPublicActivity();
//     }
// }
//
// /*----------------------------------------------------
// Add data to html using the api page, id of template and element to append
// parseData(api page, )
// ----------------------------------------------------*/
//
// // Get profile data and add it to aside and header
// parseData("profile", "profile", ".profile-main");
//
// // Organizations Data
// parseData("/orgs", "organizations", ".orgs-avatars");
//
// // Add list of all repos sorted by most recently pushed
// parseData("/repos", "repos", ".repo-list", "all");
//
//
// // Click Events
// $(function() {
//     $(".reduce a").on("click", function(e) {
//         $(this).addClass("selected").parent().siblings().find("a").removeClass("selected");
//         parseData("/repos", "repos", ".repo-list", $(this).attr("id"));
//         e.preventDefault();
//     });
//
//     $(".tabs li a").on("click", function(e) {
//         $(this).addClass("selected").parent().siblings().find("a").removeClass("selected");
//         mainContent($(this).attr("id"));
//         e.preventDefault();
//     });
//
//     $(".new").on("click", function(e){
//         $(".new-menu").toggleClass("hidden");
//         e.preventDefault();
//         $(this).find("::before").hide();
//     });
//
// });


// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <title></title>
//     <link href="css/styles.css" rel="stylesheet">
//     <link rel="icon"
//       href="images/favicon.png" type="image/png">
//   </head>
//   <body>
//     <header>
//       <div class="header-container">
//         <a href="https://github.com" class="cat"><h1><span>Github</span></h1></a>
//         <form>
//           <input type="text" placeholder="Search Github">
//         </form>
//         <ul class="header-nav">
//           <li><a href="https://github.com/explore">Explore</a></li>
//           <li><a href="https://gist.github.com/">Gist</a></li>
//           <li><a href="https://github.com/blog">Blog</a></li>
//           <li><a href="https://help.github.com/">Help</a></li>
//         </ul>
//         <div class="header-right">
//           <div class="header-user">
//           </div>
//           <ul class="header-admin">
//             <li class="new-wrap"><a href="" class="new bubble-bottom" bubble="Create new..."><span></span>
//               </a>
//               <ul class="new-menu hidden">
//                 <li><a href="#" class="new-menu-repo">New Repository</a></li>
//                 <li><a href="#" class="new-menu-org">New Organization</a></li>
//               </ul>
//             </li>
//             <li><a href="https://github.com/notifications" class="notification bubble-bottom" bubble="Notifications"><span class="inBox"></span><span class="dot"></span></a></li>
//             <li><a href="https://github.com/settings/profile" class="admin bubble-bottom" bubble="Admin"><span></span></a></li>
//             <li><a href="#" class="sign-out  bubble-bottom" bubble="Sign out"><span></span></a></li>
//           </ul>
//         </div>
//       </div>
//     </header>
//     <div class="wrapper">
//       <div class="main-container">
//         <section class="profile">
//           <div class="profile-main"></div>
//           <div class="profile-orgs">
//             <h3>Organizations</h3>
//             <ul class="orgs-avatars"></ul>
//           </div>
//         </section><!--
//         --><section class="main-content">
//           <div class="tabs">
//             <a href="https://github.com/account" class="edit-profile button">Edit profile</a>
//             <ul>
//               <li><a href="#" id="contributions" class="contributions">Contributions</a></li>
//               <li><a href="#" id="repositories" class="repos selected">Repositories</a></li>
//               <li><a href="#" id="public-activity" class="activity">Public activity</a></li>
//             </ul>
//           </div>
//           <div class="search-reduce">
//             <form action="">
//               <input type="text" placeholder="Find a repository...">
//               <input type="submit" value="Search" class="button">
//             </form>
//             <div class="search-reduce-right">
//               <a href="" class="new-repo button">New</a>
//               <ul class="reduce">
//                 <li><a href="#" class="selected" id="all">All</a></li>
//                 <li><a href="#" id="public">Public</a></li>
//                 <li><a href="#" id="private">Private</a></li>
//                 <li><a href="#" id="sources">Sources</a></li>
//                 <li><a href="#" id="forks">Forks</a></li>
//                 <li><a href="#" id="mirrors">Mirrors</a></li>
//               </ul>
//             </div>
//           </div>
//           <ul class="repo-list"></ul>
//           <div class="contributions-content column-container hidden">
//             <div class="column">
//               <div class="data-block">
//                 <h2>Popular repositories</h2>
//                 <ul class="popular-repos linked-list">
//
//                 </ul>
//               </div>
//             </div><!--
//            --><div class="column ">
//               <div class="data-block">
//                 <h2>Repositories contributed to</h2>
//                 <ul class="contributed-repos linked-list">
//
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div class="public-activity"></div>
//         </section>
//       </div>
//       <footer>
//         <a href="" class="cat"></a>
//         <ul class="info-links">
//           <li><a href="">Status</a></li>
//           <li><a href="">API</a></li>
//           <li><a href="">Training</a></li>
//           <li><a href="">Shop</a></li>
//           <li><a href="">Blog</a></li>
//           <li><a href="">About</a></li>
//         </ul>
//         <div class="legal">
//           <p>&copy; 2014 GitHub, Inc.</p>
//           <ul>
//             <li><a href="">Terms</a></li>
//             <li><a href="">Privacy</a></li>
//             <li><a href="">Security</a></li>
//             <li><a href="">Contact</a></li>
//           </ul>
//         </div>
//       </footer>
//     </div>
//
// <!-- ## Templates ## -->
//   <!-- Profile Info template -->
//   <script id="profile" type="text/template">
//     <div class="profile-avatar block">
//       <a href="https://github.com/account" class="avatar-link bubble-bottom" bubble="Change your avatar"><img src="<%= avatar_url %>" class="avatar" /></a>
//       <h1><%= name %></h1>
//       <h2><%= login %></h2>
//     </div>
//     <ul class="profile-info block">
//       <% if (company) { %>
//       <li class="company"><span><%= company %></span></li>
//       <% } %>
//       <li class='location'><span><%= location %></span></li>
//       <li class='email'><span><a href="mailto:<%= email %>"><%= email %></a></span></li>
//       <li class='blog'><span><a href="http://<%= blog %>"><%= blog %></a></span></li>
//       <li class='join-date'><span>Joined on <%= joinDate %></span></li>
//     </ul>
//     <ul class="profile-activity block">
//       <li>
//         <a href="https://github.com/<%=login %>/followers">
//           <span class='number'><%= followers %></span>
//           <span>Followers</span>
//         </a>
//       </li><!--
//      --><li>
//         <a href="https://github.com/<%=login %>/stars">
//           <span class='number'><%= starred %></span>
//           <span>Starred</span>
//         </a>
//       </li><!--
//      --><li>
//         <a href="https://github.com/<%=login %>/following">
//           <span class='number'><%= following %></span>
//           <span>Following</span>
//         </a>
//       </li>
//     </ul>
//   </script>
//
//   <!-- Organizations Template -->
//   <script id="header-user-info" type="javascript/template">
//     <a href="http://github.com/<%= login %>"><img src="<%= avatar_url %>" /><%= user %></a>
//   </script>
//
//   <!-- Organizations Template -->
//   <script id="organizations" type="text/template">
//     <li>
//       <a href="http://github.com/<%= orgName  %>" bubble="<%=orgName %>" class="bubble-top">
//         <img src="<%= orgImage %>" />
//       </a>
//     </li>
//   </script>
//
//   <!-- Repo Template -->
//   <script id="repos" type="text/template">
//     <li class='repo'>
//       <ul class='repo-metadata'>
//         <li class="code-type">
//           <%= lang %>
//         </li>
//         <li>
//           <a href="<%= starsUrl %>" class="stars bubble-bottom" bubble="Stargazers"><span class="icon"></span><span><%= stars %></span></a>
//         </li>
//         <li>
//           <a href="<%= forksUrl %>" class="forks bubble-bottom" bubble="Forks"><span class="icon"></span><span><%= forks %></span></a>
//         </li>
//       </ul>
//       <h2><a href="<%= url %>" class="repo-title"><%= title %></a></h2>
//       <% if (fork) { %>
//         <p class="forked">forked from <a href="<%= html_url %>" class="forked-from"><%=full_name %></a></p>
//       <% } %>
//       <p class="description"><%= description %></p>
//       <p class="updated">Updated <%= date %></p>
//
//       <canvas class="graph bars" data-color-all="#F5F5F5" data-source="http://github.com/<%= user %>/<%= title %>/graphs/owner_participation" height="80" width="640"></canvas>
//     </li>
//   </script>
//
//   <script id="page-title" type="text/template">
//     <%=login %> (<%=name %>)
//   </script>
//
//   <script id="popular-repos-template" type="text/template">
//     <li><a href="<%= html_url %>"
//         <% if (fork){ %> class="popular-fork" <% } else { %> class="popular-repo" <% } %>>
//       <span class="title"><%=title %></span>
//       <span class="stars"><%=stars %></span>
//       <span class="description"><%=description %></span>
//     </a></li>
//
//   </script>
//
//   <script id="contributed-to-template" type="text/template">
//     <li><a href="<%= html_url %>" class="popular-repo">
//       <span class="title"><%=title %></span>
//       <span class="stars"><%=stars %></span>
//       <span class="description"><%=description %></span>
//     </a></li>
//
//   </script>
//
//   <script src="//code.jquery.com/jquery-2.1.1.min.js"></script>
//   <script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js"></script>
//   <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.2/moment.min.js" type="text/javascript"></script>
//   <script src="js/token.js"></script>
//   <script src="js/main.js"></script>
// </body>
// </html>
