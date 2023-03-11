import axios from 'axios';

import config from 'src/config';

const instance = axios.create({ baseURL: config.baseUrl });

export default instance;
