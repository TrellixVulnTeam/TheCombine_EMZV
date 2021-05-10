import { connect } from "react-redux";

import GoalTimeline from "components/GoalTimeline/GoalTimelineComponent";
import {
  asyncAddGoal,
  asyncGetUserEdits,
  loadUserEdits,
} from "components/GoalTimeline/Redux/GoalActions";
import { StoreState } from "types";
import { Goal } from "types/goals";
import { StoreStateDispatch } from "types/Redux/actions";

function mapStateToProps(state: StoreState) {
  return { ...state.goalsState };
}

function mapDispatchToProps(dispatch: StoreStateDispatch) {
  return {
    chooseGoal: (goal: Goal) => dispatch(asyncAddGoal(goal)),
    clearHistory: () => dispatch(loadUserEdits()),
    loadHistory: () => dispatch(asyncGetUserEdits()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalTimeline);
