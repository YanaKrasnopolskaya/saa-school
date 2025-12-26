<script setup lang="ts">
import {COUNTRIES} from "@/entities/countries"
import { vMaska } from "maska/vue"
import {ApplicationForm} from "@/shared/ui/form"
import {AppInput} from "@/shared/ui/input"
import {AppSelect} from "@/shared/ui/select"
import {AppRadio} from "@/shared/ui/radio"
import {useField, useForm} from "vee-validate"
import {useSendApplication} from "@/features/send-application"
import type {IndividualFormInterface} from "@/features/forms"
import {schemes} from "@/features/validation"

const props = defineProps<{
  darkTheme?: boolean
}>();

const phoneCode = ref('+7');
const checkValue = ref<'call' | 'write'>('write');
const {individualSchema} = schemes();
const { onSubmit, isSuccess, isError } = useSendApplication();

const initialValues: IndividualFormInterface = {
  name: '',
  phone: '',
  telegram: '',
};

const { handleSubmit, resetForm } = useForm<IndividualFormInterface>({
  validationSchema: individualSchema,
  initialValues,
});

const { value: name, errorMessage: nameError, meta: nameMeta } = useField<string>('name');
const { value: phone, errorMessage: phoneError, meta: phoneMeta } = useField<string>('phone');
const { value: telegram, errorMessage: telegramError, meta: telegramMeta } = useField<string>('telegram', undefined, {
  validateOnValueUpdate: true
});

const submit = handleSubmit(async (values) => {
  const payload: Record<string, any> = {
    name: values.name,
    phone: values.phone,
  };

  if (values.telegram?.trim()) {
    payload.telegram = values.telegram;
    payload.checkValue = checkValue.value;
  }

  await onSubmit(payload);
  resetForm();
});
</script>

<template>
  <ApplicationForm @submit="submit" :success="isSuccess" :error="isError" :dark-theme="darkTheme">
    <template #input-field>
      <AppInput label="Имя" placeholder="Как вас зовут?" v-model="name" :error="!!nameError && nameMeta.touched" :dark-theme="darkTheme"/>
      <AppInput label="Номер телефона" placeholder="(999) 999-99-99" v-model="phone" v-maska="`${phoneCode} (###) ###-##-##`" :error="!!phoneError && phoneMeta.touched" :dark-theme="darkTheme">
        <template #prefix>
          <AppSelect :options="COUNTRIES" v-model="phoneCode"/>
          <span v-if="!phone?.trim()" class="prefix-code" :class="{'prefix-code--dark' : darkTheme}">{{phoneCode}}</span>
        </template>
      </AppInput>
      <AppInput  label="Ник в Telegram" placeholder="@primer" v-model="telegram" :error="!!telegramError && telegramMeta.touched" :dark-theme="darkTheme"/>
    </template>
    <template #extra-fields>
      <Transition name="fade-down">
        <div v-if="telegram?.trim()" class="radio-wrapper animate-in fade-down duration-500 ease-in-out">
          <AppRadio v-model="checkValue" name="contact" value="call" label="Позвонить мне" :dark-theme="darkTheme"/>
          <AppRadio v-model="checkValue" name="contact" value="write" label="Написать в Telegram" :dark-theme="darkTheme"/>
        </div>
      </Transition>
    </template>
  </ApplicationForm>
</template>

<style scoped lang="scss">
.radio-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}
.fade-down-enter-active,
.fade-down-leave-active {
  transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
}
.fade-down-enter-from {
  opacity: 0;
  transform: translateY(-12px);
}
.fade-down-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

.prefix-code--dark {
  color:  rgba(255, 255, 255, 1);
}
</style>