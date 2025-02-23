export const questions = [
  {
    id: 1,
    name: 'generalCheck',
    question:
      'Yêu cầu chung: Vệ sinh máy bơm sạch sẽ, tình trạng chung của họng nước bình thường, không bị rỉ sét, không bị rò rỉ nước?',
    howto: 'Kiểm tra tổng thể, lau chùi, và quan sát',
    accept: 'Overall is clean, no rust, no leaking water, and no damage',
  },
  {
    id: 2,
    name: 'engineCheck',
    question:
      'Động cơ: Đủ nhớt bôi trơn, Xăng đã được châm đầy bình và sẵn sàng cho việc vận hành?',
    howto: 'Kiểm tra mức nhớt và xăng',
    accept: 'Sufficient lubricant, fuel tank is full and ready for operation',
  },
  {
    id: 3,
    name: 'operationCheck',
    question:
      'Vận hành: Khởi động máy trong thời gian 02 phút và tình trạng động cơ hoạt động bình thường?',
    howto: 'Khởi động và quan sát hoạt động của động cơ',
    accept: 'Engine operates normally during the 02-minute test',
  },
  {
    id: 4,
    name: 'unusualObservation',
    question: 'Các kiểm tra khác: Kiến nghị nếu có gì khác bất thường?',
    howto: 'Quan sát và báo cáo',
    accept: 'Suggest if there is anything unusual',
  },
];

export const headerFields = [
  { field: 'id', label: 'Mã số thiết bị' },
  { field: 'site', label: 'Site' },
  { field: 'kind', label: 'Loại máy nâng Kind of Lifting' },
  { field: 'area', label: 'Khu vực Area' },
  { field: 'swl', label: 'Tải trọng LV an toàn (SWL) (Ton)' },
  { field: 'operateBy', label: 'Operate By' },
  {
    field: 'latestInspection',
    label: 'Ngày kiểm định gần nhất Latest Inspection 3rd Party',
  },
  {
    field: 'nextInspection',
    label: 'Ngày kiểm định lần tới next Inspection 3rd Party',
  },
  {
    field: 'installDiameter',
    label: 'Đường kính cáp tiêu chuẩn Cable diameter installing (mm)',
  },
  {
    field: 'actualDiameter',
    label: 'Đường kính cáp đo thực tế Cable diameter actual measure (mm)',
  },
  { field: 'tolerance', label: 'Độ sai lệch Tolerance (mm)' },
  { field: 'result', label: 'Kết quả Result' },
  {
    field: 'internalInspector',
    label: 'Người kiểm tra nội bộ Internal Inspector',
  },
  { field: 'remarks', label: 'Ghi chú Remarks' },
  { field: 'owner', label: 'Chủ sở hữu Owner' },
  { field: 'no', label: 'Số No' },
  { field: 'etype', label: 'Loại thiết bị Equipment Type' },
  { field: 'esite', label: 'Trang web Equipment Site' },
  { field: 'place', label: 'Địa điểm Place' },
  { field: 'location', label: 'Vị trí Location' },
  { field: 'type', label: 'Loại Type' },
  { field: 'cableDiameter', label: 'Đường kính cáp Cable Diameter' },
  { field: 'email', label: 'Responsible person' },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'email', label: 'Responsible person' },
  { field: 'inspector', label: 'Người kiểm tra Inspector' },
  { field: 'responder', label: 'Responder' },
  {
    field: 'generalCheck',
    label:
      '1. Yêu cầu chung: Vệ sinh máy bơm sạch sẽ, tình trạng chung của họng nước bình thường, không bị rỉ sét, không bị rò rỉ nước? *',
  },
  { field: 'generalCheckR', label: '' },
  { field: 'generalCheckP', label: '' },
  { field: 'generalCheckA', label: 'Respond to defect' },
  { field: 'generalCheckF', label: '' },
  {
    field: 'engineCheck',
    label:
      '2. Động cơ: Đủ nhớt bôi trơn, Xăng đã được châm đầy bình và sẵn sàng cho việc vận hành? *',
  },
  { field: 'engineCheckR', label: '' },
  { field: 'engineCheckP', label: '' },
  { field: 'engineCheckA', label: 'Respond to defect' },
  { field: 'engineCheckF', label: '' },
  {
    field: 'operationCheck',
    label:
      '3. Vận hành: Khởi động máy trong thời gian 02 phút và tình trạng động cơ hoạt động bình thường? *',
  },
  { field: 'operationCheckR', label: '' },
  { field: 'operationCheckP', label: '' },
  { field: 'operationCheckA', label: 'Respond to defect' },
  { field: 'operationCheckF', label: '' },
  {
    field: 'unusualObservation',
    label: '4. Các kiểm tra khác: Kiến nghị nếu có gì khác bất thường? *',
  },
  { field: 'unusualObservationR', label: '' },
  { field: 'unusualObservationP', label: '' },
  { field: 'unusualObservationA', label: 'Respond to defect' },
  { field: 'unusualObservationF', label: '' },
  { field: 'remark', label: 'Ghi chú Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
