import { Goal } from "../../types/goals";
import { ActionWithPayload } from "../../types/mockAction";
import { Dispatch } from "redux";
import * as backend from "../../backend";
import history from "../../history";
import { User } from "../../types/user";
import { CreateCharInv } from "../../goals/CreateCharInv/CreateCharInv";
import { ValidateChars } from "../../goals/ValidateChars/ValidateChars";
import { CreateStrWordInv } from "../../goals/CreateStrWordInv/CreateStrWordInv";
import { ValidateStrWords } from "../../goals/ValidateStrWords/ValidateStrWords";
import { MergeDups } from "../../goals/MergeDupGoal/MergeDups";
import { SpellCheckGloss } from "../../goals/SpellCheckGloss/SpellCheckGloss";
import { ViewFinal } from "../../goals/ViewFinal/ViewFinal";
import { HandleFlags } from "../../goals/HandleFlags/HandleFlags";
import { Edit } from "../../types/userEdit";
import { GoalType } from "../../types/goals";
import DupFinder from "../../goals/MergeDupGoal/DuplicateFinder/DuplicateFinder";
import { ThunkDispatch } from "redux-thunk";
import { StoreState } from "../../types";
import { Hash } from "../../goals/MergeDupGoal/MergeDupStep/MergeDupsTree";

export enum GoalsActions {
  LOAD_USER_EDITS = "LOAD_USER_EDITS",
  ADD_GOAL_TO_HISTORY = "ADD_GOAL_TO_HISTORY",
  NEXT_STEP = "NEXT_STEP",
  UPDATE_GOAL = "UPDATE_GOAL"
}

export type GoalAction =
  | LoadUserEdits
  | AddGoalToHistory
  | NextStep
  | UpdateGoal;

export interface LoadUserEdits extends ActionWithPayload<Goal[]> {
  type: GoalsActions.LOAD_USER_EDITS;
  payload: Goal[];
}

export interface AddGoalToHistory extends ActionWithPayload<Goal[]> {
  type: GoalsActions.ADD_GOAL_TO_HISTORY;
  payload: Goal[];
}

export interface NextStep extends ActionWithPayload<Goal[]> {
  type: GoalsActions.NEXT_STEP;
}

export interface UpdateGoal extends ActionWithPayload<Goal[]> {
  type: GoalsActions.UPDATE_GOAL;
  payload: Goal[];
}

export function asyncLoadExistingUserEdits(
  projectId: string,
  userEditId: string
) {
  return async (dispatch: Dispatch<GoalAction>) => {
    await backend
      .getUserEditById(projectId, userEditId)
      .then(userEdit => {
        let history: Goal[] = convertEditsToArrayOfGoals(userEdit.edits);
        dispatch(loadUserEdits(history));
      })
      .catch(err => {
        console.log(err);
      });
  };
}

