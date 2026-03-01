import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-xl text-indigo-600">WealthTech Academy</span>
                    </Link>
                    <nav className="hidden md:flex gap-6">
                        <Link href="/courses" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                            คอร์สเรียนทั้งหมด
                        </Link>
                        <Link href="/news" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                            ข่าวสาร
                        </Link>
                        <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                            เกี่ยวกับเรา
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end gap-4">
                    <div className="hidden md:flex w-full max-w-sm items-center space-x-2">
                        <input type="search" placeholder="ค้นหาคอร์สเรียน..." className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                    </div>
                    <nav className="flex items-center gap-2">
                        <Link href="/login" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 h-10 px-4 py-2 border border-gray-200">
                            เข้าสู่ระบบ
                        </Link>
                        <Link href="/register" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-indigo-600 text-white hover:bg-indigo-700 h-10 px-4 py-2 shadow-sm">
                            สมัครสมาชิก
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
