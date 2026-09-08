<template>
  <div class="course-card">
    <div>
      <h3>ชื่อคอร์ส: {{ course.name }}</h3>
      <p>ราคา: {{ course.price }} บาท</p>
    </div>
    <button @click="addToFavorite">เพิ่มในรายการโปรด</button>
  </div>
</template>

<script setup>
import { useFavoriteStore } from "../stores/favorite";

const props = defineProps({
  course: Object,
});

const favoriteStore = useFavoriteStore();

const addToFavorite = () => {
  favoriteStore.addFavorite(props.course);
};
</script>

<style scoped>
.course-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
  padding: 12px 16px;
}

h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

p {
  margin: 0;
  color: #555;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #2c9c6d;
}
</style>
