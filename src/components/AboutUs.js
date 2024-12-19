import React from 'react';

// Import images for team members
import IniyanImage from '../assets/iniyan.jpg';
import IndiraImage from '../assets/indira.jpg';
import AnshathImage from '../assets/anshath.jpg';
import KavinduImage from '../assets/kavindu.jpg';
import BiyoniImage from '../assets/dasumi.jpeg';
import DahamiImage from '../assets/ST.jpeg';

const AboutUs = () => {
  // Define team members data
  const teamMembers = [
    { name: 'Iniyan Manimaran', image: IniyanImage },
    { name: 'Indira Liyanarachchi', image: IndiraImage },
    { name: 'Anshath Ahamedd', image: AnshathImage }, 
    { name: 'Kavindu Janojya', image: KavinduImage },
    { name: 'Jayasundara Dasumi', image: BiyoniImage },
    {name: 'S T Jayathilaka ', image: DahamiImage}
  ];

  return (
    <div className="bg-gradient-to-r from-gray-600 to-blue-900 min-h-screen flex flex-col text-white">
      <h1 className="text-2xl font-bold p-4">Meet Our Team</h1>
      <p className="font-bold text-2xl text-center text-gray-200 px-6 py-4">
        We are a team of passionate developers working on a university project - A Patient Monitoring System. Our aim is to create a safe enviorment for patients.
      </p>
      <div className="flex-grow flex justify-center items-center flex-wrap">
        {teamMembers.map((member, index) => (
          <div key={index} className="max-w-sm mx-4 mb-4 bg-white rounded-lg overflow-hidden shadow-lg">
            <img className="w-full h-auto" style={{ maxWidth: '200px' }} src={member.image} alt={member.name} />
            <div className="p-4">
              <p className="text-gray-800 text-lg font-semibold">{member.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
