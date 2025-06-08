
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Briefcase, Code, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Academic Excellence",
      description: "9.05 CGPA with Merit Scholarship"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Industry Experience",
      description: "2 Strategic Internships at AICTE"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technical Expertise",
      description: "AWS, Python, Data Analytics"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Proven Impact",
      description: "25% Cost Reduction, 40% Efficiency Gain"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about leveraging cutting-edge technology to solve complex business challenges
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-primary">Innovative Cloud Solutions Architect</h3>
              <div className="w-16 h-1 bg-primary"></div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a distinguished B.Tech graduate in Computer Science Engineering with specialization in 
              <span className="text-primary font-semibold"> Cloud Computing</span>, I bring exceptional academic 
              performance (9.05 CGPA) combined with hands-on industry experience through strategic internships.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans <span className="text-primary font-semibold">cloud infrastructure optimization</span>, 
              <span className="text-primary font-semibold"> advanced data analytics</span>, and 
              <span className="text-primary font-semibold"> AI-powered solutions</span>. I have successfully delivered 
              projects that resulted in significant cost reductions and performance improvements for organizations.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about transforming traditional business processes through innovative technology solutions, 
              with a proven track record of analyzing millions of data points and implementing scalable cloud architectures 
              that drive business growth.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <h4 className="font-bold text-primary text-lg">Education Excellence</h4>
                <p className="text-muted-foreground">B.Tech CSE - Cloud Computing</p>
                <p className="text-muted-foreground font-semibold">CGPA: 9.05/10</p>
                <Badge variant="secondary" className="bg-primary/10 text-primary">Merit Scholarship</Badge>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary text-lg">Specializations</h4>
                <p className="text-muted-foreground">Cloud Architecture & DevOps</p>
                <p className="text-muted-foreground">Data Analytics & AI/ML</p>
                <Badge variant="secondary" className="bg-primary/10 text-primary">AWS Certified</Badge>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <Card className="card-hover bg-card border-border overflow-hidden">
              <CardContent className="p-0 relative">
                <div className="w-80 h-96 relative">
                  <img 
                    src="/lovable-uploads/62d9f5ca-9e2a-455b-af82-094595526470.png" 
                    alt="Chippada Prasanth Sai - Professional Photo"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-bold text-lg text-primary">Chippada Prasanth Sai</h4>
                    <p className="text-muted-foreground">Cloud Solutions Architect</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="card-hover bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
