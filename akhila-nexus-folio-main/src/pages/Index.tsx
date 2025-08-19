import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Code, Database, Globe, Brain, User, Award, Briefcase, GraduationCap, Mail, Phone, Linkedin, Github, ChevronDown } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';
const Index = () => {
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-50px 0px -50px 0px'
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md tech-border border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-space font-bold text-xl gradient-text">
              TEPPALA AKHILA
            </div>
            <div className="hidden md:flex space-x-8">
              {['profile', 'skills', 'projects', 'certificates', 'internships', 'education', 'contact'].map(section => <button key={section} onClick={() => scrollToSection(section)} className={`capitalize font-medium transition-all duration-300 hover:text-primary ${activeSection === section ? 'text-primary' : 'text-muted-foreground'}`}>
                  {section}
                </button>)}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-subtle-gradient"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-primary/20 rounded-full floating-animation"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-primary/20 rounded-lg floating-animation" style={{
          animationDelay: '2s'
        }}></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-primary/20 rounded-full floating-animation" style={{
          animationDelay: '4s'
        }}></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-primary/20 rounded-lg floating-animation" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-primary/20 rounded-full floating-animation" style={{
          animationDelay: '3s'
        }}></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="fade-in-up">
            <div className="mb-4">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                💻 Available for Opportunities
              </span>
            </div>
            <h1 className="font-space font-bold text-6xl md:text-8xl mb-6">
              <span className="gradient-text">TEPPALA</span>
              <br />
              <span className="text-foreground">AKHILA</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              Aspiring Software Engineer
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button onClick={() => scrollToSection('profile')} className="glow-effect bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold">
                Explore Portfolio
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" className="tech-border px-8 py-3 rounded-lg font-semibold hover:bg-primary/5">
                Get In Touch
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">84.55%</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="slide-in-left">
                <div className="relative">
                  <div className="w-80 h-80 mx-auto rounded-full overflow-hidden pulse-glow tech-border">
                    <img src={profileImage} alt="TEPPALA AKHILA" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="slide-in-right">
                <h2 className="font-space font-bold text-4xl md:text-5xl mb-6 gradient-text">
                  About Me
                </h2>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-muted-foreground">
                    Hello! I'm <span className="text-primary font-semibold">Teppala Akhila</span>, 
                    an aspiring software engineer passionate about creating innovative solutions 
                    through technology.
                  </p>
                  <div className="bg-card tech-border rounded-lg p-6 glow-effect">
                    <h3 className="font-semibold text-xl mb-3 text-primary">Career Objective</h3>
                    <p className="text-muted-foreground">
                      To continuously enhance my knowledge, skills and experience by getting involved 
                      in challenging work environments and utilize them for personal and organizational 
                      growth to the best of my ability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl md:text-5xl mb-4 gradient-text">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 tech-border glow-effect text-center fade-in-up">
              <Code className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-3">Programming Languages</h3>
              <div className="space-y-2">
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">C</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 tech-border glow-effect text-center fade-in-up" style={{
            animationDelay: '0.2s'
          }}>
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-3">Web Technologies</h3>
              <div className="space-y-2">
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">HTML</span>
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">CSS</span>
                  
                </div>
              </div>
            </Card>

            <Card className="p-6 tech-border glow-effect text-center fade-in-up" style={{
            animationDelay: '0.4s'
          }}>
              <Database className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-3">Databases</h3>
              <div className="space-y-2">
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">SQL</span>
                  
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl md:text-5xl mb-4 gradient-text">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Showcasing my development work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 tech-border glow-effect slide-in-left">
              <h3 className="font-space font-bold text-2xl mb-4 text-primary">
                Height Safety Slot Booking System
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Designed an application for industrial safety management including registration & login.
                Tools to manage job codes and worker profiles. Streamlined booking system for safety slots.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'Python', 'MongoDB'].map(tech => <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>)}
                </div>
              </div>
            </Card>

            <Card className="p-8 tech-border glow-effect slide-in-right">
              <h3 className="font-space font-bold text-2xl mb-4 text-primary">
                Real-Time Face Recognition for CCTV Surveillance
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Python-based web app for authentication & real-time face recognition. Features registration, 
                login with password hashing, user profile & face data management. Supports recognition from 
                images, videos, and live streams.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Flask', 'Flask-SocketIO', 'SQLite', 'OpenCV', 'face_recognition', 'Pandas'].map(tech => <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>)}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl md:text-5xl mb-4 gradient-text">
              Certificates
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional certifications and achievements
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{
            title: 'Machine Learning with Python',
            org: 'SkillDunia'
          }, {
            title: 'Full Stack Development Internship',
            org: 'RINL'
          }, {
            title: 'Data Science for Engineers',
            org: 'NPTEL'
          }].map((cert, index) => <Card key={index} className="p-6 tech-border glow-effect text-center fade-in-up" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">{cert.title}</h3>
                <p className="text-primary font-medium">{cert.org}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl md:text-5xl mb-4 gradient-text">
              Internships
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional experience and learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 tech-border glow-effect slide-in-left">
              <Briefcase className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-space font-bold text-2xl mb-2 text-primary">
                Machine Learning with Python
              </h3>
              <p className="text-muted-foreground mb-2">SkillDunia | Aug–Sep 2023</p>
              <p className="text-muted-foreground leading-relaxed">
                Hands-on experience in data exploration, model development, and Python libraries.
              </p>
            </Card>

            <Card className="p-8 tech-border glow-effect slide-in-right">
              <Briefcase className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-space font-bold text-2xl mb-2 text-primary">
                Full Stack Development
              </h3>
              <p className="text-muted-foreground mb-2">RINL | Jun–Jul 2024</p>
              <p className="text-muted-foreground leading-relaxed">
                Worked on frontend (HTML, CSS, JS) and backend (MongoDB).
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl md:text-5xl mb-4 gradient-text">
              Education
            </h2>
            <p className="text-xl text-muted-foreground">
              Academic background and achievements
            </p>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {[{
            degree: 'B.Tech – Computer Science Engineering',
            institution: 'Raghu Institute of Technology (A), JNTUK',
            year: '2025',
            grade: '84.55%'
          }, {
            degree: 'Intermediate',
            institution: 'Sri Chaitanya Junior College',
            year: '2021',
            grade: '91.3%'
          }, {
            degree: 'SSC',
            institution: 'BBV High School',
            year: '2019',
            grade: '90.25%'
          }].map((edu, index) => <Card key={index} className="p-8 tech-border glow-effect fade-in-up" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className="flex items-center gap-6">
                  <GraduationCap className="w-12 h-12 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-space font-bold text-xl mb-2">{edu.degree}</h3>
                    <p className="text-muted-foreground mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-primary font-medium">{edu.year}</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-subtle-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl md:text-5xl mb-4 gradient-text">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's connect and discuss opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="slide-in-left">
              <h3 className="font-space font-bold text-2xl mb-8 text-primary">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="text-muted-foreground">akhilaakhi96628@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="text-muted-foreground">+91 8639006182</span>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="w-6 h-6 text-primary" />
                  <span className="text-muted-foreground">linkedin.com/in/teppala-akhila</span>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="w-6 h-6 text-primary" />
                  <span className="text-muted-foreground">github.com/teppala-akhila</span>
                </div>
              </div>
            </div>
            
            <div className="slide-in-right">
              <Card className="p-8 tech-border glow-effect">
                <h3 className="font-space font-bold text-2xl mb-6 text-primary">Send Message</h3>
                <form className="space-y-6">
                  <div>
                    <Input placeholder="Your Name" className="tech-border rounded-lg" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" className="tech-border rounded-lg" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" rows={4} className="tech-border rounded-lg" />
                  </div>
                  <Button type="submit" className="w-full glow-effect bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;