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
          name: "Executive Committee",
          link: "/executive-commitee",
        },
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
  
   const Branches = [
     {
         name: 'Computer Science & Engg.',
         value: 'CSE'
     },
     {
         name: 'Electronics & Communication Engg.',
         value: 'ECE'
     },
    {
        name: 'Electrical Engineering',
        value: 'EE'
    },
    {
        name: 'Mechanical Engineering',
        value: 'ME'
    },
    {
        name: 'Civil Engineering',
        value: 'CE'
    },
    {
        name: 'Instrumentation',
        value: 'Instru.'
    }
  
]
const Committee = [
  {
    name: "Dr. P. V. Washimkar",
    Designation: "ASSOCIATE PROFESSOR",
    Role:"President",
    Experience: "26 Years",
    // Qulification:"B.E., M. Tech., Ph.D.",
    email: "prashantwashimkar@gcoec.ac.in",
    image: "/commitee/principle.jpeg"
  },
 
  {
    name: "Chilbule Pawan Vinayak",
    Role:"Faculty Incharge",
    Designation: "ASSISTANT PROFESSOR",
    Qualification: "B.E, M.Tech",
    Experience: "12 Years",
    email: "pavan_chilbule@yahoo.com",
    image: "/commitee/chilbule.jpg"
  },
  {
    name: "Prof. Nishant M. Yewale",
    Role:"Secretary",
    Designation: "Assistant Professor",
    Qualification: "B.E. Instrumentation Engg. M. Tech.",
    Experience: "19 Years",
    email: "nishantyewale78@gmail.com",
    image: "/commitee/Yewale.jpg"
  },
  {
    name: "KAPOOR DHIRAJ PRAKASH",
    Role:"Treasurer",
    Designation: "ASSISTANT PROFESSOR",
    Qualification: "B.E, M.Tech",
    Experience: "25 Years",
    email: "dhirajkapoor@gcoec.ac.in",
    image: "/commitee/img-kapoor1.png"
  },
  {
    name: "Prof. Kranti S. Bhokare",
    Role:"Member-1",
    Designation: "Assistant Professor",
    Qualification: "B.E. Instrumentation Engg. M. Tech. (EMS)",
    Experience: "20 Years",
    email: "kranti3@rediffmail.com",
    image: "/commitee/Kranti.jpg"
  },
  {
    name: "Ms. Sharana Tarannum",
    Role:"Member-2",
    Designation: "Assistant Professor",
    Qualification: "M.Tech.(Electrical Power Systems)",
    Experience: "6 years",
    email: "sharana.sheikh@gmail.com",
    image: "/commitee/sharana.jpg"
  },
];


  export { footerConfig, NavLinks,Branches,Committee };