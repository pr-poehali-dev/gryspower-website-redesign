import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  const mainServices = [
    {
      icon: 'Zap',
      title: 'Энергоэффективность',
      description: 'Комплексный аудит и внедрение энергосберегающих технологий',
      features: [
        'Энергетический аудит объектов',
        'Разработка программ энергоэффективности',
        'Внедрение систем учета энергоресурсов',
        'Оптимизация энергопотребления'
      ]
    },
    {
      icon: 'Building2',
      title: 'Генерирующие объекты',
      description: 'Проектирование, строительство и модернизация энергетических объектов',
      features: [
        'Строительство электростанций',
        'Модернизация существующих объектов',
        'Системы резервного электроснабжения',
        'Когенерационные установки'
      ]
    },
    {
      icon: 'Droplet',
      title: 'Водоочистка',
      description: 'Проектирование и внедрение систем водоподготовки',
      features: [
        'Системы очистки воды',
        'Станции водоподготовки',
        'Системы оборотного водоснабжения',
        'Обслуживание водоочистного оборудования'
      ]
    },
    {
      icon: 'Wrench',
      title: 'Техническое обслуживание',
      description: 'Профессиональное обслуживание энергетического оборудования',
      features: [
        'Плановое техобслуживание',
        'Диагностика оборудования',
        'Ремонт и замена компонентов',
        'Круглосуточная аварийная служба'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Наши услуги</h1>
            <p className="text-xl text-muted-foreground">
              Полный спектр энергосервисных решений для вашего бизнеса
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="all">Все услуги</TabsTrigger>
              <TabsTrigger value="energy">Энергоэффективность</TabsTrigger>
              <TabsTrigger value="power">Генерация</TabsTrigger>
              <TabsTrigger value="water">Водоочистка</TabsTrigger>
              <TabsTrigger value="service">Обслуживание</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mainServices.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                          <Icon name={service.icon as any} className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                          <p className="text-muted-foreground text-sm">{service.description}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="energy">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded flex items-center justify-center">
                      <Icon name="Zap" className="text-primary" size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-foreground">Энергоэффективность</h2>
                      <p className="text-muted-foreground">
                        Комплексные решения для снижения энергопотребления и оптимизации расходов
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {mainServices[0].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1" size={20} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="power">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded flex items-center justify-center">
                      <Icon name="Building2" className="text-primary" size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-foreground">Генерирующие объекты</h2>
                      <p className="text-muted-foreground">
                        Проектирование, строительство и модернизация энергетических объектов
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {mainServices[1].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1" size={20} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="water">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded flex items-center justify-center">
                      <Icon name="Droplet" className="text-primary" size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-foreground">Водоочистка</h2>
                      <p className="text-muted-foreground">
                        Проектирование и внедрение систем водоподготовки и водоочистки
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {mainServices[2].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1" size={20} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="service">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded flex items-center justify-center">
                      <Icon name="Wrench" className="text-primary" size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-foreground">Техническое обслуживание</h2>
                      <p className="text-muted-foreground">
                        Профессиональное обслуживание энергетического оборудования
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {mainServices[3].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1" size={20} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
