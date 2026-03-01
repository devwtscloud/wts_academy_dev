"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Users, BookOpen } from "lucide-react";

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "อัปสกิลแห่งอนาคต เรียนรู้อย่างไร้ขีดจำกัด",
            subtitle: "แพลตฟอร์มการเรียนรู้ที่รวบรวมคอร์สคุณภาพจากผู้เชี่ยวชาญตัวจริง สมัครวันนี้เพื่อเริ่มก้าวแรกสู่อาชีพในฝันของคุณ",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
            primaryButtonText: "เริ่มเรียนฟรี 7 วัน",
            primaryButtonLink: "/courses",
            secondaryButtonText: "ดูคอร์สทั้งหมด",
            secondaryButtonLink: "/courses",
            stats: true,
            bgClass: "from-indigo-900 via-indigo-800 to-purple-900",
            highlightClass: "from-teal-400 to-emerald-300"
        },
        {
            id: 2,
            title: "ก้าวสู่การเป็นนักพัฒนาซอฟต์แวร์มืออาชีพ",
            subtitle: "เรียนรู้ทักษะที่ตลาดต้องการสูงสุด จากคอร์สเรียนรูปแบบ Bootcamp พร้อมโปรเจกต์จริง",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
            primaryButtonText: "ดู Learning Paths",
            primaryButtonLink: "/learning-paths",
            secondaryButtonText: "สอบถามเพิ่มเติม",
            secondaryButtonLink: "/about",
            stats: false,
            bgClass: "from-slate-900 via-slate-800 to-blue-900",
            highlightClass: "from-blue-400 to-cyan-300"
        },
        {
            id: 3,
            title: "เข้าใจ Data วิเคราะห์ให้เป็น เห็นโอกาสให้มากกว่า",
            subtitle: "คอร์ส Data Science & Analytics ที่ครอบคลุมตั้งแต่พื้นฐานจนถึง AI Model โดยผู้พำนาุ่งระดับท็อป",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
            primaryButtonText: "คอร์สใหม่ล่าสุด",
            primaryButtonLink: "/courses",
            secondaryButtonText: "อ่านบทความ",
            secondaryButtonLink: "/news",
            stats: false,
            bgClass: "from-emerald-900 via-teal-800 to-slate-900",
            highlightClass: "from-emerald-300 to-teal-200"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Slide every 5 seconds
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <section className="relative overflow-hidden group">
            {/* Slides Container */}
            <div
                className="flex transition-transform duration-700 ease-in-out h-[600px] md:h-[700px]"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`w-full flex-shrink-0 relative flex items-center bg-gradient-to-br ${slide.bgClass} text-white`}
                    >
                        {/* Background Image and Overlay */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-10000"
                            style={{ backgroundImage: `url('${slide.image}')`, opacity: 0.2, mixBlendMode: 'overlay', transform: currentSlide === index ? 'scale(1.05)' : 'scale(1)' }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                        <div className="container mx-auto px-4 relative z-10 w-full">
                            <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
                                    {slide.title.split(' ').map((word, i) => (
                                        // Give highlight to alternating specific words based on slide
                                        i === 1 || i === 2 ?
                                            <span key={i} className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.highlightClass}`}> {word} </span>
                                            : <span key={i}> {word}</span>
                                    ))}
                                </h1>
                                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl drop-shadow-md pb-4">
                                    {slide.subtitle}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Link href={slide.primaryButtonLink} className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-transform hover:-translate-y-1 shadow-lg shadow-indigo-500/30 text-center">
                                        {slide.primaryButtonText}
                                    </Link>
                                    <Link href={slide.secondaryButtonLink} className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold rounded-lg transition-colors text-center">
                                        {slide.secondaryButtonText}
                                    </Link>
                                </div>

                                {slide.stats && (
                                    <div className="flex items-center gap-6 pt-8 text-sm font-medium text-gray-200">
                                        <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"><Users className="w-5 h-5 text-teal-400" /> นักเรียนกว่า 100k+</span>
                                        <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"><BookOpen className="w-5 h-5 text-teal-400" /> 500+ คอร์สคุณภาพ</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === index ? "w-8 h-2.5 bg-white scale-100" : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80 scale-90"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
