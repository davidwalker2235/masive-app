import React, { createContext, useState } from 'react';

interface PermissionsContextType {
  permissions: string[];
  hasPermission: (permission: string) => boolean;
  setPermissions: (permissions: string[]) => void;
}

export const PermissionsContext = createContext<PermissionsContextType>(null!);

export const PermissionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [permissions, setPermissionsState] = useState<string[]>([]);

  const hasPermission = (permission: string) => {
    return permissions.includes(permission);
  };

  const setPermissions = (newPermissions: string[]) => {
    setPermissionsState(newPermissions);
  };

  return (
    <PermissionsContext.Provider
      value={{ permissions, hasPermission, setPermissions }}
    >
      {children}
    </PermissionsContext.Provider>
  );
};
