import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const Business = () => {
  const models = [
    {
      icon: 'DollarSign',
      title: 'Энергосервисный контракт',
      description: 'Реализация проектов энергосбережения за счет средств подрядчика с последующим возмещением из экономии',
      benefits: [
        'Нулевые инвестиции заказчика',
        'Гарантированная экономия',
        'Возврат инвестиций из экономии',
        'Комплексное обслуживание'
      ]
    },
    {
      icon: 'TrendingUp',
      title: 'Инвестиционный проект',
      description: 'Совместное финансирование проекта с разделением выгод между сторонами',
      benefits: [
        'Разделение инвестиций',
        'Совместные риски',
        'Долгосрочное партнерство',
        'Максимизация эффективности'
      ]
    },
    {
      icon: 'Handshake',
      title: 'Подрядный договор',
      description: 'Традиционная модель выполнения работ по договору подряда',
      benefits: [
        'Полный контроль заказчика',
        'Фиксированная стоимость',
        'Гибкие сроки реализации',
        'Гарантия качества работ'
      ]
    },
    {
      icon: 'Settings',
      title: 'Операционное управление',
      description: 'Передача управления энергетическим хозяйством на аутсорсинг',
      benefits: [
        'Снижение операционных расходов',
        'Профессиональное управление',
        'Оптимизация процессов',
        'Круглосуточная поддержка'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Бизнес-модели</h1>
            <p className="text-xl text-muted-foreground">
              Гибкие схемы сотрудничества для реализации ваших проектов
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {models.map((model, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded flex items-center justify-center mb-4">
                    <Icon name={model.icon as any} className="text-accent" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{model.title}</h3>
                  <p className="text-muted-foreground mb-6">{model.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground mb-3">Преимущества:</h4>
                    {model.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Выбор оптимальной модели</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Наши специалисты помогут подобрать наиболее подходящую бизнес-модель для вашего проекта, 
              учитывая специфику объекта, бюджет и стратегические цели вашей компании.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contacts" className="inline-block">
                <button className="px-8 py-3 bg-accent text-accent-foreground rounded hover:bg-accent/90 transition-colors font-medium">
                  Получить консультацию
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Business;
