# Ô Dù Đại Phát - Website bán hàng SEO Max

Project Next.js App Router tối ưu SEO, chuẩn chạy với **Node.js v24 LTS**.

## Tính năng chính

- Next.js App Router + TypeScript + Tailwind CSS
- Trang chủ SEO landing page
- Trang danh mục sản phẩm `/san-pham`
- Trang chi tiết sản phẩm `/san-pham/[slug]`
- Trang liên hệ `/lien-he`
- Route admin demo `/admin` đã chặn index SEO
- API mẫu `/api/products`
- Metadata SEO, Open Graph, Twitter Card
- JSON-LD Schema: Organization, LocalBusiness, WebSite, FAQPage, Product, CollectionPage
- Sitemap tự động `/sitemap.xml`
- Robots tự động `/robots.txt`
- Floating CTA gọi điện/Zalo
- Dữ liệu sản phẩm: ô dù lệch tâm, dù đúng tâm, dù cafe, dù sân vườn, dù quảng cáo, nhà bạt, bàn ghế ngoài trời, xích đu, combo setup

## Yêu cầu môi trường

```bash
node -v
# yêu cầu >= v24.0.0
```

## Cài đặt local

```bash
npm install
npm run dev
```

Mở:

```bash
http://localhost:3000
```

## Build production

```bash
npm run build
npm start
```

## Biến môi trường

Copy file `.env.example` thành `.env.local`:

```bash
cp .env.example .env.local
```

Sửa:

```env
NEXT_PUBLIC_SITE_URL=https://odudaiphat.com
NEXT_PUBLIC_SECONDARY_SITE_URL=https://odungoaitroi.com
NEXT_PUBLIC_PHONE=0349596898
ADMIN_PASSWORD=change-this-password
```

## Deploy VPS bằng PM2

```bash
npm install
npm run build
npm install -g pm2
pm2 start npm --name odudaiphat -- start
pm2 save
```

## Nginx reverse proxy

```nginx
server {
    listen 80;
    server_name odudaiphat.com www.odudaiphat.com odungoaitroi.com www.odungoaitroi.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Đẩy lên GitHub

```bash
git init
git add .
git commit -m "Initial SEO max website for O Du Dai Phat"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/odudaiphat-web.git
git push -u origin main
```

## Nâng cấp tiếp để bán hàng thật

- Thêm database: PostgreSQL/MongoDB
- Thêm login admin thật bằng NextAuth/Auth.js hoặc session JWT bảo mật
- Upload ảnh sản phẩm lên Cloudinary/S3/VPS
- Thêm form báo giá gửi email/Zalo/CRM
- Thêm trang SEO địa phương: `/o-du-ngoai-troi-ha-noi`, `/o-du-ngoai-troi-tphcm`, ...
- Thêm blog SEO hướng dẫn chọn dù, báo giá từng tỉnh, setup quán cafe ngoài trời

## Lưu ý SEO

Ảnh sản phẩm đã chuyển sang ảnh local `.webp` trong `public/images`. Khi thay ảnh thật, giữ định dạng `.webp`, tên file không dấu có keyword như `du-lech-tam-tron-3m.webp`, dung lượng khuyến nghị dưới 150–250KB.
