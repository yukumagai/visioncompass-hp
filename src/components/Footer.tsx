import Link from "next/link";
import { storeLinks } from "@/lib/neruzo";
import { container, focusRing } from "@/lib/styles";

const groups = [
  {
    heading: "会社",
    links: [
      { href: "/about", label: "会社概要" },
      { href: "/contact", label: "お問い合わせ" },
    ],
  },
  {
    heading: "プロダクト",
    links: [{ href: "/product", label: "ねるぞう" }],
  },
  {
    heading: "規約",
    links: [
      { href: "/legal/terms", label: "利用規約" },
      { href: "/legal/privacy", label: "プライバシーポリシー" },
    ],
  },
];

const linkClass = `text-sm text-ink-soft hover:text-ink transition-colors duration-200 rounded-sm ${focusRing}`;

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-rule">
      <div className={`${container} py-16 sm:py-20`}>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[15px] tracking-[0.12em] font-medium text-ink">
              VisionCompass
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-meta">
              世界を才能の花で満たす。
            </p>
          </div>

          <nav
            aria-label="フッターナビゲーション"
            className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7"
          >
            {groups.map((group) => (
              <div key={group.heading}>
                <h2 className="text-xs tracking-wide text-ink-meta">
                  {group.heading}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  {group.heading === "プロダクト" &&
                    storeLinks.map((store) => (
                      <li key={store.href}>
                        <a
                          href={store.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          {store.label}
                          <span className="sr-only">
                            （新しいタブで開きます）
                          </span>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <p className="mt-16 border-t border-rule pt-8 text-xs text-ink-meta">
          &copy; 2026 株式会社VisionCompass
        </p>
      </div>
    </footer>
  );
}
