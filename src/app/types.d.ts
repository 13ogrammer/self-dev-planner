export type ActionResponse<T> = {
  success?: boolean;
  message?: string;
  data?: T;
};

export type Action<T> = (
  prevState: any,
  formData: FormData
) => Promise<ActionResponse<T>>;
