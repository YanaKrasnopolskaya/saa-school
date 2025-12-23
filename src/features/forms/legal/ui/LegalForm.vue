<script setup lang="ts">
import {COUNTRIES} from "@/entities/countries"
import { vMaska } from "maska/vue"
import {ApplicationForm} from "@/shared/ui/form"
import {AppInput} from "@/shared/ui/input"
import {AppSelect} from "@/shared/ui/select"
import {useField, useForm} from "vee-validate"
import {sendApplication} from "@/features/send-application";
import {schemes} from "@/features/validation";
import type {LegalFormInterface} from "@/features/forms";

const phoneCode = ref('+7');
const comment = ref('');
const {individualSchema} = schemes();
const { onSubmit, isSuccess, isError } = sendApplication();

const initialValues: LegalFormInterface = {
  name: '',
  nameOrganization: '',
  phone: '',
  email: ''
}

const { handleSubmit, resetForm } = useForm<LegalFormInterface>({
  validationSchema: individualSchema,
  initialValues,
});

const { value: name, errorMessage: nameError, meta: nameMeta } = useField<string>('name');
const { value: nameOrg, errorMessage: nameOrgError, meta: nameOrgMeta } = useField<string>('nameOrg');
const { value: phone, errorMessage: phoneError, meta: phoneMeta } = useField<string>('phone');
const { value: email, errorMessage: emailError, meta: emailMeta } = useField<string>('email');


const submit = handleSubmit(async (values) => {
  await onSubmit({
    name: name.value,
    nameOrg: nameOrg.value,
    phone: phone.value,
    email: email.value,
    comment: comment.value,
  });
  resetForm();
});
</script>

<template>
  <ApplicationForm @submit="submit" :success="isSuccess" :error="isError">
    <template #input-field>
      <AppInput label="Имя" placeholder="Как вас зовут?" v-model="name" :error="!!nameError && nameMeta.touched"/>
      <AppInput label="Наименование организации" placeholder="Как называется ваша организация" v-model="nameOrg" :error="!!nameOrgError && nameOrgMeta.touched"/>
      <AppInput label="Номер телефона" placeholder="(999) 999-99-99" v-model="phone" v-maska="`${phoneCode} (###) ###-##-##`" :error="!!phoneError && phoneMeta.touched">
        <template #prefix>
          <AppSelect :options="COUNTRIES" v-model="phoneCode"/>
          <span v-if="!phone?.trim()" class="prefix__code">{{phoneCode}}</span>
        </template>
      </AppInput>
      <AppInput label="E-mail" placeholder="address@mail.ru" v-model="email" :error="!!emailError && emailMeta.touched"/>
      <AppInput label="Комментарий" placeholder="Что уточнить перед обучением?" v-model="comment" />
    </template>
  </ApplicationForm>
</template>

<style scoped lang="scss">


</style>