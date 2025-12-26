import {useSendForm} from "@/features/send-application";

export function useSendApplication() {
    const isSuccess = ref(false);
    const isError = ref(false);

    // отправка формы values - данные, extra - дополнительные данные
    const onSubmit = async <T extends Record<string, any>>(values: T) => {
        isSuccess.value = false;
        isError.value = false

        try {
            await useSendForm(values);
            isSuccess.value = true;
        } catch (error: any) {
            console.error(error);
            isError.value = true;
        }
        // показываем всплывашку об отправке на 2сек
        setTimeout(() => {
            isSuccess.value = false
            isError.value = false
        }, 2000);
    }

    return {
        isSuccess,
        isError,
        onSubmit
    }
}