<template>
  <nav>
    <h1>Vuex Auth</h1>
    <!-- for all users -->
    <template v-if="authIsReady">
      <div>
        <router-link to="/">Home</router-link>
      </div>

      <!-- for logged in users -->
      <div v-if="user">
        <span>Logged in as {{ user.email }}</span>
        <button @click="handleClick">Logout</button>
      </div>

      <!-- for logged out users -->
      <div v-if="!user">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </template>
  </nav>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup(){
    const store = useStore()

    const handleClick = () => {
      store.dispatch('Logout')
    }

    return {
      handleClick,
      user: computed(()=> store.state.user),
      authIsReady: computed(() => store.state.authIsReady)
    }
  }
}
</script>