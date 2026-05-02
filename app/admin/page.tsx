export const metadata = { title: 'Admin quản trị sản phẩm', robots: { index: false, follow: false } };

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-slate-950 p-8 text-white">
        <p className="font-bold uppercase tracking-widest text-orange-300">Admin production note</p>
        <h1 className="mt-2 text-4xl font-black">Khu quản trị Ô Dù Đại Phát</h1>
        <p className="mt-5 leading-8 text-blue-100">Bản đóng gói này đã tách route /admin và chặn index SEO. Để dùng thật, hãy nối backend đăng nhập bằng session/JWT, database và upload ảnh.</p>
      </section>
      <section className="mt-8 grid gap-6 md:grid-cols-3">
        {['Quản lý sản phẩm', 'Quản lý danh mục', 'Đơn báo giá'].map((item) => (
          <div key={item} className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200 ring-1 ring-slate-100">
            <h2 className="text-xl font-black">{item}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Module sẵn kiến trúc để phát triển tiếp với API Node.js v24 LTS.</p>
          </div>
        ))}
      </section>
    </main>
  );
}
