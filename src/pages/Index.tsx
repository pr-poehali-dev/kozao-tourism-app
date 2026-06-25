import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const HERO = 'https://cdn.poehali.dev/projects/da8f8d9c-628f-4b49-8b29-7ed8078ddba2/files/f926c70c-217f-402b-9ec9-fe7841248813.jpg';

const categories = [
  { icon: 'BedDouble', title: 'Отели', desc: 'Уютное жильё в горах и на курортах', count: '120+ вариантов' },
  { icon: 'Mountain', title: 'Экскурсии', desc: 'Откройте красоту Кавказа с гидом', count: '85 маршрутов' },
  { icon: 'Map', title: 'Туры', desc: 'Готовые программы на любой вкус', count: '40 туров' },
  { icon: 'Users', title: 'Гиды', desc: 'Опытные проводники и эксперты', count: '60 гидов' },
  { icon: 'UtensilsCrossed', title: 'Рестораны', desc: 'Национальная кухня и виды на горы', count: '90 мест' },
  { icon: 'Car', title: 'Трансфер и такси', desc: 'Комфортные поездки по региону', count: 'Круглосуточно' },
];

const reviews = [
  { name: 'Анна Колесова', city: 'Москва', text: 'Невероятное путешествие по Домбаю! Всё организовано идеально — от отеля до экскурсий.', rating: 5 },
  { name: 'Тимур Алиев', city: 'Казань', text: 'Гид показал такие места, о которых не пишут в путеводителях. Спасибо KOZAGO!', rating: 5 },
  { name: 'Елена Смирнова', city: 'Санкт-Петербург', text: 'Трансфер приехал вовремя, рестораны — выше всяких похвал. Вернёмся снова!', rating: 5 },
];

const navLinks = [
  { label: 'Главная', href: '#home' },
  { label: 'О нас', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="#home" className="flex items-center gap-2">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-primary-foreground">
              <Icon name="Mountain" size={20} />
            </span>
            <span className="font-display text-2xl font-bold tracking-wide">KOZAGO</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <Button className="hidden md:inline-flex">Забронировать</Button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-base font-medium text-foreground">
                {l.label}
              </a>
            ))}
            <Button className="w-full">Забронировать</Button>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center pt-16">
        <img src={HERO} alt="Горы Северного Кавказа" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        <div className="container mx-auto relative z-10 px-4 py-20">
          <div className="max-w-2xl animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} /> Северный Кавказ ждёт вас
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Откройте величие <span className="text-primary">гор</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              Отели, экскурсии, туры, гиды, рестораны и трансфер — всё для вашего идеального путешествия в одном месте.
            </p>

            {/* Search */}
            <Card className="p-4 md:p-5 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5"><Icon name="Search" size={14} /> Услуга</label>
                  <Input placeholder="Отели, туры, гиды..." />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5"><Icon name="Calendar" size={14} /> Даты</label>
                  <Input type="date" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5"><Icon name="Wallet" size={14} /> Цена до</label>
                  <Input type="number" placeholder="20 000 ₽" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-transparent hidden md:block">Поиск</label>
                  <Button className="w-full h-10">
                    <Icon name="Search" size={18} className="mr-2" /> Найти
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services / Categories */}
      <section id="services" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">Наши услуги</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Всё для вашего отдыха</h2>
            <p className="text-muted-foreground mt-4">Выберите категорию и спланируйте незабываемое путешествие по Кавказу.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <Card key={c.title} className="group p-7 hover-scale cursor-pointer border-border hover:border-primary/50 hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-accent text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name={c.icon} size={28} />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">{c.title}</h3>
                <p className="text-muted-foreground mb-4">{c.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  {c.count} <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={HERO} alt="О компании KOZAGO" className="rounded-3xl w-full h-[420px] object-cover shadow-xl" />
            <div className="absolute -bottom-6 -right-2 md:-right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg">
              <div className="font-display text-4xl font-bold">5+</div>
              <div className="text-sm">лет в туризме</div>
            </div>
          </div>
          <div>
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">О нас</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">Ваш проводник по Северному Кавказу</h2>
            <p className="text-muted-foreground mb-5">
              KOZAGO — это команда влюблённых в горы людей. Мы собрали лучшие отели, проверенных гидов, авторские туры и надёжный трансфер, чтобы ваш отдых был комфортным и ярким.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: 'ShieldCheck', t: 'Надёжность', d: 'Проверенные партнёры' },
                { icon: 'Heart', t: 'Забота', d: 'Поддержка 24/7' },
                { icon: 'Award', t: 'Качество', d: 'Лучшие маршруты' },
                { icon: 'Compass', t: 'Опыт', d: 'Знаем регион' },
              ].map((f) => (
                <div key={f.t} className="flex gap-3">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent text-primary shrink-0">
                    <Icon name={f.icon} size={22} />
                  </span>
                  <div>
                    <div className="font-semibold">{f.t}</div>
                    <div className="text-sm text-muted-foreground">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">Отзывы</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Что говорят путешественники</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <Card key={r.name} className="p-7">
                <div className="flex gap-1 mb-4 text-primary">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-foreground mb-6">«{r.text}»</p>
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-primary text-primary-foreground font-semibold">
                    {r.name[0]}
                  </span>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-sm text-muted-foreground">{r.city}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">Контакты</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">Свяжитесь с нами</h2>
            <p className="text-muted-foreground mb-8">Мы поможем подобрать идеальный тур и ответим на все вопросы.</p>
            <div className="space-y-5">
              {[
                { icon: 'Phone', t: '+7 (928) 000-00-00', d: 'Ежедневно 9:00 – 21:00' },
                { icon: 'Mail', t: 'info@kozago.ru', d: 'Ответим в течение часа' },
                { icon: 'MapPin', t: 'Северный Кавказ', d: 'Работаем по всему региону' },
              ].map((c) => (
                <div key={c.t} className="flex gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground shrink-0">
                    <Icon name={c.icon} size={22} />
                  </span>
                  <div>
                    <div className="font-semibold">{c.t}</div>
                    <div className="text-sm text-muted-foreground">{c.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Card className="p-7">
            <h3 className="font-display text-2xl font-semibold mb-5">Оставьте заявку</h3>
            <div className="space-y-4">
              <Input placeholder="Ваше имя" />
              <Input placeholder="Телефон" />
              <Input placeholder="Email" />
              <textarea placeholder="Какой отдых вас интересует?" rows={4}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <Button className="w-full h-11">
                <Icon name="Send" size={18} className="mr-2" /> Отправить заявку
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
              <Icon name="Mountain" size={18} />
            </span>
            <span className="font-display text-xl font-bold">KOZAGO</span>
          </div>
          <p className="text-sm text-background/70">© 2026 KOZAGO. Путешествия по Северному Кавказу.</p>
          <div className="flex gap-3">
            {['Send', 'Instagram', 'Phone'].map((i) => (
              <span key={i} className="flex items-center justify-center w-9 h-9 rounded-full bg-background/10 hover:bg-primary transition-colors cursor-pointer">
                <Icon name={i} size={18} />
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
