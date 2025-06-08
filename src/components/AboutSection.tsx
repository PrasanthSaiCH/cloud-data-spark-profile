
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Engineering the Future with Cloud & Data</h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a recent B.Tech graduate in Computer Science Engineering with specialization in Cloud Computing, 
              I bring a perfect blend of academic excellence (9.05 CGPA) and practical experience through impactful internships.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey has been driven by a passion for solving complex problems using cloud technologies and data analytics. 
              From developing interactive simulation tools to building AI-powered applications, I thrive on creating solutions 
              that make a real difference.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm actively seeking opportunities where I can contribute my skills in AWS, Python, data analysis, and cloud 
              architecture to help organizations scale and innovate in the digital age.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Education</h4>
                <p className="text-muted-foreground">B.Tech CSE - Cloud Computing</p>
                <p className="text-muted-foreground">CGPA: 9.05/10</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Focus Areas</h4>
                <p className="text-muted-foreground">Cloud Computing</p>
                <p className="text-muted-foreground">Data Analytics</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <Card className="card-hover bg-card border-border">
              <CardContent className="p-8">
                <div className="w-64 h-80 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/62d9f5ca-9e2a-455b-af82-094595526470.png" 
                    alt="Chippada Prasanth Sai - Professional Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
