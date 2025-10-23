import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Database, LineChart, TrendingUp, Brain, Presentation } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Data Strategy",
    description: "Develop comprehensive data strategies aligned with your business objectives to maximize ROI and competitive advantage."
  },
  {
    icon: Database,
    title: "Business Intelligence",
    description: "Design and implement BI solutions that provide actionable insights through interactive dashboards and reports."
  },
  {
    icon: LineChart,
    title: "Advanced Analytics",
    description: "Leverage statistical modeling and machine learning to uncover patterns, predict trends, and optimize performance."
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Identify operational inefficiencies and implement data-driven solutions to improve productivity and reduce costs."
  },
  {
    icon: Brain,
    title: "Predictive Modeling",
    description: "Build predictive models to forecast outcomes, assess risks, and support strategic decision-making."
  },
  {
    icon: Presentation,
    title: "Data Visualization",
    description: "Create compelling visual narratives that make complex data accessible and drive stakeholder engagement."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive analytics solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
