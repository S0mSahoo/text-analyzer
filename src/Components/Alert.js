import React from 'react'

export default function Alert(props) {
  let css = {
    height: "50px"
  }
  return (
    <div style={css}>
      {props.alert &&
      <div>
        <div class={`alert alert-${props.color === 'success' ? 'dark' : props.color} alert-dismissible fade show`} role="alert">
          {props.alert}
        </div>
      </div>}
    </div>

  )
}

