import {type GenericObject, useForm} from "vee-validate";
import type {AnyObjectSchema} from "yup";
import {sendForm} from "@/features/send-application";

// schema - yup-схема, values: объект значений, extra - дополнительные данные
export function sendApplication<T extends Record<string, any>, E extends Record<string, any> = Record<string, any>>(schema: AnyObjectSchema, values: T, extra?: E) {
    const isSuccess = ref(false);
    const isError = ref(false);

    const { handleSubmit, resetForm } = useForm<T>({
        validationSchema: schema, // схема валидации
        validateOnMount: false, // при первой загрузке поля без ошибок
        initialValues: values as any // валидируемые значения
    });

    // отправка формы
    const onSubmit = handleSubmit(async (values) => {
        isSuccess.value = false;
        isError.value = false

        try {
            const payload = {...values, ...extra};
            await sendForm(payload);
            isSuccess.value = true;
            resetForm();
            console.log(payload);
        } catch (error: any) {
            console.error(error);
            isError.value = true;
        }
        // показываем всплывашку об отправке на 2сек
        setTimeout(() => {
            isSuccess.value = false
            isError.value = false
        }, 2000);
    })

    return {
        isSuccess,
        isError,
        onSubmit
    }
}