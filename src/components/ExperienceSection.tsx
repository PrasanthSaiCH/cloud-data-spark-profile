
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Briefcase, TrendingUp, Target, Users, Zap } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Cloud Computing Solutions Engineer",
      company: "AICTE EDUSKILLS",
      duration: "Jun 2023 - Aug 2023",
      type: "Strategic Internship",
      description: "Led cloud infrastructure optimization initiatives focusing on cost reduction and performance enhancement for enterprise clients.",
      achievements: [
        "🏆 Achieved 25% reduction in cloud infrastructure costs through advanced optimization strategies",
        "⚡ Implemented automated scaling solutions using AWS Auto Scaling, reducing response times by 40%",
        "📊 Developed comprehensive monitoring dashboards with CloudWatch, improving visibility by 60%",
        "🤝 Collaborated with senior cloud architects on 3 enterprise cloud migration projects worth $500K+",
        "🔧 Optimized resource allocation algorithms, resulting in 30% better performance efficiency"
      ],
      technologies: ["AWS EC2", "AWS Lambda", "Docker", "Kubernetes", "CloudWatch", "Terraform", "Python"],
      impact: "Cost Savings: $125K annually",
      clients: "3 Enterprise Clients"
    },
    {
      title: "Senior Data Analytics Specialist", 
      company: "AICTE EDUSKILLS",
      duration: "Jan 2023 - May 2023",
      type: "Strategic Internship",
      description: "Spearheaded advanced data analytics projects involving large-scale data processing and business intelligence solutions for Fortune 500 companies.",
      achievements: [
        "🎯 Analyzed 1M+ records using advanced statistical models, uncovering critical business insights",
        "📈 Built interactive PowerBI dashboards that increased reporting efficiency by 40% across teams",
        "🤖 Implemented automated data pipeline solutions reducing manual processing time by 60%",
        "💼 Presented data-driven recommendations to C-level executives, resulting in $200K strategic decisions",
        "🔍 Developed predictive models with 92% accuracy for customer behavior analysis"
      ],
      technologies: ["Python", "SQL Server", "PowerBI", "Pandas", "Alteryx", "Apache Spark", "Azure"],
      impact: "Revenue Impact: $200K",
      insights: "15+ Strategic Insights"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering measurable business impact through strategic cloud computing and advanced data analytics solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover bg-card border-border overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="h-6 w-6 text-primary" />
                      <Badge variant="outline" className="border-primary text-primary bg-primary/10">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl mb-2">{exp.title}</CardTitle>
                    <p className="text-xl text-primary font-bold mb-3">{exp.company}</p>
                    <p className="text-muted-foreground text-lg leading-relaxed">{exp.description}</p>
                  </div>
                  
                  <div className="flex flex-col gap-3 lg:text-right">
                    <div className="flex items-center gap-2 lg:justify-end">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <span className="font-semibold text-green-500">{exp.impact}</span>
                    </div>
                    {exp.clients && (
                      <div className="flex items-center gap-2 lg:justify-end">
                        <Users className="h-5 w-5 text-blue-500" />
                        <span className="font-semibold text-blue-500">{exp.clients}</span>
                      </div>
                    )}
                    {exp.insights && (
                      <div className="flex items-center gap-2 lg:justify-end">
                        <Target className="h-5 w-5 text-purple-500" />
                        <span className="font-semibold text-purple-500">{exp.insights}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="h-5 w-5 text-primary" />
                      <h4 className="font-bold text-lg">Key Achievements & Impact:</h4>
                    </div>
                    <div className="grid gap-3">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-4">Technologies & Tools Mastered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">Ready to deliver similar results for your organization</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
