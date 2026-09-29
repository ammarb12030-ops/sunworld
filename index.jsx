<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>شركة الطاقة الخضراء | GreenEnergy - حلول الطاقة المستدامة والمتجددة</title>

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Google Fonts: Tajawal -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet">

    <!-- Tailwind Configuration for Custom Theme -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        emerald: {
                            850: '#053e2b',
                            950: '#022419',
                        },
                        amber: {
                            450: '#f59e0b',
                        },
                        accent: {
                            green: '#10b981',
                            gold: '#f59e0b',
                            dark: '#0a1913',
                            card: '#122a20',
                        }
                    },
                    fontFamily: {
                        sans: ['Tajawal', 'sans-serif'],
                    },
                    animation: {
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'float': 'float 3s ease-in-out infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                }
            }
        }
    </script>

    <!-- Custom CSS Styles -->
    <style>
        body {
            font-family: 'Tajawal', sans-serif;
            background-color: #08140f;
            color: #f3f4f6;
            overflow-x: hidden;
            scroll-behavior: smooth;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0a1913;
        }
        ::-webkit-scrollbar-thumb {
            background: #10b981;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #059669;
        }

        /* Glassmorphism Classes */
        .glass-panel {
            background: rgba(18, 42, 32, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(16, 185, 129, 0.15);
        }

        .glass-card {
            background: linear-gradient(135deg, rgba(20, 50, 38, 0.6) 0%, rgba(10, 25, 19, 0.8) 100%);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-card:hover {
            border-color: rgba(16, 185, 129, 0.4);
            transform: translateY(-5px);
            box-shadow: 0 12px 30px -10px rgba(16, 185, 129, 0.2);
        }

        /* Glow effects */
        .glow-emerald {
            box-shadow: 0 0 25px rgba(16, 185, 129, 0.25);
        }

        .glow-amber {
            box-shadow: 0 0 25px rgba(245, 158, 11, 0.25);
        }

        /* Custom Input Range Styling */
        input[type=range] {
            -webkit-appearance: none;
            background: transparent;
        }
        input[type=range]:focus {
            outline: none;
        }
        input[type=range]::-webkit-slider-runnable-track {
            width: 100%;
            height: 8px;
            cursor: pointer;
            background: #1a3a2d;
            border-radius: 4px;
            border: 1px solid rgba(16, 185, 129, 0.3);
        }
        input[type=range]::-webkit-slider-thumb {
            height: 22px;
            width: 22px;
            border-radius: 50%;
            background: #10b981;
            cursor: pointer;
            -webkit-appearance: none;
            margin-top: -7px;
            box-shadow: 0 0 10px rgba(16, 185, 129, 0.8);
            transition: transform 0.1s ease;
        }
        input[type=range]::-webkit-slider-thumb:hover {
            transform: scale(1.2);
            background: #34d399;
        }

        /* Solar Shimmer Effect */
        .solar-shimmer {
            background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(245,158,11,0.15) 50%, rgba(255,255,255,0) 100%);
            background-size: 200% 100%;
            animation: shimmer 4s infinite;
        }

        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
    </style>
</head>
<body class="antialiased text-gray-100 bg-[#06110c]">

    <!-- NAVIGATION BAR -->
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 glass-panel border-b border-emerald-900/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between">
                
                <!-- Logo -->
                <a href="#" class="flex items-center gap-3 group">
                    <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-amber-500 flex items-center justify-center text-slate-950 font-bold text-xl shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                        <i class="fa-solid fa-leaf text-emerald-950 text-2xl"></i>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-xl font-black tracking-wider text-white flex items-center gap-1">
                            الطاقة <span class="text-emerald-400">الخضراء</span>
                        </span>
                        <span class="text-[10px] tracking-widest text-amber-400 font-semibold uppercase">Green Energy</span>
                    </div>
                </a>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-1 space-x-reverse text-sm font-medium">
                    <a href="#hero" class="px-4 py-2 rounded-lg text-emerald-400 hover:text-white hover:bg-emerald-900/30 transition">الرئيسية</a>
                    <a href="#about" class="px-4 py-2 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-emerald-900/30 transition">من نحن</a>
                    <a href="#services" class="px-4 py-2 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-emerald-900/30 transition">خدماتنا</a>
                    <a href="#calculator" class="px-4 py-2 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-emerald-900/30 transition">الحاسبة الشمسية</a>
                    <a href="#portfolio" class="px-4 py-2 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-emerald-900/30 transition">مشاريعنا</a>
                    <a href="#why-us" class="px-4 py-2 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-emerald-900/30 transition">لماذا نحن</a>
                </div>

                <!-- CTA & Mobile Toggle -->
                <div class="flex items-center gap-3">
                    <a href="#contact" class="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/25 transition hover:scale-105 active:scale-95 text-sm">
                        <i class="fa-solid fa-bolt text-amber-300"></i>
                        <span>طلب استشارة مجانية</span>
                    </a>

                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-btn" class="md:hidden p-2.5 rounded-xl bg-emerald-950/60 text-emerald-400 hover:text-white border border-emerald-800/40 focus:outline-none">
                        <i id="menu-icon" class="fa-solid fa-bars text-xl"></i>
                    </button>
                </div>
            </div>

            <!-- Mobile Dropdown Menu -->
            <div id="mobile-menu" class="hidden md:hidden mt-4 pt-4 border-t border-emerald-900/40 space-y-2 pb-2">
                <a href="#hero" class="mobile-link block px-4 py-2.5 rounded-lg text-emerald-400 font-medium bg-emerald-950/40">الرئيسية</a>
                <a href="#about" class="mobile-link block px-4 py-2.5 rounded-lg text-gray-300 hover:bg-emerald-900/30 font-medium">من نحن</a>
                <a href="#services" class="mobile-link block px-4 py-2.5 rounded-lg text-gray-300 hover:bg-emerald-900/30 font-medium">خدماتنا</a>
                <a href="#calculator" class="mobile-link block px-4 py-2.5 rounded-lg text-gray-300 hover:bg-emerald-900/30 font-medium">الحاسبة الشمسية</a>
                <a href="#portfolio" class="mobile-link block px-4 py-2.5 rounded-lg text-gray-300 hover:bg-emerald-900/30 font-medium">مشاريعنا</a>
                <a href="#why-us" class="mobile-link block px-4 py-2.5 rounded-lg text-gray-300 hover:bg-emerald-900/30 font-medium">لماذا نحن</a>
                <a href="#contact" class="mobile-link block px-4 py-2.5 rounded-lg text-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 font-bold mt-3">طلب استشارة مجانية</a>
            </div>
        </div>
    </nav>

    <!-- HERO SECTION -->
    <section id="hero" class="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden solar-shimmer">
        <!-- Background Lighting FX -->
        <div class="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Hero Content -->
                <div class="lg:col-span-7 text-center lg:text-right space-y-6">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold">
                        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        <i class="fa-solid fa-sun text-amber-400"></i>
                        <span>قوة المستقبل تبدأ مع طاقة الشمس والرياح النظيفة</span>
                    </div>

                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
                        استثمر في المستقبل بـ <br>
                        <span class="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400 bg-clip-text text-transparent">
                            طاقة مستدامة لا تنتهي
                        </span>
                    </h1>

                    <p class="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                        نقدم لك أحدث المنظومات الشمسية وطاقة الرياح المتطورة لتخفيض فاتورة الكهرباء بنسبة تصل إلى <strong class="text-emerald-400 font-bold">100%</strong> والتحول الكامل نحو بيئة نقية ومستقبل آمن.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                        <a href="#calculator" class="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-emerald-500/20 transition duration-300 hover:scale-105 text-base">
                            <i class="fa-solid fa-calculator text-lg"></i>
                            <span>احسب وفرك المالي الآن</span>
                        </a>
                        <a href="#services" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass-panel hover:bg-emerald-950/80 text-white font-semibold px-8 py-4 rounded-xl border border-emerald-500/30 transition duration-300 hover:border-emerald-400 text-base">
                            <span>استكشف خدماتنا</span>
                            <i class="fa-solid fa-arrow-left text-sm text-emerald-400"></i>
                        </a>
                    </div>

                    <!-- Trust Indicators -->
                    <div class="pt-8 border-t border-emerald-900/40 grid grid-cols-3 gap-4 text-center lg:text-right">
                        <div>
                            <div class="text-2xl sm:text-3xl font-black text-amber-400 flex items-center justify-center lg:justify-start gap-1">
                                <span>+15</span>
                            </div>
                            <div class="text-xs text-gray-400 mt-1">سنة من الخبرة</div>
                        </div>
                        <div>
                            <div class="text-2xl sm:text-3xl font-black text-emerald-400 flex items-center justify-center lg:justify-start gap-1">
                                <span>+1200</span>
                            </div>
                            <div class="text-xs text-gray-400 mt-1">مشروع ناجح</div>
                        </div>
                        <div>
                            <div class="text-2xl sm:text-3xl font-black text-teal-300 flex items-center justify-center lg:justify-start gap-1">
                                <span>99.8%</span>
                            </div>
                            <div class="text-xs text-gray-400 mt-1">رضا العملاء</div>
                        </div>
                    </div>
                </div>

                <!-- Hero Graphic Visual / Dashboard Simulation -->
                <div class="lg:col-span-5 relative">
                    <div class="relative mx-auto max-w-md lg:max-w-none">
                        <!-- Background Glow Behind Card -->
                        <div class="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-3xl blur-2xl opacity-30 animate-pulse-slow"></div>

                        <!-- Card UI -->
                        <div class="relative glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-emerald-500/30 shadow-2xl">
                            <div class="flex items-center justify-between pb-4 border-b border-emerald-900/40">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                        <i class="fa-solid fa-solar-panel text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-white text-sm">لوحة الطاقة الحية</h3>
                                        <span class="text-xs text-emerald-400 flex items-center gap-1">
                                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> متصل بالشبكة
                                        </span>
                                    </div>
                                </div>
                                <span class="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">كفاءة 98%</span>
                            </div>

                            <!-- Live Metric Widget 1 -->
                            <div class="bg-emerald-950/50 p-4 rounded-2xl border border-emerald-900/40 flex items-center justify-between">
                                <div>
                                    <span class="text-xs text-gray-400 block mb-1">الإنتاج اليومي الحقيقي</span>
                                    <div class="text-2xl font-black text-white flex items-baseline gap-1">
                                        <span id="live-power">48.5</span> <span class="text-xs text-amber-400 font-normal">كيلو واط/ساعة</span>
                                    </div>
                                </div>
                                <div class="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 text-xl">
                                    <i class="fa-solid fa-sun animate-spin" style="animation-duration: 12s;"></i>
                                </div>
                            </div>

                            <!-- Live Metric Widget 2 -->
                            <div class="grid grid-cols-2 gap-4">
                                <div class="bg-emerald-950/40 p-4 rounded-2xl border border-emerald-900/30">
                                    <span class="text-xs text-gray-400 block">خفض انبعاثات CO₂</span>
                                    <span class="text-lg font-extrabold text-emerald-400 mt-1 block">3.4 طن/سنة</span>
                                </div>
                                <div class="bg-emerald-950/40 p-4 rounded-2xl border border-emerald-900/30">
                                    <span class="text-xs text-gray-400 block">الوفر التراكمي</span>
                                    <span class="text-lg font-extrabold text-amber-400 mt-1 block">$14,250</span>
                                </div>
                            </div>

                            <!-- Energy Bar Animation -->
                            <div class="space-y-2">
                                <div class="flex justify-between text-xs text-gray-300">
                                    <span>مستوى شحن البطاريات</span>
                                    <span class="text-emerald-400 font-bold">92%</span>
                                </div>
                                <div class="w-full bg-emerald-950 rounded-full h-3 p-0.5 border border-emerald-800/40">
                                    <div class="bg-gradient-to-r from-emerald-500 to-amber-400 h-full rounded-full w-[92%] transition-all duration-1000"></div>
                                </div>
                            </div>

                            <div class="pt-2 text-center">
                                <span class="text-xs text-gray-400 italic">تم توليد أكثر من 2.4 ميجا واط هذا الشهر</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="py-24 relative bg-gradient-to-b from-[#06110c] via-[#091f16] to-[#06110c]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                <!-- Visual Cards Grid -->
                <div class="relative order-2 lg:order-1">
                    <div class="grid grid-cols-2 gap-4 sm:gap-6">
                        <div class="space-y-4 sm:space-y-6">
                            <div class="glass-card p-6 rounded-3xl border border-emerald-500/20">
                                <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 text-2xl">
                                    <i class="fa-solid fa-seedling"></i>
                                </div>
                                <h4 class="font-bold text-lg text-white mb-2">رؤيتنا البيئية</h4>
                                <p class="text-xs text-gray-300 leading-relaxed">بناء عالم تعتمد فيه كافة القطاعات على طاقة نظيفة متجددة بنسبة 100%.</p>
                            </div>
                            <div class="glass-card p-6 rounded-3xl border border-amber-500/20 bg-amber-950/10">
                                <div class="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-400 mb-4 text-2xl">
                                    <i class="fa-solid fa-award"></i>
                                </div>
                                <h4 class="font-bold text-lg text-white mb-2">جودة عالمية</h4>
                                <p class="text-xs text-gray-300 leading-relaxed">استخدام ألواح ومحولات معتمدة بأعلى معايير الكفاءة والسلامة الأوروبية.</p>
                            </div>
                        </div>

                        <div class="space-y-4 sm:space-y-6 pt-8">
                            <div class="glass-card p-6 rounded-3xl border border-emerald-500/20">
                                <div class="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-300 mb-4 text-2xl">
                                    <i class="fa-solid fa-microchip"></i>
                                </div>
                                <h4 class="font-bold text-lg text-white mb-2">تقنيات ذكية</h4>
                                <p class="text-xs text-gray-300 leading-relaxed">أنظمة مراقبة ذكية توفر متابعة فورية لمعدلات الإنتاج عبر الهاتف.</p>
                            </div>
                            <div class="glass-card p-6 rounded-3xl border border-emerald-500/20">
                                <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 text-2xl">
                                    <i class="fa-solid fa-headset"></i>
                                </div>
                                <h4 class="font-bold text-lg text-white mb-2">دعم متواصل</h4>
                                <p class="text-xs text-gray-300 leading-relaxed">فريق صيانة هندسي متخصص جاهز على مدار 24/7 لضمان أداء المنظومة.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Text Content -->
                <div class="space-y-6 order-1 lg:order-2 text-center lg:text-right">
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                        <i class="fa-solid fa-building"></i>
                        <span>عن شركة الطاقة الخضراء</span>
                    </div>

                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                        نحن نقود التحول نحو <br>
                        <span class="text-emerald-400">مستقبل مستدام وطاقة نظيفة</span>
                    </h2>

                    <p class="text-gray-300 leading-relaxed font-light text-base">
                        تأسست شركة **GreenEnergy (الطاقة الخضراء)** لتكون الرائدة في تقديم حلول هندسية متكاملة في مجالات الطاقة الشمسية وطاقة الرياح وتخزين الطاقة للمنازل والمنشآت التجارية والصناعية.
                    </p>

                    <p class="text-gray-300 leading-relaxed font-light text-base">
                        نحن لا نبيع ألواحاً شمسية فحسب، بل نصمم منظومات طاقة ذكية ومخصصة تعود بالنفع المالي والتنموي المباشر على عملائنا مع تقليل البصمة الكربونية للبيئة.
                    </p>

                    <!-- Features List -->
                    <div class="space-y-3 pt-2 text-right">
                        <div class="flex items-center gap-3">
                            <div class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
                                <i class="fa-solid fa-check"></i>
                            </div>
                            <span class="text-sm text-gray-200 font-medium">ضمان كفاءة أداء يمتد حتى 25 عاماً على الألواح الشمسية</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
                                <i class="fa-solid fa-check"></i>
                            </div>
                            <span class="text-sm text-gray-200 font-medium">تركيب وتنفيذ بأيدي مهندسين وفنيين معتمدين دولياً</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
                                <i class="fa-solid fa-check"></i>
                            </div>
                            <span class="text-sm text-gray-200 font-medium">خطة تمويل وخطط سداد مرنة تناسب كافة القطاعات</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SERVICES SECTION -->
    <section id="services" class="py-24 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Section Header -->
            <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                    <i class="fa-solid fa-gears"></i>
                    <span>خدماتنا المتكاملة</span>
                </div>
                <h2 class="text-3xl sm:text-4xl font-black text-white">
                    حلول هندسية متطورة تفي بكافة احتياجاتك من <span class="text-emerald-400">الطاقة</span>
                </h2>
                <p class="text-gray-400 font-light text-sm sm:text-base">
                    نقدم باقة شاملة من الخدمات المصممة بأعلى معايير الموثوقية لتحقيق أقصى وفر مالي واستدامة.
                </p>
            </div>

            <!-- Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <!-- Service 1 -->
                <div class="glass-card rounded-3xl p-8 flex flex-col justify-between border border-emerald-500/20 relative group">
                    <div class="space-y-5">
                        <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-3xl group-hover:scale-110 transition-transform">
                            <i class="fa-solid fa-solar-panel"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">الأنظمة الشمسية الكهروضوئية</h3>
                        <p class="text-gray-400 text-sm leading-relaxed">
                            تصميم وتوريد وتركيب المحطات الشمسية للمنازل، والمصانع، والمزارع للربط مع الشبكة الكهربائية أو الأنظمة المنفصلة.
                        </p>
                    </div>
                    <div class="pt-6 mt-6 border-t border-emerald-900/30">
                        <a href="#contact" class="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm hover:gap-3 transition-all">
                            <span>اطلب تسعيرة</span>
                            <i class="fa-solid fa-arrow-left"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 2 -->
                <div class="glass-card rounded-3xl p-8 flex flex-col justify-between border border-emerald-500/20 relative group">
                    <div class="space-y-5">
                        <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300 text-3xl group-hover:scale-110 transition-transform">
                            <i class="fa-solid fa-wind"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">مزارع طاقة الرياح</h3>
                        <p class="text-gray-400 text-sm leading-relaxed">
                            حلول التوربينات الهوائية الحديثة لتوليد الطاقة الكهربائية من الرياح في المناطق ذات السرعات العالية بفاعلية ممتازة.
                        </p>
                    </div>
                    <div class="pt-6 mt-6 border-t border-emerald-900/30">
                        <a href="#contact" class="inline-flex items-center gap-2 text-teal-300 font-semibold text-sm hover:gap-3 transition-all">
                            <span>استكشف المزيد</span>
                            <i class="fa-solid fa-arrow-left"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 3 -->
                <div class="glass-card rounded-3xl p-8 flex flex-col justify-between border border-emerald-500/20 relative group">
                    <div class="space-y-5">
                        <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 text-3xl group-hover:scale-110 transition-transform">
                            <i class="fa-solid fa-battery-full"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">أنظمة تخزين الطاقة</h3>
                        <p class="text-gray-400 text-sm leading-relaxed">
                            بطاريات الليثيوم المتطورة لتخزين الفائض من الطاقة واستخدامها أثناء انقطاع التيار الكهربائي أو الفترات الليليّة.
                        </p>
                    </div>
                    <div class="pt-6 mt-6 border-t border-emerald-900/30">
                        <a href="#contact" class="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm hover:gap-3 transition-all">
                            <span>طلب تفاصيل</span>
                            <i class="fa-solid fa-arrow-left"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 4 -->
                <div class="glass-card rounded-3xl p-8 flex flex-col justify-between border border-emerald-500/20 relative group">
                    <div class="space-y-5">
                        <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-lime-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300 text-3xl group-hover:scale-110 transition-transform">
                            <i class="fa-solid fa-compass-drafting"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">الاستشارات والدراسات</h3>
                        <p class="text-gray-400 text-sm leading-relaxed">
                            دراسات الجدوى الاقتصادية، الفحص الهندسي، وتحليل استهلاك الطاقة لتقديم أنسب الحلول ذات العائد المالي السريع.
                        </p>
                    </div>
                    <div class="pt-6 mt-6 border-t border-emerald-900/30">
                        <a href="#contact" class="inline-flex items-center gap-2 text-emerald-300 font-semibold text-sm hover:gap-3 transition-all">
                            <span>حجز جلسة استشارية</span>
                            <i class="fa-solid fa-arrow-left"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- INTERACTIVE CALCULATOR SECTION -->
    <section id="calculator" class="py-24 relative bg-gradient-to-b from-[#06110c] via-[#0b241a] to-[#06110c] border-y border-emerald-900/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                    <i class="fa-solid fa-calculator"></i>
                    <span>حاسبة الطاقة والوفر التفاعلية</span>
                </div>
                <h2 class="text-3xl sm:text-4xl font-black text-white">
                    احسب وفرك المالي والمساحة المطلوبة <span class="text-amber-400">فوراً</span>
                </h2>
                <p class="text-gray-300 font-light text-sm sm:text-base">
                    حرك شريط الفاتورة الشهرية لمعرفة النظام الشمسي المناسب، التوفير السنوي والمتوقع، وتقليل الانبعاثات الكربونية.
                </p>
            </div>

            <!-- Calculator Interactive Box -->
            <div class="glass-panel p-6 sm:p-10 rounded-3xl border border-emerald-500/30 shadow-2xl">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    <!-- Controls Column -->
                    <div class="lg:col-span-6 space-y-8">
                        
                        <!-- Slider 1: Monthly Bill -->
                        <div class="space-y-4">
                            <div class="flex justify-between items-center">
                                <label class="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                                    <i class="fa-solid fa-file-invoice-dollar text-emerald-400"></i>
                                    <span>معدل الفاتورة الشهرية للكهرباء:</span>
                                </label>
                                <span class="text-xl sm:text-2xl font-black text-amber-400 bg-amber-950/40 px-3 py-1 rounded-xl border border-amber-500/20">
                                    <span id="bill-val">300</span> $
                                </span>
                            </div>
                            <input type="range" id="bill-range" min="50" max="2500" step="25" value="300" class="w-full">
                            <div class="flex justify-between text-xs text-gray-400">
                                <span>50 $ (سكني صغير)</span>
                                <span>2,500 $ (تجاري/صناعي)</span>
                            </div>
                        </div>

                        <!-- Selector: Location / Type -->
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="text-xs font-bold text-gray-300 block mb-2">نوع العقار:</label>
                                <select id="property-type" class="w-full bg-emerald-950/80 border border-emerald-800/60 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-400">
                                    <option value="residential">سكني (منزل / فيلا)</option>
                                    <option value="commercial">تجاري (مكتب / متجر)</option>
                                    <option value="industrial">صناعي / مزرعة</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-xs font-bold text-gray-300 block mb-2">نوع المنظومة:</label>
                                <select id="system-type" class="w-full bg-emerald-950/80 border border-emerald-800/60 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-400">
                                    <option value="on-grid">متصل بالشبكة (On-Grid)</option>
                                    <option value="off-grid">منفصل مع بطاريات (Off-Grid)</option>
                                </select>
                            </div>
                        </div>

                        <div class="bg-emerald-950/40 p-4 rounded-2xl border border-emerald-900/40 text-xs text-gray-300 space-y-1">
                            <p class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-info text-emerald-400"></i>
                                <span>تستند التقديرات إلى معدل الإشعاع الشمسي العربي وسعر الكيلوواط المرجعي.</span>
                            </p>
                        </div>
                    </div>

                    <!-- Results Dashboard Column -->
                    <div class="lg:col-span-6 bg-gradient-to-br from-emerald-950/90 to-emerald-900/40 p-6 sm:p-8 rounded-2xl border border-emerald-500/30 space-y-6">
                        <h3 class="text-lg font-bold text-white border-b border-emerald-800/50 pb-3 flex items-center justify-between">
                            <span>ملخص النتائج التقديرية</span>
                            <span class="text-xs font-normal text-emerald-400">تحديث فوري</span>
                        </h3>

                        <div class="grid grid-cols-2 gap-4">
                            <!-- Capacity Needed -->
                            <div class="bg-emerald-900/30 p-4 rounded-xl border border-emerald-800/40">
                                <span class="text-xs text-gray-300 block">حجم النظام المطلوب</span>
                                <div class="text-2xl font-black text-white mt-1">
                                    <span id="res-kw">6.2</span> <span class="text-xs text-emerald-400">kWp</span>
                                </div>
                            </div>

                            <!-- Area Needed -->
                            <div class="bg-emerald-900/30 p-4 rounded-xl border border-emerald-800/40">
                                <span class="text-xs text-gray-300 block">المساحة المطلوبة</span>
                                <div class="text-2xl font-black text-white mt-1">
                                    <span id="res-area">38</span> <span class="text-xs text-emerald-400">متر مربع</span>
                                </div>
                            </div>

                            <!-- Annual Savings -->
                            <div class="bg-emerald-900/30 p-4 rounded-xl border border-emerald-800/40 col-span-2 sm:col-span-1">
                                <span class="text-xs text-gray-300 block">التوفير المالي السنوي</span>
                                <div class="text-2xl font-black text-amber-400 mt-1">
                                    <span id="res-annual-savings">3,240</span> $
                                </div>
                            </div>

                            <!-- Carbon Offset -->
                            <div class="bg-emerald-900/30 p-4 rounded-xl border border-emerald-800/40 col-span-2 sm:col-span-1">
                                <span class="text-xs text-gray-300 block">خفض انبعاثات الكربون</span>
                                <div class="text-2xl font-black text-emerald-400 mt-1">
                                    <span id="res-co2">4.1</span> <span class="text-xs font-normal">طن/سنة</span>
                                </div>
                            </div>
                        </div>

                        <!-- 25 Years Savings Highlight -->
                        <div class="bg-gradient-to-r from-amber-500/20 to-emerald-500/20 p-4 rounded-2xl border border-amber-500/30 text-center">
                            <span class="text-xs text-amber-300 font-semibold block uppercase tracking-wider">إجمالي التوفير المتوقع خلال 25 سنة</span>
                            <div class="text-3xl sm:text-4xl font-black text-amber-400 my-1">
                                <span id="res-25yr">$81,000</span>
                            </div>
                            <span class="text-[11px] text-gray-300">يضمن لك هذا النظام استرداد قيمة الاستثمار خلال 3-4 سنوات تقريباً!</span>
                        </div>

                        <!-- Action Button inside calc -->
                        <a href="#contact" onclick="fillContactFormWithCalc()" class="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-extrabold py-3.5 px-6 rounded-xl shadow-lg transition">
                            <i class="fa-solid fa-paper-plane"></i>
                            <span>طلب عرض سعر تفصيلي لهذه المنظومة</span>
                        </a>
                    </div>

                </div>
            </div>

        </div>
    </section>

    <!-- PORTFOLIO / PROJECTS SECTION -->
    <section id="portfolio" class="py-24 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="text-center max-w-3xl mx-auto space-y-4 mb-12">
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                    <i class="fa-solid fa-solar-panel"></i>
                    <span>معرض الأعمال والإنجازات</span>
                </div>
                <h2 class="text-3xl sm:text-4xl font-black text-white">
                    مشاريع نفذناها بكل <span class="text-emerald-400">فخر واحترافية</span>
                </h2>
                <p class="text-gray-400 font-light text-sm sm:text-base">
                    استكشف نخبة من مشاريعنا المنفذة في القطاعات السكنية، التجارية، والصناعية.
                </p>
            </div>

            <!-- Filter Buttons -->
            <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
                <button onclick="filterProjects('all')" class="project-filter-btn active px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition bg-emerald-500 text-slate-950">الكل</button>
                <button onclick="filterProjects('solar')" class="project-filter-btn px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition bg-emerald-950/60 text-gray-300 hover:text-emerald-400 border border-emerald-800/40">طاقة شمسية</button>
                <button onclick="filterProjects('wind')" class="project-filter-btn px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition bg-emerald-950/60 text-gray-300 hover:text-emerald-400 border border-emerald-800/40">طاقة الرياح</button>
                <button onclick="filterProjects('commercial')" class="project-filter-btn px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition bg-emerald-950/60 text-gray-300 hover:text-emerald-400 border border-emerald-800/40">مشاريع تجارية</button>
                <button onclick="filterProjects('residential')" class="project-filter-btn px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition bg-emerald-950/60 text-gray-300 hover:text-emerald-400 border border-emerald-800/40">فيلل ومساكن</button>
            </div>

            <!-- Projects Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-container">
                
                <!-- Project Item 1 -->
                <div class="project-card glass-card rounded-3xl overflow-hidden border border-emerald-500/20 group" data-category="solar commercial">
                    <div class="relative h-56 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80" alt="محطة مصنع شمسية" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#08140f] via-transparent to-transparent opacity-80"></div>
                        <span class="absolute top-4 right-4 bg-emerald-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-full">500 kWp</span>
                    </div>
                    <div class="p-6 space-y-3">
                        <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition">محطة الطاقة الشمسية لمجمع الصناعات</h3>
                        <p class="text-xs text-gray-400 leading-relaxed">تنفيذ محطة شمسية أفقية بقدرة 500 كيلوواط لتغطية كافة احتياجات المصنع التشغيلية.</p>
                        <div class="pt-3 border-t border-emerald-900/40 flex justify-between items-center text-xs text-emerald-400 font-semibold">
                            <span>توفير سنوي: $95,000</span>
                            <button onclick="openModal('محطة الطاقة الشمسية لمجمع الصناعات', '500 kWp', 'صناعي/تجاري', 'تم تركيبه بواسطة فريقنا الهندسي مع ربط كامل مع الشبكة وتوفير أكثر من 95 ألف دولار سنوياً.')" class="underline hover:text-white">التفاصيل</button>
                        </div>
                    </div>
                </div>

                <!-- Project Item 2 -->
                <div class="project-card glass-card rounded-3xl overflow-hidden border border-emerald-500/20 group" data-category="residential solar">
                    <div class="relative h-56 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80" alt="فيلا سكنية" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#08140f] via-transparent to-transparent opacity-80"></div>
                        <span class="absolute top-4 right-4 bg-amber-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-full">15 kWp</span>
                    </div>
                    <div class="p-6 space-y-3">
                        <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition">منظومة شمسية هجينة لفيلا سكنية</h3>
                        <p class="text-xs text-gray-400 leading-relaxed">تركيب ألواح عالية الكفاءة مع نظام بطاريات ليثيوم لتأمين الكهرباء 24/7 دون انقطاع.</p>
                        <div class="pt-3 border-t border-emerald-900/40 flex justify-between items-center text-xs text-emerald-400 font-semibold">
                            <span>توفير سنوي: $4,200</span>
                            <button onclick="openModal('منظومة شمسية هجينة لفيلا سكنية', '15 kWp', 'سكني فاخر', 'منظومة متكاملة بقدرة 15 كيلوواط مع بطاريات تخزين سعة 20 كيلوواط/ساعة.')" class="underline hover:text-white">التفاصيل</button>
                        </div>
                    </div>
                </div>

                <!-- Project Item 3 -->
                <div class="project-card glass-card rounded-3xl overflow-hidden border border-emerald-500/20 group" data-category="wind commercial">
                    <div class="relative h-56 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80" alt="مشروع توربينات رياح" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#08140f] via-transparent to-transparent opacity-80"></div>
                        <span class="absolute top-4 right-4 bg-teal-400 text-slate-950 font-bold text-xs px-3 py-1 rounded-full">1.2 MW</span>
                    </div>
                    <div class="p-6 space-y-3">
                        <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition">مزرعة توربينات الرياح الإقليمية</h3>
                        <p class="text-xs text-gray-400 leading-relaxed">مشروع متكامل لتوليد طاقة الرياح لتغذية مجمع زراعي وتجاري نائي بالكهرباء النظيفة.</p>
                        <div class="pt-3 border-t border-emerald-900/40 flex justify-between items-center text-xs text-emerald-400 font-semibold">
                            <span>توفير سنوي: $180,000</span>
                            <button onclick="openModal('مزرعة توربينات الرياح الإقليمية', '1.2 MW', 'تجاري / زراعي', 'تركيب توربينات هوائية معلقة عالية الكفاءة تعمل حتى مع سرعات الرياح المنخفضة.')" class="underline hover:text-white">التفاصيل</button>
                        </div>
                    </div>
                </div>

                <!-- Project Item 4 -->
                <div class="project-card glass-card rounded-3xl overflow-hidden border border-emerald-500/20 group" data-category="solar commercial">
                    <div class="relative h-56 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80" alt="مركز تجاري" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#08140f] via-transparent to-transparent opacity-80"></div>
                        <span class="absolute top-4 right-4 bg-emerald-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-full">250 kWp</span>
                    </div>
                    <div class="p-6 space-y-3">
                        <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition">مشروع الطاقة الشمسية لمركز تسوق</h3>
                        <p class="text-xs text-gray-400 leading-relaxed">استغلال أسطح المركز التجاري لتركيب منظومة شمسية تقلل تكاليف التكييف والإضاءة.</p>
                        <div class="pt-3 border-t border-emerald-900/40 flex justify-between items-center text-xs text-emerald-400 font-semibold">
                            <span>توفير سنوي: $48,000</span>
                            <button onclick="openModal('مشروع الطاقة الشمسية لمركز تسوق', '250 kWp', 'تجاري', 'تم خفض استهلاك الطاقة بنسبة 65% خلال أوقات الذروة الصيفية.')" class="underline hover:text-white">التفاصيل</button>
                        </div>
                    </div>
                </div>

                <!-- Project Item 5 -->
                <div class="project-card glass-card rounded-3xl overflow-hidden border border-emerald-500/20 group" data-category="residential solar">
                    <div class="relative h-56 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" alt="مجمع سكني" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#08140f] via-transparent to-transparent opacity-80"></div>
                        <span class="absolute top-4 right-4 bg-amber-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-full">80 kWp</span>
                    </div>
                    <div class="p-6 space-y-3">
                        <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition">منظومة شمسية مركزية لمجمع سكني</h3>
                        <p class="text-xs text-gray-400 leading-relaxed">تغذية الخدمات المشتركة، إنارة الممرات ومضخات المياه لمجمع يتألف من 24 شقة.</p>
                        <div class="pt-3 border-t border-emerald-900/40 flex justify-between items-center text-xs text-emerald-400 font-semibold">
                            <span>توفير سنوي: $16,500</span>
                            <button onclick="openModal('منظومة شمسية مركزية لمجمع سكني', '80 kWp', 'مجمع سكني', 'تخفيض رسوم الخدمات المباشرة على السكان بنسبة 80%.')" class="underline hover:text-white">التفاصيل</button>
                        </div>
                    </div>
                </div>

                <!-- Project Item 6 -->
                <div class="project-card glass-card rounded-3xl overflow-hidden border border-emerald-500/20 group" data-category="commercial solar">
                    <div class="relative h-56 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1548611716-300183181827?auto=format&fit=crop&w=800&q=80" alt="مزرعة شمسية" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#08140f] via-transparent to-transparent opacity-80"></div>
                        <span class="absolute top-4 right-4 bg-emerald-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-full">300 kWp</span>
                    </div>
                    <div class="p-6 space-y-3">
                        <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition">مشروع الري الشمسي للمزارع</h3>
                        <p class="text-xs text-gray-400 leading-relaxed">تشغيل مضخات المياه الزراعية ذات القدرة العالية بالطاقة الشمسية المباشرة.</p>
                        <div class="pt-3 border-t border-emerald-900/40 flex justify-between items-center text-xs text-emerald-400 font-semibold">
                            <span>توفير سنوي: $52,000</span>
                            <button onclick="openModal('مشروع الري الشمسي للمزارع', '300 kWp', 'زراعي', 'الاستغناء الكامل عن مولدات الديزل المكلفة والملوثة للبيئة.')" class="underline hover:text-white">التفاصيل</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- TESTIMONIALS SECTION -->
    <section class="py-20 relative bg-emerald-950/20 border-y border-emerald-900/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                    <i class="fa-solid fa-comments"></i>
                    <span>آراء شركاء النجاح</span>
                </div>
                <h2 class="text-3xl sm:text-4xl font-black text-white">
                    ماذا يقول عملاؤنا عن <span class="text-emerald-400">تجربتهم معنا؟</span>
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="glass-card p-8 rounded-3xl border border-emerald-500/20 flex flex-col justify-between">
                    <div class="space-y-4">
                        <div class="flex text-amber-400 text-sm gap-1">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="text-gray-300 text-sm leading-relaxed italic">
                            "ركبت شركة الطاقة الخضراء منظومة 12 كيلوواط لمنزلي. الفاتورة انخفضت من 450 دولار إلى صفر تقريباً! الاحترافية والسرعة في التنفيذ كانت مذهلة."
                        </p>
                    </div>
                    <div class="pt-6 mt-6 border-t border-emerald-900/40 flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
                            م.ع
                        </div>
                        <div>
                            <h4 class="font-bold text-white text-sm">م. عبد الله الشمري</h4>
                            <span class="text-xs text-gray-400">مالك فيلا سكنية</span>
                        </div>
                    </div>
                </div>

                <!-- Testimonial 2 -->
                <div class="glass-card p-8 rounded-3xl border border-emerald-500/20 flex flex-col justify-between">
                    <div class="space-y-4">
                        <div class="flex text-amber-400 text-sm gap-1">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="text-gray-300 text-sm leading-relaxed italic">
                            "كشركة مصنعة، كان استهلاك الكهرباء يمثل عبئاً كبيراً. بفضل مشروع المحطة الشمسية بقدرة 400 كيلوواط استرددنا تكاليف المنظومة خلال أقل من 3 سنوات."
                        </p>
                    </div>
                    <div class="pt-6 mt-6 border-t border-emerald-900/40 flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">
                            س.ن
                        </div>
                        <div>
                            <h4 class="font-bold text-white text-sm">أحمد بن سعيد</h4>
                            <span class="text-xs text-gray-400">مدير التخطيط - مجموعة البلاستيك الحديثة</span>
                        </div>
                    </div>
                </div>

                <!-- Testimonial 3 -->
                <div class="glass-card p-8 rounded-3xl border border-emerald-500/20 flex flex-col justify-between">
                    <div class="space-y-4">
                        <div class="flex text-amber-400 text-sm gap-1">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="text-gray-300 text-sm leading-relaxed italic">
                            "خدمة بعد البيع والصيانة الدورية ممتازة جداً. تطبيق المراقبة الفوري يعطيني تقارير يومية دقيقة عن كمية الكهرباء المولدة والموفرة."
                        </p>
                    </div>
                    <div class="pt-6 mt-6 border-t border-emerald-900/40 flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-lg">
                            د.ف
                        </div>
                        <div>
                            <h4 class="font-bold text-white text-sm">د. فاطمة الزهراء</h4>
                            <span class="text-xs text-gray-400">مالكة مركز طبي</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CONTACT SECTION -->
    <section id="contact" class="py-24 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                <!-- Contact Info & Map Details -->
                <div class="lg:col-span-5 space-y-8">
                    <div class="space-y-4">
                        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                            <i class="fa-solid fa-envelope"></i>
                            <span>تواصل معنا</span>
                        </div>
                        <h2 class="text-3xl font-black text-white">
                            ابدأ رحلتك نحو <span class="text-emerald-400">الطاقة النظيفة</span> اليوم
                        </h2>
                        <p class="text-gray-400 text-sm leading-relaxed">
                            تواصل مع مستشارينا الهندسيين للحصول على معاينة ميدانية ودراسة جدوى مخصصة لعقارك مجاناً.
                        </p>
                    </div>

                    <!-- Contact Cards -->
                    <div class="space-y-4">
                        <div class="glass-card p-5 rounded-2xl flex items-center gap-4 border border-emerald-500/20">
                            <div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl shrink-0">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <div>
                                <h4 class="text-xs text-gray-400 font-medium">العنوان الرئيسي</h4>
                                <p class="text-sm font-bold text-white">برج الطاقة الخضراء، شارع الملك فهد، الرياض / عمان</p>
                            </div>
                        </div>

                        <div class="glass-card p-5 rounded-2xl flex items-center gap-4 border border-emerald-500/20">
                            <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl shrink-0">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div>
                                <h4 class="text-xs text-gray-400 font-medium">الهاتف المباشر / واتساب</h4>
                                <p class="text-sm font-bold text-white" dir="ltr">+966 800 123 4567 / +962 6 500 0000</p>
                            </div>
                        </div>

                        <div class="glass-card p-5 rounded-2xl flex items-center gap-4 border border-emerald-500/20">
                            <div class="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center text-xl shrink-0">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div>
                                <h4 class="text-xs text-gray-400 font-medium">البريد الإلكتروني</h4>
                                <p class="text-sm font-bold text-white">info@greenenergy-arabia.com</p>
                            </div>
                        </div>
                    </div>

                    <!-- Visual Location Map Mockup -->
                    <div class="glass-card p-4 rounded-2xl border border-emerald-500/20">
                        <div class="relative h-44 rounded-xl overflow-hidden bg-emerald-950 flex items-center justify-center text-center p-4">
                            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80" class="absolute inset-0 w-full h-full object-cover opacity-30" alt="خريطة الموقع">
                            <div class="relative z-10 space-y-2">
                                <i class="fa-solid fa-map-pin text-3xl text-amber-400 animate-bounce"></i>
                                <h5 class="font-bold text-white text-sm">تغطية شاملة لجميع المناطق</h5>
                                <p class="text-xs text-gray-300">فرقنا الهندسية جاهزة للمعاينة في موقعك خلال 24 ساعة.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Interactive Consultation Form -->
                <div class="lg:col-span-7">
                    <div class="glass-panel p-8 sm:p-10 rounded-3xl border border-emerald-500/30 shadow-2xl relative">
                        
                        <div id="form-success-msg" class="hidden mb-6 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500 text-emerald-300 text-sm flex items-center gap-3">
                            <i class="fa-solid fa-circle-check text-2xl"></i>
                            <span>تم استلام طلبك بنجاح! سيتواصل معك أحد مهندسينا خلال ساعات قليلة.</span>
                        </div>

                        <form id="contact-form" onsubmit="handleFormSubmit(event)" class="space-y-6">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label class="text-xs font-bold text-gray-300 block mb-2">الاسم الكامل *</label>
                                    <input type="text" required placeholder="مثال: محمد أحمد" class="w-full bg-emerald-950/80 border border-emerald-800/60 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400">
                                </div>
                                <div>
                                    <label class="text-xs font-bold text-gray-300 block mb-2">رقم الهاتف / الواتساب *</label>
                                    <input type="tel" required placeholder="050 000 0000" class="w-full bg-emerald-950/80 border border-emerald-800/60 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400">
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label class="text-xs font-bold text-gray-300 block mb-2">البريد الإلكتروني</label>
                                    <input type="email" placeholder="name@domain.com" class="w-full bg-emerald-950/80 border border-emerald-800/60 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400">
                                </div>
                                <div>
                                    <label class="text-xs font-bold text-gray-300 block mb-2">المدينة / المنطقة *</label>
                                    <input type="text" required placeholder="مثال: الرياض / دبي / عمان" class="w-full bg-emerald-950/80 border border-emerald-800/60 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400">
                                </div>
                            </div>

                            <div>
                                <label class="text-xs font-bold text-gray-300 block mb-2">الخدمة المطلوبة</label>
                                <select id="form-service-select" class="w-full bg-emerald-950/80 border border-emerald-800/60 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-emerald-400">
                                    <option>تركيب نظام شمسي سكني</option>
                                    <option>محطة طاقة تجارية / صناعية</option>
                                    <option>مشروع طاقة الرياح</option>
                                    <option>أنظمة التخزين والبطاريات</option>
                                    <option>استشارة ودراسة جدوى</option>
                                </select>
                            </div>

                            <div>
                                <label class="text-xs font-bold text-gray-300 block mb-2">ملاحظات أو قيمة الفاتورة الشهرية</label>
                                <textarea id="form-notes" rows="4" placeholder="اكتب أي تفاصيل إضافية عن موقعك أو استهلاكك..." class="w-full bg-emerald-950/80 border border-emerald-800/60 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-400"></textarea>
                            </div>

                            <button type="submit" class="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black py-4 px-8 rounded-xl shadow-xl shadow-emerald-500/25 transition duration-300 hover:scale-[1.01] text-base flex items-center justify-center gap-3">
                                <i class="fa-solid fa-paper-plane"></i>
                                <span>إرسال طلب الاستشارة المجانية</span>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-[#040c08] border-t border-emerald-900/40 pt-16 pb-8 text-gray-400 text-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-900/40">
                
                <!-- Col 1: About Footer -->
                <div class="lg:col-span-2 space-y-4">
                    <a href="#" class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-amber-500 flex items-center justify-center text-slate-950 font-bold text-xl">
                            <i class="fa-solid fa-leaf"></i>
                        </div>
                        <span class="text-xl font-black text-white">الطاقة <span class="text-emerald-400">الخضراء</span></span>
                    </a>
                    <p class="text-xs text-gray-400 leading-relaxed max-w-sm">
                        الشركة الرائدة في مجال حلول الطاقة المتجددة والهندسة المستدامة في الشرق الأوسط. نسعى لتمكين الأفراد والشركات من استغلال طاقة الشمس والرياح بكفاءة.
                    </p>
                    
                    <!-- Social Links -->
                    <div class="flex items-center gap-3 pt-2">
                        <a href="#" class="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-800/40 text-emerald-400 flex items-center justify-center hover:bg-emerald-500 hover:text-slate-950 transition"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="#" class="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-800/40 text-emerald-400 flex items-center justify-center hover:bg-emerald-500 hover:text-slate-950 transition"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="#" class="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-800/40 text-emerald-400 flex items-center justify-center hover:bg-emerald-500 hover:text-slate-950 transition"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-800/40 text-emerald-400 flex items-center justify-center hover:bg-emerald-500 hover:text-slate-950 transition"><i class="fa-brands fa-facebook-f"></i></a>
                    </div>
                </div>

                <!-- Col 2: Quick Links -->
                <div class="space-y-3">
                    <h4 class="text-white font-bold text-base mb-2">روابط سريعة</h4>
                    <ul class="space-y-2 text-xs">
                        <li><a href="#about" class="hover:text-emerald-400 transition">من نحن</a></li>
                        <li><a href="#services" class="hover:text-emerald-400 transition">خدماتنا</a></li>
                        <li><a href="#calculator" class="hover:text-emerald-400 transition">حاسبة الوفر الشمسي</a></li>
                        <li><a href="#portfolio" class="hover:text-emerald-400 transition">معرض المشاريع</a></li>
                        <li><a href="#contact" class="hover:text-emerald-400 transition">تواصل معنا</a></li>
                    </ul>
                </div>

                <!-- Col 3: Services -->
                <div class="space-y-3">
                    <h4 class="text-white font-bold text-base mb-2">أنظمتنا</h4>
                    <ul class="space-y-2 text-xs">
                        <li><a href="#services" class="hover:text-emerald-400 transition">الأنظمة الشمسية السكنية</a></li>
                        <li><a href="#services" class="hover:text-emerald-400 transition">المحطات التجارية والصناعية</a></li>
                        <li><a href="#services" class="hover:text-emerald-400 transition">مزارع طاقة الرياح</a></li>
                        <li><a href="#services" class="hover:text-emerald-400 transition">بطاريات وأنظمة التخزين</a></li>
                        <li><a href="#services" class="hover:text-emerald-400 transition">الضمان والصيانة الدوريّة</a></li>
                    </ul>
                </div>

                <!-- Col 4: Newsletter -->
                <div class="space-y-3">
                    <h4 class="text-white font-bold text-base mb-2">النشرة البريدية</h4>
                    <p class="text-xs text-gray-400">اشترك للحصول على أحدث نصائح التوفير وتقنيات الطاقة المستدامة.</p>
                    <form onsubmit="handleNewsletter(event)" class="space-y-2">
                        <input type="email" required placeholder="بريدك الإلكتروني" class="w-full bg-emerald-950/80 border border-emerald-800/60 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400">
                        <button type="submit" class="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-xl text-xs transition">اشترك الآن</button>
                    </form>
                </div>

            </div>

            <!-- Bottom Credits -->
            <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
                <p>© 2026 شركة الطاقة الخضراء (GreenEnergy). جميع الحقوق محفوظة.</p>
                <div class="flex gap-6">
                    <a href="#" class="hover:text-gray-400">سياسة الخصوصية</a>
                    <a href="#" class="hover:text-gray-400">الشروط والأحكام</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- PROJECT DETAILS MODAL -->
    <div id="project-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div class="glass-panel max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-emerald-500/30 space-y-6 relative">
            <button onclick="closeModal()" class="absolute top-4 left-4 w-8 h-8 rounded-full bg-emerald-950 text-gray-400 hover:text-white flex items-center justify-center border border-emerald-800/40">
                <i class="fa-solid fa-xmark"></i>
            </button>

            <div class="space-y-2">
                <span id="modal-category" class="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">تفاصيل المشروع</span>
                <h3 id="modal-title" class="text-2xl font-black text-white">عنوان المشروع</h3>
            </div>

            <div class="grid grid-cols-2 gap-4 bg-emerald-950/50 p-4 rounded-2xl border border-emerald-900/40">
                <div>
                    <span class="text-xs text-gray-400 block">السعة الكلية</span>
                    <span id="modal-capacity" class="text-lg font-bold text-amber-400">---</span>
                </div>
                <div>
                    <span class="text-xs text-gray-400 block">القطاع</span>
                    <span id="modal-type" class="text-lg font-bold text-emerald-400">---</span>
                </div>
            </div>

            <p id="modal-desc" class="text-sm text-gray-300 leading-relaxed">تفاصيل ووصف كامل للمشروع المعني...</p>

            <div class="pt-4 border-t border-emerald-900/40 flex justify-end">
                <button onclick="closeModal()" class="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-sm transition">إغلاق النافذة</button>
            </div>
        </div>
    </div>

    <!-- JAVASCRIPT INTERACTIVE LOGIC -->
    <script>
        // 1. Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (mobileMenu.classList.contains('hidden')) {
                menuIcon.className = 'fa-solid fa-bars text-xl';
            } else {
                menuIcon.className = 'fa-solid fa-xmark text-xl';
            }
        });

        // Close mobile menu on link click
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.className = 'fa-solid fa-bars text-xl';
            });
        });

        // 2. Solar Calculator Dynamic Math Logic
        const billRange = document.getElementById('bill-range');
        const billVal = document.getElementById('bill-val');
        const propertyType = document.getElementById('property-type');
        const systemType = document.getElementById('system-type');

        const resKw = document.getElementById('res-kw');
        const resArea = document.getElementById('res-area');
        const resAnnualSavings = document.getElementById('res-annual-savings');
        const resCo2 = document.getElementById('res-co2');
        const res25yr = document.getElementById('res-25yr');

        function calculateSolar() {
            const bill = parseFloat(billRange.value);
            billVal.textContent = bill.toLocaleString();

            // Estimated System Size Calculation (e.g. $100 bill ≈ ~2 kW system required)
            let capacityKW = (bill / 48).toFixed(1);
            if (capacityKW < 1.5) capacityKW = 1.5;

            // Area needed: approx 6 sq meters per kW
            const areaM2 = Math.round(capacityKW * 6.2);

            // Annual savings: ~90% of annual bill
            const annualSaving = Math.round(bill * 12 * 0.90);

            // CO2 reduction: approx 0.65 tons per kW/year
            const co2Ton = (capacityKW * 0.66).toFixed(1);

            // 25 Years Savings
            const savings25 = Math.round(annualSaving * 25);

            // Update DOM
            resKw.textContent = capacityKW;
            resArea.textContent = areaM2;
            resAnnualSavings.textContent = annualSaving.toLocaleString();
            resCo2.textContent = co2Ton;
            res25yr.textContent = '$' + savings25.toLocaleString();
        }

        billRange.addEventListener('input', calculateSolar);
        propertyType.addEventListener('change', calculateSolar);
        systemType.addEventListener('change', calculateSolar);

        // Initial Calculation Run
        calculateSolar();

        // Fill form notes from Calculator CTA
        function fillContactFormWithCalc() {
            const bill = billRange.value;
            const kw = resKw.textContent;
            const notes = document.getElementById('form-notes');
            notes.value = `طلب بناءً على نتائج الحاسبة الشمسية: الفاتورة الشهرية (${bill}$)، بقدرة مستهدفة (${kw} kWp).`;
        }

        // 3. Live Simulation Random Numbers
        setInterval(() => {
            const livePower = document.getElementById('live-power');
            if (livePower) {
                const randomVal = (45 + Math.random() * 5).toFixed(1);
                livePower.textContent = randomVal;
            }
        }, 4000);

        // 4. Portfolio Filter Logic
        function filterProjects(category) {
            const buttons = document.querySelectorAll('.project-filter-btn');
            buttons.forEach(btn => {
                btn.classList.remove('bg-emerald-500', 'text-slate-950');
                btn.classList.add('bg-emerald-950/60', 'text-gray-300');
            });

            event.target.classList.remove('bg-emerald-950/60', 'text-gray-300');
            event.target.classList.add('bg-emerald-500', 'text-slate-950');

            const cards = document.querySelectorAll('.project-card');
            cards.forEach(card => {
                const cat = card.getAttribute('data-category');
                if (category === 'all' || cat.includes(category)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // 5. Modal Windows Logic
        function openModal(title, capacity, type, desc) {
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-capacity').textContent = capacity;
            document.getElementById('modal-type').textContent = type;
            document.getElementById('modal-desc').textContent = desc;
            document.getElementById('project-modal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('project-modal').classList.add('hidden');
        }

        // 6. Form Submission Handlers
        function handleFormSubmit(e) {
            e.preventDefault();
            const successMsg = document.getElementById('form-success-msg');
            successMsg.classList.remove('hidden');
            e.target.reset();
            setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 6000);
        }

        function handleNewsletter(e) {
            e.preventDefault();
            alert('شكراً لاشتراكك في نشرتنا البريدية الخاصة بالطاقة الخضراء!');
            e.target.reset();
        }

        // 7. Navbar Style Change on Scroll
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('bg-[#06110c]/95', 'shadow-xl');
            } else {
                navbar.classList.remove('bg-[#06110c]/95', 'shadow-xl');
            }
        });
    </script>
</body>
</html>
