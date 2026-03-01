import Link from "next/link";
import { PlayCircle, Star, CheckCircle, Clock, FileText, Monitor, ChevronRight, Award, Users } from "lucide-react";
import { use } from "react";

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const unwrappedParams = use(params);
    const course = {
        id: unwrappedParams.id,
        title: "Fullstack Web Development with Next.js 14 and Prisma",
        description: "เรียนรู้การพัฒนาเว็บแอปพลิเคชันตั้งแต่ศูนย์จนถึงระดับโปร ด้วยเทคโนโลยีล่าสุด Next.js 14 App Router, Tailwind CSS, Prisma ORM, และ PostgreSQL (ครอบคลุมทั้ง Frontend และ Backend)",
        instructor: {
            name: "Suriya P.",
            title: "Senior Fullstack Developer",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
        },
        students: 1254,
        rating: 4.8,
        reviews: 320,
        price: 2990,
        oldPrice: 4500,
        lastUpdate: "ต.ค. 2026",
        videoPreview: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
    };

    const curriculum = [
        { title: "บทนำและการเตรียมความพร้อม", lectures: 3, duration: "45 นาที" },
        { title: "พื้นฐาน React และ Next.js สถาปัตยกรรมใหม่", lectures: 8, duration: "3 ชั่วโมง" },
        { title: "ตกแต่งเว็บไซต์ด้วย Tailwind CSS", lectures: 5, duration: "2 ชั่วโมง" },
        { title: "ออกแบบและเชื่อมต่อฐานข้อมูล (Prisma & PostgreSQL)", lectures: 10, duration: "4 ชั่วโมง" },
        { title: "ระบบยืนยันตัวตนและการจัดการเซสชั่น (NextAuth)", lectures: 6, duration: "2.5 ชั่วโมง" },
        { title: "Workshop: ระบบ E-Commerce ของจริง", lectures: 15, duration: "8 ชั่วโมง" },
    ];

    const whatYouWillLearn = [
        "สร้าง Fullstack Web App ด้วย Next.js 14 (App Router)",
        "เชื่อมต่อ Next.js กับ PostgreSQL ผ่าน Prisma ORM",
        "ออกแบบ UI ขั้นสูงและ Responsive ด้วย Tailwind CSS",
        "ใช้ระบบ Authentication และ Social Login อย่างปลอดภัย",
        "Deploy งานขึ้น Vercel และจัดการฐานข้อมูลบน Production",
        "เขียนโค้ดรองรับ SEO เพื่อให้เว็บติดหน้าแรก Google"
    ];

    return (
        <div className="bg-white">
            {/* Detail Hero Section */}
            <div className="bg-gray-900 text-white pb-12 pt-8">
                <div className="container mx-auto px-4">
                    <div className="flex items-center text-sm text-gray-400 mb-6 gap-2">
                        <Link href="/" className="hover:text-white transition-colors">หน้าแรก</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/courses" className="hover:text-white transition-colors">หลักสูตรเด่น</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-200">Programming</span>
                    </div>

                    <div className="max-w-3xl">
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                            {course.title}
                        </h1>
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            {course.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm mb-8">
                            <div className="flex items-center gap-1.5 text-yellow-400 font-semibold">
                                <Star className="w-5 h-5 fill-current" />
                                <span>{course.rating}</span>
                                <Link href="#reviews" className="text-indigo-400 hover:underline font-normal">
                                    ({course.reviews} รีวิว)
                                </Link>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Users className="w-4 h-4" /> {course.students.toLocaleString()} ผู้เรียน
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Clock className="w-4 h-4" /> อัปเดตล่าสุด {course.lastUpdate}
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <img src={course.instructor.image} className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500" />
                            <div>
                                <p className="font-medium text-gray-100">{course.instructor.name}</p>
                                <p className="text-xs text-indigo-300">{course.instructor.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-10">

                    <div className="lg:col-span-2 order-2 lg:order-1 mt-8 lg:mt-0">
                        {/* What you'll learn */}
                        <section className="mb-12 border border-gray-200 rounded-xl p-6 lg:p-8 bg-gray-50/50">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900">สิ่งที่คุณจะได้เรียนรู้</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {whatYouWillLearn.map((item, index) => (
                                    <div key={index} className="flex gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 leading-relaxed text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Curriculum */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-gray-900">เนื้อหาหลักสูตร</h2>
                            <div className="text-sm text-gray-600 mb-4">
                                รวม {curriculum.length} บทเรียน • {curriculum.reduce((acc, curr) => acc + curr.lectures, 0)} วิดีโอ • ความยาวรวม 20+ ชั่วโมง
                            </div>

                            <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
                                {curriculum.map((section, index) => (
                                    <div key={index} className="bg-white">
                                        <div className="flex justify-between items-center p-5 bg-gray-50/80 hover:bg-gray-100 cursor-pointer transition-colors">
                                            <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 flex items-center gap-2">
                                                <ChevronRight className="w-5 h-5 text-gray-400" />
                                                บทที่ {index + 1}: {section.title}
                                            </h3>
                                            <span className="text-sm text-gray-500 whitespace-nowrap hidden sm:block">
                                                {section.lectures} วิดีโอ • {section.duration}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-1 order-1 lg:order-2">
                        <div className="lg:-mt-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden sticky top-24 z-10 transition-transform duration-300">
                            <div className="relative aspect-video hidden lg:block group cursor-pointer">
                                <img src={course.videoPreview} alt={course.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                                    <PlayCircle className="w-16 h-16 text-white opacity-90 group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 text-xs text-white font-medium rounded-md">
                                    ตัวอย่างฟรี
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-end gap-3 mb-4">
                                    <span className="text-4xl font-extrabold text-gray-900">฿{course.price.toLocaleString()}</span>
                                    <span className="text-lg text-gray-400 line-through mb-1">฿{course.oldPrice.toLocaleString()}</span>
                                </div>

                                <div className="flex gap-2 text-sm text-red-600 mb-6 font-medium">
                                    <Clock className="w-4 h-4" /> ลดราคาพิเศษ เหลือเวลาเพียง 2 วัน
                                </div>

                                <Link href="/cart" className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-4 rounded-xl shadow-lg shadow-indigo-600/20 transition-all mb-3 text-lg">
                                    เพิ่มลงตะกร้า
                                </Link>
                                <Link href="/checkout" className="block w-full border border-gray-300 hover:bg-gray-50 text-gray-800 text-center font-bold py-3.5 rounded-xl transition-all mb-6 text-[15px]">
                                    ซื้อเลย
                                </Link>

                                <p className="text-center text-xs text-gray-500 mb-6">รับประกันคืนเงินภายใน 30 วัน หากไม่พอใจ</p>

                                <div className="space-y-4 pt-6 border-t border-gray-100">
                                    <h4 className="font-semibold text-gray-900">รวมอยู่ในคอร์สเรียน</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex items-center gap-3"><Monitor className="w-5 h-5 text-indigo-500" /> วิดีโอออนดีมานด์ 20 ชั่วโมง</li>
                                        <li className="flex items-center gap-3"><FileText className="w-5 h-5 text-indigo-500" /> เอกสารอ่านประกอบและ Source Code</li>
                                        <li className="flex items-center gap-3"><Users className="w-5 h-5 text-indigo-500" /> สิทธิ์เข้าถึงกลุ่มนักเรียน Q&A ตลอดชีพ</li>
                                        <li className="flex items-center gap-3"><Award className="w-5 h-5 text-indigo-500" /> เกียรติบัตรรับรองหลังเรียนจบ</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
