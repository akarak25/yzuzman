import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

export default function About() {
  const features = [
    'Deneyimli ve Uzman Ekip',
    'Modern Teknolojiler',
    'Hızlı ve Etkin İletişim',
    'Zamanında Teslim',
    'İhtiyaca Özel Çözümler',
    'Sürekli Destek'
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Biz Kimiz?</h2>
            <p className="text-gray-700 mb-6">
              2021 yılında kurulan WebVizyon, web tasarım, mobil uygulama ve yazılım geliştirme alanlarında faaliyet gösteren, genç ve dinamik bir ekipten oluşmaktadır. 3 kişilik çekirdek ekibimizle, müşterilerimizin dijital dünyada güçlü bir şekilde var olmaları için çalışıyoruz.
            </p>
            <p className="text-gray-700 mb-8">
              Müşterilerimizin ihtiyaçlarını anlamak, onlara özel çözümler sunmak ve uzun vadeli iş birlikleri kurmak temel prensibimizdir. Her projede en güncel teknolojileri kullanarak, kaliteli ve sürdürülebilir ürünler ortaya çıkarıyoruz.
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
              <h3 className="text-2xl font-bold mb-4">Ekip Değerlerimiz</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-white" />
                  <span>Müşteri memnuniyeti odaklı çalışma</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-white" />
                  <span>Yenilikçi ve çözüm odaklı yaklaşım</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-white" />
                  <span>Şeffaf ve dürüst iletişim</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-2 text-white" />
                  <span>Sürekli öğrenme ve gelişim</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}