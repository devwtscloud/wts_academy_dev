import { Plus, Search, Edit, Trash2, MoreVertical } from "lucide-react";
import Link from "next/link";

export default function AdminCoursesPage() {
    const courses = [
        { id: "1", title: "Fullstack Web Development with Next.js 14", status: "Published", students: 1254, price: 2990, revenue: 3749460 },
        { id: "2", title: "Mastering Python for Data Science", status: "Draft", students: 0, price: 3490, revenue: 0 },
        { id: "3", title: "UI/UX Design Essential - From Beginner to Pro", status: "Published", students: 2100, price: 1990, revenue: 4179000 },
    ];

    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">จัดการคอร์สเรียน</h1>
                    <p className="text-gray-500 text-sm">สร้างและแก้ไขเนื้อหาคอร์สเรียนของคุณ</p>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium shadow-sm transition-colors text-sm">
                    <Plus className="w-5 h-5" /> สร้างคอร์สใหม่
                </button>
            </div>

            {/* Filters and Search */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                <div className="relative w-full sm:w-80">
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="ค้นหาชื่อคอร์ส..."
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block pl-10 p-2.5 outline-none"
                    />
                </div>
                <div className="flex items-center gap-2 text-sm w-full sm:w-auto">
                    <span className="text-gray-500 whitespace-nowrap">สถานะ:</span>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 outline-none flex-1">
                        <option>ทั้งหมด</option>
                        <option>เผยแพร่แล้ว (Published)</option>
                        <option>แบบร่าง (Draft)</option>
                    </select>
                </div>
            </div>

            {/* Advanced Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-semibold">ชื่อคอร์ส</th>
                                <th scope="col" className="px-6 py-4 font-semibold">สถานะ</th>
                                <th scope="col" className="px-6 py-4 font-semibold">ราคา</th>
                                <th scope="col" className="px-6 py-4 font-semibold">ผู้เรียน</th>
                                <th scope="col" className="px-6 py-4 font-semibold">รายได้</th>
                                <th scope="col" className="px-6 py-4 font-semibold text-right">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr key={course.id} className="bg-white border-b hover:bg-gray-50 transition-colors">
                                    <th scope="row" className="px-6 py-5 font-medium text-gray-900 max-w-sm font-semibold">
                                        <div className="truncate">{course.title}</div>
                                    </th>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${course.status === 'Published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                            {course.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-700 font-medium">
                                        ฿{course.price.toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 text-gray-700 font-medium">
                                        {course.students.toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 text-gray-900 font-bold">
                                        ฿{course.revenue.toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 p-2 rounded-lg transition-colors" title="แก้ไข">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button className="text-red-500 hover:text-red-700 bg-red-50 p-2 rounded-lg transition-colors" title="ลบ">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 border-t border-gray-100 text-center text-sm text-gray-500 bg-gray-50/50">
                    แสดง 3 จาก 3 รายการ
                </div>
            </div>
        </div>
    );
}
