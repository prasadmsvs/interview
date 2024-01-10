<template>
  <div class="container-fluid">
    <div class="input-group mb-3">
      <span class="input-group-text" id="search">@</span>
      <input
        v-model="searchVal"
        type="text"
        class="form-control"
        placeholder="Search"
        aria-label="search"
        aria-describedby="search"
        @input="searchData"
      />
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Thumbnail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id">
          <th scope="row">
            <input
              v-model="product.title"
              :id="`title-${product.id}`"
              type="text"
              class="form-control"
              placeholder="Title"
              :aria-label="product.title"
            />
          </th>
          <td>
            <input
              v-model="product.description"
              :id="`description-${product.description}`"
              type="text"
              class="form-control"
              placeholder="Description"
              :aria-label="product.description"
            />
          </td>
          <td>
            <input
              v-model="product.price"
              :id="`price-${product.price}`"
              type="text"
              class="form-control"
              placeholder="Price"
              :aria-label="product.price"
            />
          </td>
          <td>
            <img
              :src="product.thumbnail"
              class="img-thumbnail mh-100 mw-100"
              :alt="product.title"
              :style="{width: '150px', height: '100px'}"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <button class="btn btn-primary" @click="submitData">Submit</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

let productsRes = ref([]);
const searchVal = ref("");

onMounted(() => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json) => (productsRes.value = json));
});

function submitData() {
  console.table(productsRes.value.products);
}

const filteredProducts = computed(() => {
  if (searchVal.value === "") {
    return productsRes.value.products;
  }

  return productsRes.value.products.filter((product) => {
    return (product.title + product.description)
      .toLowerCase()
      .includes(searchVal.value.toLowerCase());
  });
});
</script>
