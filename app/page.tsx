"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Moon,
  Sun,
  Mail,
  Phone,
  MapPin,
  Github,
  GraduationCap,
  Calendar,
  ChevronDown,
  Code,
  Database,
  Brain,
  Server,
  Layout,
  Palette,
  Zap,
  FileCode,
  BarChart3,
  Menu,
  X,
  Layers, 
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const skills = [
    { name: "HTML", icon: FileCode },
    { name: "CSS", icon: Palette },
    { name: "JavaScript", icon: Code },
    { name: "React", icon: Layout },
    { name: "Flutter", icon: Smartphone },
    { name: "Jetpack Compose", icon: Layers },
    { name: "Svelte", icon: Zap },
    { name: "Node.js", icon: Server },
    { name: "NestJS", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "Supabase", icon: Database },
    { name: "Firebase", icon: Database },
    { name: "Python", icon: Code },
    { name: "TensorFlow", icon: Brain },
    { name: "Machine Learning", icon: BarChart3 },
  ]

  const projects = [
    {
      title: "Lab Result Viewer (Flutter)",
      description:
        "Mobile health-tech application connecting lab technicians with patients remotely. Developed the frontend user interface using Flutter and Dart, integrated with backend APIs built in NestJS. Wrote integration tests to verify key workflows and ensure feature stability.",
      tech: ["Flutter", "Dart", "Material UI", "NestJS", "API Integration"],
      type: "Team Collaboration",
      githubUrl: "https://github.com/Haymisey/lab_result_viewer_Flutter",
    },
    {
      title: "Lab Result Viewer (Jetpack Compose)",
      description:
        "Alternative implementation of the Lab Result Viewer using Jetpack Compose with Kotlin. Developed the frontend user interface and integrated it with backend APIs built in NestJS. Implemented MVVM architecture with ViewModels for state management.",
      tech: ["Jetpack Compose", "Kotlin", "MVVM", "NestJS", "API Integration"],
      type: "Team Collaboration",
      githubUrl: "https://github.com/Haymisey/lab_result_viewer_Compose",
    },
    {
      title: "AI-Powered Health Assistant",
      description:
        "Full-stack Health Assistant web application enabling users to analyze symptoms, receive AI-powered disease predictions, and find nearby pharmacies. Implemented backend APIs using Node.js and Express, integrated Google Gemini AI for symptom analysis.",
      tech: ["Node.js", "Express", "Google Gemini AI", "Geolocation API"],
      type: "Team Collaboration",
      githubUrl: "https://github.com/Haymisey/meketa_care.git",
    },
    {
      title: "Traffic Light Simulations with AI Cars",
      description:
        "Interactive, real-time 3D traffic simulation using React, TypeScript, and Three.js. Built rule-based AI using finite state machine for realistic vehicle behaviors including traffic light compliance and collision avoidance.",
      tech: ["React", "TypeScript", "Three.js", "AI", "3D Rendering"],
      type: "Personal Project",
      githubUrl: "https://github.com/Haymisey/Traffic_Light_Simulation.git",
    },
  ]

  const experience = [
    {
      company: "Lepton Games",
      role: "Full Stack Developer Intern",
      period: "March 2025 - Present",
      description:
        "Developed a web-based Betting application using Svelte (frontend) and NestJS (backend). Implemented Supabase for database management and authentication services.",
      achievements: [
        "Integrated full Odds API for live betting data",
        "Wrote comprehensive integration tests",
        "Deployed application using Coolify with CI/CD pipelines",
      ],
    },
    {
      company: "DevTech",
      role: "Machine Learning Intern",
      period: "Dec 2024 - Jan 2025",
      description:
        "Worked on multiple ML projects including customer churn prediction, recommendation systems, and image classification.",
      achievements: [
        "Developed logistic regression model with 92% accuracy for customer churn prediction",
        "Built collaborative and content-based filtering recommendation systems",
        "Trained CNN on CIFAR-10 achieving ~79% accuracy",
        "Applied sentiment analysis on 1.6M tweets with ~77% accuracy",
      ],
    },
  ]

  // Typing animation component
  const TypewriterText = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }, 100)
        return () => clearTimeout(timeout)
      }
    }, [currentIndex, text])

    return (
      <span>
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
          className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-primary ml-1"
        />
      </span>
    )
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            >
              HS
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-full"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 border-t pt-4"
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent min-h-[1.2em]">
                <TypewriterText text="Haymanot Abera" />
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="text-xl md:text-2xl text-muted-foreground"
              >
                Full Stack Developer & Machine Learning Engineer
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="flex justify-center gap-4 pt-4"
            >
              <Button
                size="lg"
                className="rounded-full"
                onClick={() => window.open("mailto:haymanotseyoum3@gmail.com", "_blank")}
              >
                <Mail className="h-4 w-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-transparent"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1XCl2eJ3MQmhV1znkBrlJdus0FaesvIxz/view?usp=sharing",
                    "_blank",
                  )
                }
              >
                <GraduationCap className="h-4 w-4 mr-2" />
                View Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I'm a passionate{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="text-primary font-semibold"
                >
                  Software Engineering student
                </motion.span>{" "}
                at Addis Ababa University with a strong foundation in full-stack development and machine learning. I
                excel in building{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="text-primary font-semibold"
                >
                  scalable web applications
                </motion.span>{" "}
                and implementing{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.6 }}
                  className="text-primary font-semibold"
                >
                  AI solutions
                </motion.span>{" "}
                that solve real-world problems.
              </p>
            </motion.div>
          </motion.div>

          {/* Subtle floating elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-xl"
          />
        </div>
      </section>

      {/* Skills Section with Auto-scroll */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground">Technologies I work with to bring ideas to life</p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="flex gap-12 whitespace-nowrap"
            >
              {[...skills, ...skills].map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <div key={index} className="flex-shrink-0 flex flex-col items-center gap-3 group cursor-pointer">
                    <div className="p-4 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 group-hover:from-primary/20 group-hover:to-purple-500/20 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="h-8 w-8 text-primary group-hover:text-purple-600 transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground">My professional journey and internships</p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-gradient-to-br from-background to-muted/50">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">Some of my notable work and contributions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full bg-gradient-to-br from-background to-muted/50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <Badge variant="outline">{project.type}</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can
              collaborate!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="rounded-full"
                onClick={() => window.open("mailto:haymanotseyoum3@gmail.com", "_blank")}
              >
                <Mail className="h-4 w-4 mr-2" />
                haymanotseyoum3@gmail.com
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-transparent"
                onClick={() => window.open("tel:+251929871221", "_blank")}
              >
                <Phone className="h-4 w-4 mr-2" />
                +251929871221
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
