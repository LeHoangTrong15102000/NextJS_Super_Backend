import bcrypt from 'bcrypt'
const saltRounds = 10

export const hashPassword = async (password: string) => bcrypt.hash(password, saltRounds)

// Thằng compare nó sẽ tự mã hóa cái params đầu tiên  và só sánh với dữ liệu đã được mã hóa ở params thứ 2
export const comparePassword = async (password: string, hash: string) => bcrypt.compare(password, hash)
