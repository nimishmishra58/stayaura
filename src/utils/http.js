export const getErrorMessage = async (res, fallback = "Something went wrong") => {
  try {
    const data = await res.json();
    return data?.message || data?.error || fallback;
  } catch {
    return fallback;
  }
};
