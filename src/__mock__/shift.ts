import { WeekShift } from '../Container';

// 数据类型可以根据需要调整，或者在前端做转换
export const responseData: WeekShift = {
  '1': {
    employee: {
      id: '1',
      name: 'ANNIE LEE',
    },
    weekShift: [
      undefined,
      {
        from: 9,
        to: 5,
        project: 'project1',
      },
      undefined,
      {
        from: 9,
        to: 5,
        project: 'project1',
      },
    ],
  },
  '2': {
    employee: { id: '2', name: 'Jack Aus' },
    weekShift: [
      undefined,
      undefined,
      {
        from: 9,
        to: 5,
        project: 'project2',
      },
      undefined,
      {
        from: 9,
        to: 5,
        project: 'project2',
      },
    ],
  },
};
