import {object} from 'yup'
import{nameRule, phoneRule, telegramRule} from "@/shared/lib/validate";

// схема валидации для IndividualForm
export const individualFormSchema = object({
    name: nameRule,
    phone: phoneRule,
    telegram: telegramRule,
})