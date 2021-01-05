import React, { useContext } from "react";
import { render, fireEvent } from "@testing-library/react";
import UserContextProvider, { UserContext } from "../userContext";
import Button from "../../components/button/Button";
import mockUsers from "../../mockData/users.json";

const MockComponent = () => {
  const { users, setUsers, loggedInUser, setLoggedInUser } = useContext(
    UserContext
  );
  return (
    <>
      <span>{users[0]?.name}</span>
      <span>{loggedInUser.name}</span>
      <Button
        onClick={() => setUsers([{ name: "test user 1" }])}
        testId="setUsers"
      >
        dummy1
      </Button>
      <Button
        onClick={() => setLoggedInUser({ name: "logged in user" })}
        testId="setLoggedInUser"
      >
        dummy2
      </Button>
    </>
  );
};

describe("userContext", () => {
  test("should pass users, setUsers, loggedInUser, setLoggedInUser props to child component wrapped in userContext provider", () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockUsers));
    const { getByText, getByTestId } = render(
      <UserContextProvider>
        <MockComponent />
      </UserContextProvider>
    );

    fireEvent.click(getByTestId("setUsers"));
    fireEvent.click(getByTestId("setLoggedInUser"));

    expect(getByText("test user 1")).toBeInTheDocument();
    expect(getByText("logged in user")).toBeInTheDocument();
  });
});
