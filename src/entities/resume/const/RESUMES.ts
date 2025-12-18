import type {Resume} from "@/entities/resume/types/Resume";

export const RESUMES: Resume[] = [
    {
        avatar: "/images/avatar-desktop.png",
        position: 'Junior QA',
        salary: 'от 50 000 ₽',
        education: 'Сертификат «Инженер по тестированию»',
        experience: [
            'Тест-кейсы составляю в Test IT, документацию пишу в Gitlab',
            'Знаю клиент-серверную архитектуру и HTTP',
            'Тестирую бекенд REST API c помощью Postman',
            'Работаю с логами Kibana',
            'Работаю с эмулятором Android Studio и симулятом Xcode',
            'Использую снифферы трафика: Fidler и Charles',
        ],
        stacks: [
            'Kibana',
            'Swagger',
            'Figma',
            'PostgreSQL',
            'Postman',
            'SOAP UI',
            'Jmeter',
            'Docker',
            'Git',
            'Charlest',
            'Fiddler',
            'Android Studio',
            'Xcode',
            'Test IT',
            'HTML',
            'CSS',
            'VS Code',
            'Chrome DevTools',
            'GitLab',
        ]
    },
]