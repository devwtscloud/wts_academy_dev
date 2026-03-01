import Link from "next/link";
import { Search, Filter, Star, Clock, Users } from "lucide-react";

export default function CoursesPage() {
    const courses = [
        { id: "1", title: "Fullstack Web Development with Next.js 14", instructor: "Suriya P.", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop", price: 2990, rating: 4.8, students: 1250, duration: "30 ชั่วโมง", category: "Programming" },
        { id: "2", title: "Mastering Python for Data Science and Machine Learning", instructor: "Dr. Somchai D.", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop", price: 3490, rating: 4.9, students: 840, duration: "45 ชั่วโมง", category: "Data Science" },
        { id: "3", title: "UI/UX Design Essential - From Beginner to Pro", instructor: "Jane Doe Design", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop", price: 1990, rating: 4.7, students: 2100, duration: "20 ชั่วโมง", category: "Design" },
        { id: "4", title: "The Ultimate Guide to Digital Marketing 2026", instructor: "Marketing Guru", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", price: 1590, rating: 4.6, students: 3450, duration: "15 ชั่วโมง", category: "Business" },
        { id: "5", title: "Advanced React Patterns", instructor: "Sarah J.", image: "https://images.unsplash.com/photo-1627398246734-d08b8b0e71ce?q=80&w=800&auto=format&fit=crop", price: 2490, rating: 4.9, students: 920, duration: "12 ชั่วโมง", category: "Programming" },
        { id: "6", title: "Business Strategy for Startups", instructor: "Venture Capitalist X", image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop", price: 4900, rating: 4.8, students: 450, duration: "10 ชั่วโมง", category: "Business" },
    ];

    const categories = ["All", "Programming", "Data Science", "Design", "Business", "Marketing", "Language"];

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">ค้นหาคอร์สเรียนทั้งหมด</h1>
                    <p className="text-gray-600">เริ่มต้นการเรียนรู้และพัฒนาทักษะของคุณกับคอร์สที่ใช่</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar / Filters */}
                    <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">
                        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2"><Filter className="w-5 h-5" /> หมวดหมู่</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                {categories.map((cat, i) => (
                                    <li key={i}>
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500 bg-gray-100 border-gray-300" defaultChecked={i === 0} />
                                            <span className="group-hover:text-indigo-600 transition-colors">{cat}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="font-semibold text-lg mb-4">ระดับ</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                {["ผู้เริ่มต้น", "ระดับกลาง", "ระดับสูง", "ทุกระดับ"].map((level, i) => (
                                    <li key={i}>
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500 bg-gray-100 border-gray-300" />
                                            <span className="group-hover:text-indigo-600 transition-colors">{level}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Main Course Grid */}
                    <div className="flex-1">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                            <div className="relative w-full sm:w-96">
                                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="ค้นหาชื่อคอร์ส, ผู้สอน..."
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm bg-white"
                                />
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 w-full sm:w-auto">
                                <span className="whitespace-nowrap">เรียงตาม:</span>
                                <select className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 outline-none p-2 bg-white flex-1 sm:flex-none">
                                    <option>ยอดนิยม</option>
                                    <option>มาใหม่</option>
                                    <option>ราคา: ต่ำไปสูง</option>
                                    <option>ราคา: สูงไปต่ำ</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {courses.map((course) => (
                                <div key={course.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                    <div className="relative h-44 overflow-hidden">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3 flex gap-2">
                                            <span className="bg-indigo-600/90 backdrop-blur text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded shadow-sm">
                                                {course.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-5 flex flex-col flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-1 text-yellow-400 text-sm font-medium">
                                                <Star className="w-4 h-4 fill-current" />
                                                <span>{course.rating}</span>
                                                <span className="text-gray-400 ml-1">({course.students.toLocaleString()})</span>
                                            </div>
                                        </div>

                                        <h3 className="font-bold text-gray-900 mb-1.5 line-clamp-2 leading-relaxed group-hover:text-indigo-600 transition-colors">
                                            {course.title}
                                        </h3>

                                        <p className="text-sm text-gray-500 mb-4">{course.instructor}</p>

                                        <div className="mt-auto">
                                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-50">
                                                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                                                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {course.students}</span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <span className="text-lg font-bold text-emerald-600">฿{course.price.toLocaleString()}</span>
                                                <Link href={`/courses/${course.id}`} className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-md transition-colors">
                                                    รายละเอียด
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Placeholder */}
                        <div className="mt-12 flex justify-center">
                            <nav className="flex items-center gap-1">
                                <button className="px-3 py-2 rounded-md border border-gray-200 bg-white text-gray-400 hover:text-gray-600 disabled:opacity-50">ก่อนหน้า</button>
                                <button className="px-4 py-2 rounded-md bg-indigo-600 text-white font-medium">1</button>
                                <button className="px-4 py-2 rounded-md bg-white border border-gray-200 text-gray-700 hover:bg-gray-50">2</button>
                                <button className="px-4 py-2 rounded-md bg-white border border-gray-200 text-gray-700 hover:bg-gray-50">3</button>
                                <span className="px-2 text-gray-400">...</span>
                                <button className="px-3 py-2 rounded-md border border-gray-200 bg-white text-gray-700 hover:bg-gray-50">ถัดไป</button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
