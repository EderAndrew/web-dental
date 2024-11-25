export interface UserInterface {
  message: string;
  status: number;
  data: {
    user: {
      id: number;
      name: string;
      email: string;
      password: string;
      tel?: string;
      status: boolean;
      role: string;
      officeId?: string;
      firstAccess: boolean;
      createdAt?: string;
      updatedAt?: string;
    };
    token: string;
  };
}
