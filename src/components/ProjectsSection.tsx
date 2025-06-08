
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Calendar } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Interactive Simulation Tool for Cloud Resource Allocation",
      description: "Developed a comprehensive simulation platform that models cloud resource allocation scenarios, helping organizations optimize their cloud infrastructure costs and performance.",
      longDescription: "Built using Python and AWS services, this tool simulates various cloud resource allocation strategies and provides detailed analytics on cost optimization, performance metrics, and resource utilization patterns.",
      technologies: ["Python", "AWS", "Docker", "React", "D3.js", "PostgreSQL"],
      achievements: [
        "Reduced simulation time by 70% through optimized algorithms",
        "Helped 5+ organizations save 30% on cloud costs",
        "Integrated with AWS Cost Explorer API for real-time pricing"
      ],
      category: "Cloud Computing",
      status: "Completed",
      timeline: "3 months"
    },
    {
      title: "AI-Powered Competitive Product Finder",
      description: "An intelligent system that analyzes market data to identify competitive products and pricing strategies using machine learning algorithms.",
      longDescription: "Leverages natural language processing and machine learning to scrape, analyze, and compare products across multiple e-commerce platforms, providing actionable insights for businesses.",
      technologies: ["Python", "TensorFlow", "Selenium", "FastAPI", "MongoDB", "React"],
      achievements: [
        "Processed 100K+ product listings daily",
        "Achieved 92% accuracy in product matching",
        "Reduced manual research time by 85%"
      ],
      category: "AI/ML",
      status: "Completed",
      timeline: "4 months"
    },
    {
      title: "Enhanced Bitcoin Transaction Analysis System",
      description: "A robust blockchain analytics platform that provides deep insights into Bitcoin transaction patterns, wallet behaviors, and network analysis.",
      longDescription: "Comprehensive system for analyzing Bitcoin blockchain data with advanced visualization, pattern recognition, and anomaly detection capabilities for cryptocurrency research and compliance.",
      technologies: ["Python", "Apache Spark", "Elasticsearch", "Kibana", "PostgreSQL", "Vue.js"],
      achievements: [
        "Analyzed 500M+ Bitcoin transactions",
        "Implemented real-time anomaly detection",
        "Created interactive network visualization tools"
      ],
      category: "Blockchain Analytics",
      status: "Completed", 
      timeline: "5 months"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of innovative projects demonstrating expertise in cloud computing, data analytics, and AI/ML
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover bg-card border-border">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="border-primary text-primary">
                        {project.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{project.timeline}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-3">{project.title}</CardTitle>
                    <p className="text-muted-foreground text-lg mb-4">{project.description}</p>
                    <p className="text-muted-foreground">{project.longDescription}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      View Code
                    </Button>
                    <Button className="bg-primary hover:bg-primary/90">
                      View Demo
                    </Button>
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

export default ProjectsSection;
