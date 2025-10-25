import * as userModel from '../models/userModel.js'

export const printUsersToConsole = async () => {
  try {
    const users = await userModel.getAllUsers()
    console.log('Пользователи из базы:')
    console.table(users)
  } catch (err) {
    console.error('Ошибка при получении пользователей:', err)
  }
}
