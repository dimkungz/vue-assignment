<template>
  <div class="page-container">
    <header>
      <h2>📚 Course List</h2>
      <p>❤️ ถูกใจแล้ว {{ favoriteStore.favorites.length }} คอร์ส</p>
    </header>

    <div class="form-section">
      <label>ชื่อผู้ใช้:</label>
      <input
        v-model="favoriteStore.username"
        placeholder="กรอกชื่อของคุณ"
      />
    </div>

    <div class="course-list">
      <CourseCard
        v-for="course in courses"
        :key="course.id"
        :course="course"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import CourseCard from "../components/CourseCard.vue";
import { useFavoriteStore } from "../stores/favorite";

const courses = ref([]);
const favoriteStore = useFavoriteStore();

onMounted(async () => {
  const { data } = await axios.get("/courses.json");
  courses.value = data;
});
</script>

<style scoped>
.page-container {
  max-width: 600px;
  margin: auto;
  text-align: center;
}
.course-list {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
