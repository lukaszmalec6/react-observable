import {IUserProfileData} from './userProfile.interfaces';

export enum UserProfileActions {
  loadUserProfile = '[user profile] load',
  loadUserProfileSuccess = '[user profile] load success',
  loadUserProfileFailure = '[user profile] load failure'
}

export type LoadUserProfile = {
  readonly type: typeof UserProfileActions.loadUserProfile;
  userId: number;
};


export function loadUserProfileAction(userId: number): LoadUserProfile {
  return {
    type: UserProfileActions.loadUserProfile,
    userId
  };
}

export type LoadUserProfileSuccess = {
  readonly type: typeof UserProfileActions.loadUserProfileSuccess;
  userProfileData: IUserProfileData;
};

export function loadUserProfileSuccessAction(userProfileData: IUserProfileData): LoadUserProfileSuccess {
  return {
    type: UserProfileActions.loadUserProfileSuccess,
    userProfileData: userProfileData
  };
}

export type LoadUserProfileFailure = {
  readonly type: typeof UserProfileActions.loadUserProfileFailure;
  error: any;
};

export function loadUserProfileFaiilureAction(error: any): LoadUserProfileFailure {
  return {
    type: UserProfileActions.loadUserProfileFailure,
    error: error
  };
}

export type Actions = LoadUserProfile | LoadUserProfileFailure | LoadUserProfileSuccess;
