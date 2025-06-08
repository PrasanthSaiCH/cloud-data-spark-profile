
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Cloud Computing Intern",
      company: "AICTE EDUSKILLS",
      duration: "Jun 2023 - Aug 2023",
      type: "Internship",
      description: "Worked on cloud infrastructure projects focusing on resource optimization and cost reduction strategies.",
      achievements: [
        "Reduced cloud infrastructure costs by 25% through optimization strategies",
        "Implemented automated scaling solutions using AWS services",
        "Developed monitoring dashboards for cloud resource utilization",
        "Collaborated with senior engineers on enterprise cloud migrations"
      ],
      technologies: ["AWS", "Python", "Docker", "Kubernetes", "CloudWatch"]
    },
    {
      title: "Data Analytics Intern", 
      company: "AICTE EDUSKILLS",
      duration: "Jan 2023 - May 2023",
      type: "Internship",
      description: "Focused on data analysis projects involving large datasets and business intelligence solutions.",
      achievements: [
        "Analyzed 1M+ records to identify key business insights",
        "Built interactive dashboards increasing reporting efficiency by 40%",
        "Implemented data pipeline automation reducing manual work by 60%",
        "Presented findings to stakeholders leading to strategic decisions"
      ],
      technologies: ["Python", "SQL", "PowerBI", "Pandas", "Alteryx"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience in cloud computing and data analytics through meaningful internships
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover bg-card border-border">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Briefcase className="h-6 w-6 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-xl text-primary font-semibold mt-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className="border-primary text-primary">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg">{exp.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
