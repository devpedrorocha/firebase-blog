import { createStore } from "vuex";

//firebase imports
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("user state changed: ", state.user);
    },
    setAuthIsReady(state, payload){
        state.authIsReady = payload;
    }
  },
  actions: {
    async signUp(context, { email, password }) {
      console.log("signup action");
      //async code
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("Could not complete Sign Up");
      }
    },
    async Login(context, { email, password }) {
      console.log("Login action");
      //async code
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("Could not complete Login");
      }
    },
    async Logout(context) {
      console.log("Logout action");
      await signOut(auth);
      context.commit("setUser", null);
    },
  },
});

const unsub = onAuthStateChanged(auth, (user)=> {
    store.commit('setAuthIsReady', true)
    store.commit('setUser', user)
    unsub()
})

//export
export default store;
