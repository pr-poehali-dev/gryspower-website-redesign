import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const services = [
    {
      icon: 'Zap',
      title: 'Энергоэффективность',
      description: 'Комплексные решения по повышению энергоэффективности объектов'
    },
    {
      icon: 'Building2',
      title: 'Генерирующие объекты',
      description: 'Строительство и модернизация энергетических объектов'
    },
    {
      icon: 'Droplet',
      title: 'Водоочистка',
      description: 'Системы водоподготовки и водоочистки для промышленных объектов'
    },
    {
      icon: 'Wrench',
      title: 'Техническое обслуживание',
      description: 'Профессиональное обслуживание энергетического оборудования'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in">
              GRYS POWER
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in max-w-3xl mx-auto">
              Энергосервисная компания, предоставляющая полный спектр услуг в области энергоэффективности, строительства генерирующих объектов и водоочистки
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/services">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Наши услуги
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline">
                  Реализованные проекты
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Наши направления</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border hover:border-primary/30"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Почему выбирают нас</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-accent-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-foreground">Опыт работы</h3>
                    <p className="text-muted-foreground">Более 15 лет успешной работы на рынке энергосервисных услуг</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-accent-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-foreground">Качество и надежность</h3>
                    <p className="text-muted-foreground">Гарантируем высокое качество выполнения всех работ</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-accent-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-foreground">Профессиональная команда</h3>
                    <p className="text-muted-foreground">Специалисты с многолетним опытом работы</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" className="text-accent-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-foreground">Современные технологии</h3>
                    <p className="text-muted-foreground">Используем передовые технологии и оборудование</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Свяжитесь с нами</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Сообщение"
                    rows={4}
                    className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
