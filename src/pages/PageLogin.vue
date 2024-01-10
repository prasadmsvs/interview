<template>
  <form>
    <div class="mb-3">
      <label for="user" class="form-label">User</label>
      <input
        v-model="username"
        id="user"
        type="text"
        class="form-control"
        placeholder="Username"
        aria-label="User name"
      />
    </div>

    <div class="mb-3">
      <label for="pass" class="form-label">Password</label>
      <input
        v-model="password"
        id="pass"
        type="password"
        class="form-control"
        placeholder="Password"
        aria-label="Password"
      />
    </div>
    <div>
      <button
        :disabled="!username || !password"
        class="btn btn-primary"
        @click="submitData"
      >
        Submit
      </button>
    </div>
  </form>
  <PageModal
    :user="username"
    :pass="password"
    :show="showValues"
    @close="closeModal"
  />
</template>

<script setup>
import { ref } from "vue";
import PageModal from "./../components/PageModal.vue";

let showValues = ref(false);

const username = ref("");
const password = ref("");

function submitData() {
  showValues.value = true;
}
function closeModal() {
  showValues.value = false;
}
</script>
