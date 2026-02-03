

**Remindme** is a premium, high-performance landing page for a student-focused utility app designed specifically for Nigerian university campuses. Built with a focus on minimalist UI/UX and high conversion, it solves the chaos of managing academic schedules in a fast-paced environment.

[![Tech Stack](https://img.shields.io/badge/Stack-React%20|%20Tailwind%20|%20TypeScript-blue)](https://remindme.app)
[![Status](https://img.shields.io/badge/Status-Waitlist%20Live-brightgreen)]()

---

## ✨ Key Features

- **🎯 Smart Notifications**: Dynamic reminders that trigger before classes (10, 15, or 30 mins) to ensure students never miss a lecture.
- **📱 Professional App Mockups**: Interactive, animated UI previews built directly in React to showcase the app experience before launch.
- **🌗 Dark Mode Support**: A fully responsive, system-aware dark/light theme designed for optimal readability during late-night study sessions.
- **🚀 High-Conversion Waitlist**: Persistence-based waitlist logic using `localStorage` to handle user sign-ups and state retention.
- **🇳🇬 Localized for Nigeria**: Specific focus on Nigerian campus culture (e.g., FUTA, UNILAG, OAU) and common venue naming conventions (e.g., "1K Cap", "ETF 2").

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Custom Tailwind CSS keyframes and Intersection Observer API for scroll reveals.
- **Type Safety**: TypeScript for robust component architecture.

## 📂 Project Structure

```text
├── components/
│   ├── Navbar.tsx      # Sticky navigation with theme toggle
│   ├── Hero.tsx        # Dynamic hero section with animated phone mockup
│   ├── UniLogos.tsx    # Responsive university ticker
│   ├── Features.tsx    # Grid of core value propositions
│   ├── HowItWorks.tsx  # Step-by-step process guide
│   ├── AppPreview.tsx  # Horizontal scroll gallery for mobile
│   ├── TrustStory.tsx  # Emotional connection / founder's note
│   ├── FAQ.tsx         # Collapsible accordion for user queries
│   └── CTA.tsx         # Persistent waitlist form with success states
├── App.tsx             # Main application entry point & layout
├── index.html          # HTML5 boilerplate & font loading
└── metadata.json       # App configuration and permissions
```

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/smartnaka/remindme-landing.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🎨 UI/UX Design Philosophy

The design follows the **"Minimalism for Maximum Focus"** principle. By using ample white space (or deep blacks in dark mode), the focus remains on the core message. We use the **Inter** font family for its high x-height and legibility on mobile devices.

## 🤝 Contributing

We welcome contributions from other students and engineers! 
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Built with ❤️ by [smartnaka](https://github.com/smartnaka)
