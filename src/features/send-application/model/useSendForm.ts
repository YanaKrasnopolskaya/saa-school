// отправка заявки
export async function useSendForm<T extends Record<string, string>>(data: T) {
    try {
        const response = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        console.log('Отправлено успешно', result.data);
        return {success: true};
    }
    catch (error) {
        console.error("Ошибка при отправке", error);
        throw new Error("Ошибка при отправке");
    }
}