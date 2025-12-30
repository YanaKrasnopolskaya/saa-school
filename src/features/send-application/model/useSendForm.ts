// отправка заявки
export async function useSendForm<T extends Record<string, string>>(data: T) {
    try {
        console.log('Отправка формы', data);
        await new Promise(resolve => setTimeout(resolve, 800)); // типа ждём отправку
        console.log('Отправлено успешно');

        return {success: true};
    }
    catch (error) {
        console.error("Ошибка при отправке", error);
        throw new Error("Ошибка при отправке");
    }
}