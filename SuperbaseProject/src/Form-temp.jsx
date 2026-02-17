import { useActionState } from "react";
import  {supabase}  from "./supabase-client"; // ✅ 1) import your supabase client (adjust path as needed)

/**
Challenge:
* 1) Import the supabase client
* 2) Insert the 'newDeal' object into the table (destructure only 'error')
* 3) If error, console.log it + return new Error("...")
* 4) Save + use the form
*/

function Form({ metrics }) {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const newDeal = {
        name: formData.get("name"),
        value: Number(formData.get("value")), // optional but nice: keep it numeric
      };

      // ✅ 2) insert into table (change table name if yours differs)
      const { error } = await supabase.from("sales_deals").insert(newDeal);

      // ✅ 3) handle error
      if (error) {
        console.log(error);
        return new Error("Could not add deal.try again.");
      }

      // no error state
      return null;
    },
    null
  );

  const generateOptions = () => {
    return metrics.map((metric) => (
      <option key={metric.name} value={metric.name}>
        {metric.name}
      </option>
    ));
  };

  return (
    <div className="add-form-container">
      <form
        action={submitAction}
        aria-label="Add new sales deal"
        aria-describedby="form-description"
      >
        <div id="form-description" className="sr-only">
          Use this form to add a new sales deal. Select a sales rep and enter
          the amount.
        </div>

        <label htmlFor="deal-name">
          Name:
          <select
            id="deal-name"
            name="name"
            defaultValue={metrics?.[0]?.name || ""}
            aria-required="true"
            aria-invalid={error ? "true" : "false"}
            disabled={isPending}
          >
            {generateOptions()}
          </select>
        </label>

        <label htmlFor="deal-value">
          Amount: $
          <input
            id="deal-value"
            type="number"
            name="value"
            defaultValue={0}
            className="amount-input"
            min="0"
            step="10"
            aria-required="true"
            aria-invalid={error ? "true" : "false"}
            aria-label="Deal amount in dollars"
            disabled={isPending}
          />
        </label>

        <button type="submit" disabled={isPending} aria-busy={isPending}>
          {isPending ? "Adding..." : "Add Deal"}
        </button>
      </form>

      {error && (
        <div role="alert" className="error-message">
          {error.message}
        </div>
      )}
    </div>
  );
}

export default Form;
