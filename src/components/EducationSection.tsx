
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering",
      specialization: "Cloud Computing",
      institution: "SRM Institute of Science & Technology",
      duration: "2020 - 2024",
      cgpa: "9.05/10",
      achievements: ["SRM Merit Scholarship", "Academic Excellence"],
      description: "Specialized coursework in cloud computing, data structures, algorithms, and software engineering."
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Your School Name",
      duration: "2018 - 2020",
      cgpa: "95%",
      achievements: ["Science Stream", "Mathematics Excellence"],
      description: "Strong foundation in Mathematics, Physics, and Computer Science."
    },
    {
      degree: "Secondary (10th)",
      institution: "Your School Name", 
      duration: "2018",
      cgpa: "96%",
      achievements: ["Academic Excellence", "Science Olympiad"],
      description: "Comprehensive education with focus on STEM subjects."
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education Timeline</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey building a strong foundation in computer science and specializing in cloud computing
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border hidden lg:block"></div>
          
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Timeline marker */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
                
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <Card className="card-hover bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-primary font-semibold">{edu.duration}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                      {edu.specialization && (
                        <h4 className="text-lg text-primary font-semibold mb-2">{edu.specialization}</h4>
                      )}
                      <p className="text-muted-foreground mb-3">{edu.institution}</p>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="h-5 w-5 text-primary" />
                        <span className="font-semibold">CGPA: {edu.cgpa}</span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
