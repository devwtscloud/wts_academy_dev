import Link from "next/link";
import { Search, Filter, Star, Clock, Users, ArrowLeft } from "lucide-react";

export default async function SearchResultsPage({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const params = await searchParams;
    const query = typeof params.q === 'string' ? params.q.toLowerCase() : '';

    const allCourses = [
        { id: "1", title: "Fullstack Web Development with Next.js 14", instructor: "Suriya P.", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop", price: 2990, rating: 4.8, students: 1250, duration: "30 ชั่วโมง", category: "Programming" },
        { id: "2", title: "Mastering Python for Data Science and Machine Learning", instructor: "Dr. Somchai D.", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop", price: 3490, rating: 4.9, students: 840, duration: "45 ชั่วโมง", category: "Data Science" },
        { id: "3", title: "UI/UX Design Essential - From Beginner to Pro", instructor: "Jane Doe Design", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop", price: 1990, rating: 4.7, students: 2100, duration: "20 ชั่วโมง", category: "Design" },
        { id: "4", title: "The Ultimate Guide to Digital Marketing 2026", instructor: "Marketing Guru", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", price: 1590, rating: 4.6, students: 3450, duration: "15 ชั่วโมง", category: "Business" },
        { id: "5", title: "Advanced React Patterns", instructor: "Sarah J.", image: "https://images.unsplash.com/photo-1627398246734-d08b8b0e71ce?q=80&w=800&auto=format&fit=crop", price: 2490, rating: 4.9, students: 920, duration: "12 ชั่วโมง", category: "Programming" },
        { id: "6", title: "Business Strategy for Startups", instructor: "Venture Capitalist X", image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop", price: 4900, rating: 4.8, students: 450, duration: "10 ชั่วโมง", category: "Business" },
    ];

    const filteredCourses = query
        ? allCourses.filter(course =>
            course.title.toLowerCase().includes(query) ||
            course.category.toLowerCase().includes(query) ||
            course.instructor.toLowerCase().includes(query)
        )
        : [];

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <Link href="/courses" className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-1" /> กลับไปหน้าคอร์สเรียนทั้งหมด
                </Link>

                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">ผลการค้นหาสำหรับ "{query}"</h1>
                    <p className="text-gray-600 text-lg">พบ {filteredCourses.length} รายการที่ตรงกับการค้นหาของคุณ</p>
                </div>

                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course) => (
                            <div key={course.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                <div className="relative h-48 overflow-hidden">
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

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-1 text-yellow-400 text-sm font-medium">
                                            <Star className="w-4 h-4 fill-current" />
                                            <span>{course.rating}</span>
                                            <span className="text-gray-400 ml-1">({course.students.toLocaleString()})</span>
                                        </div>
                                    </div>

                                    <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 leading-relaxed group-hover:text-indigo-600 transition-colors">
                                        {course.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 mb-6">{course.instructor}</p>

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
                ) : (
                    <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                        <Search className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">ไม่พบคอร์สเรียนที่ตรงกับที่คุณหา</h2>
                        <p className="text-gray-500 mb-8 max-w-md mx-auto">
                            ลองใช้คำค้นหาอื่นที่เกี่ยวข้อง หรือเลือกดูคอร์สจากหมวดหมู่ที่เราแนะนำด้านล่างนี้
                        </p>
                        <Link href="/courses" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out">
                            ดูคอร์สเรียนทั้งหมด
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
