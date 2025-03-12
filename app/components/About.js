import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { texts, language } = useLanguage();

  const features = [
    texts.about.feature1,
    texts.about.feature2,
    texts.about.feature3,
    texts.about.feature4,
    texts.about.feature5,
    texts.about.feature6
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{texts.about.whoWeAre}</h2>
            <p className="text-gray-700 mb-6">
              {texts.about.description1}
            </p>
            <p className="text-gray-700 mb-8">
              {texts.about.description2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <FaCheckCircle className="text-secondary mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-80 lg:h-auto w-full rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-90"></div>
            <div className="relative z-10 p-8 text-white h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">{texts.about.teamValues}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-white" />
                  <span>{texts.about.value1}</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-white" />
                  <span>{texts.about.value2}</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-white" />
                  <span>{texts.about.value3}</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-white" />
                  <span>{texts.about.value4}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}