import { DEFAULT_CATEGORIES } from "$lib/defaultCategories";
import type { Category } from "$lib/types";
import { writable } from "svelte/store";

function createCategoryStore() {
  const { subscribe, set, update } = writable<Category[]>(DEFAULT_CATEGORIES);

  return {
    subscribe,
    set,
    add: (category: Omit<Category, 'id'>) => {
      const newCategory: Category = {
        ...category,
        id: crypto.randomUUID(),
      };
      update(categories => [...categories, newCategory]);
    },
    update: (id: string, updates: Partial<Category>) => {
      update(categories =>
        categories.map(c => (c.id === id ? { ...c, ...updates } : c))
      );
    },
    remove: (id: string) => {
      update(categories => categories.filter(c => c.id !== id));
    },
  };
}

export const categories = createCategoryStore();
