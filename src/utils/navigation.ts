// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Services",
    links: [
      { name: "Full-Stack Development", url: "/services" },
      { name: "DevOps & CI/CD", url: "/services" },
      { name: "Microservices Architecture", url: "/services" },
      { name: "Technical Consultation", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "Blog", url: "/blog" },
      { name: "Contact", url: "/contact" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/technity-solutions",
  x: "https://twitter.com/technity_solutions",
  github: "https://github.com/technity-solutions",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};