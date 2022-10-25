export class CreateInoutDto {
  ticket: string;
  receipt: string;
  location_id: number;
  category_id: number;
  car_license_plate: string;
  brand: string;
  access_in: Date;
  access_out: Date;
  carpark_type_id: number;
  device_imei_id: string;
  access_in_picture_1: string;
  access_in_picture_2: string;
  access_out_picture_1: string;
  access_out_picture_2: string;
  receipt_type_id: number;
  receipt_total: number;
  receipt_total_pay: number;
  receipt_vat: number;
  remark: string;
  user_create: string;
}
