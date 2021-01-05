import React from "react";
import { render, fireEvent } from "@testing-library/react";
import mockUser from "../../../../mockData/users.json";
import mails from "../../../../mockData/mails.json";
import Mail from "../Mail";
import { UserContext } from "../../../../context/userContext";

describe("MailHeader", () => {
  const setSelectedMails = jest.fn().mockImplementation((c) => c([]));
  const users = mockUser;
  let component;
  const renderMail = (mail) => {
    component = render(
      <UserContext.Provider value={{ users }}>
        <Mail setSelectedMails={setSelectedMails} mail={mail} />
      </UserContext.Provider>
    );
  };

  test("should render mail", () => {
    renderMail(mails[0]);
    expect(component.asFragment()).toMatchSnapshot();
  });

  test("should render important mail", () => {
    renderMail(mails[4]);
    expect(component.asFragment()).toMatchSnapshot();
  });

  test("should render mail with current date as email time", () => {
    const date = new Date();
    renderMail({ ...mails[4], time: date.toString() });
    expect(
      component.getByText(
        date.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
      )
    ).toBeInTheDocument();
  });

  test("should call setSelectedMails on checkbox check and uncheck", () => {
    renderMail(mails[4]);
    fireEvent.click(component.getByRole("checkbox"));

    expect(setSelectedMails).toHaveBeenCalled();

    fireEvent.click(component.getByRole("checkbox"));

    expect(setSelectedMails).toHaveBeenCalled();
  });
});
