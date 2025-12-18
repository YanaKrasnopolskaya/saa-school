import {string} from "yup";

// правила валидации для полей

const nameRule = string().required().min(2, 'Введите корректное имя');

const phoneRule = string().required('Введите номер телефона').test('len', 'Некорректный номер телефона', (value) => {
        if (!value) return false;
        const digits = value.replace(/\D/g, '');
        // международный формат от 10 до 15 цифр
        return digits.length > 10 && digits.length <= 15;
    })

const telegramRule = string().notRequired().test('telegram-format', 'Неверный формат Telegram ника', (value) => {
    if (!value) return true;
    if (value.trim() === '') return true;
    return value.trim().startsWith('@');
});

export {
    nameRule,
    phoneRule,
    telegramRule,
}