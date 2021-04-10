import { connect } from "react-redux";

import GoalTimeline from "components/GoalTimeline/GoalTimelineComponent";
import {
  asyncAddGoalToHistory,
  asyncGetUserEdits,
} from "components/GoalTimeline/GoalsActions";
import { StoreState } from "types";
import { StoreStateDispatch } from "types/actions";
import { Goal } from "types/goals";

function mapStateToProps(state: StoreState) {
  return { ...state.goalsState };
}

function mapDispatchToProps(dispatch: StoreStateDispatch) {
  return {
    chooseGoal: (goal: Goal) => dispatch(asyncAddGoalToHistory(goal)),
    loadHistory: () => dispatch(asyncGetUserEdits()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalTimeline);
