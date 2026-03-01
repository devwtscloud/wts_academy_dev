import Link from "next/link";
import { BookOpen, Clock, Users, ChevronRight, CheckCircle, Search } from "lucide-react";

export default function LearningPathsPage() {
    const learningPaths = [
        {
            id: "frontend",
            title: "Frontend Developer",
            description: "เส้นทางสู่นักพัฒนาเว็บไซต์ส่วนหน้า ตั้งแต่พื้นฐาน HTML/CSS ไปจนถึง Next.js และ React",
            coursesCount: 5,
            duration: "45 ชม.",
            students: 2350,
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
            theme: "indigo",
            features: ["เรียนรู้พื้นฐาน HTML/CSS/JS", "เจาะลึก React และ State Management", "พัฒนาแอปด้วย Next.js 14", "การตั้งค่าเว็บให้รองรับ SEO"]
        },
        {
            id: "data-science",
            title: "Data Scientist",
            description: "วิเคราะห์ข้อมูลให้เกิดมูลค่าสูงสุดด้วย Python, SQL และ AI Model ไปจนจบโปรเจกต์งานจริง",
            coursesCount: 7,
            duration: "60 ชม.",
            students: 1840,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            theme: "emerald",
            features: ["เขียน Python สำหรับ Data Analysis", "การจัดการฐานข้อมูลด้วย SQL", "พื้นฐาน Machine Learning", "ระบบแนะนำสินค้า (Recommendation)"]
        },
        {
            id: "ui-ux",
            title: "UI/UX Designer",
            description: "ออกแบบประสบการณ์ผู้ใช้ที่โดนใจ ด้วยหลักการดีไซน์และเทคนิคการใช้งาน Figma ตั้งแต่เริ่มต้นจนเป็นโปร",
            coursesCount: 4,
            duration: "35 ชม.",
            students: 3100,
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
            theme: "pink",
            features: ["หลักการออกแบบ UI/UX ขั้นพื้นฐาน", "การใช้เครื่องมือ Figma", "ออกแบบ Design System", "ทำ Prototyping เสมือนจริง"]
        },
        {
            id: "backend",
            title: "Backend Developer (Node.js)",
            description: "สร้าง API ที่ทรงพลังและปลอดภัยด้วย Node.js, Express และการจัดการ Database ด้วย PostgreSQL",
            coursesCount: 6,
            duration: "55 ชม.",
            students: 1560,
            image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=800&auto=format&fit=crop",
            theme: "sky",
            features: ["สร้าง RESTful API ด้วย Node.js", "การจัดการฐานข้อมูล SQL (Postgres)", "การทำ Authentication (JWT)", "Deploy ระบบขึ้น Cloud"]
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header Section */}
            <div className="bg-indigo-900 text-white pt-16 pb-20">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Learning Paths</h1>
                    <p className="text-xl text-indigo-200 mb-8">
                        เส้นทางการเรียนรู้ที่ถูกออกแบบมาเป็นขั้นเป็นตอน เพื่อให้คุณบรรลุเป้าหมายสายอาชีพได้อย่างมั่นใจ
                    </p>
                    <div className="relative max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="ค้นหาเส้นทางการเรียนรู้ (เช่น Frontend, Data Science)"
                            className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-10">
                {/* Stats Grid */}
                <div className="bg-white rounded-2xl shadow-xl flex flex-wrap divide-y md:divide-y-0 md:divide-x divide-gray-100 mb-16 max-w-4xl mx-auto">
                    <div className="flex-1 p-6 text-center">
                        <span className="block text-3xl font-black text-indigo-600 mb-1">10+</span>
                        <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">เส้นทางอาชีพ</span>
                    </div>
                    <div className="flex-1 p-6 text-center">
                        <span className="block text-3xl font-black text-indigo-600 mb-1">50+</span>
                        <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">คอร์สเรียน</span>
                    </div>
                    <div className="flex-1 p-6 text-center">
                        <span className="block text-3xl font-black text-indigo-600 mb-1">10,000+</span>
                        <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">นักเรียนในระบบ</span>
                    </div>
                </div>

                {/* Learning Paths List */}
                <div className="space-y-8 max-w-5xl mx-auto">
                    {learningPaths.map((path, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col md:flex-row group">
                            <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                                <img
                                    src={path.image}
                                    alt={path.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className={`bg-${path.theme}-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block shadow-sm`}>
                                        {path.coursesCount} คอร์สเรียน
                                    </span>
                                    <h3 className="text-2xl font-bold text-white leading-tight">{path.title}</h3>
                                </div>
                            </div>

                            <div className="md:w-3/5 p-8 flex flex-col justify-between">
                                <div>
                                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{path.description}</p>

                                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                                        {path.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-start gap-2 text-sm text-gray-700">
                                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-100 mt-auto">
                                    <div className="flex gap-6 text-sm text-gray-500 font-medium">
                                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {path.duration}</span>
                                        <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {path.students.toLocaleString()} คน</span>
                                    </div>
                                    <Link
                                        href={`/learning-paths/${path.id}`}
                                        className="inline-flex items-center justify-center gap-2 bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white font-bold py-2.5 px-6 rounded-xl transition-colors"
                                    >
                                        ดูรายละเอียดเส้นทาง <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
