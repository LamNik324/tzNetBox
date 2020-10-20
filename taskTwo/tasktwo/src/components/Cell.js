import React, {useState} from 'react';

export default function Cell(props) {
  const [changes, setChanges] = useState(props.cell.value);

  const handleSubmit = (e) => {
    setChanges(e)
  }

  return (
    <>
    {props.editable ? (
      <div>
            <input onChange={(e) => handleSubmit(e.target.value)} placeholder={changes}  />
      </div>
    ) : changes}
      </>
  )
}
