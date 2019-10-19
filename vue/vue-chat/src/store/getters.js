export const threads = state => state.threads

export const currentThread = state => {
  return state.currentThreadID ? state.Threads[state.currentThreadID] : {}
}