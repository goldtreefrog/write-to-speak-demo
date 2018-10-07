import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";

Enzyme.configure({ adapter: new Adapter() });

// Mock localStorage (lest you get "localStorage not defined" error in tests).
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;
