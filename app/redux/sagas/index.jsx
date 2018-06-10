import todoSaga from './todos';

export default function* rootSaga() {
  yield [
    todoSaga(),
  ];
}
