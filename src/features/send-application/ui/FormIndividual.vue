<script setup lang="ts">
import ApplicationForm from "@/shared/ui/ApplicationForm.vue";
import AppInput from "@/shared/ui/AppInput.vue";
import { ref } from 'vue';
import AppRadio from "@/shared/ui/AppRadio.vue";

const form = ref({
  name: '',
  phone: '',
  telegram: '',
  checkValue: 'telegram',
})
</script>

<template>
  <ApplicationForm>
    <template #input-field>
      <AppInput label="Имя" placeholder="Как вас зовут?" v-model="form.name"/>
      <AppInput label="Номер телефона" placeholder="(999) 999-99-99" v-model="form.phone"/>
      <AppInput label="Ник в Telegram" placeholder="@primer" v-model="form.telegram" :required="false"></AppInput>
    </template>
    <template v-if="form.telegram.trim()" #extra-fields>
      <Transition animate-fade-down animate-duration-[600ms] animate-ease-in-out>
        <div class="radio-wrapper">
          <AppRadio v-model="form.checkValue" name="contact" value="call" label="Позвонить мне" />
          <AppRadio v-model="form.checkValue" name="contact" value="telegram" label="Написать в Telegram" />
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
  gap: 40px;
}
</style>
