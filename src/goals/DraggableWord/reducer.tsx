import { WordDrag } from "./actions";
import { DRAG_WORD, DROP_WORD } from "./actions";
import { Word } from "../../types/word";

export interface WordDragState {
  draggedWord?: Word;
}

export const defaultState: WordDragState = {
  draggedWord: undefined
};

export const dragWordReducer = (
  state: WordDragState | undefined, //createStore() calls each reducer with undefined state
  action: WordDrag
): WordDragState => {
  if (!state) return defaultState;
  switch (action.type) {
    case DRAG_WORD:
      if (action.payload) {
        action.payload.modified = Date.now().toString();
        return { ...state, draggedWord: action.payload };
      }
    case DROP_WORD:
      return { ...state, draggedWord: undefined };
    default:
      return state;
  }
};