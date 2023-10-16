export const success = function (
  data: any,
  message: string,
  code: number = 200,
) {
  return {
    data,
    message,
    status: true,
    code,
  };
};

export const failed = function (
  code: number = 400,
  message: string,
  error: object = {},
) {
  return {
    code,
    status: false,
    message,
    error,
  };
};
