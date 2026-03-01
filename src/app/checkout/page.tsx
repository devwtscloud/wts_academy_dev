import { CheckCircle2, CreditCard, QrCode } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
    const total = 4480;

    return (
        <div className="bg-gray-50 min-h-[calc(100vh-64px)] py-12">
            <div className="container mx-auto px-4 max-w-5xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">การชำระเงิน</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Payment Methods */}
                    <div className="flex-1 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                                เลือกช่องทางการชำระเงิน
                            </h2>

                            <div className="space-y-4">
                                {/* Method 1 */}
                                <label className="flex items-start gap-4 p-4 border-2 border-indigo-500 rounded-xl cursor-pointer bg-indigo-50/30">
                                    <div className="pt-0.5">
                                        <input type="radio" name="payment_method" className="w-5 h-5 text-indigo-600" defaultChecked />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-gray-900 flex items-center gap-2"><QrCode className="w-5 h-5 text-indigo-600" /> สแกน QR Code (PromptPay)</span>
                                        </div>
                                        <p className="text-sm text-gray-500">อนุมัติอัตโนมัติ รวดเร็วและไม่มีค่าธรรมเนียม</p>
                                    </div>
                                </label>

                                {/* Method 2 */}
                                <label className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-indigo-300 transition-colors">
                                    <div className="pt-0.5">
                                        <input type="radio" name="payment_method" className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-gray-900 flex items-center gap-2"><CreditCard className="w-5 h-5 text-gray-600" /> บัตรเครดิต / เดบิต</span>
                                        </div>
                                        <p className="text-sm text-gray-500">รองรับ Visa, Mastercard, JCB</p>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* Profile Info Summary */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                                ข้อมูลผู้ซื้อ (ใบเสร็จรับเงิน)
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1">ชื่อ-นามสกุล</label>
                                    <input type="text" value="Somchai D." readOnly className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700" />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1">อีเมล</label>
                                    <input type="email" value="somchai.d@example.com" readOnly className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700" />
                                </div>
                            </div>
                            <p className="text-sm text-gray-400 mt-3">* ใบเสร็จรับเงินจะถูกส่งไปยังอีเมลนี้</p>
                        </div>
                    </div>

                    {/* Checkout Summary */}
                    <div className="w-full lg:w-96">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">สรุปคำสั่งซื้อ</h2>

                            <div className="space-y-4 mb-6 border-b border-gray-100 pb-6">
                                <div className="flex gap-3">
                                    <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=100&auto=format&fit=crop" className="w-16 h-12 object-cover rounded" />
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 line-clamp-2">Fullstack Web Development with Next.js 14</h4>
                                        <span className="text-xs text-gray-500">฿2,990</span>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=100&auto=format&fit=crop" className="w-16 h-12 object-cover rounded" />
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 line-clamp-2">UI/UX Design Essential - From Beginner to Pro</h4>
                                        <span className="text-xs text-gray-500">฿1,990</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <span className="text-lg font-bold text-gray-900">ยอดชำระสุทธิ</span>
                                <span className="text-3xl font-extrabold text-indigo-600">฿{total.toLocaleString()}</span>
                            </div>

                            <Link href="/success" className="w-full flex justify-center items-center py-4 rounded-xl shadow-lg text-white font-bold bg-indigo-600 hover:bg-indigo-700 transition-all text-lg mb-4">
                                ยืนยันการชำระเงิน <CheckCircle2 className="ml-2 w-5 h-5" />
                            </Link>

                            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-2">
                                <Lock className="w-4 h-4" /> ปลอดภัย การชำระเงินถูกเข้ารหัส 256-bit
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Just mocking a Lock icon that isn't imported above directly
function Lock(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    );
}
