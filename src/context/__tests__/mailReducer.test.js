import {
  CHANGE_IMPORTANCE,
  CHANGE_READ_STATUS,
  mailReducer,
  MARK_DELETED,
  REFRESH_MAILS,
  SEND_MAIL,
  SET_LOGGED_IN_USER_MAIL,
  SET_VALUES,
} from "../mailReducer";

describe("mailReducer", () => {
  let state;
  beforeEach(() => {
    state = {
      refresh: false,
      loggedInUserMails: [],
      mails: [
        {
          id: 1,
          from: 1,
          to: [3],
          cc: [2],
          read: false,
          important: false,
        },
        {
          id: 2,
          from: 2,
          to: [1],
          cc: [3],
          read: false,
          important: false,
        },
        {
          id: 3,
          from: 2,
          to: [1],
          cc: [3],
          read: false,
          important: true,
        },
      ],
    };
  });
  test("should change read status of given mail ids", () => {
    expect(mailReducer(state, { type: CHANGE_READ_STATUS, data: [1] })).toEqual(
      {
        mails: [
          {
            id: 1,
            from: 1,
            to: [3],
            cc: [2],
            read: true,
            important: false,
          },
          {
            id: 2,
            from: 2,
            to: [1],
            cc: [3],
            read: false,
            important: false,
          },
          {
            id: 3,
            from: 2,
            to: [1],
            cc: [3],
            read: false,
            important: true,
          },
        ],
        refresh: false,
        loggedInUserMails: [],
      }
    );
  });

  test("should change importance status of given mail ids", () => {
    expect(
      mailReducer(state, { type: CHANGE_IMPORTANCE, data: [1, 3] })
    ).toEqual({
      mails: [
        {
          id: 1,
          from: 1,
          to: [3],
          cc: [2],
          read: false,
          important: true,
        },
        {
          id: 2,
          from: 2,
          to: [1],
          cc: [3],
          read: false,
          important: false,
        },
        {
          id: 3,
          from: 2,
          to: [1],
          cc: [3],
          read: false,
          important: false,
        },
      ],
      refresh: false,
      loggedInUserMails: [],
    });
  });

  test("should delete mails", () => {
    expect(mailReducer(state, { type: MARK_DELETED, data: [2, 3] })).toEqual({
      mails: [
        {
          id: 1,
          from: 1,
          to: [3],
          cc: [2],
          read: false,
          important: false,
        },
      ],
      refresh: false,
      loggedInUserMails: [],
    });
  });

  test("should return loggedInUserEmails", () => {
    expect(
      mailReducer(state, { type: SET_LOGGED_IN_USER_MAIL, data: 2 })
    ).toEqual({
      ...state,
      loggedInUserMails: [state.mails[0]],
      refresh: false,
    });
  });

  test("should set new values in the state", () => {
    expect(mailReducer(state, { type: SET_VALUES, data: [] })).toEqual({
      ...state,
      mails: [],
    });
  });

  test("should set refresh true", () => {
    expect(mailReducer(state, { type: REFRESH_MAILS })).toEqual({
      ...state,
      refresh: true,
    });
  });

  test("should add mail in the state ", () => {
    expect(mailReducer(state, { type: SEND_MAIL, data: { id: 10 } })).toEqual({
      ...state,
      mails: [...state.mails, { id: 10 }],
    });
  });

  test("should return default state ", () => {
    expect(mailReducer(state, { type: "Wrong" })).toEqual({
      ...state,
    });
  });
});
