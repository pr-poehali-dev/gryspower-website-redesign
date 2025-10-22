import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const services = [
    'Энергоэффективность',
    'Генерирующие объекты',
    'Водоочистка',
    'Техническое обслуживание'
  ];

  const company = [
    { name: 'О компании', path: '/about' },
    { name: 'Проекты', path: '/projects' },
    { name: 'Пресс-центр', path: '/press' },
    { name: 'Контакты', path: '/contacts' }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GRYS POWER</h3>
            <p className="text-sm opacity-80">
              Энергосервисная компания, предлагающая полный спектр услуг в области энергоэффективности
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li key={idx}>
                  <span className="text-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Компания</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Icon name="Phone" size={16} className="mt-1 opacity-80" />
                <span className="text-sm opacity-80">+7 (XXX) XXX-XX-XX</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Mail" size={16} className="mt-1 opacity-80" />
                <span className="text-sm opacity-80">info@gryspower.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-1 opacity-80" />
                <span className="text-sm opacity-80">Москва, Россия</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-6 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} GRYS POWER. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
