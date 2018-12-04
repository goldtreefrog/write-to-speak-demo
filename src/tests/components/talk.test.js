import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { Talk } from "./../../components/talk.js";
import Snippet from "./../../components/snippet.js";
import { snippets } from "./../fixtures/snippet-data.js";
import { feedback } from "./../fixtures/feedback-data.js";

describe("<Talk />", () => {
  it("renders Talk page and matches snapshot", () => {
    const wrapper = shallow(
      <Talk snippets={snippets} feedback={feedback} loggedIn={true} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("renders Talk page when logged in", () => {
    const wrapper = shallow(
      <Talk snippets={snippets} feedback={feedback} loggedIn={true} />
    );
    expect(wrapper.contains(<h2>Talk</h2>)).toEqual(true);
    expect(
      wrapper.contains(
        <p className="page-instructions">Click on a snippet to hear it:</p>
      )
    ).toEqual(true);
  });

  it("Redirects to Login page when not logged in", () => {
    const wrapper = shallow(
      <Talk snippets={snippets} feedback={feedback} loggedIn={false} />
    );
    expect(wrapper.contains(<h2>Talk</h2>)).toEqual(false);
    expect(wrapper).toMatchSnapshot();
  });

  it("Can expand a snippet", () => {
    const wrapper = shallow(
      <Talk snippets={snippets} feedback={feedback} loggedIn={true} />
    );
    wrapper.setState({
      expandedSnippet: false,
      expandedSnippetId: ""
    });
    wrapper.instance().expandSnippet("123");
    expect(wrapper.state("expandedSnippet")).toEqual(true);
    expect(wrapper.state("expandedSnippetId")).toEqual("123");
  });
});
