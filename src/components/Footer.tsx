import { Heart, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/arpita-singh-015989356",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/itz_arpita2304/",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:arpita@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="font-display font-bold text-2xl text-gradient inline-block mb-4"
            >
              Arpita Dev Studio ✨
            </a>
            <p className="text-muted-foreground">
              Tech Student & Aspiring Frontend Developer based in Uttar Pradesh, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Connect With Me
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/50 mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Arpita Singh. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Arpita
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
