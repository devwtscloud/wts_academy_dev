import Link from "next/link";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

export default function RegisterPage() {
    return (
        <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="px-8 pt-8 pb-6 text-center">
                    <Link href="/" className="inline-block mb-4 text-2xl font-bold text-indigo-600">
                        WealthTech Academy
                    </Link>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">สร้างบัญชีผู้ใช้ใหม่</h2>
                    <p className="text-gray-500 text-sm">เริ่มต้นการเรียนรู้และอัปสกิลใหม่ๆ เพื่ออนาคตของคุณ</p>
                </div>

                <div className="px-8 pb-8">
                    <form className="space-y-4" action="#" method="POST">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name">
                                ชื่อ-นามสกุล
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="appearance-none block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50/50"
                                    placeholder="Somchai D."
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">
                                อีเมล
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50/50"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="password">
                                รหัสผ่าน <span className="text-xs text-gray-400 font-normal">(อย่างน้อย 8 ตัวอักษร)</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="appearance-none block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50/50"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center py-2.5 px-4 rounded-lg shadow-sm text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all hover:scale-[1.02]"
                            >
                                สมัครสมาชิก <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>

                        <p className="text-xs text-gray-500 text-center mt-4">
                            การสมัครสมาชิกหมายความว่าคุณยอมรับ<a href="#" className="text-indigo-600 hover:underline">ข้อตกลงในการใช้งาน</a>และ<a href="#" className="text-indigo-600 hover:underline">นโยบายความเป็นส่วนตัว</a>ของเรา
                        </p>
                    </form>
                </div>

                <div className="bg-gray-50 border-t border-gray-100 px-8 py-5 text-center sm:text-sm">
                    <p className="text-gray-500">
                        มีบัญชีผู้ใช้อยู่แล้ว?{" "}
                        <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
                            เข้าสู่ระบบ
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
