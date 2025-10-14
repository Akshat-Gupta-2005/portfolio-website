import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { categories, projects } from "@/data/data";


const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");

  // const categories = ["All", "Web Apps", "Machine Learning", "Mobile Apps", "Open Source"];

  // const projects = [
  //   {
  //     title: "E-Commerce Platform",
  //     description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
  //     category: "Web Apps",
  //     tech: ["React", "Node.js", "MongoDB", "Stripe"],
  //     github: "#",
  //     demo: "#"
  //   },
  //   {
  //     title: "AI Chatbot",
  //     description: "Intelligent chatbot using natural language processing to provide customer support and automated responses.",
  //     category: "Machine Learning",
  //     tech: ["Python", "TensorFlow", "FastAPI", "React"],
  //     github: "#",
  //     demo: "#"
  //   },
  //   {
  //     title: "Task Management App",
  //     description: "Mobile-first task management application with real-time sync, collaborative features, and notifications.",
  //     category: "Mobile Apps",
  //     tech: ["React Native", "Firebase", "TypeScript"],
  //     github: "#",
  //     demo: "#"
  //   },
  //   {
  //     title: "Open Source UI Library",
  //     description: "Contributed to a popular UI component library, adding accessibility features and documentation.",
  //     category: "Open Source",
  //     tech: ["React", "TypeScript", "Storybook"],
  //     github: "#",
  //     demo: "#"
  //   },
  //   {
  //     title: "Weather Dashboard",
  //     description: "Real-time weather dashboard with interactive maps, forecasts, and customizable alerts.",
  //     category: "Web Apps",
  //     tech: ["Vue.js", "OpenWeather API", "Chart.js"],
  //     github: "#",
  //     demo: "#"
  //   },
  //   {
  //     title: "Image Recognition Tool",
  //     description: "Machine learning model for image classification and object detection with web interface.",
  //     category: "Machine Learning",
  //     tech: ["Python", "PyTorch", "Flask", "OpenCV"],
  //     github: "#",
  //     demo: "#"
  //   }
  // ];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my work across various domains and technologies
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-gradient-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 shadow-soft hover:shadow-glow transition-all hover:-translate-y-2 group">
                <div className="flex items-start justify-between mb-4">
                  <Code2 className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                  <div className="flex gap-2">
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={project.demo} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
