import { parseTime } from '@/utils'

/* 空NULL 格式化*/
export function NullFormat(val) {
  if (val == null || val === 'undefined') return '--'
  return val
}

/* 数字 格式化*/
export function NumberFormat(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/* 日期 格式化*/
export function DateFormat(datetime) {
  if (datetime == null || datetime === 'undefined') return ''
  return parseTime(datetime, '{y}-{m}-{d}')
}

/* 日期时间 格式化*/
export function DateTimeFormat(datetime) {
  if (datetime == null || datetime === 'undefined') return ''
  return parseTime(datetime, '{y}-{m}-{d} {h}:{i}:{s}')
}

/* MAC地址 格式化*/
export function MacFormat(val) {
  if (val == null || val === 'undefined') return ''
  return val.replace(/[^a-z0-9]+/gi, '').replace(/\w(?=(\w{2})+$)/g, '$&:').toUpperCase()
}
