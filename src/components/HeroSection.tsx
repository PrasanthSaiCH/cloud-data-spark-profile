
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              🚀 Available for Full-Time Opportunities
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="gradient-text">Chippada Prasanth Sai</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            <span className="text-primary font-semibold">Cloud Solutions Architect</span> & <span className="text-primary font-semibold">Data Analytics Engineer</span>
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforming businesses through scalable cloud infrastructure and data-driven insights. 
            <span className="text-primary font-medium"> 9.05 CGPA graduate</span> with proven track record of 
            <span className="text-primary font-medium"> reducing costs by 25%</span> and 
            <span className="text-primary font-medium"> improving efficiency by 40%</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              <a href="#projects" className="flex items-center gap-2">
                View My Projects
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              <a href="#contact" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a href="https://github.com/chippada" target="_blank" rel="noopener noreferrer" 
               className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300">
              <div className="p-3 rounded-full bg-background border border-border group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                <Github className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/chippada-prasanth-sai" target="_blank" rel="noopener noreferrer"
               className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300">
              <div className="p-3 rounded-full bg-background border border-border group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                <Linkedin className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a href="mailto:prasanthsai@example.com"
               className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300">
              <div className="p-3 rounded-full bg-background border border-border group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                <Mail className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">9.05</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">3+</div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">25%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">1M+</div>
              <div className="text-sm text-muted-foreground">Records Analyzed</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
