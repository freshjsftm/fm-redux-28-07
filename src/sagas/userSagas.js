import { put } from "redux-saga/effects";
import * as API from "../api";
import * as ActionsUserCreators from "../actions/userCreators";

export function* createUserSaga(action) {
  try {
    const {data:{data:[user]}} = yield API.createUser(action.values)
    yield put(ActionsUserCreators.createUserSuccess(user))
  } catch (error) {
    yield put(ActionsUserCreators.createUserError(error))
  }
}
