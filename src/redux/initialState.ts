const initialState = () => ({
  categories: {
    list: [
      {
        id: 1,
        name: 'Push Ups'
      },
      {
        id: 2,
        name: 'Cycling'
      }
    ],
    selectedCategory: 'None'
  },
  sprintIntervals: {
    list: [
      {
        value: 10
      },
      {
        value: 20
      },
      {
        value: 30
      },
    ],
    counter: 0
  }
})

export default initialState;