import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Projects = () => {
  const projects = [
    {
      title: 'Модернизация котельной промышленного предприятия',
      category: 'Энергоэффективность',
      year: '2023',
      description: 'Комплексная модернизация котельной с установкой современного оборудования',
      results: [
        'Снижение расхода топлива на 25%',
        'Сокращение выбросов на 30%',
        'Окупаемость 3,5 года'
      ]
    },
    {
      title: 'Строительство когенерационной установки',
      category: 'Генерация',
      year: '2023',
      description: 'Проектирование и строительство когенерационной установки мощностью 5 МВт',
      results: [
        'Обеспечение энергонезависимости',
        'Снижение затрат на электроэнергию на 40%',
        'Повышение надежности энергоснабжения'
      ]
    },
    {
      title: 'Система водоочистки для пищевого производства',
      category: 'Водоочистка',
      year: '2022',
      description: 'Внедрение современной системы водоподготовки и водоочистки',
      results: [
        'Соответствие всем нормам качества',
        'Снижение расхода воды на 20%',
        'Автоматизация процессов'
      ]
    },
    {
      title: 'Энергосервисный контракт для ТЦ',
      category: 'Энергосервис',
      year: '2022',
      description: 'Реализация комплексной программы энергосбережения для торгового центра',
      results: [
        'Экономия энергии 35%',
        'Нулевые инвестиции заказчика',
        'Гарантированный результат'
      ]
    },
    {
      title: 'Резервная электростанция для дата-центра',
      category: 'Генерация',
      year: '2021',
      description: 'Установка и интеграция дизельных генераторов для обеспечения бесперебойного питания',
      results: [
        '99,99% надежности энергоснабжения',
        'Автоматический запуск за 10 сек',
        'Полная интеграция с системой управления'
      ]
    },
    {
      title: 'Модернизация системы теплоснабжения',
      category: 'Энергоэффективность',
      year: '2021',
      description: 'Замена устаревшего оборудования и внедрение систем автоматизации',
      results: [
        'Снижение теплопотерь на 40%',
        'Повышение комфорта',
        'Удаленный мониторинг и управление'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Наши проекты</h1>
            <p className="text-xl text-muted-foreground">
              Реализованные проекты по всей России
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary">{project.category}</Badge>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="mt-auto">
                    <h4 className="font-semibold text-sm mb-3 text-foreground">Результаты:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-sm text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы начать свой проект?</h2>
            <p className="text-lg mb-8 opacity-90">
              Свяжитесь с нами для обсуждения вашего проекта и получения коммерческого предложения
            </p>
            <a href="/contacts" className="inline-block">
              <button className="px-8 py-3 bg-accent text-accent-foreground rounded hover:bg-accent/90 transition-colors font-medium">
                Связаться с нами
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
