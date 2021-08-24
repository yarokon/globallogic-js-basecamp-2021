import { wait } from '../utils';
import data from './db';

const rolesApi = {
  // GET /roles
  async getRoles() {
    await wait(500);

    // console.log('GET /roles', data);
    return data;
  },
};

export default rolesApi;
