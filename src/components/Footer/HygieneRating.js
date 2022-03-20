import { useEffect, useState } from "react"

const HygieneRating = () => {
  const [hygieneStats, setHygieneStats] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://api.ratings.food.gov.uk/Establishments/list?id=71298", {
      method: "GET",
      headers: {
        "x-api-version": 2,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setHygieneStats(result.establishments[0])
          console.log(hygieneStats)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error || !isLoaded) {
    return <div>Check out hygiene ratings @</div>
  }

  return (
    <div className="w-6/7 sm:w-3/7 text-white flex items-center justify-around p-2">
      <img
        className="h-14"
        src={`https://hygieneratingscdn.je-apis.com/images/${hygieneStats.RatingKey}.jpg`}
        alt="hygiene rating"
      />
      <div className="w-2/3 px-2 text-xs font-bold italic">
        <p>
          Rating by the Food Standards Agency and{" "}
          {hygieneStats.LocalAuthorityName} council
        </p>
      </div>
    </div>
  )
}

export default HygieneRating
