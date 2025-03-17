'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Container from '../components/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5 
      }
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Header />
      <div className="pt-20 pb-16">
        <Container>
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 max-w-5xl mx-auto"
          >
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {language === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {language === 'tr' 
                  ? 'Son güncelleme: 12 Mart 2025' 
                  : 'Last updated: March 12, 2025'}
              </p>
            </div>

            {language === 'tr' ? (
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">1. Giriş</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  YZ UZMAN ("biz", "bizim" veya "şirketimiz") tarafından işletilen www.yzuzman.com web sitesini kullandığınızda kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu konusunda sizi bilgilendirmek için bu Gizlilik Politikasını oluşturduk. Sitemizi kullanırken, bu politikaya uygun olarak kişisel verilerinizi işlediğimizi kabul etmiş olursunuz.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">2. Toplanan Bilgiler</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Web sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda aşağıdaki kişisel verileri toplayabiliriz:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li className="mb-2"><strong>Kişisel tanımlayıcı bilgiler:</strong> Ad, e-posta adresi, telefon numarası, iş ünvanı, şirket adı gibi bilgiler.</li>
                  <li className="mb-2"><strong>İletişim bilgileri:</strong> İletişim formları aracılığıyla gönderdiğiniz mesajlar ve içerikler.</li>
                  <li className="mb-2"><strong>Kullanım verileri:</strong> IP adresi, tarayıcı türü, ziyaret edilen sayfalar, ziyaret tarihi ve saati gibi bilgiler.</li>
                  <li className="mb-2"><strong>Çerezler:</strong> Web sitemiz, deneyiminizi geliştirmek için çerezler kullanmaktadır.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">3. Bilgilerin Kullanılması</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Topladığımız bilgileri aşağıdaki amaçlar için kullanabiliriz:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li className="mb-2">Size hizmetlerimiz hakkında bilgi sağlamak</li>
                  <li className="mb-2">İletişim taleplerinize yanıt vermek</li>
                  <li className="mb-2">Web sitemizi iyileştirmek ve geliştirmek</li>
                  <li className="mb-2">Hizmetlerimizi kişiselleştirmek</li>
                  <li className="mb-2">Yasal yükümlülüklerimizi yerine getirmek</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">4. Verilerin Paylaşımı</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Kişisel verilerinizi, aşağıdaki durumlar dışında üçüncü taraflarla paylaşmayız:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li className="mb-2">Yasal zorunluluklar veya resmi makamların talebi doğrultusunda</li>
                  <li className="mb-2">Hizmet sağlayıcılarımızla, web sitesi işlevselliğini desteklemek amacıyla</li>
                  <li className="mb-2">İş ortaklarımızla, size daha iyi hizmet sunabilmek için</li>
                  <li className="mb-2">Açık rızanız olduğu durumlarda</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">5. Veri Güvenliği</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Kişisel verilerinizi korumak için uygun teknik ve organizasyonel önlemleri alıyoruz. Ancak, internet üzerinden hiçbir veri iletiminin veya elektronik depolamanın %100 güvenli olmadığını unutmayın. Veri güvenliğini sağlamak için sürekli çaba göstermemize rağmen, mutlak güvenliği garanti edemeyiz.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">6. Çerezler</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Web sitemiz, deneyiminizi geliştirmek ve sitemizin nasıl kullanıldığını analiz etmek için çerezler kullanmaktadır. Tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir veya çerez alındığında size bildirim gönderilmesini sağlayabilirsiniz. Ancak, çerezleri devre dışı bırakırsanız, sitemizin bazı özellikleri düzgün çalışmayabilir.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">7. Çocukların Gizliliği</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Hizmetlerimiz 18 yaşın altındaki kişilere yönelik değildir. 18 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamayız. Eğer bir ebeveyn veya vasi olarak, çocuğunuzun bize kişisel bilgi sağladığını fark ederseniz, lütfen bizimle iletişime geçin. 18 yaşın altındaki çocuklardan bilgi topladığımızı fark ettiğimizde, bu bilgileri sistemlerimizden kaldırmak için gerekli adımları atarız.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">8. Haklarınız</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li className="mb-2">Verilerinize erişim ve kopyalarını alma hakkı</li>
                  <li className="mb-2">Yanlış veya eksik bilgilerin düzeltilmesini talep etme hakkı</li>
                  <li className="mb-2">Verilerinizin silinmesini talep etme hakkı</li>
                  <li className="mb-2">Veri işlememizi kısıtlama hakkı</li>
                  <li className="mb-2">Verilerinizin işlenmesine itiraz etme hakkı</li>
                  <li className="mb-2">Veri taşınabilirliği hakkı</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Bu haklarınızı kullanmak isterseniz, lütfen info@yzuzman.com adresinden bizimle iletişime geçin.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">9. KVKK (Kişisel Verilerin Korunması Kanunu)</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, kişisel verilerinizin toplanması, işlenmesi ve korunması ile ilgili tüm yasal gerekliliklere uymaktayız. KVKK uyarınca veri sorumlusu sıfatıyla, kişisel verilerinizi bu politikada belirtilen amaçlar doğrultusunda, yasalara uygun olarak işlemekteyiz.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">10. Politika Değişiklikleri</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Politikada yapılan önemli değişiklikler hakkında sizi bilgilendirmek için makul çaba göstereceğiz. Son güncelleme tarihi bu politikanın başında belirtilmiştir. Sitemizi düzenli olarak ziyaret ederek politikadaki değişikliklerden haberdar olabilirsiniz. Sitemizi kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">11. İletişim</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Bu Gizlilik Politikası ile ilgili sorularınız veya endişeleriniz varsa, lütfen bizimle aşağıdaki kanallardan iletişime geçin:
                </p>
                <ul className="list-none mb-4 text-gray-700 dark:text-gray-300">
                  <li className="mb-2"><strong>E-posta:</strong> info@yzuzman.com</li>
                  <li className="mb-2"><strong>Telefon:</strong> +90 212 345 67 89</li>
                  <li className="mb-2"><strong>Adres:</strong> Bağdat Caddesi No:123, Kadıköy, İstanbul</li>
                </ul>
              </div>
            ) : (
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">1. Introduction</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We at YZ UZMAN ("we", "our", or "the company") have created this Privacy Policy to inform you about how your personal data is collected, used, and protected when you use our website www.yzuzman.com. By using our site, you acknowledge that we process your personal data in accordance with this policy.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">2. Information We Collect</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  When you visit our website and use our services, we may collect the following personal data:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li className="mb-2"><strong>Personal identifiers:</strong> Name, email address, phone number, job title, company name.</li>
                  <li className="mb-2"><strong>Contact information:</strong> Messages and content you submit through contact forms.</li>
                  <li className="mb-2"><strong>Usage data:</strong> IP address, browser type, pages visited, date and time of visit.</li>
                  <li className="mb-2"><strong>Cookies:</strong> Our website uses cookies to enhance your experience.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We may use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li className="mb-2">To provide you with information about our services</li>
                  <li className="mb-2">To respond to your communication requests</li>
                  <li className="mb-2">To improve and develop our website</li>
                  <li className="mb-2">To personalize our services</li>
                  <li className="mb-2">To fulfill our legal obligations</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">4. Data Sharing</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We do not share your personal data with third parties except in the following situations:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li className="mb-2">Legal requirements or requests from official authorities</li>
                  <li className="mb-2">With our service providers to support website functionality</li>
                  <li className="mb-2">With our business partners to provide better service to you</li>
                  <li className="mb-2">When we have your explicit consent</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">5. Data Security</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We take appropriate technical and organizational measures to protect your personal data. However, please remember that no data transmission over the internet or electronic storage is 100% secure. While we strive to ensure data security, we cannot guarantee absolute security.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">6. Cookies</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Our website uses cookies to enhance your experience and analyze how our site is used. You can change your browser settings to refuse cookies or to notify you when cookies are being sent. However, if you disable cookies, some features of our site may not function properly.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">7. Children's Privacy</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and become aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children under 18, we will take steps to remove that information from our systems.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">8. Your Rights</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Regarding your personal data, you have the following rights:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li className="mb-2">Right to access your data and obtain copies</li>
                  <li className="mb-2">Right to request correction of inaccurate or incomplete information</li>
                  <li className="mb-2">Right to request deletion of your data</li>
                  <li className="mb-2">Right to restrict our data processing</li>
                  <li className="mb-2">Right to object to the processing of your data</li>
                  <li className="mb-2">Right to data portability</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you wish to exercise these rights, please contact us at info@yzuzman.com.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">9. PDPL (Personal Data Protection Law)</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We comply with all legal requirements regarding the collection, processing, and protection of your personal data under the Personal Data Protection Law No. 6698 (PDPL). As a data controller under PDPL, we process your personal data in accordance with the purposes stated in this policy and in compliance with the law.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">10. Policy Changes</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We may update this Privacy Policy from time to time. We will make reasonable efforts to inform you about significant changes to the policy. The last update date is stated at the beginning of this policy. You can stay informed about changes to the policy by regularly visiting our site. Your continued use of our site means you accept the updated policy.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">11. Contact Us</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you have any questions or concerns about this Privacy Policy, please contact us through the following channels:
                </p>
                <ul className="list-none mb-4 text-gray-700 dark:text-gray-300">
                  <li className="mb-2"><strong>Email:</strong> info@yzuzman.com</li>
                  <li className="mb-2"><strong>Phone:</strong> +90 212 345 67 89</li>
                  <li className="mb-2"><strong>Address:</strong> Bagdat Street No:123, Kadikoy, Istanbul</li>
                </ul>
              </div>
            )}
          </motion.div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;