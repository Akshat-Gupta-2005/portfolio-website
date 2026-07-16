import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import { education, workExperience, hackathons } from "@/data/data";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  

  return (
    <section id="education and experience" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through education, work, and competitive achievements
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <Briefcase className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-semibold">Work Experience</h3>
          </motion.div>

          <div className="space-y-4">
            {workExperience.map((work, index) => (
              <motion.div
                key={work.role}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-6 shadow-soft hover:shadow-glow transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold">{work.role}</h4>
                      <p className="text-primary">{work.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">{work.duration}</span>
                  </div>
                  <p className="text-muted-foreground mb-3">{work.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {work.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <GraduationCap className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-semibold">Education</h3>
          </motion.div>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-6 shadow-soft hover:shadow-glow transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <p className="text-primary">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">{edu.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement) => (
                      <Badge key={achievement} variant="secondary">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hackathons */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <Trophy className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-semibold">Hackathons & Workshops</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {hackathons.map((hack, index) => (
              <motion.div
                key={hack.event}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <Card className="p-6 shadow-soft hover:shadow-glow transition-all hover:-translate-y-2 text-center">
                  <div className="mb-3">
                    <Trophy className="h-10 w-10 mx-auto text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2">{hack.event}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{hack.project}</p>
                  <Badge className="bg-gradient-primary">{hack.position}</Badge>
                  <p className="text-xs text-muted-foreground mt-2">{hack.year}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
