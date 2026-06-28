import { useEffect, useState } from "react"

function Time() {

    const getCurrentTime = () => {
        return new Date().toLocaleTimeString()
}
  const [time, setTime] = useState(getCurrentTime())

    useEffect(() => {
    setTimeout(() => {
        setTime(getCurrentTime());
    }, 1000)
    }, [time])

  return (
    <div>
      {time}
    </div>
  );
}
export default Time