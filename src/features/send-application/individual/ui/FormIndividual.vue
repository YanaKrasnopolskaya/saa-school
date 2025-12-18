<script setup lang="ts">
import {COUNTRIES} from "@/entities/countries"
import { vMaska } from "maska/vue"
import {type IndividualForm, individualFormSchema, sendIndividualForm} from "@/features/send-application/individual"
import {ApplicationForm} from "@/shared/ui/form"
import {AppInput} from "@/shared/ui/input"
import {AppSelect} from "@/shared/ui/select"
import {AppRadio} from "@/shared/ui/radio"
import {useField, useForm} from "vee-validate"

const isSuccess = ref(false);
const isError = ref(false);
const phoneCode = ref('+7');
const checkValue = ref<'call' | 'write'>('write');

const { handleSubmit, resetForm } = useForm<IndividualForm>({
  validationSchema: individualFormSchema, // схема валидации
  validateOnMount: false, // при первой загрузке поля без ошибок
  initialValues: { // отслеживаемые поля как при ref для валидации
    name: '',
    phone: '',
    telegram: '',
  }
});

const { value: name, errorMessage: nameError, meta: nameMeta } = useField<string>('name');
const { value: phone, errorMessage: phoneError, meta: phoneMeta } = useField<string>('phone');
const { value: telegram, errorMessage: telegramError, meta: telegramMeta } = useField<string>('telegram', {
  validateOnValueUpdate: true
});

// отправка заявки. Собираем все данные в один объект, отправляем данные, показываем всплывашку на 2сек
const onSubmit = handleSubmit(async (values) => {
  const payload = {...values, checkValue: checkValue.value};
  isSuccess.value = false;
  isError.value = false

  try {
    await sendIndividualForm(payload);
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
</script>

<template>
  <ApplicationForm @submit="onSubmit" :success="isSuccess" :error="isError">
    <template #input-field>
      <AppInput label="Имя" placeholder="Как вас зовут?" v-model="name" :error="!!nameError && nameMeta.touched"/>
      <AppInput label="Номер телефона" placeholder="(999) 999-99-99" v-model="phone" v-maska="`${phoneCode} (###) ###-##-##`" :error="!!phoneError && phoneMeta.touched">
        <template #prefix>
          <AppSelect :options="COUNTRIES" v-model="phoneCode"/>
          <span v-if="!phone?.trim()" class="prefix__code">{{phoneCode}}</span>
        </template>
      </AppInput>
      <AppInput  label="Ник в Telegram" placeholder="@primer" v-model="telegram" :error="!!telegramError"/>
    </template>
    <template #extra-fields>
      <transition name="fade-down">
        <div v-if="telegram?.trim()" class="radio-wrapper animate-in fade-down duration-500 ease-in-out">
          <AppRadio v-model="checkValue" name="contact" value="call" label="Позвонить мне"/>
          <AppRadio v-model="checkValue" name="contact" value="write" label="Написать в Telegram"/>
        </div>
      </transition>
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
</style>