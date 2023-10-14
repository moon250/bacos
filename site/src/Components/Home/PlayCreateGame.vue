<template>
  <div class="play-create__wrapper">
    <div class="game-join__form">
      <input
        type="text"
        v-model="code"
        @keydown="typing"
        placeholder="Entrez un code de partie"
        title="Un code de partie à 6 caractères"
        @keydown.enter="submit"
        maxlength="6"
        pattern="[a-zA-Z0-9]{6}"
      />
      <button @click.prevent="submit">Jouer</button>
    </div>
    <p>Ou</p>
    <button class="button-large">Créer une partie</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { isLetter, isNumber, isUtilKey } from "../../Helpers/Keyboard.ts";

const code = ref("");
const typing = (e: KeyboardEvent) => {
  if (code.value.length >= 6 && !isUtilKey(e.key)) {
    e.preventDefault();
  }

  if (!isLetter(e.key) && !isNumber(e.key) && !isUtilKey(e.key)) {
    e.preventDefault();
  }
};
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
