import headshot from "@/assets/headshot.jpg";
import { CheckCircle2 } from "lucide-react";

const expertise = [
  "Data Analysis & Visualization (Tableau, Power BI, SQL)",
  "Program Evaluation & Needs Assessment",
  "Epidemiological Research & Analysis",
  "Grant Writing & Budget Management",
  "Training & Technical Assistance",
  "Curriculum Development & Strategic Planning"
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
              With extensive experience in epidemiological research, program management, and data analysis,
              I specialize in transforming complex health and organizational data into actionable insights
              that drive strategic decision-making and measurable outcomes.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My background includes managing statewide public health programs, conducting epidemiological
              research, and providing training and technical assistance across California. I combine
              advanced technical skills in SQL, Tableau, and Power BI with proven program evaluation
              expertise to deliver data-driven solutions tailored to your organization's needs.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              From grant writing and budget management to needs assessment and curriculum development,
              I partner with organizations to build sustainable data strategies that support growth,
              compliance, and evidence-based programming.
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
