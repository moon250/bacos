<template>
  <div class="game-creation__wrapper">
    <h2>Créez votre partie</h2>
    <label for="letterCount">Nombre de lettres : {{ letters }}</label>
    <div class="letters-range__wrapper">
      <button @click="advance(-1)">
        <Icon name="sub" :icon-class="false" />
      </button>
      <div class="letters-range__range">
        <span class="letters-range__background" />
      </div>
      <button @click="advance(1)">
        <Icon name="add" :icon-class="false" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Icon from "../Icon.vue";

const letters = ref(13);

const advance = (step: number) => {
  if (letters.value + step > 26 || letters.value + step < 1) {
    return;
  }

  letters.value += step;
  document.documentElement.style.setProperty(
    "--letters-range-progress",
    (1 - letters.value / 26) * 100 + "%",
  );
};
</script>

<style scoped>
.game-creation__wrapper {
  padding: 32px;
  border: var(--secondary) 3px solid;
  transform: translateX(3px) translateY(-3px);
  box-shadow: -3px 3px 0 0 var(--secondary);
  position: absolute;
  background: var(--primary);
  inset: 100px;
  z-index: 100;
}

.letters-range__wrapper {
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  gap: 16px;
}

.letters-range__wrapper button {
  height: 24px;
  width: 24px;
  padding: 0;
  display: grid;
  place-items: center;
}

.letters-range__wrapper button svg {
  height: 16px;
  width: 16px;
}

.letters-range__range {
  position: relative;
  border: var(--secondary) 3px solid;
  height: 24px;
}

.letters-range__background {
  position: absolute;
  top: 0;
  left: 0;
  right: var(--letters-range-progress, 50%);
  z-index: -1;
  /* 24px - border width */
  height: 21px;
  background: var(--accent);
}
</style>
