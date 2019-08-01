import React from "react";
import ReactDOM from "react-dom";
import configureMockStore from "redux-mock-store";
import { defaultState } from "../../App/DefaultState";
import { Provider } from "react-redux";
import UserSettings from "../UserSettings";

const createMockStore = configureMockStore([]);

it("renders without crashing", () => {
  const mockStore = createMockStore({
    ...defaultState
  });
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={mockStore}>
      <UserSettings />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
