// for resumeBuilder
var i;
var bio =
    {
	"name" : "Anjali Pathak",
	"role" : "Software Developer",
	"contacts" :
	  {
		"mobile" : "+1 408-680-3666",
		"email" : "anjalipathak06@gmail.com",
		"github" : "anjalipa",
		"location" : "625 W Homestead Rd,Sunnyvale CA"
	  },
	"welcomeMessage": "To be associated with a progressive organization that gives me the scope to apply my knowledge and skills developed through my education and experience and to be part of a team that dynamically works towards the growth of the organization and self.",
	"skills": ["Java", "J2EE", "Ajax", "JavaScript", "JSP", "Servlet", "Struts", "Dojo", "JQuery", "Oracle 11G"],
	"biopic": "images/anjali.jpg",
	"tools": ["MyEclipse7.5", "DreamweaverMx6.0", "Atom", "Eclipse", "SQL server 2012", "Mysql 5.1", "SQL developer"]
};


 bio.display = function() 
 {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    $("#header").append(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").append(formattedRole);
    var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#header").append(formattedmobile);
    $("#footerContacts").append(formattedmobile);
    var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#header").append(formattedemail);
    $("#footerContacts").append(formattedemail);
    var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#header").append(formattedgithub);
    $("#footerContacts").append(formattedgithub);
    var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#header").append(formattedlocation);
    $("#footerContacts").append(formattedlocation);
    var formattedpic = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header").append(formattedpic);
    var formattedmsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedmsg);
    $("#header").append(HTMLskillsStart);
    $("#header").append(HTMLtoolsStart);
    if(bio.skills.length>0)
    {
	   for (i = 0;  i < bio.skills.length; i++) 
		{
		 var formattedSkill =  HTMLskills.replace("%data%",bio.skills[i]);
		 $("#skills").append(formattedSkill);
		 }
    }
	if(bio.tools.length>0)
     {
	    for (i = 0;  i < bio.tools.length; i++) 
		{
			var formattedTool =  HTMLtools.replace("%data%",bio.tools[i]);
            $("#tools").append(formattedTool);
	    }
	 }
  
};


 bio.display();
// ****************Education *****************

// for education details
var education =
{
	"schools": [{
		"name": "North Westren Polytechnic University-Masters",
		"location": "Fremont CA",
		"degree": "Masters",
		"majors": ["CS"],
		"dates": "jan 2016 - May 2017(Pursuing)",
		"url": "https://osc.npu.edu"
		},
		{
		"name": "Maharana Pratap College of Engineering-MCA",
		"location": "Gwalior India",
		"degree": "MCA",
		"majors": ["CS"],
		"dates": "jul 2005 - jun 2008",
		"url": "https://mpct.com"
		}],
	"onlineCourses": 
	[{
		"title": "Front-End Web Developer NanoDegree - Udacity",
		"schools": "Udacity",
		"date": "Apr 2016(Pursuing)",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree-nd001"
	}]
};



education.display = function() 
{
 	for (i = 0;  i < education.schools.length; i++) 
	{
          $("#education").append(HTMLschoolStart);
          var formattedschoolname = HTMLschoolName.replace("%data%",education.schools[i].name );
          $("#education").append(formattedschoolname);
          var formattedschoollocation = HTMLschoolLocation.replace("%data%",education.schools[i].location );
          $("#education").append(formattedschoollocation);
          var formattedschooldate = HTMLschoolDates.replace("%data%",education.schools[i].dates );
          $("#education").append(formattedschooldate);
          var formattedschoolmajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors );
          $("#education").append(formattedschoolmajor);
    }
	for (i = 0;  i < education.onlineCourses.length; i++) 
	{
		  $("#education").append(HTMLonlineClasses);
		  var formattedolctitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title );
		  $("#education").append(formattedolctitle);
		  var formattedolcschool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].schools );
		  var formattedolcdates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].date );
		  $("#education").append(formattedolcdates);
		  var formattedolcurl = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url );
		  $("#education").append(formattedolcurl);
	}
};

education.display();

// ****************************work experience***********************
var work =
{
  "jobs":
    [{
    "employer" : "Denave India Private Limited - Software Developer",
    "title"  :   "Software Develope",
    "dates" : "September 2010- April 2014",
    "description" : "I have worked as a software developer in Java technology for three and half years of experience in Denave India Private Limited, Delhi, India.",
  	"location": "Delhi India",
	"url"  : "http://denave.com"
    }]
};

