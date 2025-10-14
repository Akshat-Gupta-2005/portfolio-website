import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
// import { Code, Database, Palette, Mic, BookOpen, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { techStack, extraSkills } from "@/data/data";


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // const techStack = [
  //   { name: "React", icon: Code },
  //   { name: "Node.js", icon: Code },
  //   { name: "Python", icon: Code },
  //   { name: "MongoDB", icon: Database },
  //   { name: "PostgreSQL", icon: Database },
  //   { name: "TypeScript", icon: Code },
  // ];

  // const extraSkills = [
  //   { name: "Public Speaking", icon: Mic },
  //   { name: "Content Creation", icon: Palette },
  //   { name: "Technical Writing", icon: BookOpen },
  //   { name: "Team Leadership", icon: Users },
  // ];

  return (
    <section id="about" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 h-full shadow-soft hover:shadow-glow transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">My Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate developer with a keen interest in building scalable and impactful applications.
                My journey in tech started with curiosity and has evolved into a full-fledged passion for creating
                innovative solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in full-stack development with a focus on modern web technologies and cloud-native
                solutions. I'm always eager to learn new technologies and contribute to meaningful projects that
                make a difference.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-6 h-full shadow-soft hover:shadow-glow transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">Goals & Interests</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  Building scalable web applications that solve real-world problems
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  Exploring machine learning and AI integration in web apps
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  Contributing to open-source projects and the developer community
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  Continuous learning and staying updated with latest tech trends
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.03 }}
              >
                <Card className="p-4 text-right flex shadow-soft hover:shadow-glow transition-all hover:-translate-y-1">
                  {/* <Card className="p-4 text-center hover:shadow-soft transition-all hover:-translate-y-1"> */}
                  <tech.icon className="h-8 w-8 mx-4 text-primary" />
                  <p className="text-sm font-small flex mx-auto my-auto text-center">{tech.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Extra Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Beyond Coding</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {extraSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <Card className="p-4 text-center shadow-soft hover:shadow-glow transition-all hover:-translate-y-1">
                  <skill.icon className="h-8 w-8 mx-auto mb-2 text-accent" />
                  <p className="text-sm font-medium">{skill.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
