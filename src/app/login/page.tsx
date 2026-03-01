import Link from "next/link";
import { Mail, Lock, ArrowRight, Github } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="px-8 pt-8 pb-6 text-center">
                    <Link href="/" className="inline-block mb-6 text-2xl font-bold text-indigo-600">
                        WealthTech Academy
                    </Link>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">ยินดีต้อนรับกลับมา!</h2>
                    <p className="text-gray-500 text-sm">เข้าสู่ระบบเพื่อเรียนต่อและบรรลุเป้าหมายของคุณ</p>
                </div>

                <div className="px-8 pb-8">
                    <form className="space-y-5" action="#" method="POST">
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
                                    className="appearance-none block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50/50 transition-colors"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                                    รหัสผ่าน
                                </label>
                                <a href="#" className="font-medium text-sm text-indigo-600 hover:text-indigo-500 transition-colors">ลืมรหัสผ่าน?</a>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50/50 transition-colors"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">จดจำฉันในระบบ</label>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all hover:scale-[1.02]"
                            >
                                เข้าสู่ระบบ <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">หรือเข้าสู่ระบบด้วย</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <button className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                <span className="sr-only">Sign in with Google</span>
                                Google {/* You could use a Google icon svg here */}
                            </button>
                            <button className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                <span className="sr-only">Sign in with GitHub</span>
                                <Github className="w-5 h-5 text-gray-900" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 border-t border-gray-100 px-8 py-5 text-center sm:text-sm">
                    <p className="text-gray-500">
                        ยังไม่มีบัญชีใช่หรือไม่?{" "}
                        <Link href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
                            สมัครสมาชิกเลย
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
