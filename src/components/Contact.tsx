import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Download } from "lucide-react";
// import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  // useEffect(() => {
  //   emailjs.init("CvP7oXOxGYZ6klsvk");
  // }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_name: "Arpita",
        to_email: "arpita@example.com",
        from_name: formData.name,
        from_email: formData.email,
        title: `New message from ${formData.name}`,
        message: formData.message,
      };

      console.log("Sending email with params:", templateParams);

      // const result = await emailjs.send(
      //   "service_mjyxwe9", // Your Service ID
      //   "service_mjyxwe9", // Your Template ID
      //   templateParams
      // );

      console.log("Email sent successfully:");

      toast({
        title: "Message sent! 🎉",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      console.log("Error details:", errorMessage);
      
      toast({
        title: "Error sending message",
        description: `Failed to send: ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "arpita231220@gmail.com",
      href: "mailto:arpita@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 91985 40422",
      href: "tel:+919198540422",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, Karnataka",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/arpita-singh-015989356",
      color: "hover:bg-[#0077B5]/20 hover:text-[#0077B5]",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/itz_arpita2304/",
      color: "hover:bg-pink-500/20 hover:text-pink-500",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-lavender/30 text-secondary-foreground text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Contact
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
            Let's Connect! 💬
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Info Cards */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-card/50 border border-border/50"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-medium text-sm sm:text-base hover:text-primary transition-colors truncate block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium text-sm sm:text-base">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                Connect on Social
              </h4>
              <div className="flex gap-2 sm:gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center transition-all ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-coral/10 to-lavender/10 border border-border/50">
              <h4 className="font-display font-semibold text-base sm:text-lg mb-2">
                Want to know more?
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Download my resume for a detailed overview of my skills and experience.
              </p>
              <Button
                asChild
                className="rounded-full gradient-button text-primary-foreground hover:opacity-90 shadow-soft text-sm sm:text-base h-10 sm:h-11 w-full sm:w-auto"
              >
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-5 sm:p-6 md:p-8 rounded-3xl bg-card border border-border/50 shadow-card order-1 lg:order-2">
            <h3 className="font-display font-semibold text-xl sm:text-2xl mb-5 sm:mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Lets Connect"
                  required
                  className="rounded-xl bg-background/50 h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="rounded-xl bg-background/50 h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Arpita, I'd like to..."
                  rows={5}
                  required
                  className="rounded-xl bg-background/50 resize-none text-sm sm:text-base"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full gradient-button text-primary-foreground hover:opacity-90 shadow-glow h-11 sm:h-12 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
