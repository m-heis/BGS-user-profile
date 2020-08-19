export const state = () => ({
  users: [
    {
      id: 1,
      name: 'Saken',
      email: 'saken@gmail.com',
      password: 'saken',
      img: 'https://images.wallpaperscraft.com/image/man_paint_sky_129261_1280x720.jpg'
    },
    {
      id: 2,
      name: 'Dany',
      email: 'Dany@gmail.com',
      password: 'dany',
      img: 'https://images.wallpaperscraft.com/image/man_silhouette_sun_sunset_119708_1280x720.jpg'
    },
    {
      id: 3,
      name: 'Alex',
      email: 'alex@gmail.com',
      password: 'alex',
      img: 'https://images.wallpaperscraft.com/image/man_forest_hoodie_walk_118322_1280x720.jpg'
    },
    {
      id: 4,
      name: 'Sergey',
      email: 'sergey@gmail.com',
      password: 'sergey',
      img: 'https://images.wallpaperscraft.com/image/man_art_guitar_127178_1280x720.jpg'
    },
    {
      id: 5,
      name: 'Anna',
      email: 'anna@gmail.com',
      password: 'anna',
      img: 'https://images.wallpaperscraft.com/image/woman_magician_magic_123280_1280x720.jpg'
    }
  ],
  currentUser: {}
})

export const mutations = {
  SET_CURRENT_USER (state, user) {
    state.currentUser = user
  },
  DELETE_CURRENT_USER (state) {
    state.currentUser = {}
  }
}

export const actions = {
  loadCurrentUser({commit}, user) {
    commit('SET_CURRENT_USER', user);
  },
  deleteCurrentUser ({commit}) {
    commit('DELETE_CURRENT_USER');
  }
}
