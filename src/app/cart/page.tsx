import Link from "next/link";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";

export default function CartPage() {
    const cartItems = [
        {
            id: "1",
            title: "Fullstack Web Development with Next.js 14 and Prisma",
            instructor: "Suriya P.",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=200&auto=format&fit=crop",
            price: 2990,
        },
        {
            id: "3",
            title: "UI/UX Design Essential - From Beginner to Pro",
            instructor: "Jane Doe Design",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=200&auto=format&fit=crop",
            price: 1990,
        }
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const discount = 500; // Mock discount
    const total = subtotal - discount;

    return (
        <div className="bg-gray-50 min-h-[calc(100vh-64px)] py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <ShoppingBag className="w-8 h-8 text-indigo-600" /> ตะกร้าสินค้าของคุณ
                </h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="flex-1 space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                <img src={item.image} alt={item.title} className="w-32 h-24 object-cover rounded-lg flex-shrink-0" />

                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-500 mb-2">ผู้สอน: {item.instructor}</p>
                                </div>

                                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-4 sm:mt-0">
                                    <span className="text-xl font-bold text-indigo-600 mb-2">฿{item.price.toLocaleString()}</span>
                                    <button className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1 transition-colors">
                                        <Trash2 className="w-4 h-4" /> ลบออก
                                    </button>
                                </div>
                            </div>
                        ))}

                        <Link href="/courses" className="inline-block mt-6 text-indigo-600 font-medium hover:underline">
                            &larr; เลือกดูคอร์สเรียนเพิ่มเติม
                        </Link>
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-96">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">สรุปคำสั่งซื้อ</h2>

                            <div className="space-y-4 text-sm mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>ราคาเดิม ({cartItems.length} คอร์ส)</span>
                                    <span>฿{subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-emerald-600 font-medium">
                                    <span>ส่วนลดพิเศษ</span>
                                    <span>-฿{discount.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-4 mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-lg font-bold text-gray-900">ยอดสุทธิ</span>
                                    <span className="text-3xl font-extrabold text-indigo-600">฿{total.toLocaleString()}</span>
                                </div>
                                <p className="text-xs text-gray-500 text-right">ราคารวมภาษีมูลค่าเพิ่มแล้ว</p>
                            </div>

                            <div className="mb-6">
                                <div className="flex gap-2">
                                    <input type="text" placeholder="รหัสคูปองส่วนลด" className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-indigo-500 outline-none" />
                                    <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">ใช้คูปอง</button>
                                </div>
                            </div>

                            <Link href="/checkout" className="w-full flex justify-center items-center py-3.5 rounded-xl shadow-lg text-white font-bold bg-indigo-600 hover:bg-indigo-700 transition-all hover:scale-[1.02]">
                                ดำเนินการชำระเงิน <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
