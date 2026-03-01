import Link from "next/link";
import { User, BookOpen, CreditCard, LogOut, Settings } from "lucide-react";

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-gray-50 min-h-[calc(100vh-64px)] py-10">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Profile Sidebar */}
                    <div className="md:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                            <div className="p-6 text-center border-b border-gray-100">
                                <div className="w-20 h-20 mx-auto bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-2xl mb-3">
                                    ST
                                </div>
                                <h3 className="font-bold text-gray-900">Student Name</h3>
                                <p className="text-sm text-gray-500">student@example.com</p>
                            </div>

                            <nav className="p-4 space-y-1">
                                <Link href="/profile" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors font-medium">
                                    <User className="w-5 h-5" /> ข้อมูลส่วนตัว
                                </Link>
                                <Link href="/profile/courses" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors font-medium">
                                    <BookOpen className="w-5 h-5" /> คอร์สเรียนของฉัน
                                </Link>
                                <Link href="/profile/payments" className="flex items-center gap-3 px-4 py-3 text-indigo-600 bg-indigo-50 rounded-lg transition-colors font-medium">
                                    <CreditCard className="w-5 h-5" /> ประวัติการชำระเงิน
                                </Link>
                                <Link href="/profile/settings" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors font-medium">
                                    <Settings className="w-5 h-5" /> ตั้งค่าบัญชี
                                </Link>

                                <div className="pt-4 mt-4 border-t border-gray-100">
                                    <button className="flex w-full items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium">
                                        <LogOut className="w-5 h-5" /> ออกจากระบบ
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="md:col-span-3">
                        {children}
                    </div>

                </div>
            </div>
        </div>
    );
}
