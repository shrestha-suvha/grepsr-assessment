import axios from 'src/config/axios';

export const getDataSetList = async () => {
  try {
    const res = await axios({ method: 'get', url: 'dataset' });
    return [null, res.data];
  } catch (e) {
    return [e, []];
  }
};
