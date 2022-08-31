import React from 'react'

const form= () => {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const addList =() => {
      const listData = {
        title:title,
        amount:amount
      }
      props.addItem(listData)
    }
  return (
    <>
    <h3>{listData.title}</h3>
    <h3>{listData.amount}</h3>
    <form onSubmit={addList}>
    <div>
      <lable>รายการ</lable>
      <input type="text" name="list" onChange={(event) => setTitle(event.target.value)}/>
    </div>
    <div>
      <lable>จำนวนเงิน</lable>
      <input type="number" name="amount" onChange={(event) => setAmount(event.target.value)}/>
    </div>
    <button name="submit" ></button>
    </form>
    </>
    
  )
}

export default form