import { Action } from '@ngrx/store';

export const SET_CURRENT_PAGE_DIRTY: string = '[App] Set current page as dirty';

export class SetCurrentPageAsDirty implements Action {
  readonly type: string = SET_CURRENT_PAGE_DIRTY;
  constructor(public payload: boolean) { }
}
