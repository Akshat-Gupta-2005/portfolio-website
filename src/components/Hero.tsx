import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary shadow-glow"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AKSHAT GUPTA
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4">
              Software Engineer | AI & ML Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed">
              Computer Science Undergraduate at VIT Vellore | Building Intelligent Web Apps, Machine Learning Models, and AI Automation Workflows
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-5 justify-center mb-16"
          >
            <Button
              onClick={scrollToProjects}
              className="bg-gradient-primary hover:shadow-glow transition-all text-lg md:text-xl py-6 px-8 h-auto rounded-xl"
            >
              View My Work
            </Button>
            <a href="/Akshat_Gupta_Resume.pdf" download>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg md:text-xl py-6 px-8 h-auto rounded-xl"
              >
                <Download className="mr-3 h-6 w-6" />
                Download Resume
              </Button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex gap-5"
          >
            {/* GitHub */}
            <a
              href="https://github.com/Akshat-Gupta-2005"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
            >
              <Button variant="ghost" size="icon" className="w-14 h-14 hover:text-primary transition-transform hover:scale-110">
                <Github className="h-7 w-7" />
              </Button>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/akshatgupta2005/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
            >

              <Button variant="ghost" size="icon" className="w-14 h-14 hover:text-primary transition-transform hover:scale-110">
                <Linkedin className="h-7 w-7" />
              </Button>
            </a>
            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/Akshat-Gupta-2005"
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode Profile"
            >
              <Button variant="ghost" size="icon" className="w-14 h-14 hover:text-primary transition-transform hover:scale-110">
                <Trophy className="h-7 w-7" />
              </Button>
            </a>
            <a
              href="mailto:gemini.akshatgupta@gmail.com"
              title="Send Email"
            >
              <Button variant="ghost" size="icon" className="w-14 h-14 hover:text-primary transition-transform hover:scale-110">
                <Mail className="h-7 w-7" />
              </Button>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="h-6 w-6 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
