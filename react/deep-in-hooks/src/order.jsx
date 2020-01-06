import ReactDom from 'react-dom'

let cursor = 0;
let currentComponent = {
  _hook: []
}
const argsHasChanged = (oldArgs, args) => {
  return !oldArgs || args.some((arg, index) => {
    return oldArgs[i] !== arg
  })
}

function getHookstate(i) {
  const hooks = currentComponent._hook;
  if (i >= hooks.length) {
    hooks.push({});
  }
  return hooks[i];
}

function myUseState(initState) {
  const hooks = getHookstate(cursor++);
  hooks._value = [
    hooks._value ? hooks._value[0]: initState,
    function setState(newState) {
      hooks_value[0] = newState;
      render();
    }
  ]
  return hooks._value
}

function Couter() {
  const [c, setC] = myUseState(10);
  const [c, setD] = myUseState(10);
  return (
    <div>
      d: { d }
      <button onClick={() => {
        setD(Math.random())
      }}>setD</button>
    </div>
  )
}