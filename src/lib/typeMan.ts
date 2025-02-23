import { Data as Toolbox, Item as ToolboxItem } from '@/lib/typeToolbox';
import { Data as Alert, Item as AlertItem } from '@/lib/typeAlert';
import { Data as Pra, Item as PraItem } from '@/lib/typePra';

export type Man = Toolbox | Alert | Pra;
export type ManItem = ToolboxItem | AlertItem | PraItem;

export type DetailTypes = 'Toolbox' | 'Alert' | 'Pra' | 'Induction';

export const isValidDetailType = (id: string): id is DetailTypes => {
  return ['Toolbox', 'Alert', 'Pra'].includes(id);
};

export interface ManProps {
  dataTr: Man[];
  item: string;
}

export const manItemLabels: { [key: string]: string } = {
  vnPra: 'Đánh giá rủi ro cá nhân/ Personal Risk Assessment',
  vnAlert: 'Cảnh báo an toàn / Safety Alert',
  vnToolbox: 'Thảo luận an toàn / Toolbox Talk',
};

export const manActivities = [
  { id: 'Alert' },
  { id: 'Toolbox' },
  { id: 'Pra' },
];

// Constances
export const owners = [
  'All owners',
  'BMJC',
  'Contractor',
  'ECO',
  'Hoàng Thạnh',
  'INSEE',
  'Quoc Vinh',
  'Thai Duong',
  'Thanh Hà',
  'Thống Nhất',
  'Van An',
  'Viet Long',
];
