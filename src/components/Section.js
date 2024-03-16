"use client";
import React from 'react';
import TypewriterEffectSmooth from '@/components/ui/typewriter-effect';
const Section = () => {
  const words = [
    {
      text: "Blockchain",
    },
    {
      text: "Charity",
    },
    {
      text: "Donation",
    },
    {
      text: "with",
    },
    {
      text: "OCTY.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-3/4 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-xs text-xs font-medium mb-2 text-white"><TypewriterEffectSmooth words={words} /></h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-3/4 w-full leading-relaxed text-lg text-indigo-200" style={{ marginTop: '2rem' }}>Octy-Open Charity is revolutionizing the world of charitable giving through blockchain technology. Our mission is simple yet profound: to bring transparency, trust, and accountability to the donation process, empowering donors and charitable organizations alike to create a positive impact on a global scale.</p>
         </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://orphanlifefoundation.org/wp-content/uploads/2021/04/African-child-in-classroom-with-no-teacher.png" alt="content" />
              <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">WHO</h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">Children Education</h2>
              <p className="leading-relaxed text-base">Children from backward regions need funding, resources, and support to to access quality education, break the cycle of poverty, and unlock their full potential for a brighter future and global impact.</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://www.thestatesman.com/wp-content/uploads/2022/06/iStock-619643870.jpg" alt="content" />
              <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Red Cross</h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">Bread for the World</h2>
              <p className="leading-relaxed text-base">The hunger project is committed to ending hunger and extreme poverty all across the globe. Prevent the poor from starving and provide the malnourished with essential nutrients needed in daily diet.</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://mukama.imgix.net/img/cms/87c8e71ce6ff53571453573b639c8c477afaaa77.jpg?w=1200&h=800&fit=crop&auto=compress" alt="content" />
              <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">UNICEF</h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">Water.org</h2>
              <p className="leading-relaxed text-base">We envision a day when everyone, everywhere has access to safe water and sanitation. Donate and change lives forever- empower families living in poverty with lasting access to safe water.</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://www.holidayscalendar.com/wp-content/uploads/2021/04/Stand-Up-To-Cancer-Day-iStock-1456863710.jpg" alt="content" />
              <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">SU2C</h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">Stand Up to Cancer</h2>
              <p className="leading-relaxed text-base">Empower cancer patients with vital treatment funds through your donation to Stand Up To Cancer charity. Your support makes a tangible difference in their journey.</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://i.pinimg.com/originals/e8/48/5d/e8485d257dc29308614dcbf3595f0076.jpg" alt="content" />
              <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">WHO</h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">Earthquake Relief Fund</h2>
              <p className="leading-relaxed text-base">Earthquake relief funds provide crucial support for affected communities, aiding in rebuilding infrastructure, providing emergency supplies, shelter, medical aid, and facilitating long-term recovery efforts in affected regions worldwide.</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://i.pinimg.com/originals/e8/48/5d/e8485d257dc29308614dcbf3595f0076.jpg" alt="content" />
              <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">WHO</h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">Flood Relief Fund</h2>
              <p className="leading-relaxed text-base">Flood relief funds provide crucial support for affected communities, aiding in rebuilding infrastructure, providing emergency supplies, shelter, medical aid, and facilitating long-term recovery efforts in affected regions worldwide.</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://i.pinimg.com/originals/e8/48/5d/e8485d257dc29308614dcbf3595f0076.jpg" alt="content" />
              <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">WHO</h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">War Relief Fund</h2>
              <p className="leading-relaxed text-base">War relief funds provide crucial support for affected communities, aiding in rebuilding infrastructure, providing emergency supplies, shelter, medical aid, and facilitating long-term recovery efforts in affected regions worldwide.</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://i.pinimg.com/originals/e8/48/5d/e8485d257dc29308614dcbf3595f0076.jpg" alt="content" />
              <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">WHO</h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">Forest Fire Relief Fund</h2>
              <p className="leading-relaxed text-base">Forest fire relief funds provide crucial support for affected communities, aiding in rebuilding infrastructure, providing emergency supplies, shelter, medical aid, and facilitating long-term recovery efforts in affected regions worldwide.</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
export default Section;
