'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearchPlus, FaLink, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Container from './Container';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);

  // Örnek proje verileri
  const projects = [
    {
      id: 1,
      title: 'E-Ticaret Platformu',
      description: 'Tamamen özelleştirilebilir ve ölçeklenebilir e-ticaret çözümü. 50+ ödeme entegrasyonu ve gelişmiş analitik paneli içerir.',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/placeholder.svg',
      features: ['Çoklu dil desteği', 'Yapay zeka ürün önerileri', 'Gerçek zamanlı analitik']
    },
    {
      id: 2,
      title: 'Fitness Takip Uygulaması',
      description: 'Kullanıcıların antrenman, beslenme ve sağlık durumlarını takip edebilecekleri kapsamlı mobil uygulama.',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image: '/placeholder.svg',
      features: ['Kişiselleştirilmiş antrenman planları', 'Beslenme ve kalori takibi', 'Sağlık verileri entegrasyonu']
    },
    {
      id: 3,
      title: 'Kurumsal CRM Sistemi',
      description: 'Büyük ölçekli şirketler için geliştirilen, müşteri ilişkileri yönetim sistemi.',
      category: 'desktop',
      technologies: ['Electron', 'Vue.js', 'PostgreSQL'],
      image: '/placeholder.svg',
      features: ['Satış takibi', 'Müşteri segmentasyonu', 'Entegre rapor sistemi']
    },
    {
      id: 4,
      title: 'Finans Portalı',
      description: 'Banka ve finans şirketleri için geliştirilmiş entegre finansal işlem platformu.',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'GraphQL'],
      image: '/placeholder.svg',
      features: ['Gerçek zamanlı finans verileri', 'Güvenli ödeme işlemleri', 'Kullanıcı dostu arayüz']
    },
    {
      id: 5,
      title: 'Sosyal Medya Uygulaması',
      description: 'Niş hobiler ve ilgi alanları için özelleştirilmiş topluluk tabanlı sosyal platform.',
      category: 'mobile',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      image: '/placeholder.svg',
      features: ['Gerçek zamanlı mesajlaşma', 'İçerik keşfetme sistemi', 'Etkinlik planlamacısı']
    },
    {
      id: 6,
      title: 'Otel Yönetim Yazılımı',
      description: 'Otel ve konaklama tesisleri için entegre rezervasyon ve yönetim sistemi.',
      category: 'desktop',
      technologies: ['C#', '.NET', 'SQL Server'],
      image: '/placeholder.svg',
      features: ['Oda yönetimi', 'Rezervasyon takibi', 'Müşteri veritabanı']
    }
  ];

  // Kategoriler
  const categories = [
    { id: 'all', label: 'Tümü' },
    { id: 'web', label: 'Web Projeleri' },
    { id: 'mobile', label: 'Mobil Uygulamalar' },
    { id: 'desktop', label: 'Masaüstü Yazılımlar' }
  ];

  // Filtreleme işlemi
  useEffect(() => {
    const filteredProjects = activeFilter === 'all'
      ? projects
      : projects.filter(project => project.category === activeFilter);
    
    // Animasyon için projeleri sıfırla ve yeniden yükle
    setVisibleProjects([]);
    
    setTimeout(() => {
      setVisibleProjects(filteredProjects);
    }, 100);
  }, [activeFilter]);

  // Başlangıç yüklemesi
  useEffect(() => {
    setVisibleProjects(projects);
  }, []);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Arka planı kilitle
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Kaydırmayı geri aç
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Çalışmalarımız</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Tamamladığımız bazı projeler ve müşterilerimiz için geliştirdiğimiz çözümler
          </p>
          
          {/* Kategori filtreleri */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <motion.button
                key={category.id}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Proje ızgarası */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          ref={containerRef}
        >
          {visibleProjects.map(project => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="cursor-pointer group"
              onClick={() => handleProjectSelect(project)}
            >
              <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Proje görsel alanı */}
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-purple-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FaSearchPlus className="text-white text-3xl transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                  <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                    <span>Proje Görseli</span>
                  </div>
                </div>
                
                {/* Proje bilgileri */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Teknolojiler */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Kategori etiketi */}
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-primary dark:text-primary-400">
                      {categories.find(c => c.id === project.category)?.label}
                    </span>
                    <FaExternalLinkAlt className="text-gray-400 dark:text-gray-500 group-hover:text-primary dark:group-hover:text-primary-400 transition-colors" />
                  </div>
                </div>
                
                {/* Dekoratif köşe */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary to-purple-600 transform rotate-45 opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Daha fazla butonu */}
        <div className="text-center mt-12">
          <motion.button
            className="px-8 py-3 bg-white dark:bg-gray-800 text-primary dark:text-primary-400 border border-primary dark:border-primary-400 rounded-full font-semibold hover:bg-primary hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Tüm Projeleri Gör
          </motion.button>
        </div>
      </Container>
      
      {/* Proje detay modalı */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-3xl max-h-[80vh] overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Modal başlık ve kapat butonu */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h2>
              <button 
                onClick={closeModal}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                &times;
              </button>
            </div>
            
            {/* Modal içeriği */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)]">
              <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Proje Görseli</span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">{selectedProject.description}</p>
              
              {/* Özellikler */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Özellikler</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              {/* Teknolojiler */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Kullanılan Teknolojiler</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full bg-primary/10 dark:bg-primary-400/20 text-primary dark:text-primary-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Butonlar */}
              <div className="flex gap-4 mt-8">
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors">
                  <FaLink /> Demo
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
                  <FaGithub /> GitHub
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}