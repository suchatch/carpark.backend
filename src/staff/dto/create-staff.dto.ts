export class CreateStaffDto {
  staff_id: string;
  prefix: string;
  firstname_en: string;
  lastname_en: string;
  firstname_th: string;
  lastname_th: string;
  nickname: string;
  positions_id: number;
  sex: string;
  email: string;
  mobile: string;
  birthday: Date;
  status: string;
  role_id: number;
  password: string;
  salt: string;
  force_change_password: number;
  blacklist: number;
  user_create: string;
}
