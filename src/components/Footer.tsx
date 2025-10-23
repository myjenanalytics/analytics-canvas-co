import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MyJen Analytics" className="h-10 w-auto" />
          </div>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MyJen Analytics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
