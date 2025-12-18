import type {IndividualForm} from "@/features/send-application/individual";

// отправка заявки
export async function sendIndividualForm(data: IndividualForm) {
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