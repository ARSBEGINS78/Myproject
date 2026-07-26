import React from "react";

const results = [
  {
    number: "250+",
    title: "Projects Completed",
  },
  {
    number: "180%",
    title: "Average Traffic Growth",
  },
  {
    number: "120+",
    title: "Happy Clients",
  },
  {
    number: "98%",
    title: "Client Satisfaction",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Fashion Store",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Our website traffic increased by 180% in just 6 months. Their SEO and Google Ads strategy delivered excellent results.",
  },
  {
    name: "Priya Das",
    company: "Healthcare Clinic",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "The team managed our social media professionally. We received more leads and appointments than ever before.",
  },
  {
    name: "Amit Verma",
    company: "Real Estate",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    review:
      "Highly recommended! Their Facebook Ads generated quality leads at a much lower cost than previous agencies.",
  },
];

const ResultsTestimonials = () => {
  return (
    <section className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Results That Speak for Themselves
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            We help businesses grow with data-driven digital marketing.
          </p>
        </div>

      
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {results.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-8 text-center hover:bg-orange-500 transition duration-300"
            >
              <h3 className="text-5xl font-bold">{item.number}</h3>
              <p className="mt-3 text-gray-300">{item.title}</p>
            </div>
          ))}
        </div>

        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 mt-3">
            Trusted by startups and growing businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((client, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-2xl shadow-xl p-8 hover:-translate-y-2 transition duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{client.name}</h3>
                  <p className="text-orange-500">{client.company}</p>
                </div>
              </div>

              <div className="text-yellow-500 text-xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-600 leading-7">
                "{client.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsTestimonials;
