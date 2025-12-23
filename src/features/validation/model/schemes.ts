import {object} from 'yup'
import {emailRule, nameOrganizationRule, nameRule, phoneRule, telegramRule} from "@/shared/lib/validate";

export const schemes = () => {
    // схема валидации для IndividualFormInterface
    const individualSchema = object({
        name: nameRule,
        phone: phoneRule,
        telegram: telegramRule,
    })

    const LegalSchema = object({
        name: nameRule,
        nameOrganization: nameOrganizationRule,
        phone: phoneRule,
        email: emailRule,
    })

    return {
        individualSchema,
        LegalSchema,
    }
}