work.display = function() 
  {
	  $("#workExperience").append(HTMLworkStart);
	    for (i = 0; i < work.jobs.length; i++) 
		{
		var formattedworkemployer =  HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
        $("#workExperience").append(formattedworkemployer);
        var formattedworklocation =  HTMLworkLocation.replace("%data%",work.jobs[i].location);
        $("#workExperience").append(formattedworklocation);
        var formattedworkyears =  HTMLworkDates.replace("%data%",work.jobs[i].dates);
        $("#workExperience").append(formattedworkyears);
        var formattedworkdesc =  HTMLworkDescription.replace("%data%",work.jobs[i].description);
        $("#workExperience").append(formattedworkdesc);
		}
		
 };
 
 work.display();
//   ***************projects details ********************
var projects =
{
    "projects": [
      {
        "title": "Apple Sales Management",
        "dates": "Mar 2013 – Apr 2014",
        "url"  : "http://denave.com",
        "description": "Apple Sales Management was a Web Based CRM application for field officers for creating their daily activity report, creating " + " funnel  and customers information. Application helped Area Managers to keep track with their field staff through various reports and emphasised on " + " generating leads on various Apple products and for managing sales on those products.",
        "images": ["images/apple1.jpg","images/apple2.jpg"]
      },
      {
        "title": "Nokia B2B",
        "dates": "Sep 2012 – Feb 2013",
        "url"  : "http://denave.com",
        "description": "Nokia B2B was meant for increasing the mobile sales of Nokia mobiles, this web application aimed to provide the automation of " + " all the activities for increasing the sales of products performed by Feet on Street (FOS), Program Manager (PM), Tele Sales Executive (TSE).",
        "images": ["images/nokiab2b1.jpg","images/nokiab2b2.jpg"]
      },
      {
      "title": "MyDEN",
      "dates": "Jan 2012– Aug 2012",
      "url"  : "http://denave.com",
      "description": "MyDEN web Application was facilitated to Personal Information system for internal Denave employees. All these Modules were " + " implemented through well-defined User Interface and through different Modules.Worked on module such as Exit Formalities for employee, confirmation of " + " the permanent and temporary employee by manager or Coordinator.Implemented Dojo.",
      "images": ["images/apple1.jpg","images/apple2.jpg"]
      },
      {
      "title": "Wipro Channel Sales",
      "dates": "Apr 2011 – Dec 2011",
      "url"  : "http://denave.com",
      "description": "The web application was meant to facilitate the field level FOS to file Daily Activity Report(DAR), Lead(Sales details), Customer " + " information, progress report in convenient, timely and structured manner and also facilitated the Central Program/Project Team to effectively analyse  " + " this  information to monitor and control the Sales activities.Individual role:Involved in analysis, design and development of the project.Implemented  " + " Java code for particular module such as Funnel for customer and created line items for based on funnel.",
      "images": ["images/apple1.jpg","images/apple2.jpg"]
      },
      {
      "title": "Channel Sales Product",
      "dates": "Sep 2010 – Mar 2011",
      "url"  : "http://denave.com",
      "description": "Channel Sales web application was a Standard product which demonstrated basic Sales structure of Channel Sales Domain. A channel " + " Sale product required the information of Partners, Customers, Daily activity reports (DAR), Purchase Trackers filled by TSE, FOS, PM and TL. All these " + " Entities were implemented through well-defined User Interface and through different Modules.",
      "images": ["images/apple1.jpg","images/apple2.jpg"]
      }
    ]
};


projects.display = function() 
{
   for (i = 0; i < projects.projects.length; i++) 
    {
        $("#projects").append(HTMLprojectStart);
        var formattedptitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title );
        $("#projects").append(formattedptitle);
        var formattedpdates = HTMLprojectDates.replace("%data%",projects.projects[i].dates );
        $("#projects").append(formattedpdates);
        var formattedpurl = HTMLprojectURL.replace("%data%",projects.projects[i].url);
        $("#projects").append(formattedpurl);
        var formattedpdesc = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
        $("#projects").append(formattedpdesc);
        if(projects.projects[i].images.length>0)
        {
		  for (j = 0; j < projects.projects[i].images.length; j++) 
          {
            var formattedpimage =  HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
            $("#projects").append(formattedpimage);
          }
        }
    }
};

projects.display();

$("#mapDiv").append(googleMap);

