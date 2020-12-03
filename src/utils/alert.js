export const ShowMessage = (title = "", description, status, fn, duration = 2000) => {
    return fn({
      title,
      position: "bottom-right",
      description,
      status,
      duration,
      isClosable: true,
    });
  };