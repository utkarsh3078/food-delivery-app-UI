import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const AUTH_KEY = "foodapp:isAuthenticated";
const ONBOARDING_KEY = "foodapp:hasSeenOnboarding";

type AuthContextValue = {
  hasSeenOnboarding: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  completeOnboarding: () => Promise<void>;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const storedValues = await AsyncStorage.multiGet([
          AUTH_KEY,
          ONBOARDING_KEY,
        ]);
        const storedMap = Object.fromEntries(storedValues);
        const authValue = storedMap[AUTH_KEY];
        const onboardingValue = storedMap[ONBOARDING_KEY];

        setIsAuthenticated(authValue === "true");
        setHasSeenOnboarding(onboardingValue === "true");
      } finally {
        setIsLoading(false);
      }
    };

    restoreSession();
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      hasSeenOnboarding,
      isAuthenticated,
      isLoading,
      completeOnboarding: async () => {
        setHasSeenOnboarding(true);
        await AsyncStorage.setItem(ONBOARDING_KEY, "true");
      },
      signIn: async () => {
        setIsAuthenticated(true);
        await AsyncStorage.setItem(AUTH_KEY, "true");
      },
      signOut: async () => {
        setIsAuthenticated(false);
        await AsyncStorage.setItem(AUTH_KEY, "false");
      },
    }),
    [hasSeenOnboarding, isAuthenticated, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
