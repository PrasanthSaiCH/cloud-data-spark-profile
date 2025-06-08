
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Settings, Award } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "HTML/CSS", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "R", level: "Intermediate" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Settings className="h-6 w-6" />,
      skills: [
        { name: "Amazon Web Services (AWS)", level: "Advanced" },
        { name: "Kubernetes", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" },
        { name: "Terraform", level: "Beginner" },
        { name: "CI/CD", level: "Intermediate" },
        { name: "Monitoring & Logging", level: "Intermediate" }
      ]
    },
    {
      title: "Data Analytics & BI",
      icon: <Award className="h-6 w-6" />,
      skills: [
        { name: "PowerBI", level: "Advanced" },
        { name: "Alteryx", level: "Advanced" },
        { name: "Pandas", level: "Advanced" },
        { name: "NumPy", level: "Advanced" },
        { name: "Matplotlib/Seaborn", level: "Intermediate" },
        { name: "Apache Spark", level: "Intermediate" }
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services",
      status: "Certified",
      year: "2024"
    },
    {
      name: "Alteryx Designer Core",
      issuer: "Alteryx",
      status: "Certified", 
      year: "2023"
    },
    {
      name: "ServiceNow Certified System Administrator",
      issuer: "ServiceNow",
      status: "Certified",
      year: "2023"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Intermediate": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Beginner": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default: return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <section id="skills" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical expertise and professional certifications that drive innovative solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="text-primary">{category.icon}</div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <Badge variant="outline" className={getLevelColor(skill.level)}>
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-hover bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{cert.name}</h4>
                  <p className="text-muted-foreground mb-3">{cert.issuer}</p>
                  <div className="flex items-center justify-center gap-2">
                    <Badge className="bg-primary/10 text-primary">
                      {cert.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{cert.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Extra Curricular */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Extra Curricular Activities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="font-bold text-xl mb-3 text-primary">SRM Merit Scholarship</h4>
                <p className="text-muted-foreground">
                  Awarded merit scholarship for academic excellence throughout the B.Tech program, 
                  recognizing consistent high performance and dedication to studies.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="font-bold text-xl mb-3 text-primary">SRM Cultural Fest Volunteer</h4>
                <p className="text-muted-foreground">
                  Actively participated in organizing and managing university cultural events, 
                  developing leadership and team coordination skills while contributing to campus community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
