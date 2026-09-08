import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    username: "",
    favorites: [] as Record<string, unknown>[],
  }),
  actions: {
    setUsername(name: string) {
      this.username = name;
    },
    addFavorite(course: Record<string, unknown>) {
      const alreadyAdded = this.favorites.some(
        (item) => item.id === course.id,
      );
      if (!alreadyAdded) {
        this.favorites.push(course);
      }
    },
  },
});
