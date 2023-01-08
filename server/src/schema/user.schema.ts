import { number, object, string, TypeOf } from "zod";

// 승짱 회원가입할때 이름, 이메일, 비번, 비번확인, 폰번호, 생년 월일, 성별, 이용약관 동의, 개인정보 수집 및 이용 동의 필수
// 이벤트 수신동의 문자 수신동의 선택

// const Gender:number {
//     Man,
//     Woman,
// }

// const GenderEnum = Zod.nativeEnum(Gender);
// type GenderEnum = Zod.infer<typeof GenderEnum>;

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    password: string({
      required_error: "Password is required",
    }).min(6, "Password too short - should be 6 chars minimum"),
    passwordConfirmation: string({
      required_error: "passwordConfirmation is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
    gender: number({
      required_error: "Gender is required",
      invalid_type_error: "Gender must be a number",
    }).lte(1, "Gender's value must be 0,1 "),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

export const deleteUserSchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
    password: string({
      required_error: "Password is required",
    }).min(6, "Password too short - should be 6 chars minimum"),
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;
