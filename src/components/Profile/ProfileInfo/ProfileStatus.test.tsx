import React from "react"
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("tests component ProfileStatus", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="REACT" />);
    const instance = component.getInstance();
    //@ts-ignore
    expect(instance.state.status).toBe("REACT");
  });
  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="REACT" />);
    const root = component.root;
    let span = root.findByType('span')
    expect(span.children.length).toBe(1);
  });
  test("after creation <span> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="REACT" />);
    const root = component.root;
    expect(()=>{
      root.findByType('input')
    }).toThrow();
  });
  test("after creation <span> should contains correct status", () => {
    const component = create(<ProfileStatus status="REACT" />);
    const root = component.root;
    let span = root.findByType('span')
    expect(span.children[0]).toBe('REACT');
  });
  test("input should be displayed in editMode", () => {
    const component = create(<ProfileStatus status="REACT" />);
    const root = component.root;
    let span = root.findByType('span')
    span.props.onDoubleClick()
    let input = root.findByType('input')
    expect(input.props.value).toBe('REACT');
    expect(()=>{
      root.findByType('span')
    }).toThrow();
  });
  test("callback shuld be called", () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status="REACT" updateUserStatus={mockCallback} />);
    const instance = component.getInstance();
    //@ts-ignore
    instance.deactivateEditMode()
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});