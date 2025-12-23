import {string} from "yup";

// правила валидации для полей

const nameRule = string().required().min(2, 'Введите корректное имя');

const phoneRule = string().required('Введите номер телефона').test('len', 'Некорректный номер телефона', (value) => {
        if (!value) return false;
        const digits = value.replace(/\D/g, '');
        // международный формат от 10 до 15 цифр
        return digits.length > 10 && digits.length <= 15;
});

const telegramRule = string().notRequired().test('telegram-format', 'Неверный формат Telegram ника', (value) => {
    if (!value) return true;
    if (value.trim() === '') return true;
    return value.trim().startsWith('@');
});

const nameOrganizationRule = string().required().min(2, 'Введите корректное имя');

const emailRule = string().required('Введите адрес электронной почты').test('format', 'Некорректный формат email', (value) => {
    if (!value) return false;

    const email = value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

    return emailRegex.test(email);
});

const commentRule = string().notRequired();

export {
    nameRule,
    phoneRule,
    telegramRule,
    emailRule,
    nameOrganizationRule,
    commentRule
}