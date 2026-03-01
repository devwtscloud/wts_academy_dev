import Link from "next/link";
import { BookOpen, Users, Settings, LogOut, LayoutDashboard, CreditCard } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col">
                <div className="p-6 border-b border-slate-800">
                    <Link href="/" className="text-2xl font-bold text-indigo-400">WealthTech Academy</Link>
                    <p className="text-xs text-slate-400 mt-1">Instructor Panel</p>
                </div>

                <nav className="flex-1 p-4 flex flex-col gap-2">
                    <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                        <LayoutDashboard className="w-5 h-5" /> ภาพรวม
                    </Link>
                    <Link href="/admin/courses" className="flex items-center gap-3 px-4 py-3 text-white bg-indigo-600 rounded-lg shadow-md transition-colors">
                        <BookOpen className="w-5 h-5" /> จัดการคอร์สเรียน
                    </Link>
                    <Link href="/admin/students" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                        <Users className="w-5 h-5" /> นักเรียนทั้งหมด
                    </Link>
                    <Link href="/admin/payments" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                        <CreditCard className="w-5 h-5" /> ประวัติการชำระเงิน
                    </Link>
                    <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                        <Settings className="w-5 h-5" /> ตั้งค่าระบบ
                    </Link>
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <button className="flex w-full items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors">
                        <LogOut className="w-5 h-5" /> ออกจากระบบ
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-y-auto">
                <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-0 z-10">
                    <h2 className="font-semibold text-gray-800">ระบบจัดการหลังบ้าน</h2>
                    <div className="flex items-center gap-3">
                        <div className="text-sm text-right hidden sm:block">
                            <p className="font-medium text-gray-900">Suriya P.</p>
                            <p className="text-gray-500 text-xs text-indigo-600 font-medium">Instructor</p>
                        </div>
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" alt="Admin" className="w-9 h-9 rounded-full object-cover border border-gray-200" />
                    </div>
                </header>
                <div className="p-6">
                    {children}
                </div>
            </main>
        </div>
    );
}
