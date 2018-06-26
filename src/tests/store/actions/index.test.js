import {
  ADD_SNIPPET,
  addSnippet,
  updateSnippet,
  deleteSnippet,
  writingAreaVisible,
  writingAreaHidden,
  spellingAreaVisible,
  spellingAreaHidden,
  writingAreaPopulate
} from "./../../../store/actions/index.js";

it("should add a snippet", () => {
  let snip = { id: "12345", text: "Hi. I am a new snippet" };
  const action1 = addSnippet(ADD_SNIPPET, { snippet: snip });

  snip = { id: "531", text: "I am the newest and best!" };
  const action2 = addSnippet(ADD_SNIPPET, { snippet: snip });

  expect(action1).toEqual({
    type: ADD_SNIPPET,
    snippet: { id: "12345", text: "Hi. I am a new snippet" }
  });
  expect(action2).toEqual({
    type: ADD_SNIPPET,
    snippet: { id: "531", text: "I am the newest and best!" }
  });
});
