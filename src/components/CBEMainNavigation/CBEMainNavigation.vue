<template>
  <nav class="cbe__main-nav">
    <ul class="cbe__nav-list" v-show="isUserLoggedIn">
      <li class="cbe__nav-element">
        <router-link to="/studentprofile"
          >Your Profile <i class="fas fa-user-circle"></i
        ></router-link>
      </li>
      <li class="cbe__nav-element">
        <router-link to="/teacherhub"
          >Teacher-Hub <i class="fas fa-school"></i
        ></router-link>
      </li>
      <li class="cbe__nav-element">
        <router-link to="/amatool"
          >AMA-Tool <i class="fas fa-question-circle"></i
        ></router-link>
      </li>
      <li class="cbe__nav-element">
        <router-link to="/rotitool"
          >ROTI-Tool <i class="fas fa-clock"></i
        ></router-link>
      </li>
      <li class="cbe__nav-element">
        <router-link to="/lessonrecordings"
          >Lesson-Recordings <i class="fas fa-video"></i
        ></router-link>
      </li>
      <li class="cbe__nav-element">
        <CBEUserLogin />
      </li>
    </ul>
  </nav>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";

import CBEUserLogin from "@/components/CBEUserLogin/CBEUserLogin.vue";

export default {
  name: "CBEMainNavigation",
  components: {
    CBEUserLogin,
  },
  setup() {
    const store = useStore();

    const isUserLoggedIn = computed(() => store.state.isUserLoggedIn);

    return {
      isUserLoggedIn,
    };
  },
};
</script>
<style lang="scss" scoped>
nav {
  .cbe__nav-list {
    margin: 1rem 4rem 1rem 2.5rem;
    padding: 0rem 2rem 1rem 0rem;
    display: flex;
    flex-flow: row;
    list-style-type: none;
    align-items: baseline;
    white-space: nowrap;
    border-bottom: 0.5px solid var(--primary-color);
  }
  li a {
    color: black;
    text-decoration: none;
    padding: 0.5rem;
    margin-right: 1rem;
    border: 0.5px solid var(--primary-color);
    border-radius: 0.25rem;
    display: flex;
    flex-flow: row;
    align-items: center;
    i {
      margin-left: 0.4rem;
      color: var(--secondary-color);
      font-size: 1.2em;
    }
    &.router-link-active {
      border: 2.5px solid var(--primary-color);
      border-radius: 0.25rem;
    }
    &:focus {
      outline: none;
      border: 2.5px solid var(--success-color);
      border-radius: 0.25rem;
    }
  }
}
@media only screen and (max-width: 814px) {
  nav {
    .cbe__nav-list {
      margin: 1rem 2rem 1rem 2.5rem;
      padding: 0.5em 0;
    }
    .cbe__nav-list > * {
      font-size: 0.8em;
    }
  }
}
</style>
