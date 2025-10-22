import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'О компании', path: '/about' },
    { name: 'Услуги', path: '/services' },
    { name: 'Бизнес-модели', path: '/business' },
    { name: 'Проекты', path: '/projects' },
    { name: 'Обязательства', path: '/obligations' },
    { name: 'Пресс-центр', path: '/press' },
    { name: 'Контакты', path: '/contacts' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-2xl font-bold text-foreground tracking-tight">GRYS POWER</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/5'
                    : 'text-foreground hover:text-primary hover:bg-muted/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button size="sm" variant="ghost">
              <Icon name="Search" size={20} />
            </Button>
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-2 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 text-base font-medium transition-colors rounded ${
                      isActive(item.path)
                        ? 'text-primary bg-primary/5'
                        : 'text-foreground hover:text-primary hover:bg-muted/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
