import bcrypt from 'bcryptjs';

// 주어진 비밀번호를 bcrypt로 솔트 적용 후 해시
export function saltAndHashPassword(password: string): string {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
}

// DB에 있는 비밀번호 vS 입력받은 비밀번호
export function comparePassword(password: string, hashedPassword: string): boolean {
    return bcrypt.compareSync(password, hashedPassword);
}