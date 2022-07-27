interface IPassword {
  password: string;
  passwordConfirm: string;
}

interface ISignUpData extends IPassword {
  name: string;
  email: string;
}

interface IEmail {
  email: string;
  code: string;
}
interface ICode {
  code: string;
}
export type { IPassword, ISignUpData, IEmail, ICode };
