export function loginApi(data) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ code: 200, msg: '登录成功' }), 300)
  })
}

export function getDeviceListApi() {
  return new Promise(resolve => {
    setTimeout(() => resolve([
      { id: 1, device: '设备01', water: 12.54, pressure: 234, time: '2026-05-03 10:00' },
      { id: 2, device: '设备02', water: 11.32, pressure: 210, time: '2026-05-03 10:00' }
    ]), 300)
  })
}

export function detectApi() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ type: '裂缝', level: '橙色', confidence: 0.96 }), 500)
  })
}

export function getWarningApi() {
  return new Promise(resolve => {
    setTimeout(() => resolve([
      { id: 1, content: '坝体裂缝风险', level: '橙色', time: '2026-05-03 09:45' }
    ]), 300)
  })
}

export function getTaskApi() {
  return new Promise(resolve => {
    setTimeout(() => resolve([
      { id: 1, content: '现场核查裂缝', status: '待处置' }
    ]), 300)
  })
}

export function getUserApi() {
  return new Promise(resolve => {
    setTimeout(() => resolve([
      { id: 1, name: '王欣雅', role: '管理员', status: '正常' },
      { id: 2, name: '运维张三', role: '运维', status: '正常' }
    ]), 300)
  })
}