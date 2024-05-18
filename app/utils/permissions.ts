import { Role } from "~/types/role";

 
export const permissions = {
    admin: ['create', 'read', 'update', 'delete'],
    user: ['read', 'register']
};

export const hasPermission = (role: Role, action: string): boolean => {
    return permissions[role]?.includes(action) || false;
};
