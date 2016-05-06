"use strict";
var data = "%data%";
/*
 * bio object with a function to display it on the page
 */
var bio = {
    "name": "Laura Žumbakytė",
    "role": "web developer",
    "contacts": {
        "mobile": "+370 622 28052",
        "email": "laura.zumbakyte@gmail.com",
        "twitter": "@desinni",
        "github": "desinni",
        "location": "Vilnius, Lithuania"
    },
    "welcomeMessage": "Welcome to my profile!",
    "skills": [
        "HTML", "CSS", "programming", "JS", "Photoshop", "creativity", "responsibility"
    ],
    "biopic": "images/superwoman1.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace(data, bio.name);
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var myContacts = bio.contacts;

        var formattedMobile = HTMLmobile.replace(data, myContacts.mobile);
        var formattedEmail = HTMLemail.replace(data, myContacts.email);
        var formattedGithub = HTMLgithub.replace(data, myContacts.github);
        var formattedtwitter = HTMLtwitter.replace(data, myContacts.twitter);
        var formattedLocation = HTMLlocation.replace(data, myContacts.location);
        $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedtwitter, formattedLocation);

        var formattedBiopic = HTMLbioPic.replace(data, bio.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
        $("#header").append(formattedBiopic, formattedWelcomeMessage);

        if (bio.skills.length) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

/*
 * work object with a function to display it on the page
 */
var work = {
    "jobs": [{
        "employer": "Getafollow.com",
        "title": "Junior front-end developer",
        "dates": "December 2015 - now",
        "location": "Vilnius, Lithuania",
        "description": "Instagram tool to analyze and increase followers."
    }],
    "display": function() {
        work.jobs.forEach(function(myJob) {
            $("#workExperience").append(HTMLworkStart);

            var formattedWorkEmployer = HTMLworkEmployer.replace(data, myJob.employer);
            var formattedWorkTitle = HTMLworkTitle.replace(data, myJob.title);
            var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
            var formattedWorkDates = HTMLworkDates.replace(data, myJob.dates);
            var formattedWorkLocation = HTMLworkLocation.replace(data, myJob.location);
            var formattedworkDescription = HTMLworkDescription.replace(data, myJob.description);
            $(".work-entry:last").append(formattedWorkEmployerTitle, formattedWorkDates, formattedWorkLocation, formattedworkDescription);
        })
    }
};

/*
 * projects object with a function to display it on the page
 */
var projects = {
    "projects": [{
        "title": "P1: Build a Portfolio Site",
        "dates": "May 2016",
        "description": "You will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
        "images": ["images/rose1.jpg", "images/sunflowers1.jpg", "images/flowers1.jpg"],
        "url": "https://github.com/desinni/Udacity-p1-Build-a-Portfolio-Site.git"
    }],
    "display": function() {
        if (projects.projects.length) {
            projects.projects.forEach(function(myProject) {
                $("#projects").append(HTMLprojectStart);

                var project = HTMLprojectTitle.replace(data, myProject.title);
                var formattedProjectTitle = project.replace("#", myProject.url);
                var formattedProjectDates = HTMLprojectDates.replace(data, myProject.dates);
                var formattedProjectDescription = HTMLprojectDescription.replace(data, myProject.description);
                $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

                if (myProject.images.length) {
                    for (var pic = 0; pic < myProject.images.length; pic++) {
                        var formattedProjectImage = HTMLprojectImage.replace(data, myProject.images[pic]);
                        $(".project-entry:last").append(formattedProjectImage);
                    }
                }
            })
        }
    }
};

/*
 * education object with a function to display it on the page
 */
var education = {
    "schools": [{
        "name": "Infobalt Tech City Academy",
        "location": "Vilnius, Lithuania",
        "degree": "none",
        "majors": ["Programming in Java"],
        "dates": "2015 - 2016",
        "url": "http://itakademija.infobalt.lt/"
    }, {
        "name": "Vilnius university",
        "location": "Vilnius, Lithuania",
        "degree": "Bachelor",
        "majors": ["Mathematics"],
        "dates": "2011 - 2013",
        "url": "http://www.vu.lt/en/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "2016 - now",
        "url": "https://www.udacity.com/"
    }],
    "display": function() {
        education.schools.forEach(function(mySchool) {
            $("#education").append(HTMLschoolStart);

            var school = HTMLschoolName.replace(data, mySchool.name);
            var formattedName = school.replace("#", mySchool.url);
            var formattedDegree = HTMLschoolDegree.replace(data, mySchool.degree);
            var formattedNameDegree = formattedName + formattedDegree;
            var formattedDates = HTMLschoolDates.replace(data, mySchool.dates);
            var formattedLocation = HTMLschoolLocation.replace(data, mySchool.location);
            $(".education-entry:last").append(formattedNameDegree, formattedDates, formattedLocation);

            if (mySchool.majors.length) {
                for (var m = 0; m < mySchool.majors.length; m++) {
                    var formattedMajor = HTMLschoolMajor.replace(data, mySchool.majors[m]);
                    $(".education-entry:last").append(formattedMajor);
                }
            }
        })

        $(".education-entry:last").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(myOnlineCourse) {

            var formattedTitle = HTMLonlineTitle.replace(data, myOnlineCourse.title);
            var formattedSchool = HTMLonlineSchool.replace(data, myOnlineCourse.school);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            var formattedDate = HTMLonlineDates.replace(data, myOnlineCourse.date);
            var myURL = HTMLonlineURL.replace(data, myOnlineCourse.url);
            var formattedURL = myURL.replace("#", myOnlineCourse.url);
            $(".education-entry:last").append(formattedTitleSchool, formattedDate, formattedURL);
        })
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
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}
// Add button to the page
$("#main").append(internationalizeButton);

// Add map to the page
$("#mapDiv").append(googleMap);
