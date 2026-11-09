export const AccountType = {
  INDIVIDUAL: 'individual',
  ADMIN: 'admin',
  SUPER_ADMIN: 'super_admin',
  SYSTEM: 'system',
} as const

export type AccountType = (typeof AccountType)[keyof typeof AccountType]

export const AccountStatus = {
  PENDING: 'pending',
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  SHADOW_BANNED: 'shadow_banned',
  DISABLED: 'disabled',
} as const

export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus]

export type AccountInfo = {
  id: string
  firstName: string
  lastName: string
  email: string
  profilePhoto: string
  accountType: AccountType
  status: AccountStatus
}
