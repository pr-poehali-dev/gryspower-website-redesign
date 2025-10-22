import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const offices = [
    {
      city: 'Москва (Головной офис)',
      address: 'г. Москва, ул. Примерная, д. 1',
      phone: '+7 (XXX) XXX-XX-XX',
      email: 'moscow@gryspower.com',
      hours: 'Пн-Пт: 9:00 - 18:00'
    },
    {
      city: 'Санкт-Петербург',
      address: 'г. Санкт-Петербург, пр. Невский, д. 100',
      phone: '+7 (XXX) XXX-XX-XX',
      email: 'spb@gryspower.com',
      hours: 'Пн-Пт: 9:00 - 18:00'
    },
    {
      city: 'Екатеринбург',
      address: 'г. Екатеринбург, ул. Ленина, д. 50',
      phone: '+7 (XXX) XXX-XX-XX',
      email: 'ekb@gryspower.com',
      hours: 'Пн-Пт: 9:00 - 18:00'
    }
  ];

  const departments = [
    {
      name: 'Отдел продаж',
      phone: '+7 (XXX) XXX-XX-XX доб. 101',
      email: 'sales@gryspower.com'
    },
    {
      name: 'Техническая поддержка',
      phone: '+7 (XXX) XXX-XX-XX доб. 102',
      email: 'support@gryspower.com'
    },
    {
      name: 'Бухгалтерия',
      phone: '+7 (XXX) XXX-XX-XX доб. 103',
      email: 'accounting@gryspower.com'
    },
    {
      name: 'Отдел кадров',
      phone: '+7 (XXX) XXX-XX-XX доб. 104',
      email: 'hr@gryspower.com'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Контакты</h1>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Форма обратной связи</h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Компания</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Телефон *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Сообщение *</label>
                      <textarea
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Наши офисы</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-foreground">{office.city}</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Icon name="MapPin" className="text-primary mt-1 flex-shrink-0" size={18} />
                          <span className="text-muted-foreground text-sm">{office.address}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Icon name="Phone" className="text-primary mt-1 flex-shrink-0" size={18} />
                          <span className="text-muted-foreground text-sm">{office.phone}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Icon name="Mail" className="text-primary mt-1 flex-shrink-0" size={18} />
                          <span className="text-muted-foreground text-sm">{office.email}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Icon name="Clock" className="text-primary mt-1 flex-shrink-0" size={18} />
                          <span className="text-muted-foreground text-sm">{office.hours}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Отделы и службы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-3 text-foreground">{dept.name}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon name="Phone" className="text-primary" size={16} />
                        <span className="text-sm text-muted-foreground">{dept.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Mail" className="text-primary" size={16} />
                        <span className="text-sm text-muted-foreground">{dept.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Круглосуточная аварийная служба</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Для экстренных ситуаций и аварий работает круглосуточная диспетчерская служба
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <Icon name="Phone" className="text-accent" size={24} />
                <span className="text-2xl font-bold text-foreground">+7 (XXX) XXX-XX-XX</span>
              </div>
              <span className="text-accent font-bold">24/7</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
