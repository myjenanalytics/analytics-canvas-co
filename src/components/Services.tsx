import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Database, LineChart, TrendingUp, Brain, Presentation } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Program Evaluation & Assessment",
    description: "Comprehensive needs assessments and program evaluations to measure impact, ensure compliance, and drive continuous improvement."
  },
  {
    icon: Database,
    title: "Data Analysis & Reporting",
    description: "Transform raw data into actionable insights using SQL, Tableau, Power BI, and advanced Excel analytics for informed decision-making."
  },
  {
    icon: LineChart,
    title: "Epidemiological Research",
    description: "Conduct rigorous epidemiological studies and statistical analysis to identify trends, assess risks, and support evidence-based interventions."
  },
  {
    icon: TrendingUp,
    title: "Grant Writing & Budget Management",
    description: "Develop compelling grant proposals and manage program budgets to secure funding and ensure efficient resource allocation."
  },
  {
    icon: Brain,
    title: "Training & Technical Assistance",
    description: "Deliver customized training programs and ongoing technical support to build organizational capacity and data literacy."
  },
  {
    icon: Presentation,
    title: "Strategic Planning & Curriculum Development",
    description: "Design data-driven strategic plans and culturally relevant educational materials that align with organizational goals and community needs."
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
