import headshot from "@/assets/headshot.jpg";
import { CheckCircle2 } from "lucide-react";

const expertise = [
  "Data Strategy & Governance",
  "Business Intelligence & Reporting",
  "Statistical Analysis & Modeling",
  "Data Visualization & Storytelling",
  "Process Optimization",
  "Stakeholder Engagement"
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img
              src={headshot}
              alt="Professional headshot"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:mx-0"
            />
          </div>

          <div className="animate-fade-in space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About MyJen Analytics</h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of experience transforming complex data into strategic business insights,
              I help organizations leverage their data assets to drive growth and innovation.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines technical expertise with business acumen to deliver solutions
              that are both analytically rigorous and practically applicable. I partner with clients
              to understand their unique challenges and develop customized analytics strategies
              that deliver measurable results.
            </p>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Areas of Expertise</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
