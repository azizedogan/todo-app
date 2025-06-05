# Todo Uygulaması Görevi

Bu, API istekleri için bir servis katmanı aracılığıyla etkileşim sağlayan client-side bileşenlere sahip bir Todo uygulamasını gösteren Next.js projesidir. API, Prisma ve MongoDB ile desteklenmektedir.

## Özellikler
- **CRUD İşlemleri:** Todo ekleme, okuma, güncelleme ve silme.
- **API Rotaları:** Arka uç işlevselliği için Next.js API rotaları.
- **Servis Katmanı:** API iletişimini yöneten özel `getAPI` ve `postAPI` fonksiyonları.
- **Prisma Entegrasyonu:** Veritabanı olarak MongoDB kullanan Prisma.
- **Durum Yönetimi:** Global durum yönetimi için Zustand.
- **Modern Arayüz:** TailwindCSS ile stillendirilmiş React bileşenleri.

## Başlangıç

### Ön Koşullar
- Node.js (v14 veya daha yeni)
- Bir MongoDB Atlas hesabı (ya da yerel bir MongoDB örneği)
- Git

### Kurulum

1. **Depoyu Klonlayın:**
   ```bash
   git clone <repository_url>
   ```
2. **Proje Dizini'ne Geçin:**
   ```bash
   cd todo-app-task
   ```
3. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install
   # veya
   yarn install
   ```

4. **Ortam Değişkenleri:**

   Kök dizinde, bağlantı bilgilerinizin bulunduğu bir `.env` dosyası oluşturun. Örnek:
   ```properties
   DATABASE_URL="mongodb+srv://<kullanıcı_adı>:<şifre>@cluster0.<cluster_id>.mongodb.net/todo-app?retryWrites=true&w=majority&appName=Cluster0"
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

### Geliştirme Sunucusunu Çalıştırma

Sunucuyu şu komutla başlatın:
```bash
npm run dev
```
Ardından tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Proje Yapısı

- **pages/api/todos/**
  - `index.js`: Todo'lar için GET ve POST isteklerini yönetir.
  - `[id].js`: Belirli todo'lar için PUT ve DELETE isteklerini yönetir.
- **components/**
  - `TodoItem.jsx`, `TodoList.jsx` ve `TodoForm.jsx` gibi UI bileşenlerini içerir.
- **services/**
  - `api.js`: Merkezi API istekleri için `getAPI` ve `postAPI` fonksiyonlarını içerir.
  - `todoServices.js`: Todo işlemlerini gerçekleştirmek için `getAPI` ve `postAPI` fonksiyonlarını kullanır.
- **lib/**
  - `prisma.js`: `.env` dosyanızdaki `DATABASE_URL` kullanılarak Prisma istemcisini başlatır.
- **prisma/**
  - `schema.prisma`: Veritabanı şemasını ve Prisma yapılandırmasını tanımlar.
- **store/**
  - Uygulama durumunu yönetmek için Zustand store'u içerir.