 const footerConfig = [
    {
      title: "Useful Links",
      links: [
        { text: "GCOEC Chandrapur", href: "https://www.gcoec.ac.in/gcoec/" },
        { text: "GCOEC Chandrapur History", href: "/gcoec-history" },
        { text: "Search Jobs", href: "/jobs" },
        { text: "Look for Internships", href: "/internships" },
        { text: "Web Team", href: "/team" },
        { text: "Admin Portal", href: "https://www.google.com" },
      ],
    },
    {
      title: "Must Check",
      links: [
        { text: "Event Gallery", href: "/events" },
        { text: "Notable Alumni", href: "/notableAlumni" },
        { text: "Upcoming Events", href: "/events" },
        { text: "Success Stories", href: "/success-stories" },
        { text: "Experiences", href: "/experiences" },
      ],
    },
  ];
  
  const NavLinks = [
    {
      name: "Home",
      link: "/",
    },
   
    {
      name: "Alumni Database",
      children: [
        {
          name: "UG",
          link: "/alumni-database?role=ug",
        },
        {
          name: "PG",
          link: "/alumni-database?role=pg",
        },
        {
          name: "Faculty/Staff",
          link: "/alumni-database?role=faculty-staff",
        },
      ]
    },

    {
      name: "Alumni Speaks",
      children: [
        {
          name: "Blogs",
          link: "/blogs",
        },
        {
          name: "Experiences",
          link: "/experiences",
        },
        {
          name: "Jobs via Alumni",
          link: "/jobs",
        },
        {
          name: "Internship via Alumni",
          link: "/internships",
        },
      ]
    },
    {
      name: "Alumni Meets",
      children: [
        {
          name: "Next Alumni Meet",
          link: "/alumni-meet",
        },
        {
          name: "Previous Meets",
          link: "/prev-alumni-meets",
        },
      ]
    },
    {
      name: "About GCOEC",
      children: [
        {
          name: "About GCOEC",
          link: "/about",
        },
        {
          name: "History of GCOEC",
          link: "/history",
        },
        {
          name: "Notable Alumni",
          link: "/notableAlumni",
        },
        {
          name: "Gallery",
          link: "/gallery",
        }
      ]
    },
   
    {
      name: "Dashboard",
      link: "/profile",
    }
  ];
  
  export { footerConfig, NavLinks };