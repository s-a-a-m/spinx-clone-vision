export const AboutSection = () => {
  const stats = [
    { number: "7+", label: "Years in business" },
    { number: 10+", label: "Solutions launched" },
    { number: "€1.3B", label: "Infrastructure project scale deployed" } ,
    { number: "98%", label: "Client satisfaction" }
  ];

  const values = [
    "VALUE 1",
    "VALUE 2", 
    "VALUE 3",
    "VALUE 4",
    "VALUE 5"
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
            ABOUT TEXT
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
