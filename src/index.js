import 'core-js/stable';
import 'regenerator-runtime/runtime';
import run from './init';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

run();
