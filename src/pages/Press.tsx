import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Press = () => {
  const news = [
    {
      date: '15 октября 2024',
      category: 'Новости компании',
      title: 'GRYS POWER запустила новый энергообъект в Московской области',
      preview: 'Введена в эксплуатацию когенерационная установка мощностью 7 МВт для крупного промышленного предприятия...'
    },
    {
      date: '3 октября 2024',
      category: 'Достижения',
      title: 'Компания получила сертификат ISO 45001',
      preview: 'GRYS POWER успешно прошла аудит и получила международный сертификат по системе управления охраной здоровья и безопасностью труда...'
    },
    {
      date: '22 сентября 2024',
      category: 'Проекты',
      title: 'Завершена модернизация системы водоочистки',
      preview: 'Успешно завершен проект по модернизации системы водоподготовки для крупного предприятия пищевой промышленности...'
    },
    {
      date: '10 сентября 2024',
      category: 'Новости компании',
      title: 'Открытие нового регионального офиса',
      preview: 'GRYS POWER расширяет географию присутствия - открыт новый офис в Екатеринбурге для обслуживания клиентов в Уральском регионе...'
    },
    {
      date: '28 августа 2024',
      category: 'Партнерство',
      title: 'Подписано соглашение о стратегическом партнерстве',
      preview: 'GRYS POWER и ведущий производитель энергетического оборудования подписали соглашение о долгосрочном сотрудничестве...'
    },
    {
      date: '15 августа 2024',
      category: 'Достижения',
      title: 'Компания вошла в топ-10 энергосервисных компаний России',
      preview: 'По итогам независимого рейтинга GRYS POWER заняла 7-е место среди энергосервисных компаний страны...'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Пресс-центр</h1>
            <p className="text-xl text-muted-foreground">
              Новости компании, проекты и достижения
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-32 flex-shrink-0">
                      <div className="text-sm text-muted-foreground mb-2">{item.date}</div>
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2 text-foreground hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.preview}</p>
                      <div className="mt-4 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        <span className="text-sm font-medium">Читать далее</span>
                        <Icon name="ArrowRight" size={16} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Контакты для СМИ</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start gap-3 mb-6">
                      <Icon name="User" className="text-primary mt-1" size={20} />
                      <div>
                        <h3 className="font-bold mb-1 text-foreground">Отдел по связям с общественностью</h3>
                        <p className="text-muted-foreground text-sm">Иванова Мария Сергеевна</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 mb-6">
                      <Icon name="Phone" className="text-primary mt-1" size={20} />
                      <div>
                        <h3 className="font-bold mb-1 text-foreground">Телефон</h3>
                        <p className="text-muted-foreground text-sm">+7 (XXX) XXX-XX-XX доб. 123</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start gap-3 mb-6">
                      <Icon name="Mail" className="text-primary mt-1" size={20} />
                      <div>
                        <h3 className="font-bold mb-1 text-foreground">Email</h3>
                        <p className="text-muted-foreground text-sm">press@gryspower.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" className="text-primary mt-1" size={20} />
                      <div>
                        <h3 className="font-bold mb-1 text-foreground">Часы работы</h3>
                        <p className="text-muted-foreground text-sm">Пн-Пт: 9:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Press;
