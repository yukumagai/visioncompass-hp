import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-night border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <p className="text-white/70 text-sm tracking-[0.15em] font-medium">
              Vision Compass
            </p>
            <p className="text-white/20 text-sm mt-3 leading-relaxed">
              一人ひとりが持っている
              <br />
              才能の花を開花させる
            </p>
          </div>

          <div className="flex gap-16">
            <ul className="space-y-3">
              {[
                { href: "/about", label: "会社概要" },
                { href: "/product", label: "プロダクト" },
                { href: "/contact", label: "お問い合わせ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/25 hover:text-white/50 transition-colors duration-300 text-sm tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-3">
              {["X (Twitter)", "Instagram", "Note"].map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-white/25 hover:text-white/50 transition-colors duration-300 text-sm tracking-wide"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04]">
          <p className="text-white/15 text-xs tracking-wide">
            &copy; 2025 株式会社Vision Compass
          </p>
        </div>
      </div>
    </footer>
  );
}
