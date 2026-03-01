import Link from "next/link";
import { BookOpen, Star, Clock, Users, ChevronRight } from "lucide-react";
import HeroSlider from "../components/home/HeroSlider";

export default function Home() {
  const featuredCourses = [
    {
      id: "1",
      title: "Fullstack Web Development with Next.js 14",
      instructor: "Suriya P.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
      price: 2990,
      rating: 4.8,
      students: 1250,
      duration: "30 ชั่วโมง",
    },
    {
      id: "2",
      title: "Mastering Python for Data Science and Machine Learning",
      instructor: "Dr. Somchai D.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
      price: 3490,
      rating: 4.9,
      students: 840,
      duration: "45 ชั่วโมง",
    },
    {
      id: "3",
      title: "UI/UX Design Essential - From Beginner to Pro",
      instructor: "Jane Doe Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
      price: 1990,
      rating: 4.7,
      students: 2100,
      duration: "20 ชั่วโมง",
    },
    {
      id: "4",
      title: "The Ultimate Guide to Digital Marketing 2026",
      instructor: "Marketing Guru",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      price: 1590,
      rating: 4.6,
      students: 3450,
      duration: "15 ชั่วโมง",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSlider />

      {/* Trust & Logos Section */}
      <section className="py-10 border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">ได้รับความไว้วางใจจากบริษัทชั้นนำ</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
            {/* Mock logos text for layout */}
            <span className="text-2xl font-black">Google</span>
            <span className="text-2xl font-black">Microsoft</span>
            <span className="text-2xl font-black">Amazon</span>
            <span className="text-2xl font-black italic">Spotify</span>
            <span className="text-2xl font-black">Meta</span>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">คอร์สยอดนิยม</h2>
              <p className="text-gray-600">เรียนรู้ทักษะใหม่ๆ ที่ตลาดแรงงานต้องการมากที่สุดในขณะนี้</p>
            </div>
            <Link href="/courses" className="hidden md:inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700">
              ดูทั้งหมด &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course) => (
              <div key={course.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      ขายดี
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1 text-yellow-400 text-sm font-medium mb-3">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{course.rating}</span>
                    <span className="text-gray-400 ml-1">({course.students.toLocaleString()})</span>
                  </div>

                  <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-indigo-600 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-4">{course.instructor}</p>

                  <div className="mt-auto">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {course.duration}</span>
                      <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {course.students}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-emerald-600">฿{course.price.toLocaleString()}</span>
                      <Link href={`/courses/${course.id}`} className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-4 py-2 rounded-lg transition-colors">
                        ดูรายละเอียด
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/courses" className="inline-flex w-full justify-center items-center text-indigo-600 font-semibold border border-indigo-200 bg-indigo-50 rounded-lg px-6 py-3 hover:bg-indigo-100 transition-colors">
              ดูคอร์สทั้งหมด
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                เส้นทางการเรียนรู้ <span className="text-2xl">👍</span>
              </h2>
              <p className="text-gray-600">รูปแบบคอร์สเรียนออนไลน์ที่ออกแบบมาให้คุณ พร้อมเรียนรู้ตามลำดับขั้นตอนเพื่อผลลัพธ์ที่ดีที่สุด</p>
            </div>
            <Link href="/learning-paths" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 bg-indigo-50 px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap">
              ดูคอร์สเส้นทางการเรียนรู้ทั้งหมด &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Path 1 */}
            <div className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" />
              <div className="relative z-20 p-8 flex flex-col h-full min-h-[320px]">
                <div className="mb-auto">
                  <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">5 คอร์สเรียน</span>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">Frontend Developer</h3>
                  <p className="text-slate-300 text-sm line-clamp-2">เส้นทางสู่นักพัฒนาเว็บไซต์ส่วนหน้า ตั้งแต่พื้นฐาน HTML/CSS ไปจนถึง Next.js</p>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm flex items-center gap-1.5"><Clock className="w-4 h-4" /> 45 ชม.</span>
                    <Link href="/learning-paths/frontend" className="text-white font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      เริ่มเรียน <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Path 2 */}
            <div className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" />
              <div className="relative z-20 p-8 flex flex-col h-full min-h-[320px]">
                <div className="mb-auto">
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">7 คอร์สเรียน</span>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Data Scientist</h3>
                  <p className="text-slate-300 text-sm line-clamp-2">วิเคราะห์ข้อมูลให้เกิดมูลค่าสูงสุดด้วย Python, SQL และ AI Model</p>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm flex items-center gap-1.5"><Clock className="w-4 h-4" /> 60 ชม.</span>
                    <Link href="/learning-paths/data-science" className="text-white font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      เริ่มเรียน <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Path 3 */}
            <div className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" />
              <div className="relative z-20 p-8 flex flex-col h-full min-h-[320px]">
                <div className="mb-auto">
                  <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">4 คอร์สเรียน</span>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">UI/UX Designer</h3>
                  <p className="text-slate-300 text-sm line-clamp-2">ออกแบบประสบการณ์ผู้ใช้ที่โดนใจ ด้วยหลักการดีไซน์และ Figma ตั้งแต่ศูนย์</p>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm flex items-center gap-1.5"><Clock className="w-4 h-4" /> 35 ชม.</span>
                    <Link href="/learning-paths/ui-ux" className="text-white font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      เริ่มเรียน <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-indigo-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">เสียงตอบรับจากผู้เรียน</h2>
            <p className="text-indigo-200 text-lg">
              ส่วนหนึ่งของความประทับใจและความสำเร็จของผู้เรียนหลายแสนคนที่เชื่อมั่นใน WealthTech Academy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl relative">
              <div className="absolute top-6 right-8 text-6xl font-serif text-white/20 leading-none">"</div>
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-white text-base leading-relaxed mb-8 relative z-10">
                “คอร์สเรียนอัปเดตใหม่เสมอ ทันยุคสมัย เนื้อหานำไปประยุกต์ใช้ในการทำงานได้จริง ไม่ใช่แค่ทฤษฎี
                ขอบคุณแพลตฟอร์มนี้ที่ทำให้ผมก้าวเข้าสู่สายงาน Tech ได้อย่างมั่นใจครับ”
              </p>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop" alt="Student Profile" className="w-12 h-12 rounded-full object-cover border-2 border-indigo-400" />
                <div>
                  <h4 className="text-white font-bold text-sm">คุณสมชาย ขยันเรียน</h4>
                  <p className="text-indigo-300 text-xs">Junior Frontend Developer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-6 right-8 text-6xl font-serif text-white/20 leading-none">"</div>
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-white text-base leading-relaxed mb-8 relative z-10">
                “เรียนที่นี่คุ้มค่ามากค่ะ ชอบความที่มีเส้นทางการเรียนรู้ (Learning Path) ชัดเจน
                ทำให้คนไม่มีพื้นฐานเลยอย่างเราสามารถค่อยๆ ไต่ระดับไปจนถึงเป้าหมายได้ แถม UI เว็บก็ใช้งานง่ายด้วย”
              </p>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="Student Profile" className="w-12 h-12 rounded-full object-cover border-2 border-indigo-400" />
                <div>
                  <h4 className="text-white font-bold text-sm">คุณพิมลพรรณ ใจดี</h4>
                  <p className="text-indigo-300 text-xs">Data Analyst</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl relative">
              <div className="absolute top-6 right-8 text-6xl font-serif text-white/20 leading-none">"</div>
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-white text-base leading-relaxed mb-8 relative z-10">
                “เป็นแพลตฟอร์มของคนไทยที่คุณภาพเทียบเท่าระดับสากล
                อาจารย์ผู้สอนล้วนเป็นตัวจริงในวงการ ทำให้เราได้ insight ลึกๆ ที่หาอ่านเองไม่ได้ในเน็ต แนะนำเลยครับ”
              </p>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Student Profile" className="w-12 h-12 rounded-full object-cover border-2 border-indigo-400" />
                <div>
                  <h4 className="text-white font-bold text-sm">คุณกิตติชัย ศุภลักษณ์</h4>
                  <p className="text-indigo-300 text-xs">UX/UI Designer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Logos that hire graduates */}
          <div className="mt-20 pt-10 border-t border-white/10 max-w-4xl mx-auto">
            <p className="text-center text-sm font-medium text-indigo-300 mb-8 uppercase tracking-widest">
              ศิษย์เก่าของเราได้ร่วมงานกับบริษัทชั้นนำ
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
              <span className="text-2xl font-black text-white">Shopee</span>
              <span className="text-2xl font-bold text-white uppercase">Grab</span>
              <span className="text-2xl font-black text-white italic">Agoda</span>
              <span className="text-2xl font-black text-white">Line</span>
              <span className="text-2xl font-bold text-white tracking-widest">SCBX</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">เริ่มสร้างอนาคตของคุณตั้งแต่วันนี้</h2>
          <p className="text-indigo-100 mb-10 max-w-2xl mx-auto text-lg">
            สมัครสมาชิกฟรีเพื่อเข้าถึงคอร์สเรียนคุณภาพและคอมมูนิตี้ของผู้เรียนกว่าแสนคน
          </p>
          <Link href="/register" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-indigo-600 bg-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            สร้างบัญชีผู้ใช้ฟรี
          </Link>
        </div>
      </section>
    </div>
  );
}
