export const AboutSection = () => {
  const stats = [
    { number: "20+", label: "Years in business" },
    { number: "250+", label: "Websites launched" },
    { number: "100+", label: "Happy clients" },
    { number: "98%", label: "Client satisfaction" }
  ];

  const values = [
    "Strategic",
    "Partnerships", 
    "Innovative",
    "Nimble",
    "Experienced"
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            We are
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {values.map((value, index) => (
              <span 
                key={index}
                className="text-2xl md:text-3xl font-semibold gradient-text"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {value}
                {index < values.length - 1 && (
                  <span className="text-primary mx-2">×</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Your website is more than just a tool—it's a chance to tell your story and spur people to action. 
            Through a collaborative, shared vision, we craft digital experiences that embody your brand's 
            essence and position you as the obvious choice for your audience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};