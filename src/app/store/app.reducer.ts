import { ActionInterface } from './action.interface';
import * as AppActions from './app.action';

export interface GlobalSettingsState {
  language: string;
  isCurrentPageDirty: boolean;
}

const initialState: GlobalSettingsState = {
  language: 'es',
  isCurrentPageDirty: false,
};

export function reducer(state: GlobalSettingsState = initialState, action: ActionInterface): GlobalSettingsState  {
  switch (action.type) {
    case AppActions.SET_CURRENT_PAGE_DIRTY:
      console.log(`reducer SET_CURRENT_PAGE_DIRTY as ${action.payload}`)
      return {
        ...state,
        isCurrentPageDirty: action.payload
      };

    default:
      return state;
    }
}

