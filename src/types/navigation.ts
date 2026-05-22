import type { NavigatorScreenParams } from "@react-navigation/native";

export type RestaurantStackParamList = {
  Home: undefined;
  RestaurantDetail: {
    id: string;
    restaurantName?: string;
    price?: number;
  };
  Cart:
    | {
        restaurantName?: string;
        price?: number;
      }
    | undefined;
};

export type ProfileDrawerParamList = {
  ProfileHome: undefined;
  MyOrders: undefined;
  Settings: undefined;
  Help: undefined;
  Logout: undefined;
};

export type MainTabParamList = {
  HomeTab: NavigatorScreenParams<RestaurantStackParamList>;
  Search: undefined;
  Orders: undefined;
  Profile: NavigatorScreenParams<ProfileDrawerParamList> | undefined;
};

export type AppStackParamList = {
  Onboarding: undefined;
  MainTabs: NavigatorScreenParams<MainTabParamList> | undefined;
};

export type AuthStackParamList = {
  Login: undefined;
};
