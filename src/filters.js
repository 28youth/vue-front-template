import { transTime } from '@/util'

/**
 * 格式化时间
 * @param  {Object} date
 * @param  {String} fmt
 * @return {String}
 */
export function formatDate(date, fmt = 'yyyy/MM/dd hh:mm') {
  if (typeof date === 'string') {
    date = date.replace(/-/g, '/') // for safari
    // match 2018/10/17 01:48:52"
    if (date.match(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/)) {
      // 如果匹配到服务器返回的时间是非标准格式的祖鲁时间，需要进行本地化
      date = +new Date(date) - timeOffset
    }
  }
  date = new Date(date)
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return fmt
}

/**
 * 祖鲁时间和本地时间之间的时差 (单位:毫秒)
 * @returns {number} timezone offset
 */
export const timeOffset = new Date().getTimezoneOffset() * 60 * 1000
export const addTimeOffset = date => {
  date = new Date(date).getTime() - timeOffset
  return new Date(date).toLocaleString('chinese', { hour12: false })
}

export const time2tips = date => {
  if (typeof date === 'string') {
    date = transTime(date)
  }
  const time = new Date(date)
  const offset = (new Date().getTime() - time) / 1000
  if (offset < 60) return '1分钟内'
  if (offset < 3600) return ~~(offset / 60) + '分钟前'
  if (offset < 3600 * 24) {
    return ~~(offset / 3600) + '小时前'
  }
  // 根据 time 获取到 "16:57"
  let timeStr, dateStr
  try {
    timeStr = time.toTimeString().match(/^\d{2}:\d{2}/)[0]
    dateStr = time
      .toLocaleDateString() // > "2018/10/19"
      .replace(/^\d{4}\/(\d{2})\/(\d{2})/, '$1-$2') // > 10-19
  } catch (e) {
    console.warn('time2tips error: ', { date, time }) // eslint-disable-line no-console
    return ''
  }
  if (offset < 3600 * 24 * 2) return '昨天' + timeStr
  if (offset < 3600 * 24 * 9) {
    return ~~(offset / 3600 / 24) + '天前'
  }

  return dateStr
}
