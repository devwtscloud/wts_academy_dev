import Link from "next/link";
import { Search, ChevronRight, Calendar, User, ArrowRight } from "lucide-react";

export default function NewsPage() {
    const featuredArticle = {
        id: "tech-trends-2026",
        title: "เจาะลึก 5 เทคโนโลยีเปลี่ยนโลกปี 2026 ที่คนทำงานยุคใหม่ต้องรู้",
        excerpt: "สำรวจเทรนด์เทคโนโลยีที่จะเข้ามามีบทบาทสำคัญในทุกอุตสาหกรรม พร้อมแนวทางการปรับตัวและอัปสกิลให้ตอบโจทย์ตลาดแรงงานในอนาคต",
        category: "Technology",
        author: "Suriya P.",
        date: "1 มี.ค. 2026",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
    };

    const categories = ["ทั้งหมด", "Technology", "Business & Finance", "Design", "Career Advice", "Life Skills"];

    const articles = [
        {
            id: "ai-prompt-engineering",
            title: "เจาะลึกเทคนิค Prompt Engineering สั่ง AI อย่างไรให้ได้งานระดับโปร",
            category: "Technology",
            date: "28 ก.พ. 2026",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: "agile-for-non-tech",
            title: "สรุปหลักคิด Agile สำหรับคนในสายงาน Non-Tech เอาไปปรับใช้ได้จริง",
            category: "Business & Finance",
            date: "25 ก.พ. 2026",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: "ui-trends-2026",
            title: "รวมเทรนด์ UI Design 2026 ที่เหล่านักออกแบบต้องรีบอัปเดต",
            category: "Design",
            date: "20 ก.พ. 2026",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: "salary-negotiation",
            title: "เทคนิคเจรจาต่อรองเงินเดือน เคล็ดลับอัปค่าเหนื่อยฉบับมนุษย์เงินเดือนประเมินเกรด A",
            category: "Career Advice",
            date: "15 ก.พ. 2026",
            image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: "burnout-recovery",
            title: "วิธีรับมือกับภาวะ Burnout ซินโดรม เติมไฟให้ตัวเองกลับมาทำงานอย่างมีความสุข",
            category: "Life Skills",
            date: "10 ก.พ. 2026",
            image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: "react-19-features",
            title: "มีอะไรใหม่ใน React 19? สรุปฟีเจอร์เด็ดที่สาย Frontend ห้ามพลาด",
            category: "Technology",
            date: "5 ก.พ. 2026",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Blog Header / Search */}
            <section className="bg-slate-50 border-b border-gray-100 py-12 md:py-20">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                        อัปเดตความรู้ เทรนด์ใหม่ และ <span className="text-indigo-600">เรื่องเล่าจากคนทำงาน</span>
                    </h1>
                    <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
                        แหล่งรวมบทความน่ารู้ เคล็ดลับการทำงาน และทักษะแห่งอนาคต เพื่อให้คุณก้าวทันโลกธุรกิจ
                    </p>

                    <div className="relative max-w-xl mx-auto shadow-sm">
                        <input
                            type="text"
                            placeholder="ค้นหาบทความ (เช่น AI, การลงทุน, ออกแบบ)..."
                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <Link href={`/news/${featuredArticle.id}`} className="group block">
                        <div className="flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto">
                            <div className="md:w-3/5 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                <img
                                    src={featuredArticle.image}
                                    alt={featuredArticle.title}
                                    className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="md:w-2/5 space-y-4">
                                <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                                    บทความแนะนำ • {featuredArticle.category}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
                                    {featuredArticle.title}
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed line-clamp-3">
                                    {featuredArticle.excerpt}
                                </p>
                                <div className="flex items-center gap-4 text-sm text-slate-500 pt-4">
                                    <div className="flex items-center gap-1.5"><User className="w-4 h-4" /> {featuredArticle.author}</div>
                                    <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {featuredArticle.date}</div>
                                </div>
                                <div className="pt-2">
                                    <span className="inline-flex items-center gap-1 text-indigo-600 font-semibold group-hover:gap-2 transition-all">
                                        อ่านต่อ <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Main Blog Content */}
            <section className="py-12 bg-slate-50 border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-6xl">

                    <div className="flex flex-col md:flex-row gap-10">
                        {/* Articles Grid */}
                        <div className="md:w-3/4">
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                                <h2 className="text-2xl font-bold text-slate-900">บทความล่าสุด</h2>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {articles.map((article, index) => (
                                    <Link href={`/news/${article.id}`} key={index} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300">
                                        <div className="relative overflow-hidden aspect-[16/10]">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-white/90 backdrop-blur text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                                                    {article.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {article.date}
                                            </div>
                                            <h3 className="font-bold text-lg text-slate-900 mb-4 group-hover:text-indigo-600 leading-snug line-clamp-2">
                                                {article.title}
                                            </h3>

                                            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center text-sm font-semibold text-indigo-500 group-hover:text-indigo-700">
                                                อ่านเพิ่มเติม <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="mt-12 flex justify-center pb-8">
                                <nav className="flex items-center gap-2">
                                    <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-400 hover:text-indigo-600 hover:border-indigo-600 transition-colors" disabled>
                                        <ChevronRight className="w-5 h-5 rotate-180" />
                                    </button>
                                    <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-600 text-white font-medium shadow-sm">
                                        1
                                    </button>
                                    <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-600 hover:text-indigo-600 hover:border-indigo-600 transition-colors">
                                        2
                                    </button>
                                    <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-600 hover:text-indigo-600 hover:border-indigo-600 transition-colors">
                                        3
                                    </button>
                                    <span className="text-gray-400 px-1">...</span>
                                    <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-600 hover:text-indigo-600 hover:border-indigo-600 transition-colors">
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </nav>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="md:w-1/4 space-y-8">
                            {/* Categories */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-slate-900 mb-4 pb-2 border-b border-gray-100">หมวดหมู่</h3>
                                <ul className="space-y-2 text-sm z-10 relative">
                                    {categories.map((cat, i) => (
                                        <li key={i}>
                                            <button className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${i === 0 ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'}`}>
                                                {cat}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Newsletter */}
                            <div className="bg-indigo-600 p-6 rounded-2xl text-white shadow-lg shadow-indigo-200">
                                <h3 className="font-bold text-lg mb-2">ติดตามข่าวสารใหม่ๆ</h3>
                                <p className="text-indigo-100 text-sm mb-4">รับบทความ เทรนด์ล่าสุด และโปรโมชันคอร์สเรียนก่อนใคร</p>
                                <input type="email" placeholder="กรอกอีเมลของคุณ" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-indigo-400 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white mb-3 text-sm" />
                                <button className="w-full bg-white text-indigo-600 font-bold py-3 rounded-xl hover:bg-slate-50 transition-colors text-sm shadow-sm">
                                    รับจดหมายข่าว
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
