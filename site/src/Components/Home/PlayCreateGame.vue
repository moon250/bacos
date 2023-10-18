<template>
  <div class="play-create__wrapper">
    <div class="game-join__form">
      <input
        type="text"
        v-model="code"
        @keydown="handleKeydown"
        placeholder="Entrez un code de partie"
        title="Un code de partie à 6 caractères"
        @keydown.enter="submit"
        maxlength="6"
        pattern="[A-Z0-9]{6}"
      />
      <button @click.prevent="submit">Jouer</button>
    </div>
    <p>Ou</p>
    <button class="button-large" @click="$emit('next')">
      Créer une partie
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useKeyboard } from "../../Composables/keyboard.ts";

const code = ref("");
const keyboard = useKeyboard();

const submit = () => console.log(code);

function handleKeydown(e: KeyboardEvent) {
  if (code.value.length >= 6 && !keyboard.isUtilKey(e.key)) {
    e.preventDefault();
  }

  if (
    !keyboard.isLetter(e.key) &&
    !keyboard.isNumber(e.key) &&
    !keyboard.isUtilKey(e.key)
  ) {
    e.preventDefault();
  }
}
</script>

<style scoped>
.play-create__wrapper {
  width: min-content;
  display: grid;
  place-items: center;
  gap: 16px;
}

.game-join__form {
  display: flex;
  gap: 16px;
  position: relative;
}

button {
  max-width: 470px;
}

input {
  text-transform: uppercase;
}
::placeholder {
  text-transform: none;
}
</style>
