import { useEffect, useState } from 'react'
import BirthdayForm from './components/BirthdayForm'
import Footer from './components/Footer'

function App() {
  const [days, setDays] = useState(0)
  const [months, setMonths] = useState(0)
  const [years, setYears] = useState(0)

  const setInfo = (days, months, years) => {
    setDays(days)
    setMonths(months)
    setYears(years)
  }

  return (
    <>
      <main>
        <BirthdayForm setInfo={setInfo} />

        <p>
          <span>{years}</span> years
        </p>
        <p>
          <span>{months}</span> months
        </p>
        <p>
          <span>{days}</span> days
        </p>
      </main>

      <Footer />
    </>
  )
}

export default App
