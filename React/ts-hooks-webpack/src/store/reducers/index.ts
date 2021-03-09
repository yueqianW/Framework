import { ReducersMapObject, Reducer, combineReducers, AnyAction } from 'redux';

// 各个组件的reducer的状态类型,可以单独到一个文件中
export interface CombinedState {}
const reducers: ReducersMapObject<CombinedState, AnyAction> = {
  // 各个组件的reducer
};

const rootReducers: Reducer<CombinedState, any> = combineReducers(reducers);
export default rootReducers;
