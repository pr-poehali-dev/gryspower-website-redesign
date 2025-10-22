import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const About = () => {
  const values = [
    {
      icon: 'Target',
      title: 'Наша миссия',
      text: 'Предоставление комплексных энергосервисных решений высочайшего качества'
    },
    {
      icon: 'Eye',
      title: 'Наше видение',
      text: 'Стать лидером рынка энергоэффективности в России'
    },
    {
      icon: 'Heart',
      title: 'Наши ценности',
      text: 'Надежность, профессионализм, инновации, ответственность'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">О компании</h1>
            <p className="text-xl text-muted-foreground">
              GRYS POWER — энергосервисная компания с многолетним опытом работы на рынке
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                GRYS POWER — энергосервисная компания, предлагающая полный спектр услуг в области 
                энергоэффективности, строительства генерирующих объектов и водоочистки. Мы работаем 
                с крупными промышленными и коммерческими объектами, предоставляя комплексные решения 
                под ключ.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Наша команда состоит из высококвалифицированных специалистов с многолетним опытом работы 
                в энергетической отрасли. Мы используем современное оборудование и передовые технологии, 
                что позволяет нам гарантировать высокое качество выполнения всех работ.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Наши достижения</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">проектов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">специалистов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