function asyncCreateNewUserEditsObject(projectId: string) {
  return async () => {
    await backend
      .createUserEdit()
      .then(async (userEditId: string) => {
        let updatedUser: User = updateUserIfExists(projectId, userEditId);
        await backend.updateUser(updatedUser);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function asyncGetUserEdits() {
  return async (dispatch: ThunkDispatch<StoreState, any, GoalAction>) => {
    let currentUserString = localStorage.getItem("user");
    if (currentUserString) {
      let currentUserObject: User = JSON.parse(currentUserString);
      let projectId: string = backend.getProjectId();
      let userEditId: string | undefined = getUserEditIdFromProjectId(
        currentUserObject.workedProjects,
        projectId
      );

      if (userEditId !== undefined) {
        dispatch(asyncLoadExistingUserEdits(projectId, userEditId));
      } else {
        dispatch(asyncCreateNewUserEditsObject(projectId));
      }
    }
  };
}

export function asyncAddGoalToHistory(goal: Goal) {
  return async (dispatch: Dispatch<GoalAction>) => {
    let user: User | undefined = getUser();
    if (user !== undefined) {
      let userEditId: string | undefined = getUserEditId(user);
      if (userEditId !== undefined) {
        await loadGoalData(goal).then(returnedGoal => (goal = returnedGoal));
        await backend
          .addGoalToUserEdit(userEditId, goal)
          .then(resp => {
            dispatch(addGoalToHistory(goal));
            history.push(`/goals/${resp}`);
          })
          .catch((err: string) => {
            console.log(err);
          });
      }
    }
  };
}

export function getUser(): User | undefined {
  let userString: string | null = localStorage.getItem("user");
  let user: User | undefined;
  if (userString) {
    user = JSON.parse(userString);
  }
  return user;
}

export async function loadGoalData(goal: Goal): Promise<Goal> {
  switch (goal.goalType) {
    case GoalType.MergeDups:
      let finder = new DupFinder();

      //Used for testing duplicate finder. (See docs/bitmap_testing.md)
      //let t0 = performance.now();

      await finder.getNextDups(goal.numSteps).then(words => {
        goal.data = { plannedWords: words };
      });

      //Used for testing duplicate finder. (See docs/bitmap_testing.md)
      //console.log(performance.now() - t0);

      break;
    case GoalType.CreateCharInv:
      break;
    default:
      break;
  }
  return goal;
}

export function getUserEditId(user: User): string | undefined {
  let projectId = backend.getProjectId();
  let userEditId: string | undefined = getUserEditIdFromProjectId(
    user.workedProjects,
    projectId
  );
  return userEditId;
}

function getUserEditIdFromProjectId(
  workedProjects: Hash<string>,
  projectId: string
): string | undefined {
  let projectIds = Object.keys(workedProjects);
  let matches: string[] = projectIds.filter(project => projectId === project);
  if (matches.length !== 0 && matches.length < 2) {
    return workedProjects[matches[0]];
  }
}

function updateUserIfExists(projectId: string, userEditId: string): User {
  let currentUserString = localStorage.getItem("user");
  let updatedUser: User = new User("", "", "");
  if (currentUserString) {
    let updatedUserString = updateUserWithUserEditId(
      currentUserString,
      projectId,
      userEditId
    );
    localStorage.setItem("user", updatedUserString);
    updatedUser = JSON.parse(updatedUserString);
  }
  return updatedUser;
}

function updateUserWithUserEditId(
  userObjectString: string,
  projectId: string,
  userEditId: string
): string {
  let currentUserObject: User = JSON.parse(userObjectString);
  currentUserObject = addProjectToWorkedProjects(
    currentUserObject,
    projectId,
    userEditId
  );
  let updatedUserString = JSON.stringify(currentUserObject);
  return updatedUserString;
}

function addProjectToWorkedProjects(
  user: User,
  projectId: string,
  userEditId: string
): User {
  user.workedProjects[projectId] = userEditId;
  return user;
}

export function getIndexInHistory(history: Goal[], currentGoal: Goal): number {
  for (let i = 0; i < history.length; i++) {
    if (history[i].hash === currentGoal.hash) {
      return i;
    }
  }
  return -1;
}

function convertEditsToArrayOfGoals(edits: Edit[]): Goal[] {
  let history: Goal[] = [];
  for (var edit of edits) {
    let nextGoal: Goal | undefined = goalTypeToGoal(edit.goalType);
    if (nextGoal) {
      history.push(nextGoal);
    }
  }
  return history;
}

function goalTypeToGoal(type: number): Goal | undefined {
  switch (type) {
    case GoalType.CreateCharInv:
      return new CreateCharInv();
    case GoalType.ValidateChars:
      return new ValidateChars();
    case GoalType.CreateStrWordInv:
      return new CreateStrWordInv();
    case GoalType.ValidateStrWords:
      return new ValidateStrWords();
    case GoalType.MergeDups:
      return new MergeDups();
    case GoalType.SpellcheckGloss:
      return new SpellCheckGloss();
    case GoalType.ViewFind:
      return new ViewFinal();
    case GoalType.HandleFlags:
      return new HandleFlags();
    default:
      return undefined;
  }
}

export function addGoalToHistory(goal: Goal): AddGoalToHistory {
  return { type: GoalsActions.ADD_GOAL_TO_HISTORY, payload: [goal] };
}

export function loadUserEdits(history: Goal[]): LoadUserEdits {
  return { type: GoalsActions.LOAD_USER_EDITS, payload: history };
}

export function nextStep(): NextStep {
  return { type: GoalsActions.NEXT_STEP, payload: [] };
}

export function updateGoal(goal: Goal): UpdateGoal {
  return { type: GoalsActions.UPDATE_GOAL, payload: [goal] };
}
