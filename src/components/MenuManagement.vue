<!-- src/components/Menu.vue -->

<template>
  <div>
    <h1>Elreda strikes back</h1>

    <!-- Table for displaying menu items -->
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Type</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- Table rows will be dynamically generated here -->
        <tr v-for="item in menuItems" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.type }}</td>
          <td>
            <button @click="editItem(item)">Edit</button>
            <button @click="deleteItem(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Form for adding/editing menu items -->
    <form @submit.prevent="saveItem">
      <label>
        Name:
        <input v-model="newItem.name" required />
      </label>
      <label>
        Price:
        <input v-model.number="newItem.price" type="number" required />
      </label>
      <label>
        Type:
        <select v-model="newItem.type" required>
          <option value="food">Food</option>
          <option value="beverage">Beverage</option>
        </select>
      </label>
      <button type="submit">{{ editingItem ? 'Update Item' : 'Add Item' }}</button>
      <button v-if="editingItem" @click="cancelEdit">Cancel Edit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MenuManagement',
  data() {
    return {
      menuItems: [
        { id: 1, name: 'Dish 1', price: 10.99, type: 'food' },
        { id: 2, name: 'Drink 1', price: 2.99, type: 'beverage' },
        // Add more menu items as needed
      ],
      newItem: {
        name: '',
        price: null,
        type: 'food',
      },
      editingItem: null, // Track the item being edited
    };
  },
  methods: {
    addItem() {
      // Generate a new ID (replace this logic with your backend logic)
      const newId = this.menuItems.length > 0 ? this.menuItems[this.menuItems.length - 1].id + 1 : 1;

      // Add the new item to the menuItems array
      this.menuItems.push({ ...this.newItem, id: newId });

      // Clear the form fields
      this.clearForm();
    },
    editItem(item) {
      // Set the item being edited
      this.editingItem = item;

      // Fill the form fields with the item's data
      this.newItem = { ...item };
    },
    saveItem() {
      if (this.editingItem) {
        // Update the existing item
        const index = this.menuItems.findIndex(item => item.id === this.editingItem.id);
        if (index !== -1) {
          this.menuItems[index] = { ...this.newItem, id: this.editingItem.id };
        }
      } else {
        // Add a new item
        this.addItem();
      }

      // Clear the form fields and reset editingItem
      this.clearForm();
    },
    deleteItem(itemId) {
      // Implement delete functionality if needed
      this.menuItems = this.menuItems.filter(item => item.id !== itemId);

      // Clear the form fields and reset editingItem
      this.clearForm();
    },
    cancelEdit() {
      // Clear the form fields and reset editingItem
      this.clearForm();
    },
    clearForm() {
      this.newItem = { name: '', price: null, type: 'food' };
      this.editingItem = null;
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>