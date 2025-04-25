# FitFlex - AI Powered Fitness Trainer

A modern fitness application that uses AI to generate personalized workout programs and provide voice-based coaching.

![FitFlex Logo](public/logo.png)

## 🌟 Features / Özellikler

**English:**

- AI-powered personalized workout program generation
- Voice-based fitness training with AI coach
- User authentication and profile management
- Responsive design for all devices
- Progress tracking

**Türkçe:**

- Yapay zeka destekli kişiselleştirilmiş egzersiz programı oluşturma
- Yapay zeka koçu ile sesli fitness eğitimi
- Kullanıcı kimlik doğrulama ve profil yönetimi
- Tüm cihazlar için duyarlı tasarım
- İlerleme takibi

## 🚀 Technologies Used / Kullanılan Teknolojiler

**English:**

- **Frontend:** Next.js 15, React 19, TailwindCSS 4, Radix UI
- **Backend:** Convex
- **AI:** Google Generative AI, VAPI AI for voice interactions
- **Authentication:** Clerk
- **Styling:** TailwindCSS, tw-animate-css

**Türkçe:**

- **Ön Uç:** Next.js 15, React 19, TailwindCSS 4, Radix UI
- **Arka Uç:** Convex
- **Yapay Zeka:** Google Generative AI, Ses etkileşimleri için VAPI AI
- **Kimlik Doğrulama:** Clerk
- **Stil:** TailwindCSS, tw-animate-css

## 📁 Project Structure / Proje Yapısı

**English:**

```
fitflex/
├── app/                    # Next.js app directory
│   ├── (auth)/             # Authentication routes
│   ├── generate-program/   # Workout program generation
│   ├── profile/            # User profile management
│   └── page.tsx            # Home page
├── components/             # Reusable UI components
├── convex/                 # Backend database and API
│   ├── schema.ts           # Database schema
│   ├── users.ts            # User-related functions
│   └── plans.ts            # Workout plan functions
├── lib/                    # Utility functions
├── providers/              # Context providers
└── public/                 # Static assets
```

**Türkçe:**

```
fitflex/
├── app/                    # Next.js uygulama dizini
│   ├── (auth)/             # Kimlik doğrulama sayfaları
│   ├── generate-program/   # Egzersiz programı oluşturma
│   ├── profile/            # Kullanıcı profil yönetimi
│   └── page.tsx            # Ana sayfa
├── components/             # Yeniden kullanılabilir UI bileşenleri
├── convex/                 # Arka uç veritabanı ve API
│   ├── schema.ts           # Veritabanı şeması
│   ├── users.ts            # Kullanıcı ile ilgili fonksiyonlar
│   └── plans.ts            # Egzersiz planı fonksiyonları
├── lib/                    # Yardımcı fonksiyonlar
├── providers/              # Bağlam sağlayıcıları
└── public/                 # Statik varlıklar
```

## 🔧 Environment Variables / Çevre Değişkenleri

**English:**

Create a `.env.local` file with the following variables:

```
# Authentication - Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_******
CLERK_SECRET_KEY=sk_******
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Convex
NEXT_PUBLIC_CONVEX_URL=https://********.convex.cloud

# Google AI
GOOGLE_AI_API_KEY=AIza******

# VAPI (Voice AI)
NEXT_PUBLIC_VAPI_API_KEY=vapi_******
```

**Türkçe:**

Aşağıdaki değişkenlerle bir `.env.local` dosyası oluşturun:

```
# Kimlik Doğrulama - Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_******
CLERK_SECRET_KEY=sk_******
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Convex
NEXT_PUBLIC_CONVEX_URL=https://********.convex.cloud

# Google AI
GOOGLE_AI_API_KEY=AIza******

# VAPI (Ses AI)
NEXT_PUBLIC_VAPI_API_KEY=vapi_******
```

## 📥 Installation / Kurulum

**English:**

```bash
# Clone the repository
git clone https://github.com/yourusername/fitflex.git
cd fitflex

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your environment variables

# Start the development server
npm run dev
```

**Türkçe:**

```bash
# Depoyu klonlayın
git clone https://github.com/kullaniciadi/fitflex.git
cd fitflex

# Bağımlılıkları yükleyin
npm install

# Çevre değişkenlerini ayarlayın
cp .env.example .env.local
# Çevre değişkenlerinizi doldurun

# Geliştirme sunucusunu başlatın
npm run dev
```

## 🚀 Deployment / Dağıtım

**English:**

The application can be easily deployed on Vercel:

```bash
npm run build
```

Or connect your GitHub repository to Vercel for automatic deployments.

**Türkçe:**

Uygulama Vercel üzerinde kolayca dağıtılabilir:

```bash
npm run build
```

Veya otomatik dağıtımlar için GitHub deponuzu Vercel'e bağlayın.

## 📝 License / Lisans

This project is licensed under the MIT License - see the LICENSE file for details.

**Türkçe:**
Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için LICENSE dosyasına bakın.
