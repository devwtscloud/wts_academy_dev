import { Download, Search, CheckCircle2, Clock } from "lucide-react";

export default function PaymentsHistoryPage() {
    const invoices = [
        {
            id: "INV-2026-003",
            date: "01 มี.ค. 2026",
            amount: 4480,
            status: "COMPLETED",
            items: ["Fullstack Next.js", "UI/UX Design Essential"],
            method: "QR Code"
        },
        {
            id: "INV-2025-104",
            date: "14 พ.ย. 2025",
            amount: 1590,
            status: "COMPLETED",
            items: ["The Ultimate Guide to Digital Marketing 2026"],
            method: "Credit Card"
        },
        {
            id: "INV-2026-004",
            date: "02 มี.ค. 2026",
            amount: 3490,
            status: "PENDING",
            items: ["Mastering Python for Data Science"],
            method: "Bank Transfer"
        },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">ประวัติการชำระเงิน</h2>
                    <p className="text-sm text-gray-500 mt-1">ใบเสร็จรับเงินและประวัติการสั่งซื้อคอร์สเรียนของคุณ</p>
                </div>
                <div className="relative">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="ค้นหาเลขที่ใบหน้า..."
                        className="pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-indigo-500 outline-none w-64"
                    />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-600">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-y border-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-semibold">เลขที่ใบเสร็จ</th>
                            <th scope="col" className="px-6 py-4 font-semibold">วันที่</th>
                            <th scope="col" className="px-6 py-4 font-semibold">รายการ</th>
                            <th scope="col" className="px-6 py-4 font-semibold">ยอดรวม</th>
                            <th scope="col" className="px-6 py-4 font-semibold">สถานะ</th>
                            <th scope="col" className="px-6 py-4 font-semibold text-right">ดำเนินการ</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {invoices.map((invoice) => (
                            <tr key={invoice.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    {invoice.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {invoice.date}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="max-w-xs truncate" title={invoice.items.join(", ")}>
                                        {invoice.items.join(", ")}
                                    </div>
                                    <div className="text-xs text-gray-400 mt-0.5">{invoice.method}</div>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                                    ฿{invoice.amount.toLocaleString()}
                                </td>
                                <td className="px-6 py-4">
                                    {invoice.status === "COMPLETED" ? (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                                            <CheckCircle2 className="w-3.5 h-3.5" /> สำเร็จ
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                                            <Clock className="w-3.5 h-3.5" /> รอชำระ
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    {invoice.status === "COMPLETED" ? (
                                        <button className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                                            <Download className="w-4 h-4" /> ใบเสร็จ
                                        </button>
                                    ) : (
                                        <button className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 hover:text-amber-800 transition-colors bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
                                            ชำระเงินตอนนี้
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500 bg-gray-50/30">
                <span>แสดง 3 รายการล่าสุด</span>
                <button className="text-indigo-600 hover:underline font-medium">โหลดเพิ่มเติม</button>
            </div>
        </div>
    );
}
