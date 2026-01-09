import { useEffect } from "react"
import { supabase } from "./supabase-client" // adjust path if needed

function Dashboard() {
  useEffect(() => {
    fetchMetrics()
  }, []) // run once after initial render
  async function fetchMetrics() {
    const { data, error } = await supabase
      .from("sales_deals")
      .select(
        `
        name,
        value
        `
      )
      .order("value", { ascending: false })
      .limit(1)

    console.log({ data, error })
  }

  

  return (
    <div className="dashboard-wrapper">
      <div className="chart-container">
        <h2>Total Sales This Quarter ($)</h2>
      </div>
    </div>
  )
}

export default Dashboard
