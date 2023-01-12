import { STATUSES, PRIORITIES } from '../constants/constants';

const items = [
  {
    id: 111,
    title: 'Title 1',
    desc: 'Some description text some description text some description text',
    status: 'DONE',
    priority: 'HIGH',
  },
  {
    id: 222,
    title: 'Title 2',
    desc: 'Some description text some description text some description text',
    status: 'PROGRESS',
    priority: 'MEDIUM',
  },
  // {
  //   id: 333,
  //   title: 'Title 3',
  //   desc: 'Some description text some description text some description text',
  //   status: STATUSES.DONE,
  //   priority: PRIORITIES.HIGH,
  // },
];

export default items;
