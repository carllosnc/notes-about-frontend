const faker = require('faker')

const posts = [...Array(10).keys()].map(() => {
  return {
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraph(),
    author: faker.name.findName()
  }
})

module.exports = () => {
  return {
    posts: posts
  }
}
