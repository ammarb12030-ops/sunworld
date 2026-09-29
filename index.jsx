import React from 'react';
import { Sun, Globe, MapPin, Phone, Mail } from 'lucide-react';

export default function SunWorld() {
  const branches = [
    { city: 'البحرين', country: 'البحرين', phone: '+973 XXXX XXXX', email: 'bh@sunworld3d.com' },
    { city: 'أمريكا', country: 'الولايات المتحدة', phone: '+1 XXX XXX XXXX', email: 'us@sunworld3d.com' },
    { city: 'عمان', country: 'سلطنة عمان', phone: '+968 XXXX XXXX', email: 'om@sunworld3d.com' },
    { city: 'دبي', country: 'الإمارات العربية المتحدة', phone: '+971 XXXX XXXX', email: 'uae@sunworld3d.com' },
    { city: 'عمان', country: 'الأردن', phone: '+962 XXXX XXXX', email: 'jo@sunworld3d.com' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sun className="text-yellow-500 w-8 h-8" />
            <span className="text-2xl font-bold text-gray-900">Sun World</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-yellow-500">نبذة عنا</a>
            <a href="#branches" className="hover:text-yellow-500">الفروع الدولية</a>
            <a href="#contact" className="hover:text-yellow-500">اتصل بنا</a>
          </div>
        </div>
      </nav>

      <header className="max-w-6xl mx-auto px-4 py-16 text-center">
        <span className="text-yellow-600 font-semibold tracking-wider text-sm">مستقبل الطاقة المتجددة</span>
        <h1 className="text-5xl font-extrabold text-gray-900 mt-2 mb-6">نبتكر حلول الطاقة المستدامة</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          نقدم حلولاً هندسية متكاملة في مجال الطاقة المتجددة والبنية التحتية، بأعلى المعايير العالمية ومن خلال شبكة من الفروع حول العالم.
        </p>
      </header>

      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">من نحن</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            شركة عالمية رائدة متخصصة في توفير حلول الطاقة المتجددة، وتنفيذ المشاريع الهندسية، وتطوير البرمجيات الذكية المرتبطة بقطاع الطاقة.
          </p>
        </div>
      </section>

      <section id="branches" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-12">
            <Globe className="text-yellow-500 w-6 h-6" />
            <h2 className="text-3xl font-bold text-gray-900">فروعنا الدولية</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {branches.map((branch, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col items-center text-center">
                <MapPin className="text-yellow-500 w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{branch.city}</h3>
                <span className="text-sm text-gray-500 mb-4">{branch.country}</span>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{branch.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{branch.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sun className="text-yellow-500 w-6 h-6" />
            <span className="text-xl font-bold text-gray-900">Sun World</span>
          </div>
          <p className="text-gray-500 text-sm">© ٢٠٢٦ جميع الحقوق محفوظة لشركة صن وورلد</p>
        </div>
      </footer>
    </div>
  );
}
