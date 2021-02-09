import {useRef} from 'react';
import uniqid from 'uniqid';

export const useUniqueId = (count) => useRef([...new Array(count)].map(() => uniqid())).current;
