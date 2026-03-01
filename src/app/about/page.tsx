import Link from "next/link";
import { Users, BookOpen, Award, Target, Zap, Heart } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-white pb-20">
            {/* Hero Section */}
            <section className="relative pt-24 pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')] opacity-20 mix-blend-overlay bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-200 backdrop-blur-sm border border-indigo-500/30 font-medium text-sm mb-8">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                        </span>
                        เกี่ยวกับ WealthTech Academy
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                        เราสร้างอนาคต <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                            ผ่านการเรียนรู้ที่ไม่มีวันสิ้นสุด
                        </span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        WealthTech Academy มุ่งมั่นที่จะยกระดับทักษะของคนไทยให้พร้อมรับมือกับโลกยุคดิจิทัล
                        ด้วยคอร์สเรียนคุณภาพสูงที่สอนโดยผู้เชี่ยวชาญตัวจริงจากอุตสาหกรรม
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative z-20 -mt-16 mb-20">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-xl shadow-indigo-100/50 border border-slate-100 p-8 md:p-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
                            <div className="text-center px-4">
                                <span className="block text-4xl md:text-5xl font-black text-slate-900 mb-2">100K+</span>
                                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">ผู้เรียนทั้งหมด</span>
                            </div>
                            <div className="text-center px-4">
                                <span className="block text-4xl md:text-5xl font-black text-slate-900 mb-2">500+</span>
                                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">คอร์สเรียนคุณภาพ</span>
                            </div>
                            <div className="text-center px-4">
                                <span className="block text-4xl md:text-5xl font-black text-slate-900 mb-2">120+</span>
                                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">ผู้เชี่ยวชาญ (Instructors)</span>
                            </div>
                            <div className="text-center px-4">
                                <span className="block text-4xl md:text-5xl font-black text-slate-900 mb-2">98%</span>
                                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">ความพึงพอใจ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur-lg opacity-30"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop"
                                    alt="Our Team"
                                    className="relative rounded-2xl shadow-2xl object-cover w-full aspect-square md:aspect-[4/5]"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 space-y-10">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <Target className="w-8 h-8 text-indigo-600" /> วิสัยทัศน์ของเรา
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    "เป็นแพลตฟอร์มการเรียนรู้อันดับหนึ่งในอาเซียน ที่เชื่อมต่อความต้องการของตลาดแรงงาน
                                    เข้ากับศักยภาพที่ซ่อนอยู่ของทุกคน เพื่อขับเคลื่อนเศรษฐกิจดิจิทัลให้เติบโตอย่างยั่งยืน"
                                </p>
                            </div>

                            <div className="h-px bg-slate-200 w-full"></div>

                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <Zap className="w-8 h-8 text-amber-500" /> พันธกิจ
                                </h2>
                                <ul className="space-y-4 text-slate-600 text-lg">
                                    <li className="flex gap-3">
                                        <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0 mt-1">1</span>
                                        ส่งมอบเนื้อหาที่ทันสมัย อัปเดตตามเทรนด์โลกเสมอ
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</span>
                                        สร้างประสบการณ์การเรียนรู้ที่ดีที่สุด ใช้งานง่าย เข้าถึงได้ทุกที่
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0 mt-1">3</span>
                                        ผลักดันให้ผู้เรียนนำความรู้ไปใช้ต่อยอดในสายอาชีพได้จริง
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Values</h2>
                    <p className="text-lg text-slate-500 mb-16">คุณค่าที่เรายึดถือในการทำงานและสร้างสรรค์ผลิตภัณฑ์เพื่อคุณ</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                        <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6">
                                <Heart className="w-7 h-7 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Learner First</h3>
                            <p className="text-slate-600">เอาผู้เรียนเป็นศูนย์กลาง เราตั้งใจออกแบบระบบและคัดสรรเนื้อหา โดยคำนึงถึงประโยชน์สูงสุดของผู้เรียนเสมอ</p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
                                <Award className="w-7 h-7 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
                            <p className="text-slate-600">มาตรฐานคือสิ่งที่สะท้อนตัวตน เราไม่เคยลดละที่จะพัฒนาคุณภาพของคอร์สเรียนให้เป็นระดับเวิลด์คลาส</p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-6">
                                <Zap className="w-7 h-7 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Keep Growing</h3>
                            <p className="text-slate-600">เราส่งเสริมให้ทีมงานและผู้เรียนก้าวออกจากคอมฟอร์ทโซน กล้าลองสิ่งใหม่ๆ และเติบโตไปด้วยกันทุกวัน</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-indigo-600 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-400 opacity-20 blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">ร่วมเป็นส่วนหนึ่งของ WealthTech Academy</h2>
                            <p className="text-lg text-indigo-100 mb-10 max-w-2xl mx-auto">
                                เริ่มต้นเส้นทางการอัปสกิลของคุณตั้งแต่วันนี้ หรือหากคุณเป็นผู้เชี่ยวชาญที่ต้องการส่งต่อความรู้
                                มาร่วมเป็น Instructor กับเราได้เลย!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/courses" className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all hover:-translate-y-1">
                                    ดูคอร์สเรียนทั้งหมด
                                </Link>
                                <Link href="/register" className="bg-transparent border-2 border-indigo-400 text-white font-bold py-4 px-8 rounded-xl hover:bg-indigo-700 transition-all hover:-translate-y-1">
                                    สมัครสมาชิกฟรี
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
