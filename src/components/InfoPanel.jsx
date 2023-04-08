import { useEffect, useState } from 'react'

function InfoPanel({ days, months, years }) {
  const [animatedDays, setAnimatedDays] = useState(0)
  const [animatedMonths, setAnimatedMonths] = useState(0)
  const [animatedYears, setAnimatedYears] = useState(0)

  const animate = async (setValue, target) => {
    const step = Math.floor(target/10)
    const extra = target%10

    setValue(extra)

    const intervalId = setInterval(() => {
      setValue((prev) => {
        if (prev == target) {
          clearInterval(intervalId)
          return prev
        }

        return prev + step
      })
    }, 50)
  }

  useEffect(() => {
    setAnimatedDays(0)
    animate(setAnimatedDays, days)
  }, [days])

  useEffect(() => {
    setAnimatedMonths(0)
    animate(setAnimatedMonths, months)
  }, [months])

  useEffect(() => {
    setAnimatedYears(0)
    animate(setAnimatedYears, years)
  }, [years])

  return (
    <>
      <p>
        <span>{animatedYears}</span> years
      </p>
      <p>
        <span>{animatedMonths}</span> months
      </p>
      <p>
        <span>{animatedDays}</span> days
      </p>
    </>
  )
}

export default InfoPanel
