import type {FinanceSupportCardInterface} from "@/entities/finance-support/model/types/FinanceSupportCardInterface";

export const FINANCE_SUPPORT_CARDS: FinanceSupportCardInterface[] = [
    {
        image: {
            src: '/images/payment-option-card-1.png',
            alt: 'Налоговый вычет',
        },
        title: 'Оформим налоговый вычет',
        description: 'Сможешь вернуть 13% от стоимости курса, а мы поможем с документами'
    },
    {
        image: {
            src: '/images/payment-option-card-2.png',
            alt: 'Рассрочка',
        },
        title: 'Есть оплата частями и рассрочка от банка',
        description: 'Без процентов и переплат на 4 и 12 месяцев. Если хочешь платёж поменьше — кредит до 36 месяцев',
        moreInfo: 'Подробнее о способах оплаты'
    },
]