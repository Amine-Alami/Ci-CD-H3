// Import chai using dynamic import
const chai = require('chai');
const chaiHttp = require('chai');
const app  = require('../server');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Todo Routes', () => {
  before(async () => {
    // Optional: Perform any setup before running the tests
  });

  after(async () => {
    // Optional: Perform any cleanup after running the tests
  });

  describe('POST /api/todos', () => {
    it('should create a new todo', async () => {
      const res = await chai.request(app)
        .post('/api/todos')
        .send({ text: 'Test Todo' });

      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('success').to.equal(true);
      // Add more assertions based on your response structure
    });
  });

  describe('GET /api/', () => {
    it('should get all todos', async () => {
      const res = await chai.request(app)
        .get('/api/');

      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
      // Add more assertions based on your response structure
    });
  });

  // Add more test cases for other routes if needed
});
