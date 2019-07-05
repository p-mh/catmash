const mockAxios = require('jest-mock-axios').default;
const CatsStore = require('./cats');

afterEach(() => {
  mockAxios.reset();
});

describe('fetchCats', () => {
  test('should called axios', () => {
    CatsStore.fetchCats();
    expect(mockAxios.get).toHaveBeenCalled();
  });
  test('should called axios with the correct URL', () => {
    CatsStore.fetchCats();
    expect(mockAxios.get).toHaveBeenCalledWith(CatsStore.URL);
  });
});
