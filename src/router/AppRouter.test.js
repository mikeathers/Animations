import React from "react";

import { mount } from "enzyme";
import { MemoryRouter } from "react-router";

import Root from "Root";
import AppRoutes from "./AppRoutes";
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";

it("should redirect to 404 on invalid path", () => {
  const wrapper = mount(
    <Root>
      <MemoryRouter initialEntries={["/random"]}>
        <AppRoutes />
      </MemoryRouter>
    </Root>
  );
  expect(wrapper.find(Home)).toHaveLength(0);
  expect(wrapper.find(NotFound)).toHaveLength(1);
});

it("should not redirect to 404 on invalid path", () => {
  const wrapper = mount(
    <Root>
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>
    </Root>
  );
  expect(wrapper.find(Home)).toHaveLength(1);
  expect(wrapper.find(NotFound)).toHaveLength(0);
});
