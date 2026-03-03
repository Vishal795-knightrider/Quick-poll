import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"

export default function PollPage() {
  const { id } = useParams()
  const [poll, setPoll] = useState(null)

  useEffect(() => {
    async function fetchPoll() {
      const docRef = doc(db, "polls", id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setPoll(docSnap.data())
      } else {
        console.log("No such poll!")
      }
    }

    fetchPoll()
  }, [id])

  if (!poll) return <h2 style={{textAlign:'center',marginTop:'50px'}}>Loading...</h2>

  return (
    <div style={{maxWidth:'600px',margin:'80px auto',textAlign:'center'}}>
      <h2>{poll.question}</h2>

      {poll.options.map((opt, i) => (
        <div key={i} style={{
          padding:'12px',
          margin:'10px 0',
          background:'#f4f5f7',
          borderRadius:'8px'
        }}>
          {opt}
        </div>
      ))}
    </div>
  )
}