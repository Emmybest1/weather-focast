/****************************************************************
 * @docs type 0 = serverSide error and type 1 = clientSide error
 ****************************************************************/
export const apiConsolePrinter = (type = 0, response = type === 0 ? {} : null) => {
  switch (type) {
    case 0:
      console.group('API SERVER ERROR❌📦');
      console.error(response);
      console.groupEnd();
      return Promise.resolve(response);

    case 1:
      console.group('API CLIENT ERROR❌📡');
      console.error(response);
      console.groupEnd();
      window.location.replace('/fallback');
      return response;

    default:
      return 'Something went wrong';
  }
};
