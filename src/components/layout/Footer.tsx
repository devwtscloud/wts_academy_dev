import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t bg-gray-50 mt-16">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-indigo-600">WealthTech Academy</h3>
                        <p className="text-sm text-gray-600">
                            แพลตฟอร์มเรียนออนไลน์ที่ดีที่สุดสำหรับคุณ อัปสกิลการทำงานและเปลี่ยนสายอาชีพอย่างมั่นใจ
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-gray-900">คอร์สเรียน</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-indigo-600">Programming</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Data Science</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Design</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Business</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-gray-900">เกี่ยวกับเรา</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/about" className="hover:text-indigo-600">รู้จัก WealthTech Academy</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600">คำถามที่พบบ่อย (FAQ)</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600">ช่องทางการชำระเงิน</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600">ติดต่อเรา</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-gray-900">ติดตามเรา</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-indigo-600">FB</a>
                            <a href="#" className="text-gray-400 hover:text-indigo-600">IG</a>
                            <a href="#" className="text-gray-400 hover:text-indigo-600">YT</a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} WealthTech Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
