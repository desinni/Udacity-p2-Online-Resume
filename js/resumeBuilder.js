/*
* bio object with a function to display it on the page
*/
var bio = {
  "name": "Laura Žumbakytė",
  "role": "web developer",
  "contacts": {
    "mobile" : "+370 622 28052",
    "email" : "laura.zumbakyte@gmail.com",
    "twitter" : "@desinni",
    "github" : "desinni",
    "location" : "Vilnius, Lithuania"
  },
  "welcomeMsg": "Welcome to my profile!",
  "skills": [
    "HTML", "CSS", "programming", "JS", "Photoshop", "creativity", "responsibility"
  ],
  "bioPic": "images/superwoman1.jpg",
  "display": function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);

    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedtwitter);
    $("#footerContacts").append(formattedtwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);

      for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
      }
    }
  }
};

/*
* work object with a function to display it on the page
*/
var work = {
  "jobs": [
    {
      "employer": "Getafollow.com",
      "title": "Junior front-end developer",
      "dates": "December 2015 - now",
      "location": "Vilnius, Lithuania",
      "description": "Instagram tool to analyze and increase followers."
    }
  ],
  "display": function() {
    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);

      var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
      $(".work-entry:last").append(formattedWorkEmployerTitle);

      var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedWorkDates);

      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedWorkLocation);

      var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedworkDescription);
    }
  }
};

/*
* projects object with a function to display it on the page
*/
var projects = {
  "projects": [
    {
      "title": "P1: Build a Portfolio Site",
      "dates": "May 2016",
      "description": "You will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
      "images": ["images/rose1.jpg", "images/sunflowers1.jpg", "images/flowers1.jpg"],
      "url": "https://github.com/desinni/Udacity-p1-Build-a-Portfolio-Site.git"
    }
  ],
  "display": function() {
    if (projects.projects.length > 0){
      for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var myProject = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedProjectTitle = myProject.replace("#", projects.projects[project].url);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[project].images.length > 0) {
          for (image in projects.projects[project].images) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedProjectImage);
          }
        }
      }
    }
  }
};

/*
* education object with a function to display it on the page
*/
var education = {
  "schools": [
    {
      "name": "Infobalt Tech City Academy",
      "location": "Vilnius, Lithuania",
      "degree": "none",
      "major": ["Programming in Java"],
      "dates": "2015 - 2016"
    },
    {
      "name": "Vilnius university",
      "location": "Vilnius, Lithuania",
      "degree": "Bachelor",
      "major": ["Mathematics"],
      "dates": "2011 - 2013"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "2016 - now",
      "url": "udacity.com"
    }
 ],
 "display": function() {
   for (school in education.schools) {
     $("#education").append(HTMLschoolStart);

     var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
     var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
     var formattedNameDegree = formattedName + formattedDegree;
     $(".education-entry:last").append(formattedNameDegree);

     var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
     $(".education-entry:last").append(formattedDates);

     var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
     $(".education-entry:last").append(formattedLocation);

     if (education.schools[school].major.length > 0) {
       for (major in education.schools[school].major){
         var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
         $(".education-entry:last").append(formattedMajor);
       }
     }
   }

   $(".education-entry:last").append(HTMLonlineClasses);

   for (course in education.onlineCourses){
     var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
     var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
     var formattedTitleSchool = formattedTitle + formattedSchool;
     $(".education-entry:last").append(formattedTitleSchool);

     var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
     $(".education-entry:last").append(formattedDates);

     var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
     $(".education-entry:last").append(formattedURL);
   }
 }
};

/*
* display objects on the page
*/
bio.display();
work.display();
projects.display();
education.display();

// Function for internationalize button
function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}
// Add button to the page
$("#main").append(internationalizeButton);

// Add map to the page
$("#mapDiv").append(googleMap);
