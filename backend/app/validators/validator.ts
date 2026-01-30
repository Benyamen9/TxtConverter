import type { LoginDTO } from '../dtos/auth/login.dto.js'
import type { RegisterDTO } from '../dtos/auth/register.dto.js'

export default class Validator {
  validateLogin(data: any): LoginDTO {
    const errors: string[] = []

    if (!data.login) {
      errors.push('Le login est requis')
    }

    if (!data.password) {
      errors.push('Le mot de passe est requis')
    } else if (data.password.length < 6) {
      errors.push('Le mot de passe doit contenir au moins 6 caractères')
    }

    if (errors.length > 0) {
      throw new ValidationError(errors)
    }

    return {
      login: data.login,
      password: data.password,
    }
  }

  validateRegister(data: any): RegisterDTO {
    const errors: string[] = []

    if (!data.email) {
      errors.push("L'email est requis")
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        errors.push('Email invalide')
      }
    }

    if (!data.password) {
      errors.push('Le mot de passe est requis')
    } else if (data.password.length < 8) {
      errors.push('Le mot de passe doit contenir au moins 8 caractères')
    }

    if (!data.fullName) {
      errors.push('Le nom complet est requis')
    } else if (data.fullName.trim().length < 2) {
      errors.push('Le nom complet doit contenir au moins 2 caractères')
    }

    if (errors.length > 0) {
      throw new ValidationError(errors)
    }

    return {
      email: data.email.toLowerCase().trim(),
      password: data.password,
      fullName: data.fullName.trim(),
    }
  }
}

export class ValidationError extends Error {
  constructor(public errors: string[]) {
    super('Validation failed')
    this.name = 'ValidationError'
  }
}
