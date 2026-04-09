import React from 'react';

const ClientsSection = () => {
  const stats = [
    { number: '200+', label: 'Clients' },
    { number: '500+', label: 'Leads Generated' },
    { number: '16+', label: 'Average ROAS' }
  ];

  return (
    <section className="relative bg-black pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/5 via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-16">
          We Proudly Partner With Leading Brands
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left Side - Geometric Shapes */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Circle */}
              <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-white/5 opacity-70 animate-float" />

              {/* Rectangle */}
              <div className="absolute w-48 h-24 bg-gradient-to-r from-white/15 to-white/8 opacity-60 rounded-lg animate-float-delayed transform -rotate-12 -left-8 top-12" />

              {/* Small Circle */}
              <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-white/8 to-white/4 opacity-75 bottom-20 right-12 animate-float" />

              {/* Large Rectangle */}
              <div className="absolute w-40 h-40 bg-gradient-to-br from-white/12 to-white/5 opacity-50 rounded-xl animate-float-delayed transform rotate-6 -right-16 -bottom-12" />
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block absolute left-1/2 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {/* Right Side - Stats */}
          <div className="flex items-center justify-center lg:pl-12">
            <div className="space-y-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xl text-white/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;