import { ActionReducerMap } from '@ngrx/store';
import * as fromApp from './app.reducer';


export interface UciManagerState {
  app: fromApp.GlobalSettingsState;
}

export const appReducers: ActionReducerMap<UciManagerState> = {
  app: fromApp.reducer,
};