import { AxiosResponse } from "axios";
import { call, put, takeEvery, all, StrictEffect } from "redux-saga/effects";
import { fetchAllUsers } from "../../Api/usersApi";
import { getAllUsersSucces } from "../Actions/users";
import { USERS } from "../Constants/users";

function* handleFetchAllUsers(): Generator<
  StrictEffect,
  void,
  AxiosResponse<any>
> {
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
