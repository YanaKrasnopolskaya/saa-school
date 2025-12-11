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
    <template #extra-fields>
      <transition name="fade-down">
        <div v-if="form.telegram.trim()" class="radio-wrapper animate-in fade-down duration-500 ease-in-out">
          <AppRadio v-model="form.checkValue" name="contact" value="call" label="Позвонить мне" />
          <AppRadio v-model="form.checkValue" name="contact" value="telegram" label="Написать в Telegram" />
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