const GET_BASE = 'GET_BASE';

export const base = (data) => {
  return {
    type: GET_BASE,
    payload: data
  }
};
