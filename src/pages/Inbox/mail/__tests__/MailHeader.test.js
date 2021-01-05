import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MailHeader from "../MailHeader";
import mails from "../../../../mockData/mails.json";
import { MailContext } from "../../../../context/mailContext";
import {
  CHANGE_IMPORTANCE,
  CHANGE_READ_STATUS,
  MARK_DELETED,
} from "../../../../context/mailReducer";

describe("MailHeader", () => {
  const selectedMails = [1];
  const loggedInUserMails = mails.splice(0, 2);
  const dispatch = jest.fn();
  let component;
  beforeEach(() => {
    component = render(
      <MailContext.Provider value={{ loggedInUserMails, dispatch }}>
        <MailHeader selectedMails={selectedMails} />
      </MailContext.Provider>
    );
  });
  test("should render MailHeader", () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

  test("should call dispatch with REFRESH_MAILS on click of refresh button", () => {
    fireEvent.click(component.getByText("Refresh"));

    expect(dispatch).toHaveBeenCalledWith({ data: [1], type: "REFRESH_MAILS" });
  });
  test("should call dispatch with CHANGE_READ_STATUS on click of eye icon", () => {
    fireEvent.click(component.getByTestId(CHANGE_READ_STATUS));

    expect(dispatch).toHaveBeenCalledWith({
      data: [1],
      type: "CHANGE_READ_STATUS",
    });
  });
  test("should call dispatch with CHANGE_IMPORTANCE on click of alert icon", () => {
    fireEvent.click(component.getByTestId(CHANGE_IMPORTANCE));

    expect(dispatch).toHaveBeenCalledWith({
      data: [1],
      type: "CHANGE_IMPORTANCE",
    });
  });
  test("should call dispatch with MARK_DELETED on click of trash icon", () => {
    fireEvent.click(component.getByTestId(MARK_DELETED));

    expect(dispatch).toHaveBeenCalledWith({ data: [1], type: "MARK_DELETED" });
  });
});
