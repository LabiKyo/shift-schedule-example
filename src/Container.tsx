import React, { useMemo, useState } from 'react';
import { getWeek } from 'date-fns';
import { DataGrid, ColDef, CellParams } from '@material-ui/data-grid';
import { DatePicker } from '@material-ui/pickers';

import { responseData } from './__mock__/shift';
import { WEEKDAYS } from './consts';

export interface Props {}

export interface Shift {
  from: number;
  to: number;
  project: string;
}

export interface Employee {
  id: string;
  name: string;
}

export interface EmployeeWeekShift {
  employee: Employee;
  weekShift: (Shift | undefined)[];
}

export interface WeekShift {
  [employeeId: string]: EmployeeWeekShift;
}

export interface RowData {
  id: string;
  employee: Employee;
  weekShift: (Shift | undefined)[];
}

const columns: ColDef[] = [
  {
    field: 'employee',
    headerName: 'Employee',
    width: 200,
    renderCell(params) {
      const data: RowData = params.data as any;
      return <>{data.employee.name}</>;
    },
  },
  ...Array.from(Array(7)).map((_, index) => {
    return {
      field: WEEKDAYS[index],
      headerName: WEEKDAYS[index],
      renderCell: (params: CellParams) => {
        const data: RowData = params.data as any;
        const shift = data.weekShift[index];
        if (!shift) {
          return <span />;
        }
        return (
          <>
            {shift.from} - {shift.to}
          </>
        );
      },
    };
  }),
];

/**
 * 这个组件用来作为状态管理的容器，和后端 api 交互等等
 * 数据类型和结构都可以按照实际需求进行调整
 */
export const Container: React.FC<Props> = ({}) => {
  const [date, setDate] = useState(new Date());
  // 因为每次只展示一周，获取当前 WoY 作为默认展示的周
  const week = useMemo(() => getWeek(date), [date]);
  // 这里假装从 api 获取 week state 对应的数据
  // const responseData = useApi(`/weekShift/${week}`)
  const rows = useMemo(
    () =>
      Object.keys(responseData).map((key) => {
        const data = responseData[key];
        return {
          id: key,
          ...data,
        };
      }),
    [],
  );
  return (
    <div style={{ height: '100%' }}>
      {/* 参考这个 Demo 改成 week picker */}
      {/* https://material-ui-pickers.dev/demo/datepicker#customization */}
      <DatePicker value={date} onChange={setDate as any} />
      <DataGrid columns={columns} rows={rows} hideFooter />
    </div>
  );
};
