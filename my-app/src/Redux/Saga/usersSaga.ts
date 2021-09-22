import { call, put, takeEvery, all, StrictEffect } from "redux-saga/effects";
import { fetchAllUsers } from "../../Api/usersApi";
import { UserType } from "../../Types/types";
import { getAllUsersSucces } from "../Actions/users";
import { USERS } from "../Constants/users";

function* handleFetchAllUsers(): Generator<StrictEffect, void, UserType[]> {
  try {
    const res = yield call(fetchAllUsers);
    yield put(getAllUsersSucces(res));
  } catch (err) {
    console.error(err);
  }
}
function* watchUsers() {
  yield takeEvery(USERS.GET, handleFetchAllUsers);
}

export default function* rootSaga() {
  yield all([watchUsers()]);
}
