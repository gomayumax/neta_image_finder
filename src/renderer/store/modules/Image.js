/**
 * Created by goma on 2017/08/27.
 */
const state = {
  inputUrl: '',
  images: [],
}

const mutations = {
  ADD_IMAGE (state, obj) {
    state.images.push({
      url: obj.url,
      name: 'hoge',
    })
    console.log(state.images)
  },
}

const actions = {
  addImage ({ commit }, obj) {
    commit('ADD_IMAGE', obj)
  },
}

const getters = {
  images: function () {
    return state.images
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
