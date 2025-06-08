
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Chippada Prasanth Sai</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Recent Engineering Graduate specializing in <span className="text-primary font-semibold">Cloud Computing</span> and <span className="text-primary font-semibold">Data Analytics</span>
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Passionate about building scalable cloud solutions and extracting insights from data to drive business decisions. Currently seeking opportunities to contribute to innovative tech teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:your.email@example.com"
               className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#about">
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
