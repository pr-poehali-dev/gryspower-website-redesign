import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Obligations = () => {
  const commitments = [
    {
      icon: 'Shield',
      title: 'Безопасность труда',
      description: 'Строгое соблюдение норм охраны труда и техники безопасности на всех объектах'
    },
    {
      icon: 'Leaf',
      title: 'Экологическая ответственность',
      description: 'Минимизация воздействия на окружающую среду и снижение выбросов'
    },
    {
      icon: 'Award',
      title: 'Качество работ',
      description: 'Гарантия высокого качества выполнения всех работ и долговечности решений'
    },
    {
      icon: 'Users',
      title: 'Социальная ответственность',
      description: 'Забота о сотрудниках и развитие местных сообществ'
    }
  ];

  const safetyFaqs = [
    {
      question: 'Какие стандарты безопасности вы соблюдаете?',
      answer: 'Мы строго следуем всем требованиям ГОСТ, СНиП и отраслевым стандартам безопасности. Все наши сотрудники регулярно проходят обучение и аттестацию по охране труда и технике безопасности.'
    },
    {
      question: 'Как вы обеспечиваете экологическую безопасность?',
      answer: 'Мы используем только сертифицированное оборудование, соответствующее экологическим нормам. Проводим регулярный мониторинг выбросов и внедряем энергоэффективные решения для снижения воздействия на окружающую среду.'
    },
    {
      question: 'Какие гарантии вы предоставляете?',
      answer: 'Мы предоставляем гарантию на все выполненные работы и установленное оборудование. Срок гарантии зависит от типа работ и оборудования и указывается в договоре.'
    },
    {
      question: 'Как проводится контроль качества?',
      answer: 'Контроль качества осуществляется на всех этапах реализации проекта. Мы используем современные методы контроля и привлекаем независимых экспертов для подтверждения соответствия работ требованиям.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Наши обязательства</h1>
            <p className="text-xl text-muted-foreground">
              Безопасность, качество и ответственность — основа нашей работы
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {commitments.map((commitment, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded flex items-center justify-center mb-4">
                    <Icon name={commitment.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{commitment.title}</h3>
                  <p className="text-muted-foreground">{commitment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="w-full">
              {safetyFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Наши сертификаты</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="FileCheck" className="text-primary" size={32} />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground">ISO 9001</h3>
                  <p className="text-sm text-muted-foreground">Система менеджмента качества</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Leaf" className="text-primary" size={32} />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground">ISO 14001</h3>
                  <p className="text-sm text-muted-foreground">Экологический менеджмент</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="ShieldCheck" className="text-primary" size={32} />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground">ISO 45001</h3>
                  <p className="text-sm text-muted-foreground">Охрана труда и безопасность</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Obligations;
